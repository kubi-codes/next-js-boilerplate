import '@/styles/globals.css'
import Wrapper from '@/store/wrapper'

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}
