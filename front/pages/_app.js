import "@/styles/globals.css";
import MainContainer from "@/componentes/MainContainer";

export default function App({ Component, pageProps }) {
  return (
  <MainContainer>
    <Component {...pageProps} />
  </MainContainer>
  )
}
