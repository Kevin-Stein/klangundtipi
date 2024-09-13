import { createGlobalStyle } from "styled-components";
import { Courgette, Cambay, Noto_Sans  } from "next/font/google";


const courgette = Courgette({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const cambay = Cambay({
  subsets: ["latin"],
  display: "swap",
  weight: ["400" ,"700"],
});
const noto = Noto_Sans ({
  subsets: ["latin"],
  display: "swap",
  weight: ["400" ,"700"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
	scroll-behavior: smooth;
}
  @media screen and (prefers-reduced-motion: reduce) {
	html {
		scroll-behavior: auto;
	}
  }
  body {
    font-family: ${noto.style.fontFamily};
    background-color: var(--color-primary-1);
    margin: 0;
    padding: 100px 0 0 0;

  }

  h1{
    font-family: ${courgette.style.fontFamily};

  }
  h2, h3, h4, h5, h6{
    font-family: ${cambay.style.fontFamily};
    padding:0;
    margin: 0;
    line-height: 1.3;
  }

 p{
  line-height: 1.5;
padding:0;
margin:0;
  }
 
  
  :root{

    /* Colors */
    --color-primary-1: #F2E8C9;
    --color-primary-2: #1E3A40;
    --color-secondary-1: #3D6D73;
    --color-secondary-2: #A3BFAF;
    --color-secondary-3: #D99A4E;

    /* Fonts */
    --font-primary: 'Courgette', cursive;
    --font-secondary: 'Cambay', sans-serif;

}

`;