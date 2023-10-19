<template>
  <div class="row items-center justify-around q-gutter-sm bg-white" :style="mobile?'margin: 20px':'margin: 100px'">
    <div class="row full-width items-center justify-around q-gutter-sm" >
      <q-card flat class="col-xs-5 col-md-3" v-for="(item, i) in lista" :key="i" :style="mobile?'':'max-width:250px'">
        <img style="max-width: 230px" :src="item">
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useGlobalStore } from '../store/globalStore'
const global = useGlobalStore()

import img1 from '../assets/servicos/01-Contabilidade-para-Profissionais-Liberais.png'
import img3 from '../assets/servicos/03-Contabilidade-para-Farmácias.png'
import img5 from '../assets/servicos/05-Contabilidade-para-Artistas.png'
import img6 from '../assets/servicos/06-Contabilidade-para-Igrejas-e-Instituições.png'
import img7 from '../assets/servicos/07-Contabilidade-para-MEI.png'
import img8 from '../assets/servicos/08-Contabilidade-para-Empregador-Doméstico.png'
import img9 from '../assets/servicos/09-Contabilidade-para-Restaurante.png'
import img10 from '../assets/servicos/10-Contabilidade-para-Instituições-de-Ensino.png'

let lista = computed(() => [img1, img3, img5, img6, img7, img8, img9, img10 ])
let mobile = computed(() => global.mobile)

</script>

<style>

</style>
