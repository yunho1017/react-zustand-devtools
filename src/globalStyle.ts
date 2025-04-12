import { createGlobalStyles } from "goober/global";
import { Wrapper } from "./layout/styled";

export const GlobalStyles = createGlobalStyles`
  html {
    /* Colors */
    --zd-text-white: #FFFFFF;
    --zd-text-gray-300: #CBD5E1;
    --zd-text-gray-400: #94A3B8;
    --zd-text-gray-500: #64748B;
    
    /* Dark theme colors */
    --zd-bg-dark: #0F172A;
    --zd-bg-dark-800: #0f172a;
    --zd-bg-dark-900: #020617;
    --zd-bg-dark-700: #334155;
    --zd-bg-dark-600: #475569;
    
    /* Accent colors */
    --zd-accent-indigo: #4F46E5;
    --zd-accent-indigo-dark: #4338CA;
    --zd-accent-emerald: #10B981;
    --zd-accent-amber: #F59E0B;
    --zd-accent-violet: #8B5CF6;
    
    /* Gradient backgrounds */
    --zd-gradient-dark: linear-gradient(135deg, var(--zd-bg-dark-900) 0%, var(--zd-bg-dark-800) 100%);
    --zd-gradient-card: linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.6) 100%);
    --zd-gradient-indigo: linear-gradient(135deg, var(--zd-accent-indigo) 0%, var(--zd-accent-indigo-dark) 100%);
    
    /* Shadows */
    --zd-shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
    --zd-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --zd-shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
    
    /* Border Radius */
    --zd-radius-md: 0.375rem;
    --zd-radius-lg: 0.5rem;
    --zd-radius-full: 9999px;
    
    /* Spacing */
    --zd-space-1: 0.5rem;
    --zd-space-2: 0.75rem;
    --zd-space-3: 1rem;
    --zd-space-4: 1.25rem;
    --zd-space-6: 1.5rem;
    
    /* Font sizes */
    --zd-text-xs: 0.75rem;
    --zd-text-sm: 0.875rem;
    --zd-text-base: 1rem;
    --zd-text-lg: 1.125rem;
    --zd-text-xl: 1.25rem;
    --zd-text-2xl: 1.5rem;
  }


  /* Smooth transitions */
  ${Wrapper} * {
    transition: all 0.2s ease-in-out;
  }

  /* Code syntax highlighting */
  .token.string { color: var(--zd-accent-emerald); }
  .token.number { color: var(--zd-accent-amber); }
  .token.function { color: var(--zd-accent-violet); }
` as JSX.ElementType;
