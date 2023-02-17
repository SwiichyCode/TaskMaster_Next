import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/globalStyles";
import { CombinedProvider } from "@/providers/CombinedProvider";
import "@/styles/index.css";
import "@/services/i18n";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CombinedProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </CombinedProvider>
  );
}
