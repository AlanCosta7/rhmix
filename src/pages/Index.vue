<template>
  <q-page class="flex flex-center">
    <section id="main" class="padrao fit" >
        <div class="row fit flex flex-center">
            <div class="col-lg-5 col-md-10 col-xs-10 q-pa-md">
                <h2 class="text-white uppercase"> <strong>Soluções empresariais</strong> </h2>
                <h4 class="text-white">Trazendo informações e serviços a seu favor</h4>
            </div>

            <div class="col-lg-5 col-md-10 col-xs-12 flex flex-center">
              <q-card class="q-pa-md" style="width: 90vw; max-width: 400px">
                <q-card-section>
                  <b>Qual a sua necessidade?</b>
                  <q-input outlined v-model="text" type="text" />
                </q-card-section>
                <q-card-actions vertical align="center">
                  <q-btn class="full-width" @click="onSubmitText" color="primary" label="Enviar" />
                </q-card-actions>
              </q-card>
            </div>
        </div>
    </section>
    <section id="sobre" class="padrao row flex flex-center">
        <div class="q-pa-md col-lg-4 q-py-xl col-md-10 col-xs-12 row justify-center">
            <q-img width="200px" src="../assets/logo.png" alt="logo" />
        </div>
        <div class="borda col-lg-6 col-md-10 col-xs-12">
          <div>
            <h3>Sobre</h3>
            <p>A RH MIX SERVIÇOS EMPRESARIAIS é uma empresa não só de Serviços Contábeis,
                mas também dos demais serviços burocráticos que são procurados e existentes
                em um escritório contábil. Com profissionais engajados e comprometidos trabalhando
                por você em seu negócio.
            </p>
            <p>Dentro deste conceito, nasceu a RH (Recursos Humanos) MIX (múltiplos serviços),
              indo muito além dos serviços contábeis, trazendo para você a inovação no atendimento.</p>
            <div class="q-mt-5">
                <h6>Missão</h6>
                <p>Levar ao mercado a melhor prestação de serviços, atendendo às necessidades de todos de forma única e humanizada.</p>
                <h6>Visão</h6>
                <p>Ser uma empresa referência em nossa região.</p>
                <h6>Valores</h6>
                <p>Simplicidade nas relações, empatia ao cliente, comprometimento, empresa solidária.</p>
            </div>
          </div>
        </div>
    </section>
    <section id="contabilidade" class="padrao fit flex flex-center">
        <div class="row flex flex-center">
            <div class="q-pa-md col-lg-5 col-md-10 col-xs-12">
                <h3 class="borda text-start">Contabilidade</h3>
                <div class="text-start">
                  A contabilidade é, na prática, a ciência da riqueza. Para os teóricos importantes dessa área de conhecimento, é uma ciência ou serviço social que estuda e coloca em prática de registro, controle relativo a atos e fatos da Economia e Administração. De forma específica, estuda e controla o patrimônio das empresas por meio de registros contábeis dos fatos e suas contas de resultados obtidos.
                </div>
            </div>
            <div class="q-pa-md col-lg-4 col-md-10 q-py-xl col-xs-12 row justify-center">
                <q-img width="250px" height="250px" class="avatar" src="../assets/notebook.jpg" alt="imagem de escritorio" />
            </div>
        </div>
    </section>
    <section id="clinica" class="padrao flex flex-center">
        <div class="row flex flex-center">
            <div class="col-lg-3 col-md-10 col-xs-12 text-end">
            </div>
            <div class="col-lg-7 col-md-10 q-pa-md col-xs-12">
                <h3 class="borda text-white text-start">Contabilidade para clínica médica</h3>
                <div class="text-start text-white">
                    <p>
                        O Setor de Clinicas Médicas é um ramo que sempre vem crescendo, mas também
                        sofre uma carga tributária muito agressiva.
                    </p>
                    <p>
                        É importante estar atento a esse segmento  a fim de amenizar os custos
                        de impostos que possui tratamento diferenciado na legislação.
                    </p>
                    <q-btn color="primary" label="Fale conosco" @click="onSubmit" />

                </div>
            </div>
        </div>
    </section>
    <section id="aberturaempresa" class="padrao flex flex-center q-py-md">
        <div class="row flex flex-center q-my-xl">
            <div class="q-pa-md col-lg-4 col-md-10 q-py-xl col-xs-10 row justify-center">
                <q-img width="250px" height="250px" class="avatar" src="../assets/reuniao.jpg" alt="imagem de escritorio" />
            </div>
            <div class="col-lg-5 col-md-10 col-xs-10">
                <h3 class="borda text-start">Abertura de empresas</h3>
                <div class="text-start">
                    <p>
                      A formalização do seu negócio é o primeiro passo para o início das suas atividades empresariais, mas você precisa ficar atento para realizar todas as inscrições, licenças e alvarás. Mesmo após ter em mãos o CNPJ, o Cadastro Nacional de Pessoas Jurídicas, e estar inscrito na Previdência Social, há uma série de documentações que você irá precisar para funcionar legalmente.
                    </p>
                    <p>
                      A falta de alguns documentos podem atrasar ou até inviabilizar a abertura do seu empreendimento. Lembre-se de que para cada ramo de atividade e / ou forma de constituição escolhida para abrir sua empresa, você precisa de autorizações distintas.
                    </p>

                    <q-btn color="primary" label="Veja as documentações" @click="onDocEmpresas" />
                </div>
            </div>
        </div>
    </section>
    <section id="igreja" class="padrao flex flex-center q-py-md">
       <div class="row flex flex-center">
            <div class="col-lg-3 col-md-10 col-xs-10 text-end">
            </div>
            <div class="col-lg-7 col-md-10 col-xs-10">
                <h3 class="borda text-white text-start">Abertura de igrejas e outras instituições</h3>
                <div class="text-start text-white">
                    <p>
                      O termo “TERCEIRO SETOR”, no uso corrente, é usado para se referir à ação social das empresas, ao trabalho voluntário de cidadãos, às associações do poder público privatizadas na forma de fundações etc. Dentre eles podemos citar IGREJAS, ONGS, ASSOCIAÇÕES ETC.
                    </p>
                    <p>
                      Mais do que um conceito rigoroso ou um modelo solidamente fundamentado em teoria - organizacional, política ou sociológica - o terceiro setor, no Brasil, é uma idéia-força, um espaço mobilizador de reflexão, de recursos e, sobretudo, de ação.
                    </p>

                    <q-btn color="primary" label="Veja as documentações" @click="onDocIgreja" />
                </div>
            </div>
        </div>
    </section>
    <section id="impostorenda" class="padrao flex flex-center q-py-md">
        <div class="row  flex flex-center fit">
            <div class="col-lg-5 col-md-10 col-xs-10">
                <h3 class="borda text-start">Imposto de Renda</h3>
                <div class="text-start">
                    <p>
                      Obrigatoriedade que movimenta milhões de brasileiros todos os anos. É uma obrigação anual que reflete na vida financeira de muitas pessoas.
