import { Button } from "../../../components/Button";

export const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Button
      style={{ position: "absolute", right: 48, bottom: 48 }}
      onClick={onClick}
    >
      Close
    </Button>
  );
};
