<template>
  <div class="row fit justify-center">
    <div class="row items-center justify-around q-my-xl" style="width: 90vw" >
      <div v-intersection="onIntersection" class="col-md col-xs-12">
        <h1 v-if="title" class="text-primary duration-demo">{{title}}</h1>
        <div v-if="description" class="duration-demo" style="width: 90vw; max-width: 500px" v-html="description">
        </div>
        <div class="duration-demo q-my-lg">
          <div v-if="btn">
            <q-btn @click="onRouter()" rounded size="lg" style="width: 350px" color="primary" :label='label'  />
          </div>
        </div>
      </div>
      <div class="col-md col-xs-12">
        <q-img
          v-if="img"
          :src="img"
          style="height: 400px"
          spinner-color="primary"
          spinner-size="82px"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import anime from 'animejs/lib/anime.es.js';
  import { openURL } from "quasar";
  import { computed } from 'vue';

  const props = defineProps(['content'])

  let content = computed(() => props.content)

  let img = computed(() => content.value?.data?.imagem_800)
  let btn = computed(() => content.value?.data?.btn)
  let label = computed(() => content.value?.data?.label)
  let title = computed(() => content.value?.data?.title)
  let description = computed(() => content.value?.data?.description)

  function onRouter(msg) {
    if(msg == 'pdf') {
      openURL('')
    } else {
      let path = `https://api.whatsapp.com/send?phone=5521993781226&text=${msg}`
      openURL(path)
    }
  }

  function onIntersection (entry) {
    if(entry.isIntersecting) {
      setAnime(true)
    } else {
      setAnime(false)
    }
  }

  function setAnime(item) {
    if(item) {
      anime({
        targets: '.duration-demo',
        translateX: 0,
        duration: 3000
      });
      anime({
        targets: '.duration-invertido',
        translateX: 0,
        duration: 3000
      });

    } else {
      anime({
        targets: '.duration-demo',
        translateX: -1000,
        duration: 3000
      });
      anime({
        targets: '.duration-invertido',
        translateX: 1000,
        duration: 3000
      });

    }
  }
</script>

