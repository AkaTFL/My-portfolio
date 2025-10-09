import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Hind } from "next/font/google";


const hind = Hind({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} className={`${hind.className}`}/>
    </ThemeProvider>
  );
};

export default App;
