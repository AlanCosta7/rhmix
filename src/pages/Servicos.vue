<template>
  <Header v-if="content && content.data.capa" :listaCarousel="[]" :capa="content.data.capa" :carousel="false" />
  <div v-else >
    <Toobar />
  </div>
  <Video
    v-if="content"
    :content="content"
  />
  <section v-if="content && content.data.duplocard" class="bg-white" :class="mobile?'full-width q-py-md':'q-pa-xl'">
    <div :class="mobile?'column justify-center q-gutter-md':'q-pa-xl row full-width item-start justify-around'">
      <div class="relative-position col-xs-10 col-md">
        <Card :content="content1" />
      </div>
      <div class="relative-position	col-xs-10 col-md">
        <Card :content="content2" />
      </div>
    </div>
  </section>

  <Content
    v-if="content && !content.data.duplocard"
    :content="content"
  />
  <Depoimento v-if="content && content.data.duplocard" />
  <Contato />
</template>

<script setup>
import { computed, ref } from 'vue';
import Header from '../components/Header.vue';
import Content from '../components/Content.vue'
import Contato from '../components/Contato.vue'
import Video from '../components/Video.vue'
import Card from '../components/CardServ.vue'
import Depoimento from '../components/Depoimento.vue'
import Toobar from '../components/Toobar.vue';

import { useGlobalStore } from 'src/store/globalStore'
import { useRoute } from 'vue-router'

const route = useRoute()
let id = computed(() => route.params.id)
const global = useGlobalStore()
let mobile = computed(() => global.mobile)
const content = computed(() => global.listaServicos.length?global.listaServicos?.find(v => v.data.slug == id.value):null)
const content1 = computed(() => {
  return {
    img: content.value?.data?.imagem_800,
    title: content.value?.data?.title,
    descricao: content.value?.data?.description,
    label: content.value?.data?.label,
    btn: content.value?.data?.btn,
    text: 'Quero solicitar uma análise do regime tributário da minha clínica'
  }
})
const content2 = computed(() => {
  return {
    img: content.value?.data?.card?.imagem_800,
    title: content.value?.data?.card?.title,
    descricao: content.value?.data?.card?.description,
    label: content.value?.data?.card?.label,
    btn: content.value?.data?.card?.btn,
    text: 'Quero regularizar a situação da minha clínica'
  }
})


</script>
