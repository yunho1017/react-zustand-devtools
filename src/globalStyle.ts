import { createGlobalStyles } from "goober/global";

export const GlobalStyles = createGlobalStyles`
  html {
    --zd-text-white: #FFFFFF;
    --zd-text-gray-400: #A0AEC0;
    --zd-text-gray-800: #718096;
    
    --zd-bg-gray-500: #718096;
    --zd-bg-gray-600: #4A5568;
    --zd-bg-gray-700: #2D3748;
    --zd-bg-gray-800: #1A202C;
  }
` as JSX.ElementType;
