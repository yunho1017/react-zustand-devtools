import { createGlobalStyles } from "goober/global";

export const GlobalStyles = createGlobalStyles`
  html {
    --zd-text-white: rgb(255, 255, 255);
    --zd-text-gray-400: rgb(156, 163, 175);
    --zd-text-gray-800: rgb(31 41 55);
  
    --zd-bg-gray-200: rgb(229 231 235);
    --zd-bg-gray-300: rgb(209 213 219);
    --zd-bg-gray-400: rgb(156 163 175);
    --zd-bg-gray-500: rgb(31 41 55);
    --zd-bg-gray-600: rgb(17 24 39);
    --zd-bg-gray-800: rgb(3 7 18);
  }
` as JSX.ElementType;
