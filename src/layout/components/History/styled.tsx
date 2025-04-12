import { styled } from "goober";

export const HistoryIcon = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 7H11V12H16V14H9V7Z" fill="currentColor" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
      fill="currentColor"
    />
  </svg>
);
export const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: isOpen ? "rotate(180deg)" : "none",
      transition: "transform 0.2s",
    }}
  >
    <path
      d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
      fill="currentColor"
    />
  </svg>
);

export const HistoryList = styled("div")`
  display: flex;
  flex-direction: column;
  border-radius: var(--zd-radius-lg);
  overflow: hidden;
`;

export const HistoryItem = styled("div")``;

export const HistoryTrigger = styled("button")<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--zd-space-3) var(--zd-space-4);
  width: 100%;
  background: ${(props) =>
    props.selected ? "rgba(51, 65, 85, 0.5)" : "transparent"};
  border: none;
  cursor: pointer;
  color: var(--zd-text-white);
  font-size: var(--zd-text-sm);
  transition: background-color 0.2s;

  &:hover {
    background: rgba(51, 65, 85, 0.7);
  }
`;

export const HistoryContent = styled("div")<{ isOpen: boolean }>`
  background: rgba(15, 23, 42, 0.7);
  padding: ${(props) => (props.isOpen ? "var(--zd-space-4)" : "0")};
  height: ${(props) => (props.isOpen ? "auto" : "0")};
  overflow: hidden;
  transition: all 0.2s ease-in-out;
`;
