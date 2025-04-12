import { styled } from "goober";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: var(--zd-space-4);
`;

const Header = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TabList = styled("div")`
  display: flex;
  align-items: center;
  gap: var(--zd-space-1);
  padding: var(--zd-space-1);
  background: rgba(30, 41, 59, 0.5);
  border-radius: var(--zd-radius-md);
  backdrop-filter: blur(8px);
  height: 40px;
`;

const Tab = styled("button")<{ selected: boolean }>`
  all: unset;
  cursor: pointer;
  padding: var(--zd-space-2) var(--zd-space-4);
  border-radius: var(--zd-radius-md);
  color: ${(props) =>
    props.selected ? "var(--zd-text-white)" : "var(--zd-text-gray-400)"};
  background: ${(props) =>
    props.selected ? "var(--zd-gradient-indigo)" : "transparent"};
  font-size: var(--zd-text-sm);
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--zd-text-white);
    background: ${(props) =>
      props.selected ? "var(--zd-gradient-indigo)" : "rgba(51, 65, 85, 0.7)"};
  }
`;

const Badge = styled("div")`
  display: flex;
  align-items: center;
  gap: var(--zd-space-2);
  padding: var(--zd-space-1) var(--zd-space-3);
  background: rgba(30, 41, 59, 0.5);
  border-radius: var(--zd-radius-full);
  border: 1px solid rgba(51, 65, 85, 0.5);
  backdrop-filter: blur(8px);
  font-size: var(--zd-text-xs);
  color: var(--zd-text-gray-400);
`;

const ClockIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const Tabs: React.FC<{
  tabs: { key: string; label: string }[];
  selected: string;
  onChangeTab(tab: string): void;
  lastUpdated?: string;
}> = ({ tabs, selected, onChangeTab, lastUpdated }) => {
  return (
    <Container>
      <Header>
        <TabList>
          {tabs.map((tab) => (
            <Tab
              key={tab.key}
              selected={tab.key === selected}
              onClick={() => onChangeTab(tab.key)}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
        {lastUpdated && (
          <Badge>
            <ClockIcon />
            {lastUpdated}
          </Badge>
        )}
      </Header>
    </Container>
  );
};
