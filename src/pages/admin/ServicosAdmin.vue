<template>
  <div v-if="currentUser" class="row justify-center relative-position">

    <input
      ref="photoInput"
      type="file"
      @change="onPhotoURLPicked"
      name="photo"
      style="display: none;"
      accept="image/*"
    />

    <input
      ref="photoInputCapa"
      type="file"
      @change="onPhotoURLPickedCapa"
      name="photo"
      style="display: none;"
      accept="image/*"
    />

    <div style="width:80vw; max-width: 1200px">
      <div class="q-my-xl">
        <h1 class="primaryGradiente text-center text-uppercase text-weight-bolder" style="width:80vw; max-width: 400px">Serviços</h1>
      </div>
      <div class="row items-start justify-around">
        <q-list class="col-md-2 col-xs-10 q-pa-md">
          <div class="text-bold q-mb-md">Lista de serviços:</div>
          <q-item :class="item.id==form.id?'bordaItem':''" clickable v-ripple v-for="(item, i) in listaServicos" :key="i" @click="setForm(item)">
            <q-item-section v-if="item && item.data && item.data.title">{{ item.data.page }}</q-item-section>
          </q-item>
        </q-list>
        <div class="col-md-10 col-xs-10 q-gutter-md">
          <div>
            <q-input outlined v-model="form.data.page" type="text" label="Página" />
          </div>
          <div>
            slug: {{ setSlug(form.data.page) }}
          </div>
          <div>
            <q-img width="900px" height="300px" :src="form.data.capa" @click="onPickPhotoCapa" class="cursor-pointer">
              <template v-slot:error>
                <div class="absolute-full flex flex-center bg-negative text-white cursor-pointer">
                  Clique aqui para add uma capa
                </div>
              </template>
            </q-img>
          </div>
          <div class="row items-center justify-around q-my-xl">
            <div class="col-12 text-bold">Dados do vídeo</div>
            <div class="col-7 q-gutter-md">
              <div>
                <q-input outlined v-model="form.data.video.title" type="text" label="Título do vídeo" />
              </div>
              <div>
                <q-input outlined v-model="form.data.video.description" type="textarea" label="Texto do vídeo" />
              </div>
              <div>
                <q-input outlined v-model="form.data.video.url" type="text" label="URL do vídeo" />
              </div>
            </div>
            <div class="col-5">
              <q-video :ratio="16/9" :src="getVideo(form.data.video.url)" />
            </div>
          </div>
          <q-separator spaced inset class="q-my-xl" />
          <div class="row items-start justify-around q-my-xl">
            <div class="col-12 text-bold">Conteúdo da página</div>
            <div class="col-12">
              <q-toggle v-model="form.data.duplocard" color="positive" />
            </div>
            <div class="row items-start justify-around">
              <div class="col-7 q-gutter-md">
                <div>
                  <q-input outlined v-model="form.data.title" type="text" label="Título" />
                </div>
                <div>
                  <q-input outlined v-model="form.data.btn" type="text" label="Texto do whatsapp Botão" />
                </div>
                <div>
                  <q-input outlined v-model="form.data.label" type="text" label="Label do Botão" />
                </div>
              </div>
              <div class="col-5">
                <div>
                  <q-img width="300px" height="300px" :src="form.data.imagem_800" @click="onPickPhoto" class="cursor-pointer">
                    <template v-slot:error>
                      <div class="absolute-full flex flex-center bg-negative text-white cursor-pointer" >
                        Clique aqui para add uma imagem
                      </div>
                    </template>
                  </q-img>
                </div>
              </div>
              <div class="col-12">
                <q-editor
                  v-model="form.data.description"
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
                        list: 'only-icons',
                        options: ['left', 'center', 'right', 'justify']
                      },
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
                </q-editor>
              </div>
            </div>

            <q-separator spaced inset class="q-my-xl" />
            <div v-if="form.data.duplocard" class="row items-start justify-around">
              <div class="col-7 q-gutter-md">
                <div>
                  <q-input outlined v-model="form.data.card.title" type="text" label="Título" />
                </div>
                <div>
                  <q-input outlined v-model="form.data.card.btn" type="text" label="Texto do whatsapp Botão" />
                </div>
                <div>
                  <q-input outlined v-model="form.data.card.label" type="text" label="Label do Botão" />
                </div>
              </div>
              <div class="col-5">
                <div>
                  <q-img width="300px" height="300px" :src="form.data.card.imagem_800">
                    <template v-slot:error>
                      <div class="absolute-full flex flex-center bg-negative text-white cursor-pointer" >
                        Sem imagem
                      </div>
                    </template>
                  </q-img>
                </div>
              </div>
              <div class="col-12">
                <q-editor
                  v-model="form.data.card.description"
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
                        list: 'only-icons',
                        options: ['left', 'center', 'right', 'justify']
                      },
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
                </q-editor>
              </div>
            </div>
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
import { Dialog, uid } from "quasar";

