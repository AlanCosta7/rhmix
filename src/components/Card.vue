<template>
  <div class="relative-position row justify-center">
    <q-card flat class="col-10 my-card bg-grey-3" style="height: 600px">
      <q-img :ratio="16/9" style="width:100%" :src="content.img" />
      <q-card-section>
        <div class="text-h3 text-primary text-weight-bolder text-center">{{ content.title }}</div>
        <div class="text-center q-pa-md text-body1">{{ content.descricao }}</div>
      </q-card-section>
      <q-card-actions vertical align="center" class="absolute-bottom q-py-lg">
        <q-btn rounded class="bg-gradiente text-white text-bold" style="width:150px" @click="onRouter(content.text)"  :label="content.label" />
      </q-card-actions>
    </q-card>
    <div class="geeks text-center"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { openURL } from 'quasar'

const props = defineProps(['content'])
let content = computed(() => props.content)

function onRouter(text) {
  let path = `https://api.whatsapp.com/send?phone=5521993781226&text=${text}`
  openURL(path)
}

</script>

<style>
.my-card {
  border: solid 2px #C32D22 ;
  border-radius: 20px;
  padding: 0px;
  width: 96vw;
  max-width: 500px;
}


.geeks {
    width: 96vw;
    max-width: 500px;
    height:0px;
    background: white;
    border-radius: 20px;
}

.geeks::after {
    content: "";
    position: absolute;
    bottom: -50px;
    background: rgb(43, 42, 42);
    width: 60%;
    height:6px;
    left: 0;
    margin-left: 100px;
    margin-right: 100px;
    border-radius:50%;
    filter: blur(8px);
}

</style>
