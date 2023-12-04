<template>
  <div v-if="currentUser" class="row justify-center relative-position">

    <input
      ref="photoInput"
      debounce="500"
      type="file"
      @change="onPhotoURLPicked"
      name="photo"
      style="display: none;"
      accept="image/*"
    />
    <div style="width:80vw; max-width: 1200px">
      <div class="q-my-xl">
        <h1 class="primaryGradiente text-center text-uppercase text-weight-bolder" style="width:80vw; max-width: 400px">Blog</h1>
      </div>
      <div class="row items-start justify-around">
        <q-list class="col-md-2 col-xs-10 q-pa-md">
          <div class="text-bold q-mb-md">Lista de artigos:</div>
          <q-item class="borda" clickable v-ripple v-for="(item, i) in listaBlog" :key="i" @click="setForm(item)">
            <q-item-section v-if="item && item.data && item.data.title">{{ item.data.title }}</q-item-section>
          </q-item>
        </q-list>
        <div class="col-md-10 col-xs-10 q-gutter-md">
          <div class="row items-start q-gutter-md">
            <div>
              <div>
                <q-img v-if="form.id" width="300px" height="300px" :src="form.data.img" @click="onPickPhoto" class="cursor-pointer">
                  <template v-slot:error>
                    <div class="absolute-full flex flex-center bg-negative text-white">
                      Clique aqui para add a imagem do Post
                    </div>
                  </template>
                </q-img>
              </div>
            </div>
            <div class="col-md-6 q-gutter-md">
              <div>
                <q-input outlined v-model="form.data.title" type="text" label="Título" />
              </div>

              <div>{{ getSlug(form.data.title) }}</div>
              <div>
                <q-input filled v-model="form.data.date" >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date v-model="form.data.date" mask='DD [de] MMMM [de] YYYY'>
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div>
                <q-input v-model="form.data.btn" outlined type="text" label="Label do botão" />
              </div>
              <div>
                <q-input v-model="form.data.link" outlined type="text" label="Link do botão" />
              </div>
            </div>
          </div>
          <div>
            <q-editor
              v-model="form.data.text"
              ref="editorRef"
              toolbar-text-color="white"
              toolbar-toggle-color="yellow-8"
              toolbar-bg="primary"
              :toolbar="[
                [
                  {
                    label: $q.lang.editor.align,
                    icon: $q.iconSet.editor.align,
                    fixedLabel: true,
                    options: ['left', 'center', 'right', 'justify']
                  }
                ],
                ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                [
                  {
                    label: $q.lang.editor.formatting,
                    icon: $q.iconSet.editor.formatting,
                    list: 'no-icons',
                    options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                  },
                  {
                    label: $q.lang.editor.defaultFont,
                    icon: $q.iconSet.editor.font,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                      'default_font',
                      'arial',
                      'arial_black',
                      'comic_sans',
                      'courier_new',
                      'impact',
                      'lucida_grande',
                      'times_new_roman',
                      'verdana'
                    ]
                  },
                  'removeFormat'
                ],
                ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                ['token'],

              ]"
              :fonts="{
                arial: 'Arial',
                arial_black: 'Arial Black',
                comic_sans: 'Comic Sans MS',
                courier_new: 'Courier New',
                impact: 'Impact',
                lucida_grande: 'Lucida Grande',
                times_new_roman: 'Times New Roman',
                verdana: 'Verdana'
              }"
            >
              <template v-slot:token>
                <q-btn color="white" icon="smart_display" flat round @click="videoinput = !videoinput" />
                <q-input color="white" bg-color="white" v-if="videoinput" filled v-model="textvideo" label="ID do vídeo" hint="https://www.youtube.com/embed/[ID do Vídeo]?rel=0" >
                  <template v-slot:after>
                    <q-btn round dense flat color="white" icon="send" @click="onVideo(form.data.text)" />
                  </template>
                </q-input>
              </template>
            </q-editor>
          </div>
          <div class="row items-center justify-around">
            <div>
              <q-btn color="negative" :disable="!form.id" icon="delete_outline" label="Excluir" @click="onDelete()" />
            </div>
            <div>
              <q-btn color="amber" icon="cleaning_services" label="Limpar" @click="onReset()" />
            </div>
            <div>
              <q-btn color="positive" icon="done" :disable="!validarDados" :label="form.id ? 'Atualizar blog':'Criar novo blog'" @click="onSubmit()" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="q-py-xl"></div>
  </div>
</template>

<script setup>

import { ref, computed } from "vue"
import { useGlobalStore } from '../../store/globalStore'
import { Dialog } from "quasar";

const global = useGlobalStore()

let currentUser = computed(() => global.currentUser)
let photoInput = ref(null)
let videoinput = ref(false)
let textvideo = ref(null)
let listaBlog = computed(() => global.listaBlog)
let form = ref({
  id: null,
  data: {
    title: null,
    date: null,
    text: null,
    btn: null,
    link: null,
    img: './'
  }
})

let validarDados = computed(() => {
  let isForm = form.value.data
  if(isForm?.title && isForm?.date && isForm?.text ) {
    return true
  } else {
    return false
  }
})

function setForm(item) {
  form.value = item || {}
}

function onReset() {
  form.value = {
    id: null,
    data: {
      title: '',
      date: '',
      text: '',
      btn: null,
      link: null,
      img: './'
    }
  }
}

async function onSubmit() {
  const timeStamp = Date.now()

  form.value.data.slug = getSlug(form.value.data.title)
  form.value.data.timeStamp = timeStamp

  if(form.value.id) {
    let val = {
      collection: 'blog',
      doc: form.value.data,
      id: form.value.id
    }
    await global.updateDocs(val)
    onReset()
  } else {
    let val = {
      collection: 'blog',
      doc: form.value.data
    }
    await global.saveDoc(val)
    onReset()
  }
}

function onPickPhoto() {
  if(form.value.id) {
    photoInput.value.click();
  } else {
    Dialog.create({
      title: "Crie primeiro um Post e adicione em seguida a imagem"
    })
  }
}

function onPhotoURLPicked(event) {
  const files = event.target.files;
  const file = files[0];
  const id = form.value.id
  var value = {
    id: id,
    collectionName: 'blog',
    files: file,
    type: 'capa',
  }

  const fileReader = new FileReader()
  fileReader.addEventListener('load', () => {
    const base64 = fileReader.result
    form.value.data.img = base64
  })
  fileReader.readAsDataURL(file)

  global.uploadPhotoURL(value)

}

async function onDelete() {
  Dialog.create({
    title: "Atenção!!!",
    message: "Tem certeza que deseja excluir esse item? Essa ação é irreversível",
    cancel: true,
    persistent: true
  })
  .onOk(async () => {
    let val = {
      collection: 'blog',
      id: form.value.id
    }
    await global.deleteDocs(val)
    onReset()
  })

}

function onVideo() {
  form.value.data.text = form.value.data.text + `<iframe width="853" height="480" src="https://www.youtube.com/embed/${textvideo.value}?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  console.log('onVideo', form.value.data.text)
  textvideo.value = null
}

function getSlug(str) {
  if(str) {
    str = str.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')
  }
  return str;
}

</script>

<style>

</style>
