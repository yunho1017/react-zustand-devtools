import { styled } from "goober";
import { Typography } from "../Typography";

const Component = styled("button")`
  background-color: var(--zd-bg-gray-500);
  padding: 4px 16px;
  border-radius: 6px;
  outline: none;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
`;

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <Component type="button" {...props}>
      <Typography level={2} color="white">
        {children}
      </Typography>
    </Component>
  );
};