Cada cidadão tem um perfil de declarar e diferentes maneiras e soluções para se beneficiar ao máximo ou amenizar sua carga tributária.
                    </p>

                    <q-btn color="primary" label="Veja as documentações" @click="onImpostoRenda" />
                </div>
            </div>
            <div class="col-lg-3 col-md-10 col-xs-10 row justify-center q-my-md">
                <q-img width="250px" height="250px" class="avatar" src="../assets/imposto.jpg" alt="imagem de escritorio" />
            </div>
        </div>
    </section>
    <section id="rh" class="padrao flex flex-center q-py-md">
        <div class="row  flex flex-center fit">
            <div class="col-lg-3 col-md-10 col-xs-10 text-end">
            </div>
            <div class="col-lg-7 col-md-10 col-xs-10">
                <h3 class="borda text-white text-start">Consultoria interna - Gestão de RH</h3>
                <div class="text-start text-white">
                    <p>
                      Hoje em dia ainda existem empresas na qual tem dificuldade de gerenciamento do RH / Departamento Pessoal interno de sua organização.                    </p>
                    <p>
                      É importante que você tenha um olhar analítico em 360º para toda a rotina deste setor, sempre trabalhando de forma organizada, atualizada e preventiva com seu quadro de Pessoal.
                    </p>
                    <p>
                      Isso vai não só além da organização dos arquivos, validade da guarda dos documentos, análise da folha, cargos e salários, alinhamento das obrigações trabalhistas, layout de adequação do setor etc. Por isso, estamos prontos para vivenciar sua rotina e deixar sua empresa segura.
                    </p>
                    <q-btn color="primary" label="Solicite nossa consultoria" @click="onSubmit" />

                </div>
            </div>
        </div>

        <q-dialog v-model="dialogDoc">
          <q-card>
            <q-card-section class="row items-center">
              <div class="text-h5">{{title}}</div>
              <div>{{msg}}</div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="Fechar" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
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
      text: null,
      title: null,
      msg: null,
      dialogDoc: false,
    }
  },
  methods: {
    onSubmitText() {
      let path = `https://api.whatsapp.com/send?phone=5521993781226&text=${this.text}`
      openURL(path)
    },
    onSubmit() {
      let path = `https://api.whatsapp.com/send?phone=5521993781226`
      openURL(path)
    },
    onDocEmpresas() {
      this.$router.push('/empresas')
    },
    async onDocIgreja () {
      await this.$router.push('/empresas')
      setTimeout(() => {
        var scrollDiv = document.getElementById("igreja2").offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
      }, 100);
    },
    async onImpostoRenda() {
      await this.$router.push('/pessoa')
      setTimeout(() => {
        var scrollDiv = document.getElementById("imposto").offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
      }, 100);
    }
  },
})
</script>
