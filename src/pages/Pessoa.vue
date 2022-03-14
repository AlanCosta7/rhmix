<template>
  <q-page class="flex flex-center">

    <section id="contabilidade" class="padrao flex flex-center">
        <div class="row flex flex-center">

            <div class="col-lg-6 col-xs-10 col-md-10">
                <h3 class="borda text-start">Empregador doméstico</h3>
                <h6>Hoje em dia, o Empregado Doméstico, tem as mesmas considerações trabalhistas que um empregado CLT. Desta forma é importante que formalize quem trabalha em sua casa.</h6>

                <div class="text-start">
                    <b>Documentos para Contratação:</b>
                    <ul>
                        <li>Exame Admissional</li>
                        <li>Foto 3x4</li>
                        <li>CTPS</li>
                        <li>Identidade;</li>
                        <li>CPF;</li>
                        <li>Comprovante de residência;</li>
                        <li>Titulo Eleitoral;</li>
                        <li>Pis – Cartão do Cidadão ou outro documento;</li>
                        <li>Certidão de Nascimento, CPF e escolaridade dos dependentes de até 14 anos;</li>
                        <li>Escolaridade do empregado</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section id="imposto" class="padrao text-white q-py-xl fit flex flex-center">

        <div class="row q-pa-md flex flex-center">
            <div class="col-xs-10 col-md-10 col-lg-8">
                <h3 class="borda text-start">Imposto de Renda</h3>
                <h6>Você que é trabalhador formal, autônomo, aposentado, pensionista, investidor, <br>prestador de serviços médicos e afins. <br>Fique de olho na relação de documentos para declaração de imposto de renda.</h6>
            </div>
            <div class="row col-xs-10 col-md-10 col-lg-8">
                <div class="col-12 text-start">
                    <div class="text-start">
                        <b>Documentações mais comuns:</b>
                        <ul>
                            <li>Documentos pessoais (RG, CPF, comprovante de residência e dados bancários);</li>
                            <li>Informe de rendimentos (a empresa deve fornecer);</li>
                            <li>Informe de rendimento do INSS ou número do benefício para coletarmos no site;</li>
                            <li>Relação de valores de recebimento de pensão alimentícia;</li>
                            <li>Documentos pessoais dos dependentes (nome, CPF e nascimento);</li>
                            <li>Informe de rendimentos financeiros e de aplicações ou extrato de aplicações (fornecidos pelo banco);</li>
                            <li>Comprovantes de despesas médicas (nome, endereço, CPF ou CNPJ do prestador, data e assinatura do médico caso não seja uma nota fiscal);</li>
                            <li>Comprovantes de despesas com ensino;</li>
                            <li>Extrato de Previdência Privada;</li>
                            <li>Documentação do Plano de Saúde (Informe anual coletado no site do plano);</li>
                            <li> Documentação de imóveis (valor de aquisição, endereço completo, Código IPTU, Escritura)</li>
                            <li>Documentação de Veículos (CRLV, valor de aquisição ou contrato de financiamento)</li>
                            <li>Recibos de pagamento ou recebimento de aluguel;</li>
                            <li>Recibos de doações;</li>
                            <li>Informação das empresas as quais é sócio (CNPJ, porcentagem e valor do capital)</li>
                            <li>Documentação de consórcios contemplados ou não; </li>
                            <li>Pagamentos do carnê-leão, caso seja autônomo;</li>

                        </ul>
                    </div>
                    <q-btn color="primary" label="Fale conosco" @click="onSubmit" />
                </div>

            </div>
        </div>
    </section>
    <section id="medico" class="padrao q-py-xl flex flex-center ">
        <div class="row flex flex-center q-my-md">
            <div class="col-lg-3 col-xs-10 col-md-10 row justify-center">
                <q-img width="250px" height="250px" class="avatar" src="../assets/medico.jpg" alt="imagem de escritorio" />
            </div>
            <div class="col-lg-7 col-xs-10 col-md-10">
                <h3 class="borda text-start">Profissional liberal médico</h3>
                <h6>Os profissionais da medicina como médicos, psicólogos, fisioterapeutas, dentistas etc, muitas das vezes, passam recibo durante o ano, ou, são procurados por seus pacientes solicitando o mesmo para declararem em seu imposto de renda.</h6>
                <div>É muito importante que o profissional tenha a ciência de que deve ser feito MANSALMENTE seu LIVRO CAIXA e pago o CARNÊ LEÃO, para que ele esteja regular com o fisco e esteja preparado para alinhar sua declaração com as de seus pacientes, pois eles serão apontados por eles.</div>
                <div class="row col-12 text-start">
                    <div class="text-start">
                        <b>Documentação para o livro caixa:</b>
                        <ul>
                            <li><b>Receitas;</b></li>
                            <li>Relação de CPF e valores pagos pelos pacientes ou;</li>
                            <li>2ª via dos recibos concedidos aos pacientes;</li>
                        </ul>
                    </div>
                    <div class="text-start">
                        <ul>
                            <li><b>Despesas Pagas;</b></li>
                            <li>Luz;</li>
                            <li>Água</li>
                            <li>Telefone</li>
                            <li>Internet</li>
                            <li>Aluguel</li>
                            <li>IPTU</li>
                            <li>Manutenção do consultório</li>
                            <li>Empregados com vínculo empregatício</li>
                            <li>Empregados sem vínculo empregatício</li>
                            <li>Parceiros comissionados;</li>
                            <li>Publicidade ou propaganda</li>
                            <li>Anuidade profissional</li>
                        </ul>
                    </div>

                </div>
                <q-btn color="primary" label="Fale conosco" @click="onSubmit" />

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
