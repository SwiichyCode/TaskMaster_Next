import { ThemesLayout } from "@/layouts/ThemesLayout";
import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/globalStyles";
import "@/styles/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemesLayout>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemesLayout>
  );
}
