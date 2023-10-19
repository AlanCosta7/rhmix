<template>
  <q-layout view="lHh Lpr fff">
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Footer from '../components/Footer.vue'
import { useGlobalStore } from '../store/globalStore'
const global = useGlobalStore()

export default defineComponent({
  name: 'MainLayout',
  components: {
    Footer
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      global,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  data() {
    return {
      path: null,
    }
  },
  computed: {

    abertura() {
      return global.abertura
    }
  },
  methods: {
    home() {
      this.$router.push('/')
    },
    actionPath(path, item) {
      if (this.path !== path) {
        this.$router.push(`${path}`)
      }
      setTimeout(() => {
        var scrollDiv = document.getElementById(`${item}`).offsetTop
        window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
      }, 100);
      this.path = path
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
    },
    cert() {
      this.$router.push('/certificado')
    }
  },
  mounted() {
    console.log('mounted')
    let listaColl = [{collection: 'blog'}, {collection: 'stories'}, {collection: 'listaComentarios'}, {collection: 'listaCarousel'}, {collection: 'listaParalax'}, {collection: 'servicos'}]
    listaColl.forEach(element => {
      console.log('element', element)
      global.onLoadCollections(element)
    });
  },
})
</script>
