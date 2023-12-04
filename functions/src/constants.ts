/* PROD */
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export const SENDGRID_KEY = process.env.SENDGRID_KEY
export const EMAIL = process.env.EMAIL
export const CLIENTID = process.env.CLIENTID
export const CLIENTSECRET = process.env.CLIENTSECRET
export const REFRESHTOKEN = process.env.REFRESHTOKEN
