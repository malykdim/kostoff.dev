import { ref, watchEffect } from 'vue'
import { db } from '@/config/firebase.ts'

export default function getDocument(collection, id) {
  const document = ref(null)
  const error = ref(null)

  const documentRef = db.collection(collection).doc(id)

  const unsub = documentRef.onSnapshot((doc) => {
    if (doc.data()) {
      document.value = { ...doc.data(), id: doc.id }
      error.value = null
    }
    else {
      error.value = 'That document does not exist'
    }
  }, (err) => {
    console.log(err.message)
    error.value = 'Could not fetch the document'
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { document, error }
}
