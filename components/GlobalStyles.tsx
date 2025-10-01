import { createGlobalStyle } from 'styled-components';

// default breakpoints
// {
//   smallPhone: 320;
//   phone: 375;
//   tablet: 768;
//   desktop: 1024;
//   largeDesktop: 1440;
// }

export const GlobalStyle = createGlobalStyle`

.next-light-theme {
  --background: 12,18,12;
  --secondBackground: 16,24,16;
  --text: 237,237,238;
  --textSecondary: 255,255,255;
  --primary: 34,197,94; 
  --secondary: 6,24,12;
  --tertiary: 24,40,28;
  --cardBackground: 18,28,20;
  --inputBackground: 18,28,20;
  --navbarBackground: 10,16,12;
  --modalBackground: 12,18,12;
  --errorColor: 207,34,46;
  --logoColor: #fff;
  --logoImageFilter: brightness(0) invert(1);
  --backgroundGradient: linear-gradient(160deg, #070b07 0%, #0e1a0f 35%, #1f4d1f 65%, #0a150b 100%);
}

.next-dark-theme {
  --background: 12,18,12;
  --secondBackground: 16,24,16;
  --text: 237,237,238;
  --textSecondary: 255,255,255;
  --primary: 34,197,94; 
  --secondary: 6,24,12;
  --tertiary: 24,40,28;
  --cardBackground: 18,28,20;
  --inputBackground: 18,28,20;
  --navbarBackground: 10,16,12;
  --modalBackground: 12,18,12;
  --errorColor: 207,34,46;
  --logoColor: #fff;
  --logoImageFilter: brightness(0) invert(1);
  --backgroundGradient: linear-gradient(160deg, #070b07 0%, #0e1a0f 35%, #1f4d1f 65%, #0a150b 100%);
}

:root {
  --font: 'Poppins', sans-serif;
  
  --shadow-md: 0 2px 4px 0 rgb(12 0 46 / 4%);
  --shadow-lg: 0 10px 14px 0 rgb(12 0 46 / 6%);

  --z-sticky: 7777;
  --z-navbar: 8888;
  --z-drawer: 9999;
  --z-modal: 9999;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}


/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
} 

html {
  -webkit-font-smoothing: antialiased;
  touch-action: manipulation;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  font-size: 62.5%;

  @media (max-width: 37.5em) {
    font-size: 50%;
  }

  @media (max-width: 48.0625em) {
    font-size: 55%;
  }

  @media (max-width: 56.25em) {
    font-size: 60%;
  }
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: var(--font);
  color: rgb(var(--text));
  background: var(--backgroundGradient, rgb(var(--background)));
  font-feature-settings: "kern";
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}

svg {
  color: rgb(var(--text));
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

}`;
