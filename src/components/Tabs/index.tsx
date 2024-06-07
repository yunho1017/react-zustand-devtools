import { styled } from "goober";
import { Typography } from "../Typography";

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 0 16px;
`;
const Tab = styled("div")<{ selected: boolean }>`
  cursor: pointer;
  padding: 16px 8px;
  ${(props) =>
    props.selected
      ? {
          borderBottom: "2px solid var(--zd-text-white)",
        }
      : {
          marginBottom: "2px",
        }}
`;

export const Tabs: React.FC<{
  tabs: { key: string; label: string }[];
  selected: string;
  onChangeTab(tab: string): void;
}> = ({ tabs, selected, onChangeTab }) => {
  return (
    <Wrapper>
      {tabs.map((tab) => (
        <Tab
          key={tab.key}
          selected={tab.key === selected}
          onClick={() => {
            onChangeTab(tab.key);
          }}
        >
          <Typography level={1}>{tab.label}</Typography>
        </Tab>
      ))}
    </Wrapper>
  );
};
