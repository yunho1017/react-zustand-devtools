import ReactJson from "react-json-view";

export const JSONRenderer: React.FC<{
  state: Object | undefined;
  onEdit?: (state: Object) => void;
}> = ({ state, onEdit }) => {
  if (!state) {
    return null;
  }
  return (
    <ReactJson
      src={state}
      theme="ocean"
      style={{ height: "100%", backgroundColor: "transparent" }}
      displayObjectSize={false}
      enableClipboard={false}
      onEdit={
        onEdit
          ? ({ existing_value, updated_src }) => {
              if (
                typeof existing_value === "function" ||
                (typeof existing_value === "object" &&
                  existing_value !== null) ||
                Array.isArray(existing_value)
              ) {
                return false;
              }
              onEdit(updated_src);
            }
          : undefined
      }
      name={false}
    />
  );
};
