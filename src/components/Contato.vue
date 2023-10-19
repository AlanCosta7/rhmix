<template>
  <section>
    <div class="row items-start bg-primary">
      <div class="col-md col-xs-12">
        <q-img
          src="https://firebasestorage.googleapis.com/v0/b/rhmix-adm.appspot.com/o/pexels-anna-shvets-3727464.jpg?alt=media&token=5e6c7f91-061e-4b76-863d-c5e289ffca61"
          :ratio="6/7"
          width="100%"
          spinner-color="primary"
          spinner-size="82px"
        />
      </div>
      <div class="col-md col-xs-12 text-white" :style="mobile?'padding: 20px':'padding: 100px;'" >
        <div class="text-h4 text-weight-bolder"> Conte com a RHMix, entre em contato agora</div>
        <div class="q-my-sm">Converse agora mesmo com um especialista e descubra <b>como podemos somar com você</b>.</div>
        <div class="q-mb-sm">Selecione uma opção de contato:</div>
        <div>
          <q-select v-model="model" color="secondary" bg-color="white" outlined :options="listaServicos" label="Selecione uma opção" filled />
        </div>
        <div v-if="model == 'Enviar um e-mail para o escritório'" :class="mobile?'':'q-my-xl'">
          <Form />
        </div>
        <div v-if="model == 'Falar com o escritório'" class="q-mt-xl">
          <q-btn rounded color="white" text-color="primary" class="text-bold text-primary" style="width:150px" @click="onRouter()"  label="Fale conosco" />
        </div>
      </div>
      <div class="col-12" style="height: 100px"></div>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGlobalStore } from '../store/globalStore'
import { openURL } from 'quasar'
import Form from '../components/Form.vue'

const global = useGlobalStore()
let model = ref(null)
const listaServicos = ref(['Falar com o escritório', 'Enviar um e-mail para o escritório'])
let mobile = computed(() => global.mobile)

function onRouter() {
  let path = `https://api.whatsapp.com/send?phone=5521993781226`
  openURL(path)
}
</script>

<style>
.ispad {
  padding: 100px;
}
</style>
