<template>
  <div>
    <q-item
      v-if="link"
      clickable
      tag="a"
      target="_blank"
      @click="onRouter(link)"
    >
      <q-item-section>
        <q-item-label class="text-uppercase">{{ title }}</q-item-label>
      </q-item-section>
    </q-item>

    <div v-else>
      <q-expansion-item
        expand-separator
        :label="title"
      >

        <q-card v-for="(opc, i) in lista" :key="i" @click="onRouter(opc)">
            <q-item>
              <q-item-section>
                <q-item-label class="text-primary">{{opc.data.page}}</q-item-label>
              </q-item-section>
            </q-item>
        </q-card>
      </q-expansion-item>

    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useGlobalStore } from '../store/globalStore'
import { openURL } from "quasar";

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    lista: {
      type: Array,
      default: []
    },

    link: {
      type: String,
      default: null
    },

    icon: {
      type: String,
      default: ''
    },

    admin: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const global = useGlobalStore()

    return {
      route: route,
      router: router,
      global: global,
    }
  },
  methods: {

    async onRouter(item) {
      console.log('onRouter', item)
      if (item == 'logout') {
        this.global.signOut()
      } else if(item=='https://packup.alterdata.com.br' || item=='https://blog-rhmix.web.app') {
        openURL(item)
      } else {
        this.router.push({name: item})
      }
    }
  }
})
</script>
