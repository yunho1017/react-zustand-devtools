import { styled, keyframes } from "goober";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Wrapper = styled("section")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  width: calc(100% - var(--zd-space-6) * 2);
  height: 80vh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--zd-gradient-dark);
  display: flex;
  flex-direction: column;
  padding: var(--zd-space-6);
  border-radius: var(--zd-radius-lg) var(--zd-radius-lg) 0 0;
  animation: ${slideUp} 0.15s ease-out;
`;

export const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--zd-space-6);

  h1 {
    font-size: var(--zd-text-2xl);
    font-weight: bold;
    color: var(--zd-text-white);
  }
`;

export const Content = styled("div")`
  width: 100%;
  flex: 1;
  min-height: 0;
  gap: var(--zd-space-6);
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  overflow-y: auto;
`;

export const MainContent = styled("div")`
  display: flex;
  flex-direction: column;
  gap: var(--zd-space-4);
`;

export const SideContent = styled("div")`
  display: flex;
  flex-direction: column;
  gap: var(--zd-space-6);
`;

export const CloseButton = styled("button")`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: var(--zd-space-2);
  color: var(--zd-text-gray-400);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--zd-radius-full);
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(51, 65, 85, 0.7);
    color: var(--zd-text-white);
  }
`;
