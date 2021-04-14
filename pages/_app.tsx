import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import type { AppProps } from 'next/app'
import { createWrapper } from 'next-redux-wrapper'
import NextNprogress from 'nextjs-progressbar'
import { store } from 'store/index'
import { selectedRecipes } from 'store/actions/appActions'
import { getStorage } from 'utils/localStorage'
import 'styles/globals.scss'

const makeStore = () => store
const wrapper = createWrapper(makeStore)

const MyApp = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const data = getStorage()
    dispatch(selectedRecipes(data))
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
