<template>
  <div>
    <Toobar />
    <div v-if="!capa">
        <q-carousel
          animated
          v-model="slide"
          :navigation="!mobile"
          arrows
          infinite
          width="100%"
          :height="mobile?'150px':'600px'"
          :autoplay="autoplay"
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide class="cursor-pointer q-pa-none" v-for="(item, i) in listaCarousel" @click="onRounter(item.data)" :key="i" :name="i">
            <q-img
              :src="item.data.img"
              :height="mobile?'150px':'600px'"
              spinner-color="primary"
              spinner-size="82px"
            >
            </q-img>
          </q-carousel-slide>
        </q-carousel>
    </div>
    <div v-else>
      <q-img
        :src="capa"
        :ratio="20/12"
        :height="mobile?'150px':'70vh'"
        width="100vw"
        spinner-color="primary"
        spinner-size="82px"
      >
      </q-img>
    </div>
  </div>
</template>

<script setup>
import Toobar from './Toobar.vue';
import anime from 'animejs/lib/anime.es.js';
import { onMounted, computed, ref } from 'vue'
import { openURL } from 'quasar'
import { useGlobalStore } from '../store/globalStore'
import { useRouter, useRoute } from 'vue-router'

const global = useGlobalStore()
const router = useRouter()
const route = useRoute()

const props = defineProps(['title', 'subtitle', 'img', 'listaCarousel', 'carousel', 'capa'])
let dark = computed(() => props.dark)
let name = computed(() => route.name.split('-'))
let carousel = computed(() => props.carousel)
let capa = computed(() => props.capa)

const listaCarousel = computed(() => props.listaCarousel.sort((a,b)=> a.data.index - b.data.index))

let slide = ref(0)
let autoplay = ref(true)
let mobile = computed(() => global.mobile)

function onRounter(item) {
  if(item.link == 'whatsapp') {
    let path = `https://api.whatsapp.com/send?phone=5521993781226&text=${item.msg}`
    openURL(path)
  } else {
    router.push({name:'servicos', params: {id: item.link}})
  }
}

function onRouter(item, data=null) {
  if(data) {
    router.push({name: item, params: {id: data.link }})
  } else if(item == 'logout') {
    global.signOut()
  } else {
    router.push({name: item})
  }
}

function toggleLeftDrawer() {
  global.setToggleLeftDrawer()
}

onMounted(() => {
  if(mobile.value) {

    anime({
      targets: '.easing',
      translateX: -200,
      easing: 'easeInOutExpo'
    });
  } else {

    anime({
      targets: '.easing',
      translateX: -700,
      easing: 'easeInOutExpo'
    });
  }
  anime({
    targets: '.arrow',
    translateY: 30,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad'
  })
})

</script>

<style scoped>
#dimmer {
  background:#000;
  opacity:0.5;
  position:fixed; /* important to use fixed, not absolute */
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index: -1;

}
.bgcard {
  background: rgba(3, 4, 117, 0.3)
}

.easing {
  margin-left: 600px;
  transition: all 1s ease-out;
}

.textOpacity {
  animation: isOpacity 2s ;
}

@keyframes isOpacity {
  from {opacity: 0;}
  to {opacity: 1px;}
}


@media only screen and (max-width: 600px) {
  .easing {
    margin-left: 50px;
    transition: all 1s ease-out;
  }
}

.isDesktop {
  margin-top: 120px;
  height: 80vh
}

.isMobile {
  margin-top: 60px;
  height: 50vh
}

.bggradiente {
  background: linear-gradient(180deg, rgba(0,0,0,0.6433167016806722) 0%, rgba(0,0,0,0) 100%);
}

#bgvideo {
  z-index: 0;
  object-fit: cover;
  width:100%;
  height:80vh;
}

.content {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>
