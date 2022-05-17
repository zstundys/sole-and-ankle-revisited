import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html {
  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;
}

html, body, #root {
  height: 100%;
}

:root {
  --gray-hue: 220deg;
  --gray-saturation: 5%;
  --gray-lightness: 40%;

  --color-white: hsl(0deg 0% 100%);
  --color-gray-100: hsl(185deg var(--gray-saturation) calc(var(--gray-lightness) + 55%));
  --color-gray-300: hsl(190deg var(--gray-saturation) calc(var(--gray-lightness) + 40%));
  --color-gray-500: hsl(196deg calc(var(--gray-saturation) - 1%) calc(var(--gray-lightness) + 20%));
  --color-gray-700: hsl(var(--gray-hue) var(--gray-saturation) var(--gray-lightness));
  --color-gray-900: hsl(var(--gray-hue) calc(var(--gray-saturation) - 2%) calc(var(--gray-lightness) - 20%));
  --color-primary: hsl(340deg 65% 47%);
  --color-secondary: hsl(240deg 60% 63%);
  --text-normal: 500;
  --text-medium: 600;
  --text-bold: 800;
}

[data-reach-dialog-overlay] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(var(--gray-hue) var(--gray-saturation) var(--gray-lightness) / 80%);
  animation: fade-in 0.4s;
}

[data-reach-dialog-content] {
  margin-inline-start: auto;
  width: 18.75rem;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem 2rem 2rem;
  animation: to-left 0.4s 0.1s cubic-bezier(0.34, 0.32, 0, 1.00) backwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes to-left {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}
`;

export default GlobalStyles;
