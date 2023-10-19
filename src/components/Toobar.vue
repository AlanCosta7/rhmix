<template>
  <q-toolbar class="bg-white q-pa-md ">
    <img
      @click="onRouter('index')"
      class='animacao'
      src="../assets/logo.gif"
      style="width:170px"
    >
    <q-space />
    <div class="row items mobile-hide">
      <div v-for="(item, i) in listaContabilidade" :key="i">
        <div v-if="item.link">
          <q-btn color="black" flat :label="item.label" @click="onRouter(item.link)" />
        </div>
        <div v-else>
          <q-btn-dropdown color="black" flat :label="item.label" >
            <q-list class="z-max" style="margin-top:20px">
              <q-item v-for="(opc, ind) in item.lista.sort((a,b)=> a.index-b.index)" :key="ind" clickable @click="onRouter(opc.link)">
                <q-item-section>
                  <q-item-label>{{ opc.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>

      </div>
    </div>
    <div class="mobile-only">
      <q-btn color="black" flat icon="menu" >
        <q-menu style="margin-top:60px">
          <q-list style="min-width: 150px; margin-top:20px">
            <div v-for="(item, i) in listaContabilidade" :key="i">
              <div v-if="item.link">
                <q-btn class="full-width" color="black" flat :label="item.label" @click="onRouter(item.link)" />
              </div>
              <div v-else>

                <q-btn-dropdown class="full-width" color="black" flat :label="item.label">
                  <q-list>
                    <q-item v-for="(opc, ind) in item.lista" :key="ind" clickable @click="onRouter(opc.link)">
                      <q-item-section>
                        <q-item-label>{{ opc.label }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>

            </div>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </q-toolbar>
</template>

<script setup>
import { computed } from 'vue'
import { useGlobalStore } from 'src/store/globalStore'
import { useRoute, useRouter } from 'vue-router'
import { openURL } from "quasar";

const global = useGlobalStore()
const router = useRouter()

let listaBlog = computed(() => global.listaBlog.sort((a,b)=> a.data.date - b.data.date))

let listaContabilidade = computed(() => [
  {
    label: 'Home',
    link: 'index'
  },
  {
    label: 'Serviços',
    lista: global.listaServicos.map(v => {
      return {
        label: v.data.page,
        link: v.data.slug,
        index: v.data.index
      }
    })
  },
  {
    label: 'Blog',
    link: 'https://blog-rhmix.web.app'
  },
  {
    label: 'Contato',
    link: 'contato'
  },
  {
    label: 'ÁREA DO CLIENTE',
    link: 'https://packup.alterdata.com.br'
  },
])

function onRouter(item) {
  if(item == 'blog') {

    router.push({name: item, params:{id: listaBlog.value[0].id}})

  } else if(item=='https://packup.alterdata.com.br' || item=='https://blog-rhmix.web.app') {
    openURL(item)
  } else if(item=='index') {
    router.push({name: item})
  } else {
    router.push({name: 'servicos', params:{id: item}})
  }
}

</script>

<style>
.bggradiente {
  background: linear-gradient(180deg, rgba(0,0,0,0.6433167016806722) 0%, rgba(0,0,0,0) 100%);
}

.animacao {
  animation-name: nome-da-animacao;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}
</style>