const global = useGlobalStore()

let currentUser = computed(() => global.currentUser)
let photoInput = ref(null)
let photoInputCapa = ref(null)

let listaServicos = computed(() => global.listaServicos)
let form = ref({
  id: null,
  data: {
    page: null,
    slug: null,
    video: {
      title: null,
      description: null,
      url: null
    },
    capa: './',
    title: null,
    description: null,
    imagem_800: './',
    btn: null,
    label: null,
    duplocard: false,
    card: {
      title: null,
      description: null,
      btn: null,
      label: null,
    }
  }
})

let validarDados = computed(() => {
  let isForm = form.value.data
  if(isForm?.title && isForm?.description ) {
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
      page: null,
      slug: null,
      video: {
        title: null,
        description: null,
        url: null
      },
      capa: './',
      title: null,
      description: null,
      imagem_800: './',
      btn: null,
      label: null,
      duplocard: false,
      card: {
        title: null,
        description: null,
        btn: null,
        label: null,
      }
    }
  }
}

async function onSubmit() {

  if(form.value.id) {
    let val = {
      collection: 'servicos',
      doc: {
        page: form.value.data.page,
        slug: form.value.data.slug,
        video: form.value.data.video,
        title: form.value.data.title,
        description: form.value.data.description,
        btn: form.value.data.btn,
        label: form.value.data.label,
        duplocard: form.value.data.duplocard,
        card: form.value.data.card
      },
      id: form.value.id
    }
    console.log(val)
    await global.updateDocs(val)
    onReset()
  } else {
    let val = {
      collection: 'servicos',
      doc: {
        page: form.value.data.page,
        slug: form.value.data.slug,
        video: form.value.data.video,
        title: form.value.data.title,
        description: form.value.data.description,
        btn: form.value.data.btn,
        label: form.value.data.label,
        duplocard: form.value.data.duplocard,
        card: form.value.data.card
      }
    }

    console.log(val)
    await global.saveDoc(val)
    onReset()
  }
}

function setSlug(str) {
  str = str?str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-').replace(/,/g, ""):''
  form.value.data.slug = str
  return str;
}

function onPickPhoto() {
  photoInput.value.click();
}

function onPickPhotoCapa() {
  photoInputCapa.value.click();
}

async function onPhotoURLPickedCapa(event) {

  const files = event.target.files;
  const file = files[0];
  let id = form.value.id

  if(!id) {
    let val = {
      collection: 'servicos',
      doc: {
        page: form.value.data.page,
        slug: form.value.data.slug,
        video: form.value.data.video,
        title: form.value.data.title,
        description: form.value.data.description,
        btn: form.value.data.btn,
        label: form.value.data.label,
        duplocard: form.value.data.duplocard,
        card: form.value.data.card
      }
    }
    let result = await global.saveDoc(val)
    console.log('onPhotoURLPickedCapa', result, result?.id)

    id = result?.id
  }

  var value = {
    id: id,
    collectionName: 'servicos',
    files: file,
    type: 'capa',
  }
  const fileReader = new FileReader()
  fileReader.addEventListener('load', () => {
    const base64 = fileReader.result
    form.value.data.capa = base64
  })
  fileReader.readAsDataURL(file)

  global.uploadPhotoURL(value)

}

async function onPhotoURLPicked(event) {
  const files = event.target.files;
  const file = files[0];
  let id = form.value.id

  if(!id) {
    let val = {
      collection: 'servicos',
      doc: {
        page: form.value.data.page,
        slug: form.value.data.slug,
        video: form.value.data.video,
        title: form.value.data.title,
        description: form.value.data.description,
        btn: form.value.data.btn,
        label: form.value.data.label,
        duplocard: form.value.data.duplocard,
        card: form.value.data.card
      }
    }
    let result = await global.saveDoc(val)

    id = result?.id
  }

  var value = {
    id: id,
    collectionName: 'servicos',
    files: file,
    type: 'photo',
  }

  const fileReader = new FileReader()
  fileReader.addEventListener('load', () => {
    const base64 = fileReader.result
    form.value.data.imagem_800 = base64
  })
  fileReader.readAsDataURL(file)

  global.uploadPhotoURL(value)

}

function getVideo(item) {
  let id = item?item.split('v='):'k3_tw44QsZQ'
  let url = `https://www.youtube.com/embed/${id[1]}?rel=0`
  return url
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
      collection: 'servicos',
      id: form.value.id
    }
    await global.deleteDocs(val)
    onReset()
  })

}

</script>

<style lang="scss" scoped>
.bordaItem {
  border: solid 3px $primary;
}
</style>
