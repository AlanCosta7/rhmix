<template>
  <q-layout view="lHh Lpr fff">
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
          <q-img width="150px" class="q-ma-md" src="../assets/logo.png" @click="home" alt="logo"  />
        </q-toolbar-title>

        <div class="mobile-hide">
          <q-btn color="black" flat label="Home">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable @click="actionPath('/', 'sobre')">
                  <q-item-section>Sobre</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="actionPath('/', 'contabilidade')">
                  <q-item-section>Contabilidade</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="actionPath('/', 'clinica')">
                  <q-item-section>Contabilidade para clínica médica</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="actionPath('/', 'aberturaempresa')">
                  <q-item-section>Abertura de empresas</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="actionPath('/', 'igreja')">
                  <q-item-section>Abertura de igrejas e outras instituições</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="actionPath('/', 'impostorenda')">
                  <q-item-section>Imposto de Renda</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="actionPath('/', 'rh')">
                  <q-item-section>Consultoria interna - Gestão de RH</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn color="black" flat label="Para Empresas" >
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable @click="actionPath('empresas', 'contabilidade')">
                  <q-item-section>Abrir empresa</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="actionPath('empresas', 'igreja2')">
                  <q-item-section>Abrir igrejas e afins</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="actionPath('empresas', 'mei')">
                  <q-item-section>Abrir o MEI</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="actionPath('empresas', 'pagamento')">
                  <q-item-section>Folha de pagamento</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn color="black" flat label="Pessoa Física" >
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable @click="actionPath('pessoa', 'contabilidade')">
                  <q-item-section>Empregador doméstico</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="actionPath('pessoa', 'imposto')">
                  <q-item-section>Imposto de Renda</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="actionPath('pessoa', 'medico')">
                  <q-item-section>Profissional liberal médico</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn color="black" flat label="Serviços" >
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable @click="actionPath('servicos', 'marca')">
                  <q-item-section>Registro de marcas</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="actionPath('servicos', 'iptu')">
                  <q-item-section>Legalização de imóvel IPTU</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="actionPath('servicos', 'rural')">
                  <q-item-section>Registro Rural - CCIR</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="actionPath('servicos', 'contabilidade')">
                  <q-item-section>Contratos</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn color="black" flat label="Dúvidas Frequentes" @click="duvida" />
          <q-btn color="black" flat label="Certificado Digital" @click="cert" />
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
        <q-item clickable v-ripple @click="home">
          <q-item-section>
            Home
          </q-item-section>
        </q-item>
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
        <q-item clickable v-ripple @click="cert">
          <q-item-section>
            Certificado Digital
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
    <q-footer class="bg-black q-gutter-md row items-center" style="height:100px" bordered>
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
  data() {
    return {
      path: null,
    }
  },
    methods: {
      home() {
        this.$router.push('/')
      },
      actionPath(path, item) {
        if (this.path !== path) {
          console.log(path)
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
})
</script>
