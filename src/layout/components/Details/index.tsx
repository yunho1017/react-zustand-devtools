import { useContext } from "react";
import { SelectedStoreApiContext } from "../../context";
import { Section } from "../../../components/Section";
import { Typography } from "../../../components/Typography";
import { formatDate } from "../../../helpers/formateDate";
import { useHistoryStore } from "../../../store";

export const Details: React.FC = () => {
  const api = useContext(SelectedStoreApiContext);
  const lastUpdated = useHistoryStore((state) => {
    const history = state.history[api!.id] ?? [];

    return history[history.length - 1]?.date;
  });

  return (
    <Section title="Details" style={{ gridArea: "details" }}>
      <Typography level={2} color="gray">
        Last Updated: {formatDate(lastUpdated)}
      </Typography>
    </Section>
  );
};
