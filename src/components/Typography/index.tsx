import { styled } from "goober";

const Component = styled("span")<{
  level: 1 | 2 | 3;
  color?: "white" | "gray" | "gray800";
}>`
  word-break: break-word;
  font-family: Noto Sans, Roboto, sans-serif;
  ${(props) => {
    switch (props.level) {
      case 3:
        return {
          fontSize: "12px",
          lineHeight: "16px",
        };
      case 2:
        return {
          fontSize: "16px",
          lineHeight: "20px",
        };
      case 1:
        return {
          fontSize: "20px",
          lineHeight: "24px",
        };
    }
  }};

  ${(props) => {
    switch (props.color) {
      case "gray800":
        return {
          color: "var(--zd-text-gray-800)",
        };
      case "gray":
        return {
          color: "var(--zd-text-gray-400)",
        };
      default:
        return {
          color: "var(--zd-text-white)",
        };
    }
  }};
`;
export const Typography: React.FC<
  {
    level: 1 | 2 | 3;
    color?: "white" | "gray" | "gray800";
  } & React.HTMLAttributes<HTMLSpanElement>
> = ({ className, level, children, color, ...props }) => {
  return (
    <Component {...props} color={color} level={level}>
      {children}
    </Component>
  );
};
