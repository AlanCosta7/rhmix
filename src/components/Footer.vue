<template>
  <q-footer class="bg-white text-black row justify-around items-start q-pa-xl" >
    <div class="col-md-4 col-xs-12 row items-center justify-center">
      <div class="col-12 text-center">
        <q-img
          :ratio="19/6"
          @click="onRouter('index')"
          src="../assets/LOGO_RHMIX_CONTABILIDADE.png"
          style="width:100vw; max-width: 400px"
          spinner-color="primary"
          spinner-size="82px"
          alt="logo"
        />
      </div>

      <div class="col-12 row items-center justify-around q-pa-xl">
        <div>
          <a target="_blank" href="https://www.facebook.com/rhmixcontabil">
            <q-img
              src="../assets/social/facebook.png"
              width="30px"
              :ratio="1"
              spinner-color="primary"
              spinner-size="82px"
          /></a>
        </div>
        <div>
          <a target="_blank" href="https://www.instagram.com/rhmixcontabil">
            <q-img
            src="../assets/social/instagram.png"
              width="30px"
              :ratio="1"
              spinner-color="primary"
              spinner-size="82px"
            />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://www.youtube.com/@rhmixcontabil">
            <q-img
              src="../assets/social/youtube.png"
              width="30px"
              :ratio="1"
              spinner-color="primary"
              spinner-size="82px"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="col-md-3 col-xs-12 column">
      <div class="text-uppercase letter-spacing">Contatos</div>
      <div>
        <div class="row items-center q-gutter-md q-my-md">
          <q-img
            src="../assets/phone-call.png"
            :ratio="1"
            width="20px"
            spinner-color="primary"
            spinner-size="82px"
          />
          <div>+55 (21) 3491-2668</div>
        </div>
        <div class="row items-center q-my-md">
          <q-img
            src="../assets/whatsapp.png"
            :ratio="1"
            width="20px"
            spinner-color="primary"
            spinner-size="82px"
          />
          <div>
            <q-btn color="black" flat label="+55 (21) 993781226 (whatsapp)" @click="onWhatsap()" />
          </div>
        </div>
        <div class="row items-center q-gutter-md q-my-md">
          <q-img
            src="../assets/mail.png"
            :ratio="1"
            width="20px"
            spinner-color="primary"
            spinner-size="82px"
          />
          <div>rhmixadm@gmail.com</div>
        </div>
      </div>
    </div>

    <div class="col-md-3 col-xs-12 column">
      <div class="q-mb-md col-3 text-uppercase letter-spacing">Endereço</div>

      <div class="q-my-md col-3">
        Estrada de Xerém, 1429, Loja, Xerém, Duque de Caxias - RJ CEP 25241-390
      </div>
      <div class="q-my-md col-3">
        <q-btn color="primary" rounded outline icon-right="east" label="Veja no mapa" @click="onMaps()" />
      </div>
    </div>
  </q-footer>
</template>

<script setup>
import { openURL } from 'quasar'
import { useRouter } from 'vue-router'
import Form from '../components/Form.vue'

const router = useRouter()

function onRouter(item) {
  router.push({name: item})
}

function onMaps() {
  openURL("https://www.google.com/maps?ll=-22.577638,-43.305727&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=10113032817629369026")
}

function onWhatsap() {
  let url = `https://api.whatsapp.com/send?phone=5521993781226`
  openURL(url)
}
</script>

<style>
.letter-spacing {
  letter-spacing: .25em;
}
</style>
