import React from 'react'
import { appWithTranslation } from 'next-i18next'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store, storeWrapper } from '../src/redux/index'

function App({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default storeWrapper.withRedux(appWithTranslation(App))
