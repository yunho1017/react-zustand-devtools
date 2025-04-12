import { useContext } from "react";
import { SelectedStoreApiContext } from "../../layout/context";
import { Section } from "../ui/Section";
import { Typography } from "../ui/Typography";
import { formatDate } from "../../helpers/formateDate";
import { useHistoryStore } from "../../store";

export const Details: React.FC = () => {
  const api = useContext(SelectedStoreApiContext);
  const lastUpdated = useHistoryStore((state) => {
    const history = state.history[api!.id] ?? [];

    return history[history.length - 1]?.date;
  });

  return (
    <Section
      title="Details"
      icon={
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 9V7H7V9H5Z" fill="currentColor" />
          <path d="M9 9H19V7H9V9Z" fill="currentColor" />
          <path d="M5 15V17H7V15H5Z" fill="currentColor" />
          <path d="M19 17H9V15H19V17Z" fill="currentColor" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z"
            fill="currentColor"
          />
        </svg>
      }
      style={{ gridArea: "details" }}
    >
      <Typography level={2} color="gray">
        Last Updated: {formatDate(lastUpdated)}
      </Typography>
    </Section>
  );
};
