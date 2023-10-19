
import * as Auth from './auth/onCreate'
import * as Email from './email/index'
import * as Imagem from './imagem/index'

// Auth
export const authOnCreate = Auth.onCreate

// Email
export const sendGroup = Email.sendGroup
export const sendContato = Email.sendContato

// Imagem
export const generateThumbnail = Imagem.generateThumbnail
