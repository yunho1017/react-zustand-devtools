import { styled } from "goober";

const Component = styled("span")<{
  level: 1 | 2 | 3;
  color?: "white" | "gray" | "gray300" | "gray400";
}>`
  word-break: break-word;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  letter-spacing: -0.011em;

  ${(props) => {
    switch (props.level) {
      case 3:
        return {
          fontSize: "13px",
          lineHeight: "18px",
          fontWeight: "400",
        };
      case 2:
        return {
          fontSize: "15px",
          lineHeight: "22px",
          fontWeight: "500",
        };
      case 1:
        return {
          fontSize: "18px",
          lineHeight: "24px",
          fontWeight: "600",
        };
    }
  }};

  ${(props) => {
    switch (props.color) {
      case "gray300":
        return {
          color: "var(--zd-text-gray-300)",
        };
      case "gray400":
        return {
          color: "var(--zd-text-gray-400)",
        };
      case "gray":
        return {
          color: "var(--zd-text-gray-400)",
          opacity: "0.8",
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
    color?: "white" | "gray" | "gray300" | "gray400";
  } & React.HTMLAttributes<HTMLSpanElement>
> = ({ className, level, children, color, ...props }) => {
  return (
    <Component {...props} color={color} level={level}>
      {children}
    </Component>
  );
};
