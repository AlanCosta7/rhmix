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
        <h1 class="primaryGradiente text-center text-uppercase text-weight-bolder" style="width:80vw; max-width: 400px">Depoimentos</h1>
      </div>
      <div class="row items-start justify-around">
        <q-list class="col-md-2 col-xs-10 q-pa-md">
          <div class="text-bold q-mb-md">Lista de depoimentos:</div>
          <q-item class="borda" clickable v-ripple v-for="(item, i) in listaComentarios" :key="i" @click="setForm(item)">
            <q-item-section v-if="item && item.data && item.data.name">{{ item.data.index }} - {{ item.data.name }}</q-item-section>
          </q-item>
        </q-list>
        <div class="col-md-10 col-xs-10 q-gutter-md">
          <div class="row items-start q-gutter-md">
            <div>
              <div>
                <q-img v-if="form.id" width="300px" height="300px" :src="form.data.image" @click="onPickPhoto('image')" class="cursor-pointer">
                  <template v-slot:error>
                    <div class="absolute-full flex flex-center bg-negative text-white">
                      Clique aqui para add a fotografia
                    </div>
                  </template>
                </q-img>
              </div>
              <div>
                <q-img v-if="form.id" width="300px" height="300px" :src="form.data.logo" @click="onPickPhoto('logo')" class="cursor-pointer">
                  <template v-slot:error>
                    <div class="absolute-full flex flex-center bg-negative text-white">
                      Clique aqui para add a logo
                    </div>
                  </template>
                  <template v-if="!form.data.logo">
                    <div class="absolute-full flex flex-center bg-negative text-white">
                      Clique aqui para add a logo
                    </div>
                  </template>
                </q-img>
              </div>
            </div>
            <div class="col-md-6 q-gutter-md">
              <div>
                <q-input outlined v-model="form.data.name" type="text" label="Nome" />
              </div>
              <div>
                <q-input v-model="form.data.subnome" outlined type="text" label="Empresa" />
              </div>
              <div>
                <q-input v-model="form.data.text" outlined type="textarea" label="Depoimento" />
              </div>
              <div>
                <q-input v-model="form.data.index" outlined type="number" label="Ordem" />
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
              <q-btn color="positive" icon="done" :disable="!validarDados" :label="form.id ? 'Atualizar depoimento':'Criar novo depoimento'" @click="onSubmit()" />
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
let isType = ref(null)
let listaComentarios = computed(() => global.listaComentarios.sort((a,b)=> {
  return a.data.index - b.data.index
}))
let form = ref({
  id: null,
  data: {
    name: null,
    subnome: null,
    text: null,
    index: 0,
    image: './',
    logo: './'
  }
})

let validarDados = computed(() => {
  let isForm = form.value.data
  if(isForm?.name && isForm?.subnome && isForm?.text ) {
    return true
  } else {
    return false
  }
})

function setForm(item) {
  form.value = item || {
      id: null,
      data: {
        name: '',
        subnome: '',
        index: 0,
        text: '',
        image: './',
        logo: './'
      }
    }
}

function onReset() {
  form.value = {
    id: null,
    data: {
      name: '',
      subnome: '',
      index: 0,
      text: '',
      image: './',
      logo: './'
    }
  }
}

async function onSubmit() {
  if(form.value.id) {
    let val = {
      collection: 'listaComentarios',
      doc: {
        name: form.value.data.name,
        subnome: form.value.data.subnome,
        text: form.value.data.text,
        index: form.value.data.index,
      },
      id: form.value.id
    }
    await global.updateDocs(val)
    onReset()
  } else {
    let val = {
      collection: 'listaComentarios',
      doc: form.value.data
    }
    await global.saveDoc(val)
    onReset()
  }
}

function onPickPhoto(item) {
  isType.value = item
  if(form.value.id) {
    photoInput.value.click();
  } else {
    Dialog.create({
      title: "Crie primeiro um Depoimento e adicione em seguida a imagem"
    })
  }
}

function onPhotoURLPicked(event) {
  const files = event.target.files;
  const file = files[0];
  const id = form.value.id

  if(isType.value == 'image') {
    var value = {
      id: id,
      collectionName: 'listaComentarios',
      files: file,
      type: 'image',
    }
  
    const fileReader = new FileReader()
    fileReader.addEventListener('load', () => {
      const base64 = fileReader.result
      form.value.data.image = base64
    })
    fileReader.readAsDataURL(file)
  
    global.uploadPhotoURL(value)
  } else {
    var value = {
      id: id,
      collectionName: 'listaComentarios',
      files: file,
      type: 'logo',
    }
  
    const fileReader = new FileReader()
    fileReader.addEventListener('load', () => {
      const base64 = fileReader.result
      form.value.data.logo = base64
    })
    fileReader.readAsDataURL(file)
  
    global.uploadPhotoURL(value)

  }

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
      collection: 'listaComentarios',
      id: form.value.id
    }
    await global.deleteDocs(val)
    onReset()
  })

}

</script>

<style>

</style>
