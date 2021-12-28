import { Provider } from 'react-redux'
import { Footer, Navbar } from '../components/layouts';
import store from '../redux/store'
import '../styles/main.scss'

function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
    <Navbar />
    <Component {...pageProps} />
    <Footer />  
  </Provider>)
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
  };
};

export default App
