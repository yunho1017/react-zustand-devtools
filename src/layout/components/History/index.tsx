import { useState, useContext } from "react";

import { Section } from "../../../components/ui/Section";
import { SelectedStoreApiContext } from "../../context";
import {
  ChevronIcon,
  HistoryList,
  HistoryItem,
  HistoryTrigger,
  HistoryContent,
  HistoryIcon,
} from "./styled";
import { useHistoryStore } from "../../../store";
import { formatDate } from "../../../helpers/formateDate";
import { JSONRenderer } from "../../../components/ui/JSONRenderer";

export const History = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(undefined);
  const api = useContext(SelectedStoreApiContext);
  const history = useHistoryStore((state) => state.history[api!.id] ?? []);
  const [selected, setSelected] = useState<number>();

  const toggleHistory = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setSelected(index);
  };

  return (
    <Section title="History" icon={<HistoryIcon />} style={{ flex: 1 }}>
      <HistoryList>
        {history.reverse().map((item, index) => (
          <HistoryItem key={index}>
            <HistoryTrigger
              selected={selectedIndex === index}
              onClick={() => toggleHistory(index)}
            >
              <span>{formatDate(item.date)}</span>
              <ChevronIcon isOpen={expandedIndex === index} />
            </HistoryTrigger>
            <HistoryContent isOpen={expandedIndex === index}>
              <JSONRenderer
                state={history.find((_, index) => selected === index)?.state}
              />
            </HistoryContent>
          </HistoryItem>
        ))}
      </HistoryList>
    </Section>
  );
};
