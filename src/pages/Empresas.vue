<template>
  <q-page class="flex flex-center">

    <section id="contabilidade" class="padrao flex flex-center">
        <div class="row flex flex-center q-pa-md q-my-xl">
            <h3 class="col-lg-10 col-md-10 col-xs-10 borda text-start">Abrir empresa</h3>

            <div class="col-lg-4 col-md-10 col-xs-10">

                <div class="text-start">
                    <b>Documentação e Informações:</b>
                    <ul>
                        <li>IPTU do endereço da empresa (em alguns casos é isento);</li>
                        <li>Identidade ou CNH e CPF do (s) empresário (s);</li>
                        <li>Informações do endereço completo do (s) empresário (s), estado civil, regime de comunhão;</li>
                        <li>Informar as atividades da empresa;</li>
                        <li>Informar 2 nomes opcionais de RAZÃO SOCIAL para a empresa;</li>
                        <li>Informar NOME FANTASIA para a empresa (não é obrigatório);</li>
                        <li>Informar valor do capital social investido;</li>
                        <li>Informar porcentagem de cada sócio (se houver);</li>
                        <li>Informar e-mail e telefone da empresa;</li>
                        <li>Pagar as taxas enviadas pelo contador</li>
                    </ul>
                </div>

            </div>

            <div class="col-lg-4 col-md-10 col-xs-10">

                <div class="text-start">
                    <b>Documentos emitidos no processo de Legalização:</b>
                    <ul>
                        <li>Contrato de Constituição;</li>
                        <li>CNPJ;</li>
                        <li>Certificado do Bombeiro;</li>
                        <li>Inscrição Estadual;</li>
                        <li>Certificado de Vigilância Sanitária;</li>
                        <li>Alvará de funcionamento;</li>
                        <li>Certificado Digital;</li>

                    </ul>
                </div>
            </div>
            <div class="col-8">
              <q-btn color="primary" label="Solicite um orçamento" @click="onSubmit" />
          </div>

        </div>
    </section>
    <section id="igreja2" class="padrao text-white flex flex-center fit">
        <div class="row flex flex-center q-my-xl">
          <div class="col-lg-8 col-md-10 col-xs-10 text-start">
              <h3 class="borda text-start">Abrir igrejas e afins</h3>
              <h6>Documentação e Informações:</h6>
          </div>
          <div class="col-lg-8 col-md-10 col-xs-10">
            <div class="row">
                <div class="col-xs-12 col-lg-4  text-start">
                    <b>Componentes mínimo:</b>
                    <ul>
                        <li>Presidente;</li>
                        <li>Vice-presidente;</li>
                        <li>Secretário;</li>
                        <li>Tesoureiro;</li>
                    </ul>
                </div>
                <div class="col-xs-12 col-lg-4  text-start">
                    <b>Dados Imprescindíveis:</b>
                    <ul>
                        <li>IPTU;</li>
                        <li>E-mail da instituição;</li>
                        <li>Tempo de mandato do conselho de diretoria para eleição (exemplo; Presidente 5 anos ou vitalício, demais membros 2 anos, 3 anos, 5 anos.;</li>
                        <li>O estatuto deve ser assinado por um advogado;</li>
                    </ul>
                </div>
                <div class="col-12">
                  <div>Taxas deverão ser vistas diretamente com o Contador.</div>
                  <q-btn color="primary" label="Solicite um orçamento" @click="onSubmit" />
                </div>
            </div>
          </div>
        </div>
    </section>
    <section class="padrao flex flex-center ">
        <div class="row flex flex-center q-my-xl">
            <div class="row col-lg-3 m-5 col-md-10 col-xs-10 justify-center">
                <q-img width="250px" height="250px" class="avatar" src="../assets/reuniao.jpg" alt="imagem de escritorio" />
            </div>
            <div class="col-lg-6 col-xs-10 col-md-10">
                <h3 class="borda text-start">Abrir o MEI</h3>
                <h6>Muitas pessoas hoje em dia, procuram se formalizar no MEI para prestar um serviço, contratar um empregado ou simplesmente pagar seu INSS de forma mais barata.</h6>
                <div class="col-12">
                    <div class="text-start">
                        <b>Documentação e Informações:</b>
                        <ul>
                            <li>Identidade/ CNH e CPF;</li>
                            <li>Título de Eleitor;</li>
                            <li>Número do Recibo de Entrega do último Imposto de Renda (se fez a declaração);</li>
                            <li>Atividades do MEI;</li>
                            <li>Nome Fantasia (não é obrigatório);</li>
                            <li>Telefone e e-mail;</li>
                            <li>Endereço do MEI;</li>
                            <li>Endereço Residencial do MEI;</li>
                        </ul>
                    </div>
                    <div class="text-start">
                        <b>Documentos emitidos no processo abertura:</b>
                        <ul>
                            <li>Certificado do MEI;</li>
                            <li>CNPJ;</li>
                        </ul>
                    </div>
                    <div><b>OBSERVAÇÕES:</b> Demais solicitações como habilitação de emissão de nota fiscal e legalização de alvará, se refere a outro serviço diferente deste.</div>

                    <q-btn color="primary" label="Solicite um orçamento" @click="onSubmit" />
                </div>
            </div>
        </div>
    </section>
    <section id="pagamento" class="padrao fit flex flex-center">
        <div class="row flex flex-center fit">
            <div class="col-lg-3 col-xs-10 col-md-10">
            </div>
            <div class="col-lg-7 col-xs-10 col-md-10">
                <h3 class="borda text-white text-start">Folha de pagamento</h3>
                <div class="text-start text-white">
                    <p>
                        Trabalhamos com a terceirização da Folha de Pagamento e Departamento Pessoal, que é um setor que em grande quantidade de empregados, demanda tempo e trabalho para a empresa.
                    </p>
                    <p>
                        Sua empresa pode utilizar este tempo em seu dia a dia para cuidar de sua parte estratégica,e alcançar bons resultados financeiros batendo suas metas.
                    </p>
                    <p>
                        Por isso nossa proposta é cuidar dessa parte burocrática para você desde à Contratação ao Desligamento de seu colaborador.
                    </p>

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
