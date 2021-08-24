<template>
  <q-page class="flex flex-center">
       <section id="contabilidade" class="padrao ">
        <div class="row flex flex-center q-my-xl">
            <div class="col-lg-6 col-xs-10 col-md-10 ">
                <div >
                    <h3 class="borda text-start">Contatos</h3>
                    <h6 class="text-start">Email: <span class="text-weight-light">rhmixadm@gmail.com</span>  </h6>
                    <h6 class="text-start">Telefone: <span class="text-weight-light">(21) 993781226</span></h6>
                    <h6 class="text-start">Endereço: <span class="text-weight-light">Estrada de Xerem, 346, Loja, Xerem, Duque de Caxias - RJ CEP 25241-390</span></h6>
                </div>
                <div class="row justify-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.039383645148!2d-43.30791828527144!3d-22.577630285180234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x990d0a045abe95%3A0xda5c30446adbfc62!2sEstr.%20de%20Xer%C3%A9m%2C%20346%20-%20Vila%20Santa%20Alice%2C%20Duque%20de%20Caxias%20-%20RJ%2C%2025241-390!5e0!3m2!1spt-BR!2sbr!4v1629828420315!5m2!1spt-BR!2sbr" style="max-width:600px; width:90vw; height:450px; border:0" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class="q-my-md">
                  <q-btn color="primary" label="Fale conosco" @click="onSubmit" />
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
