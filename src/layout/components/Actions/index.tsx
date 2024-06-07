import { useContext } from "react";
import { SelectedStoreApiContext } from "../../context";
import { Section } from "../../../components/Section";
import { Button } from "../../../components/Button";

export const Actions: React.FC = () => {
  const api = useContext(SelectedStoreApiContext);

  return (
    <Section title="Actions" style={{ gridArea: "actions" }}>
      <Button
        onClick={() => {
          api?.setState(api.getInitialState());
        }}
      >
        Reset
      </Button>
    </Section>
  );
};
