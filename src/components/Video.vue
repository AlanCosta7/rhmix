<template>
  <div class="row justify-center fit q-py-xl bg-grey-3" style="padding-top: 160px; padding-bottom: 160px">
    <div style="width: 90vw" >
      <div class="row items-center justify-center">
        <div class="col-md col-xs-12">
          <div :style="mobile?'width: 90vw':'width: 500px'">
            <h2 class="text-primary" v-if="title">{{ title }}</h2><br>
            <p v-if="description">{{ description }}</p>
          </div>
        </div>
        <div class="col-xs-12 col-md">
          <q-video
            v-if="video"
            class="borda"
            :style="mobile?'width: 90vw':'width: 600px; height:400px'"
            :src="getVideo(video)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useGlobalStore } from 'src/store/globalStore'

const props = defineProps(['content'])
const global = useGlobalStore()
let mobile = computed(() => global.mobile)

let content = computed(() => props.content)
let title = computed(() => content.value?.data?.video?.title)
let description = computed(() => content.value?.data?.video?.description)
let video = computed(() => content.value?.data?.video?.url)

function getVideo(item) {
  let id = item.split('v=')
  let url = `https://www.youtube.com/embed/${id[1]}?rel=0`
  return url
}

</script>

<style lang="scss">
.borda {
  border: solid 16px $primary;
}
</style>
