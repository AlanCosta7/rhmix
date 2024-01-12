<template>
  <q-layout view="hHh lpR fff" class="bgPadrao">
    <q-header >
      <q-toolbar>
        <q-toolbar-title>
          Admin
        </q-toolbar-title>
        <q-btn color="white" flat icon="menu" @click="toggleLeftDrawer" />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      v-if="currentUser"
      :width="250"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import EssentialLink from 'components/EssentialLink.vue'
import { useRouter } from 'vue-router'
import { openURL, Loading } from 'quasar'
import { ref, onMounted, computed, watch } from 'vue'
import { useGlobalStore } from '../store/globalStore'

const global = useGlobalStore()
let currentUser = computed(() => global.currentUser)

watch(currentUser, async (newDoc, oldDoc) => {
  console.log('newDoc', newDoc)
  redirectToApp()
})

const essentialLinks = [
  {
    title: 'Blog',
    link: 'blog-admin'
  },
  {
    title: 'Banner',
    link: 'banner-admin'
  },
  {
    title: 'Serviços',
    link: 'servicos-admin'
  },
  {
    title: 'Depoimentos',
    link: 'depoimento-admin'
  },
  {
    title: 'Deslogar',
    link: 'logout'
  },
];

const leftDrawerOpen = ref(false)
const router = useRouter()

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

async function onRouter(item, data=null) {
  if(item == 'logout') {
    global.signOut()
  } else {
    this.router.push({name: item})
  }
}

function sendWhatsapp() {
  global.onWhatsapp()
}

function redirectToApp() {
  Loading.show({
    message: '<h3>Carregando...</h3>',
    html: true
  })

  console.log('currentUser', currentUser.value)

  if(!currentUser.value) {
    setTimeout(() => {
      Loading.hide();
      router.push({name: 'auth'})
    }, 3000);
  } else {
    setTimeout(() => {
      Loading.hide();
      router.push({name: 'blog-admin'})
    }, 3000);
  }

}

onMounted(async() => {
  await global.isOnAuthStateChanged()

  let listaColl = [{collection: 'blog'}, {collection: 'stories'}, {collection: 'listaComentarios'}, {collection: 'listaCarousel'}, {collection: 'listaParalax'}, {collection: 'servicos'}]
  listaColl.forEach(element => {
    global.onLoadCollections(element)
  });
  console.log('redirectToApp')
  redirectToApp()
})

</script>

<style>
.bg-transparent {
  background-color: transparent;
}
</style>
