<template>
  <q-page class="flex flex-center">
       <section id="contabilidade" class="padrao ">
        <div class="row flex flex-center q-my-xl">
            <div class="col-lg-6 col-xs-10 col-md-10 ">
                <div >
                    <h3 class="borda text-start">Certificado Digital</h3>
                    <h6 class="text-start">Parceiros CERTIRIO com unidade em Xerém.</h6>
                    <div>Atendimento presencial ou vídeo conferência</div>
                    <div class="text-start">
                      <q-img
                        src="../assets/CertiRio.jpeg"
                        width="200px"
                        spinner-color="primary"
                        spinner-size="82px"
                      />
                    </div>
                </div>
                <div class="q-my-md">
                  <q-btn color="primary" label="Agende conosco" @click="onSubmit" />
                </div>
            </div>
        </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import {openURL} from 'quasar'

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      text: null
    }
  },
  methods: {
    onSubmit() {
      let path = `https://api.whatsapp.com/send?phone=5521993781226`
      openURL(path)
    },
  },
})
</script>
