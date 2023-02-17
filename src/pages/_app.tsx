import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/globalStyles";
import { CombinedProvider } from "@/providers/CombinedProvider";
// import { Suspense } from "react";
// import "@/services/i18n";
import "@/styles/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Suspense fallback="Loading...">
    <CombinedProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </CombinedProvider>
    // </Suspense>
  );
}
