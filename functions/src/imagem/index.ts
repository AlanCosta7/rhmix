import { functions, firestore } from '../commons-init'
const Logger = functions.logger

export const generateThumbnail = functions.storage.object().onFinalize(async (object) => {
  // ...

  const link = object.mediaLink

  const filePath:any = object?.name
  Logger.log('filePath', filePath)

  const pathName = filePath.split('/')

  const collectionName = pathName[0]
  const type = pathName[1]

  let id = pathName[3].split('_')[0]
  let pathSize = pathName[3].split('_')[1]

  const size = pathSize.split('x').pop()

  if(type == 'capa') {
    switch (size) {
      case '1600':
        await firestore.collection(collectionName).doc(id).update({
          capa: link,
        })
        break
      default:
        break
    }
  } else {
    switch (size) {
      case '200':
        await firestore.collection(collectionName).doc(id).update({
          imagem_200: link,
        })
        break
      case '400':
        await firestore.collection(collectionName).doc(id).update({
          imagem_400: link,
        })
        break
      case '600':
        await firestore.collection(collectionName).doc(id).update({
          imagem_600: link,
        })
        break
      case '800':
        await firestore.collection(collectionName).doc(id).update({
          imagem_800: link,
        })
        break
      case '1600':
        await firestore.collection(collectionName).doc(id).update({
          imagem_1600: link,
        })
        break
      default:
        break
    }
  }

})
