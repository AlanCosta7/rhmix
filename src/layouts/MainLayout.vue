<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          class="mobile-only"
          color="black"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-black">
          <q-img width="100px" src="../assets/logo.png" @click="home" alt="logo"  />
        </q-toolbar-title>

        <div class="mobile-hide">
          <q-btn color="black" flat label="Para Empresas" @click="empresas" />
          <q-btn color="black" flat label="Pessoa Física" @click="pessoa" />
          <q-btn color="black" flat label="Serviços" @click="servicos" />
          <q-btn color="black" flat label="Dúvidas Frequentes" @click="duvida" />
          <q-btn color="black" flat label="Contato" @click="contato" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item clickable v-ripple @click="empresas">
          <q-item-section>
            Para Empresas
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="pessoa">
          <q-item-section>
            Pessoa Física
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="servicos">
          <q-item-section>
            Serviços
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="duvida">
          <q-item-section>
            Dúvidas frequentes
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="contato">
          <q-item-section>
            Contato
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-black q-gutter-md row items-center" reveal bordered>
      <div class="col-xs-6">
          <q-img width="100px" src="../assets/logo.png" @click="home" alt="logo"  />
      </div>
      <div class="col-xs-4 q-gutter-md">
        <a target="_blank" href="https://www.facebook.com/RHMixadm">
        <q-img
          src="../assets/facebook.svg"
          width="30px"
          :ratio="1"
          spinner-color="primary"
          spinner-size="82px"
        /></a>
        <a target="_blank" href="https://www.instagram.com/rh_mix/">
        <q-img
          src="../assets/instagram.svg"
          width="30px"
          :ratio="1"
          spinner-color="primary"
          spinner-size="82px"
        />

        </a>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
    methods: {
      home() {
        this.$router.push('/')
      },
      empresas() {
        this.$router.push('/empresas')
      },
      pessoa() {
        this.$router.push('/pessoa')
      },
      servicos() {
        this.$router.push('/servicos')
      },
      duvida() {
        this.$router.push('/duvida')
      },
      contato() {
        this.$router.push('/contato')
      }
    },
})
</script>
