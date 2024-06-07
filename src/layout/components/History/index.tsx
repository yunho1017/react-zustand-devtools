import { useContext, useState } from "react";
import { styled } from "goober";
import { Section } from "../../../components/Section";
import { Typography } from "../../../components/Typography";
import { JSONRenderer } from "../../../components/JSONRenderer";
import { formatDate } from "../../../helpers/formateDate";
import { useHistoryStore } from "../../../store";
import { SelectedStoreApiContext } from "../../context";

const Wrapper = styled("div")`
  display: flex;
  height: 100%;
  gap: 8px;
`;
const List = styled("ul")`
  flex: 1;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 8px;
  padding: 0;
  margin: 0;
  overflow: auto;
`;

const Content = styled("div")`
  flex: 2;
  background-color: var(--zd-bg-gray-500);
`;

const Item = styled("li")<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 8px;
  gap: 4px;
  cursor: pointer;
  border-radius: 4px;
  background-color: var(--zd-bg-gray-500);
`;

export const History: React.FC = () => {
  const api = useContext(SelectedStoreApiContext);
  const history = useHistoryStore((state) => state.history[api!.id] ?? []);
  const [selected, setSelected] = useState<number>();

  return (
    <Section
      title="History"
      style={{ flex: 1, minHeight: 0, gridArea: "history" }}
    >
      <Wrapper>
        <List>
          {history.map((item, index) => (
            <Item
              key={index}
              selected={selected === index}
              onClick={() => setSelected(index)}
            >
              <Typography level={2} color="white">
                UpdatedAt
              </Typography>
              <Typography level={3} color="white">
                {formatDate(item.date)}
              </Typography>
            </Item>
          ))}
        </List>
        <Content>
          <JSONRenderer
            state={history.find((_, index) => selected === index)?.state}
          />
        </Content>
      </Wrapper>
    </Section>
  );
};
