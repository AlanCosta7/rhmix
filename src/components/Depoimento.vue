<template>
  <section>
    <div v-if="!mobile">
      <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          infinite
          control-color="black"
          padding
          height="300px"
          class="bg-rosa"
          ref="carousel"
        >
          <q-carousel-slide :name="slide">
            <div class="row items-center q-gutter-md justify-around">
              <q-card v-if="lista[slide]" style="max-width:620px" class="col-xs-12 col-md-5 isCard z-top">
                <div class="row items-start q-pa-lg">
                  <div class="col-4 column items-center q-gutter-md">
                    <q-avatar size="120px">
                      <q-img
                        :src="lista[slide].data.image"
                        :ratio="1"
                        spinner-color="primary"
                        spinner-size="82px"
                      />
                    </q-avatar>
                    <div>
                      <q-avatar size="60px" >
                        <q-img
                          :src="lista[slide].data.logo"
                          width="60px"
                          spinner-color="primary"
                          spinner-size="82px"
                        />
                      </q-avatar>
                    </div>
                  </div>
                  <div class="col-8">
                    <div class="text-h6 text-black text-weight-bold">
                      {{ lista[slide].data.name }}
                    </div>
                    <div v-if="lista[slide].data.subnome" class="text-h6 text-weight-light text-black">
                      {{ lista[slide].data.subnome }}
                    </div>
                    <div class="text-caption text-italic text-weight-light q-py-md" style="max-width: 900px" v-html="lista[slide].data.text"></div>
                  </div>
                </div>
              </q-card>
              <q-separator spaced inset vertical color="primary" />
              <q-card v-if="lista[slide+1]" style="max-width:620px" class="col-xs-12 col-md-5  isCard z-top">
                <div class="row items-start q-pa-lg">
                  <div class="col-4 column items-center q-gutter-md">
                    <q-avatar size="120px" >
                      <q-img
                        :src="lista[slide+1].data.image"
                        :ratio="1"
                        spinner-color="primary"
                        spinner-size="82px"
                      />
                    </q-avatar>
                    <div>
                      <q-avatar size="60px" >
                        <q-img
                          :src="lista[slide+1].data.logo"
                          width="60px"
                          spinner-color="primary"
                          spinner-size="82px"
                        />
                      </q-avatar>
                    </div>
                  </div>
                  <div class="col-8">
                    <div class="text-h6 text-black text-weight-bold">
                      {{ lista[slide+1].data.name }}
                    </div>
                    <div v-if="lista[slide+1].data.subnome" class="text-h6 text-weight-light text-black">
                      {{ lista[slide+1].data.subnome }}
                    </div>
                    <div class="text-caption text-italic text-weight-light q-py-md" style="max-width: 900px" v-html="lista[slide+1].data.text"></div>
                  </div>
                </div>
              </q-card>
            </div>

          </q-carousel-slide>
          <template v-slot:control>
            <q-carousel-control class="full-width absolute-center">
              <div class="absolute-left">
                <q-btn
                  v-if="slide!=0"
                  round flat dense color="black" icon="chevron_left"
                  @click="removeSlide()"
                />
              </div>
              <div  class="absolute-right">
                <q-btn
                  v-if="slide<lista.length-1"
                  round flat dense color="black" icon="chevron_right"
                  @click="addSlide()"
                />
              </div>

            </q-carousel-control>
          </template>
      </q-carousel>
    </div>
    <div v-else>
      <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          infinite
          arrows
          control-color="black"
          padding
          height="400px"
          class="bg-rosa"
        >
          <q-carousel-slide v-for="(item, index) in lista" :key="index" :name="index">
            <q-card v-if="item" style="width:100%" class="col-xs-12 col-md-6">
              <div class="row items-center q-pa-md">
                <div class="col-4 row items-center q-gutter-md relative-position">
                  <q-avatar size="60px">
                    <q-img
                      :src="item.data.image"
                      :ratio="1"
                      spinner-color="primary"
                      spinner-size="82px"
                    />
                  </q-avatar>
                  <div v-if="item.data.logo" class="absolute-bottom" style="bottom:-20px; left:10px">
                    <q-avatar size="30px">
                      <q-img
                        :src="item.data.logo"
                        width="40px"
                        spinner-color="primary"
                        spinner-size="82px"
                      />
                    </q-avatar>
                  </div>
                </div>
                <div class="col-8 q-ml-md column justify-around">
                  <div class="text-black text-weight-bold">
                    {{ item.data.name }}
                  </div>
                  <div v-if="item.data.subnome" class="text-weight-light text-black">
                    {{ item.data.subnome }}
                  </div>
                </div>
                <div class="text-caption text-italic text-weight-light q-py-md q-mt-md" style="max-width: 900px" v-html="item.data.text"></div>

              </div>
            </q-card>
          </q-carousel-slide>
      </q-carousel>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useGlobalStore } from 'src/store/globalStore'

const global = useGlobalStore()
let slide = ref(0)
let mobile = computed(() => global.mobile)

let lista = ref(global.listaComentarios.sort((a,b) => {
    if ( a.data.index < b.data.index ){
      return -1;
    }
    if ( a.data.index > b.data.index ){
      return 1;
    }
    return 0;
  })
)

function addSlide() {
  slide.value = slide.value + 2
  console.log(slide.value)
}

function removeSlide() {
  slide.value = slide.value - 2
  console.log(slide.value)
}

</script>

<style>
.bg-rosa {
  background-color: #FFC7C7;
}
</style>
