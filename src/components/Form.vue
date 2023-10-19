<template>
  <div>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
    >
      <div class="text-h6 text-white">Estamos prontos para resolver seu problema. Entre em conatao conosco:</div>
      <div class="row justify-between items-center">
        <div class="col-5">
          <q-input bg-color="white" dense lazy-rules :rules="[val => (val && val.length > 0) || 'Qual o seu nome?']" color="positive" outlined v-model="form.name" type="text" label="Nome completo:" />
        </div>
        <div class="col-5">
          <q-input bg-color="white" dense lazy-rules :rules="[val => (val && val.length > 0) || 'Qual o seu telefone?']" color="positive" outlined v-model="form.tel" type="text" mask="(##)#####-####" label="Telefone:" />
        </div>
      </div>
      <div>
          <q-input bg-color="white" dense lazy-rules :rules="[val => (val && val.length > 0) || 'Qual o seu e-mail?']" color="positive" outlined v-model="form.email" type="email" label="Email:" />
      </div>
      <div>
          <q-input bg-color="white" dense lazy-rules :rules="[val => (val && val.length > 0) || 'Qual o assunto?']" color="positive" outlined v-model="form.assunto" type="text" label="Assunto:" />
      </div>
      <div>
          <q-input bg-color="white" dense lazy-rules :rules="[val => (val && val.length > 0) || 'Como podemos te ajudar?']" color="positive" outlined v-model="form.msg" type="textarea" label="Mensagem:" />
      </div>
      <div>
        <q-btn label="Enviar" dense type="submit" color="secondary"/>
        <q-btn label="Limpar" dense type="reset" color="secondary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useGlobalStore } from '../store/globalStore'

const global = useGlobalStore()

let form = ref({
  assunto: '',
  name: '',
  tel: '',
  email: '',
  msg: '',
})

function onSubmit() {
  //
  global.sendHttpCall({
    functions: 'sendContato',
    data: form.value
  })
  console.log(form.value)
}

function onReset() {
  form.value = {
    assunto: '',
    name: '',
    tel: '',
    email: '',
    msg: '',
  }
}



</script>

<style scoped>
.bgImage {
  background-position: center; /* Center the image */
  background-size: cover;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/rhmix-adm.appspot.com/o/banner_principal%2Ffundo-formula204129rio.webp?alt=media&token=2d1f9421-c402-416c-97f3-ad6d31f01f5c');
  background-repeat: no-repeat;
}
</style>
