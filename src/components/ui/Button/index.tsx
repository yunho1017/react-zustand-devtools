import { styled } from "goober";
import { Typography } from "../Typography";

const Component = styled("button")`
  background: var(--zd-gradient-indigo);
  padding: var(--zd-space-2) var(--zd-space-4);
  border-radius: var(--zd-radius-md);
  border: none;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--zd-space-2);
  white-space: nowrap;
  min-height: 32px;
  min-width: 32px;
  transition: all 0.2s ease-in-out;
  color: var(--zd-text-white);
  font-size: var(--zd-text-sm);
  font-weight: 500;

  &[data-variant="default"] {
    background: var(--zd-gradient-indigo);

    &:hover {
      filter: brightness(1.1);
      transform: translateY(-1px);
    }
  }

  &[data-variant="outline"] {
    background: transparent;
    border: 1px solid rgba(51, 65, 85, 0.5);

    &:hover {
      background: rgba(51, 65, 85, 0.7);
      transform: translateY(-1px);
    }
  }

  &[data-variant="ghost"] {
    background: transparent;

    &:hover {
      background: rgba(51, 65, 85, 0.7);
    }
  }

  &[data-size="icon"] {
    padding: var(--zd-space-2);
    border-radius: var(--zd-radius-full);
    min-height: 32px;
    min-width: 32px;
  }

  &[data-size="sm"] {
    padding: var(--zd-space-1) var(--zd-space-3);
    font-size: var(--zd-text-xs);
    min-height: 28px;
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "sm" | "icon";
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  }
> = ({
  children,
  variant = "default",
  size = "default",
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <Component type="button" data-variant={variant} data-size={size} {...props}>
      {leftIcon}
      {children && (
        <Typography level={size === "sm" ? 3 : 2} color="white">
          {children}
        </Typography>
      )}
      {rightIcon}
    </Component>
  );
};
