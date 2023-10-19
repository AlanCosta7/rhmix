<template>
  <q-page class="fit">
    <div v-if="abertura" class="row flex flex-center" style="height: 100vh">
      <div class="column text-center">
        <h3>Bem-vindo à</h3>
        <img
          @click="onRouter('empresa')"
          class='animacao'
          src="../assets/logo.gif"
          style="width:370px"
        >

      <div class="q-my-xl">
        <q-spinner-dots
          color="primary"
          size="3em"
        />
      </div>
      </div>
    </div>
    <div v-else>
      <Header :listaCarousel="listaCarousel" :carousel="true" />
      <Servicos class="bg-white" />
      <section class="bg-grey-3" :class="mobile?'full-width q-py-md':'q-pa-xl'">
        <div :class="mobile?'column justify-center q-gutter-md':'q-pa-xl row full-width item-start justify-around'">
          <div class="relative-position col-xs-10 col-sm-5">
            <Card :content="content1" />
          </div>
          <div class="relative-position	col-xs-10 col-sm-5">
            <Card :content="content2" />
          </div>
        </div>
      </section>
      <Depoimento />
      <Contato />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import {openURL, LocalStorage} from 'quasar'
import Header from '../components/Header.vue';
import Depoimento from '../components/Depoimento.vue'
import Contato from '../components/Contato.vue'
import Servicos from '../components/Servicos.vue'
import Card from '../components/Card.vue'
import { useGlobalStore } from 'src/store/globalStore'

const global = useGlobalStore()

export default defineComponent({
  components: { Header, Depoimento, Servicos, Card, Contato },
  name: 'PageIndex',
  data() {
    return {
      text: null,
      title: null,
      msg: null,
      dialogDoc: false,
      content1: {
        title: 'Imposto de Renda',
        descricao: 'Você trabalhador formal, autônomo, aposentado, pensionista, investidor, prestador de serviços médicos e afins. Esteja sempre em dia com suas obrigações fiscais. Evite o bloqueio de seu CPF, multas e acúmulos de dívidas.',
        img: 'https://firebasestorage.googleapis.com/v0/b/rhmix-adm.appspot.com/o/servicos%2Fphoto%2Fthumbs%2F004_800x800.webp?alt=media&token=1265653a-e96e-4f35-a4f9-5181e9e3f314',
        label: 'Fale conosco',
        text: 'Quero saber mais sobre Imposto de Renda'
      },
      content2: {
        title: 'Certificado Digital',
        descricao: 'Diversos modelos PJ e PF. Segurança e praticidade em suas operações. Ferramenta necessária para seu dia-a-dia. Garantia na autenticidade e na integridade de seus documentos eletrônicos.',
        img: 'https://firebasestorage.googleapis.com/v0/b/rhmix-adm.appspot.com/o/servicos%2Fphoto%2Fthumbs%2F005_800x800.webp?alt=media&token=1261eb6b-add0-43c2-912c-161159ae8a53',
        label: 'Agende agora!',
        text: 'Quero saber mais sobre Certificado Digital'
      },
    }
  },
  computed: {
    listaParalax() {
      return global.listaParalax
    },

    listaCarousel() {
      return global.listaCarousel
    },
    abertura() {
      return global.abertura
    },
    mobile() {
      return global.mobile
    }
  },
  methods: {
    onSubmitText() {
      let path = `https://api.whatsapp.com/send?phone=5521993781226&text=${this.text}`
      openURL(path)
    },
    onSubmit() {
      let path = `https://api.whatsapp.com/send?phone=5521993781226`
      openURL(path)
    },
    onDocEmpresas() {
      this.$router.push('/empresas')
    },
    async onDocIgreja () {
      await this.$router.push('/empresas')
      setTimeout(() => {
        var scrollDiv = document.getElementById("igreja2").offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
      }, 100);
    },
    async onImpostoRenda() {
      await this.$router.push('/pessoa')
      setTimeout(() => {
        var scrollDiv = document.getElementById("imposto").offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
      }, 100);
    }
  },
  mounted() {
    let value = LocalStorage.getItem('abertura')

    setTimeout(() => {
      if(value) {
        global.setAbertura(value)
      } else {
        LocalStorage.set('abertura', false)

        global.setAbertura(false)
      }
    }, 3000)
  },
})
</script>

<style >
.animacao {
  animation-name: nome-da-animacao;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}

</style>
