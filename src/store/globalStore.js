import { defineStore } from 'pinia';
import { $auth, $analytics, $firestore, $functions, $storage } from '../boot/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signOut, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { date, LocalStorage, Dialog } from 'quasar'
import axios from 'axios'

import { Loading, Notify, Platform } from 'quasar'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    currentUser: null,
    abertura: false,
    listaParalax: [{
      id: null,
      data: {
        img: 'https://firebasestorage.googleapis.com/v0/b/rhmix-adm.appspot.com/o/banner_paralax%2Fthumbs%2F01-imposto-de-renda-sem-texto_1600x1600.webp?alt=media&token=ff73445a-d88c-4dbb-a884-96788ef8db07',
        title: 'Garanta uma declaração de Imposto de Renda impecável com nossa equipe especializada. Evite dores de cabeça e tenha a tranquilidade de cumprir suas obrigações fiscais de forma correta e eficiente.',
        link: ''
      }
    },
    {
      id: null,
      data: {
        img: 'https://firebasestorage.googleapis.com/v0/b/rhmix-adm.appspot.com/o/banner_paralax%2Fthumbs%2F02-certificado-digital-sem-texto_1600x1600.webp?alt=media&token=12b1165e-74c0-4a54-afb4-cdc7102eeaff',
        title: 'Segurança e praticidade em suas mãos. Obtenha seu Certificado Digital conosco e simplifique processos burocráticos.',
        link: ''
      }
    }
    ],
    listaCarousel: [],
    listaStories: [],
    listaComentarios: [],
    listaBlog: [],
    impostoDeRenda: [{
      id: null,
      data: {
        img: 'https://firebasestorage.googleapis.com/v0/b/rhmix-adm.appspot.com/o/capa%2Fthumbs%2Fpexels-rodnae-productions-7491011_1600x1600.webp?alt=media&token=55003efa-8e04-4b85-b125-9dec033bb940',
        title: 'Imposto de renda',
        link: ''
      }
    }],
    clinicasMedicas: [{
      id: null,
      data: {
        img: 'https://firebasestorage.googleapis.com/v0/b/rhmix-adm.appspot.com/o/capa%2Fthumbs%2Fpexels-anna-shvets-4586984_1600x1600.webp?alt=media&token=cb411c99-c7fd-4bf9-9cf7-b295aee22123',
        title: 'Clínicas',
        link: ''
      }
    }],
    aberturaDeEmpresa: [{
      id: null,
      data: {
        img: 'https://firebasestorage.googleapis.com/v0/b/rhmix-adm.appspot.com/o/capa%2Fthumbs%2Fpexels-andrea-piacquadio-3760067_1600x1600.webp?alt=media&token=712d5289-9eb0-4387-a606-e0e9a9403a84',
        title: 'Abertura de empresa',
        link: ''
      }
    }],
    terceirizado: [{
      id: null,
      data: {
        img: 'https://firebasestorage.googleapis.com/v0/b/rhmix-adm.appspot.com/o/capa%2Fthumbs%2Fpexels-tima-miroshnichenko-6195129_1600x1600.webp?alt=media&token=add9098d-a13c-4902-8b09-8203c45935c2',
        title: 'DP Terceirizados',
        link: ''
      }
    }],
    listaServicos: []
  }),
  getters: {
    mobile() {
      return Platform?.is?.mobile ? true : false
    },
    admin(state) {
      return state.currentUser?.uid === 'Gu4Qo2NW1nhpBzi6LrOU9vAW1583' ? true:false
    }
  },
  actions: {
    handleCallback(payload) {

      Loading.hide()
      if(payload.type && payload.message) {
        Notify.create({
          type: payload.type,
          message: payload.message,
          timeout: 2000,
        })
      }
    },
    async setCurrentUser(userCredential) {

      const {uid, email, emailVerified, displayName, photoURL, providerData, phoneNumber} = userCredential
      const providerId = providerData && providerData.length > 0 ? providerData[0].providerId : userCredential.providerId

      this.currentUser = {
        uid,
        email,
        emailVerified,
        displayName,
        photoURL,
        providerId,
        phoneNumber,
      }

      LocalStorage.set('currentUser', {
        uid,
        email,
        emailVerified,
        displayName,
        photoURL,
        providerId,
        phoneNumber,
      })

      console.log('currentUser:', this.currentUser)

      return this.currentUser
    },
    async signInWithEmailAndPassword(payload) {
      let his = this
      let email = payload.email
      let password = payload.password
      console.log('email', email, 'password', password)
      const currentUser = $auth.currentUser;
      if(!currentUser) {
        let result = signInWithEmailAndPassword($auth, email, password)
        .then(async (userCredential) => {
          // Signed in

          await this.setCurrentUser(userCredential.user)
          //return result
          // ...
          return true
        })
        .catch((error) => {
          let code = error.code;
          his.error = error
          console.log('error', error)
          if(code) {
            var throwError = !!his.errors[code] ? his.errors[code] : 'Ops!'
            let val = {
              type: "negative",
              message: throwError
            }
            his.handleCallback(val)
          }

          return false

        })
        return result
      } else {
        await this.setCurrentUser(currentUser)
        return false
      }

    },
    async isOnAuthStateChanged() {

      onAuthStateChanged($auth, async (user) => {
        if (user) {
          console.log('isOnAuthStateChanged')
          this.setCurrentUser(user)
          return user
        } else {
          setTimeout(() => {
            this.currentUser = null
            this.user = null
            LocalStorage.set('currentUser', null)

          }, 2000);
        }
      });
    },
    reauthenticateWithCredential() {
      const user = $auth.currentUser;

      // TODO(you): prompt the user to re-provide their sign-in credentials
      const credential = promptForCredentials();

      user.reauthenticateWithCredential(credential).then(() => {
        // User re-authenticated.

      }).catch((error) => {
        // An error occurred
        this.error = error
        // ...
      });
    },
    async signOut() {
      let his = this

      Dialog.create({
        title: "Deslogar",
        message: "Tem certeza que deseja sair?",
        cancel: true,
        persistent: true,
      })
        .onOk(async () => {
          // Sign-out successful.

          let val = {
            type: "positive",
            message: "Você foi deslogado com sucesso",
          }
          this.handleCallback(val)

          await $auth.signOut()

        })
        .onCancel(() => {
          return false
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          return false
          // console.log('I am triggered on both OK and Cancel')
        });
    },
    async authProvider(isProvider) {
      var provider
      if(isProvider == 'google') {
        provider = new firebase.auth.GoogleAuthProvider();
      } else if(isProvider == 'facebook') {
        provider = new firebase.auth.FacebookAuthProvider();
      }

      $auth.languageCode = 'it';
      return await $auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        this.setCurrentUser(user)
        return true
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        this.errorCode = error.code;
        this.errorMessage = error.message;
        this.error = error
        // ...

        return false
      });
    },
    async saveDoc(payload) {
      const docRef = await addDoc(collection($firestore, payload.collection), payload.doc)
      .catch((error) => {
        console.error("Error writing document: ", error);

        let val = {
          type: "negative",
          message: 'Ops! não foi possível salvar'
        }
        this.handleCallback(val)
        return {error: error}
      });

      if(docRef) {
        let val = {
          type: "positive",
          message: "Salvo com sucesso",
        }
        this.handleCallback(val)
      }
      return docRef
    },
    async updateDocs(payload) {
      const docRef = doc($firestore, payload.collection, payload.id);

      return await updateDoc(docRef, { ...payload.doc})
      .then(() => {
        let val = {
          type: "positive",
          message: 'Atualizado com sucesso',
        }
        this.handleCallback(val)

        return true
      })
      .catch((error) => {
        console.error("Error writing document: ", error);

        let val = {
          type: "negative",
          message: 'Ops! não foi possível salvar',
        }
        this.handleCallback(val)

        return {error: error}
      });
    },
    async deleteDocs(payload) {

      await deleteDoc(doc($firestore, payload.collection, payload.id))
      .then(() => {
        let val = {
          type: "positive",
          message: 'Deletado com sucesso',
        }
        this.handleCallback(val)
      })
      .catch((error) => {
        console.error("Error writing document: ", error);

        let val = {
          type: "negative",
          message: 'Ops! não foi possível deletar',
        }
        this.handleCallback(val)

      });

    },
    async getDocs(payload) {
      const q = query(collection($firestore, payload.collection), where(payload.param, "==", payload.doc));
      let result = []
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let val = {
          id: doc.id,
          dados: doc.data()
        }
        result.push(val)
      });

      return result
    },
    uploadPhotoURL(payload) {
      let his = this
      Loading.show({
        html: true,
        message: '<h3>Salvando imagem...</h3>'
      })

      const id = payload.id;
      const collectionName = payload.collectionName;
      const files = payload.files;
      const type = payload.type

      if (!files) {
        return;
      } else {
        let storageRef = `${collectionName}/${type}/${id}`

        const uidRef = ref($storage, storageRef)

        const uploadTask = uploadBytesResumable(uidRef, files);

        uploadTask.on(
          "state_changed",
          function(snapshot) {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            Loading.show({
              html: true,
              message: `<h3>Salvando...</h3><p><h2><b>Progresso: ${progress.toFixed(0)}%</b></h2></p>`
            })

            if (progress === 100) {
              Loading.hide();
            }

            let data = {
              type: 'positive',
              message: 'Seus dados foram salvos com sucesso'
            }
            his.handleCallback(data)
          },
          function(error) {
            Loading.hide();
            // Handle unsuccessful uploads
            console.log('uploadTask error', error)
            let data = {
              type: 'negative',
              message: error
            }
            his.handleCallback(data)
          }
        );
        return uploadTask;
      }
    },
    async sendRestApi(method, url, contentType, data = {}, params = {} ) {
      const access_token = await this.getAccessToken()
      const val = {
        method: method,
        url: url,
        headers: {
          'Content-Type': contentType,
          Authorization: 'Bearer ' + access_token,
        },
        params: params,
        data: data,
      }

      return axios(val).catch(err => {
        console.log('Error:', err.response.data)
        return {error: err.response.data}
      });
    },
    async loadDoc(item, uid) {
      if(item && uid) {
        const docRef = await doc($firestore, item, uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

          switch (item) {
            case 'users':
              this.user = docSnap.data()
              break;
            case 'stories':
              this.listaStories = docSnap.data().lista
              break;

            default:
              break;
          }

          return docSnap.data()
        } else {
          return null
        }

      }
    },
    async sendHttpCall(payload, msg) {
      if(msg) {
        Loading.show({
          html: true,
          message: `<h3>${msg}</h3>`
        })
      } else {
        Loading.show()
      }
      const send = httpsCallable($functions, payload.functions);
      const result = await send(payload.data).then((result) => {
        const data = result?.data;
        Loading.hide()
        let val = {
          type: "positive",
          message: "Mensagem enviada com sucesso"
        }
        this.handleCallback(val)
        return data
      }).catch((error) => {
        console.log('sendHttpCall', error)
        Loading.hide()
        let val = {
          type: "negative",
          message: "Ops! Algo deu errado"
        }
        this.handleCallback(val)

        return {error: error}
      })
      return result
    },
    onLoadCollections(payload) {
      const q = query(collection($firestore, payload.collection))
      return onSnapshot(q, (snapshot) => {
        let lista = [];
        snapshot.docChanges().forEach((change) => {
          let val = {
            collection: payload.collection,
            id: change.doc.id,
            data: change.doc.data()
          }
          if (change.type === "added") {
            this.added(val)
          }
          if (change.type === "modified") {
            this.modified(val)
          }
          if (change.type === "removed") {
            this.removed(val)
          }
        });
        return lista
      })
    },
    async added(payload) {
      let lista = await this.verificaCollections(payload)
      lista.push(payload)
    },
    async modified(payload) {
      let lista = await this.verificaCollections(payload)

      for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        if (element.id === payload.id) {
          lista.splice(i, 1, payload)
        }
      }
    },
    async removed(payload) {
      let lista = await this.verificaCollections(payload)
      for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        if(element.id === payload.id) {
          lista.splice(i, 1);
        }
      }
    },
    async verificaCollections(payload) {
      switch (payload.collection) {
        case 'blog':
          return this.listaBlog
        case 'stories':
          return this.listaStories
        case 'listaComentarios':
          return this.listaComentarios
        case 'listaCarousel':
          return this.listaCarousel
        case 'listaParalax':
          return this.listaParalax
        case 'servicos':
          return this.listaServicos


        default:
          break;
      }
    },
    setAbertura(payload) {
      this.abertura = payload
    }
  },
});
