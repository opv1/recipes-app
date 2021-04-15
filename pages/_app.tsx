import { useEffect } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { createWrapper } from 'next-redux-wrapper'
import NextNprogress from 'nextjs-progressbar'
import { useActions } from 'hooks/useActions'
import { store } from 'store/index'
import { getStorage } from 'utils/localStorage'
import 'styles/globals.scss'

const makeStore = () => store
const wrapper = createWrapper(makeStore)

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { selectedRecipes } = useActions()

  useEffect(() => {
    const data = getStorage()
    selectedRecipes(data)
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <NextNprogress
        color='#e41749'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
