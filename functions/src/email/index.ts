import { functions } from '../commons-init'
import * as constants from '../constants'

const Logger = functions.logger

const nodemailer = require("nodemailer");
const {google} = require('googleapis');

const EMAIL = constants.EMAIL
const CLIENTID = constants.CLIENTID
const CLIENTSECRET = constants.CLIENTSECRET
const REFRESHTOKEN = constants.REFRESHTOKEN

const OAuth2_client = new google.auth.OAuth2(
  CLIENTID,
  CLIENTSECRET,
);

OAuth2_client.setCredentials({
  refresh_token: REFRESHTOKEN
});

OAuth2_client.setCredentials({ refresh_token: REFRESHTOKEN})

const accessToken = OAuth2_client.getAccessToken();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: EMAIL,
    clientId: CLIENTID,
    clientSecret: CLIENTSECRET,
    refreshToken: REFRESHTOKEN,
    accessToken: accessToken
  }
})

// Envia email para todos os usuários
export const sendContato = functions.https.onCall( async (data:any, context:any) => {

  let nome = data.name
  let tel = data.tel
  let email = data.email
  let subject = `${data.assunto} - contato de ${nome}`
  let text = data.msg

  const msg = {
    from: EMAIL,
    to: ['contato@rhmixcontabil.com.br', email],
    subject: subject,
    text: `Nome: ${nome}, Email: ${email}, Telefone: ${tel}, Menssagem: ${text}`,
    html: `<p>Nome: ${nome}</p><p>Email: ${email}</p><p>Telefone: ${tel}</p><p>Menssagem: ${text}</p>`,
  }

  await transporter.sendMail(msg, (err:any) => {
    if(err) {
      Logger.error(err)
      return
    }
    Logger.log('mensagem enviada com sucesso')
  })

  return 'mensagem enviada com sucesso'
})
