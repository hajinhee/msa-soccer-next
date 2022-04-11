import {Layout} from "common";
import {wrapper } from '../redux/store'

const MyApp = ({ Component, pageProps })=>  {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)