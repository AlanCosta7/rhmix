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
        <h1 class="primaryGradiente text-center text-uppercase text-weight-bolder" style="width:80vw; max-width: 600px">Banner Home</h1>
      </div>
      <div class="row items-start justify-around">
        <div class="col-md-10 col-xs-10 q-gutter-md">
          <div class="row items-start q-gutter-md">
            <div class="col-auto">
              <q-img width="300px" v-if="form.id" height="300px" :src="form.data.imagem_600" @click="onPickPhoto" class="cursor-pointer">
                <template v-slot:error>
                  <div class="absolute-full flex flex-center bg-negative text-white">
                    Clique aqui para add a imagem do benefício
                  </div>
                </template>
              </q-img>
            </div>
            <div class="col-auto q-gutter-md">
              <div>
                <q-input outlined v-model="form.data.title" type="text" label="Título" />
              </div>
              <div>
                <q-input outlined v-model="form.data.subtitle" type="text" label="Subtítulo" />
              </div>
              <div>
                <q-input outlined v-model="form.data.link" type="text" label="Link" />
              </div>

              <div class="q-my-md">
                <div class="row items-center justify-around">
                  <div>
                    <BtnAdmin :form="form" collection="banner-home" @onReset="onReset" :validarDados="validarDados" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="q-py-xl"></div>
  </div>
</template>

<script setup>

import { ref, computed, watch, onMounted } from "vue"
import { useGlobalStore } from 'src/store/globalStore'
import { Dialog } from "quasar";
import BtnAdmin from "src/components/btnAdmin.vue"

const global = useGlobalStore()
let photoInput = ref(null)
let currentUser = computed(() => global.currentUser)

let bannerHome = computed(() => global.bannerHome)

let form = ref({
  id: null,
  data: {
    title: null,
    subtitle: null,
    link: null,
    imagem_200: './',
    imagem_400: './',
    imagem_600: './',
    imagem_800: './',
    imagem_1600: './',
  }
})

let file = ref(null)

let validarDados = computed(() => {
  let isForm = form.value.data
  if(isForm?.title && isForm?.subtitle && isForm?.link ) {
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
      title: null,
      subtitle: null,
      link: null,
      imagem_200: './',
      imagem_400: './',
      imagem_600: './',
      imagem_800: './',
      imagem_1600: './',
    }
  }
  select(null)
}

async function onSubmit() {
  if(form.value.id) {
    let val = {
      collection: 'banner-home',
      doc: form.value.data,
      id: form.value.id
    }
    await global.updateDocs(val)
    onReset()
  } else {
    let val = {
      collection: 'banner-home',
      doc: form.value.data
    }
    await global.saveDocs(val)
    onReset()
  }
}

function onPickPhoto() {
  if(form.value.id) {
    photoInput.value.click();
  } else {
    Dialog.create({
      title: "Crie primeiro um Benefício e adicione em seguida a imagem"
    })
  }
}

function onPhotoURLPicked(event) {
  const files = event.target.files;
  const file = files[0];
  const id = form.value.id

  var value = {
    id: id,
    collectionName: 'banner-home',
    type: 'capa',
    files: file,
  }

  const fileReader = new FileReader()
  fileReader.addEventListener('load', () => {
    const base64 = fileReader.result
    form.value.data.imagem_1600 = base64
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
      collection: 'banner-home',
      id: form.value.id
    }
    await global.deleteDocs(val)
    onReset()
  })

}

function select(item) {
  global.setSite(item)
}

onMounted(() => {
  if(bannerHome.value) {
    form.value = bannerHome.value[0] || {
      id: null,
      data: {
        title: null,
        subtitle: null,
        link: null,
        imagem_200: './',
        imagem_400: './',
        imagem_600: './',
        imagem_800: './',
        imagem_1600: './',
      }
    }
  }
})

</script>

<style>

</style>
