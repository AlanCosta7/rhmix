<template>
  <div class="bgPrimary" >
    <div class="row justify-center" style="height: 90vh">
      <div class="col-lg-6 col-sm-6 flex flex-center">
        <div>
          <div class="row justify-center">
            <h5 class="text-uppercase text-center text-weight-bolder">Login</h5>
          </div>
          <div class="column  justify-center">
            <q-form
              @submit="onSubmit()"
              @reset="onReset"
              class="full-width"
            >
              <div class="row justify-center q-gutter-md ">
                <q-input class="q-px-md" style="width: 80%; max-width: 600px" rounded outlined color="primary" bg-color="white" v-model="email" type="text" label="Email" />
                <q-input class="q-px-md" style="width: 80%; max-width: 600px" rounded outlined color="primary" bg-color="white" v-model="password" type="password" label="Senha" />
                <q-btn class="text-white q-px-md" style="width: 70%; max-width: 550px" rounded label="Entrar" type="submit" color="positive"/>
              </div>
            </q-form>

          </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-6 flex flex-center">
        <q-img
          src="../../assets/logo.gif"
          width="400px"
          spinner-color="primary"
          spinner-size="82px"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from '../../store/globalStore'
import { ref, computed } from 'vue'
import { Loading } from 'quasar'
import { useRouter } from 'vue-router'

  const global = useGlobalStore()
  const router = useRouter()

  let currentUser = computed(() => global.currentUser)

  let email = ref('')
  let password = ref('')



  async function onSubmit() {

    Loading.show({
      message: '<h3>Carregando...</h3>',
      html: true
    })

    await global.signInWithEmailAndPassword({
      email: email.value,
      password: password.value
    })
    Loading.hide();
  }

</script>

<style>
.firebase-emulator-warning {
  display: none;
}
</style>
