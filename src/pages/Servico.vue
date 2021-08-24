<template>
  <q-page class="flex flex-center">
    <section id="marca" class="padrao text-white flex flex-center">

        <div class="row flex flex-center text-start q-my-xl">
            <div class="col-xs-10 col-md-10 col-lg-8">
                <h3 class="borda text-start">Registro de marcas</h3>
                <h6>O Registro de Marcas é efetuado pelo INPI – Instituto Nacional da Propriedade Industrial.<br>
                    Muitas empresas acabam se desatentando ao registro de sua marca, e por isso, para que você esteja 100% <br>amparado sobre seu negócio de sucesso, cuidamos disso para você.
                </h6>
            </div>
            <div class="row col-lg-8 col-xs-10 col-md-10 d-flex justify-content-center align-items-start">
                <div class="col-12">
                    <div class="text-start">
                        <b>Documentação Necessária:</b>
                        <ul>
                            <li>Dados do proprietário da marca;</li>
                            <li>Logomarca da Empresa;</li>
                            <li>Pagamento da Taxa Inicial;</li>
                        </ul>
                    </div>

                    <q-btn color="primary" label="Fale conosco" @click="onSubmit" />
                </div>
            </div>

        </div>
    </section>

    <section class="padrao flex flex-center">
        <div class="row flex flex-center q-my-xl">
            <div class="col-lg-3 col-xs-10 col-md-10 row justify-center">
                <q-img width="250px" height="250px" class="avatar" src="../assets/imoveis.jpg" alt="imagem de escritorio" />
            </div>
            <div class="col-lg-5 col-xs-10 col-md-10">
                <h3 class="borda text-start">Legalização de imóvel IPTU</h3>
                <h6>O IPTU – Imposto Predial Territorial Urbano, é o imposto mobiliário como uma forma de registro do imóvel vinculado diretamente com a Prefeitura do Município do seu imóvel.
                    Em muitas localidades na qual não existe escritura e nem RGI, ainda resta a opção de vincular aquele imóvel a um órgão público para apresentar uma maior segurança de Registro ao proprietário.
                    É uma prática muito habitual também para imóveis com fins comerciais. </h6>
                <div class="col-12 text-start">
                    <div class="text-start">
                        <b>Documentação necessária:</b>
                        <ul>
                            <li>Identidade e CPF do proprietário;</li>
                            <li>Contrato de compra e venda ou termo de posse;</li>
                            <li>Escritura (se houver);</li>
                            <li>Conta de luz, água, telefone ou outro comprovante;</li>
                            <li>Planta do imóvel ou croqui simples;</li>
                            <li>Geolocalização do imóvel no Google Maps ( em alguns casos);</li>
                        </ul>
                    </div>
                    <q-btn color="primary" label="Fale conosco" @click="onSubmit" />
                </div>
            </div>
        </div>
    </section>
    <section id="rural" class="padrao flex flex-center">
        <div class="row flex flex-center q-my-xl">
            <div class="col-lg-3 col-xs-10 col-md-10 text-end">
            </div>
            <div class="col-lg-7 col-xs-10 col-md-10 text-white text-start">
                <h3 class="borda">Registro Rural - CCIR</h3>
                <h6>O Certificado de Cadastro de Imóvel Rural (CCIR) é o documento expedido pelo Incra que comprova a regularidade cadastral do imóvel rural.
                </h6>
                <h6>O certificado contém informações sobre o titular, a área, a localização, a exploração e a classificação fundiária do imóvel rural. 
                </h6>
                <div class="col-12">
                    <div class="text-start">
                        <b>Documentação necessária:</b>
                        <ul>
                            <li>Identidade e CPF do proprietário;</li>
                            <li>Contrato de compra e venda</li>
                            <li>Escritura (se houver);</li>
                            <li>Conta de luz, água, telefone ou outro comprovante;</li>
                            <li>Topografia do imóvel (se houver);</li>
                            <li>Geolocalização do imóvel no Google Maps ( em alguns casos);</li>
                        </ul>
                    </div>
                </div>

                  <q-btn color="primary" label="Fale conosco" @click="onSubmit" />
            </div>
        </div>
    </section>
    <section id="contabilidade" class="padrao ">
        <div class="row flex flex-center q-my-xl">
            <div class="col-lg-6 col-xs-10 col-md-10 ">
                <div >
                    <h3 class="borda text-start">Contratos</h3>
                    <h6 class="text-start">Elaboramos Contratos de Locação, Compra e venda e afins. <br> Que também faz parte da rotina de quem vai adquirir um negócio ou não.</h6>
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
