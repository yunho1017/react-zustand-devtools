import { styled } from "goober";
import { Typography } from "../Typography";

const Wrapper = styled("section")`
  display: flex;
  flex-direction: column;
  background: var(--zd-gradient-card);
  border-radius: var(--zd-radius-lg);
  border: 1px solid rgba(51, 65, 85, 0.5);
  overflow: hidden;
  backdrop-filter: blur(8px);
`;

const Title = styled("div")`
  padding: var(--zd-space-2) var(--zd-space-4);
  text-align: left;
  border-bottom: 1px solid rgba(51, 65, 85, 0.5);
  display: flex;
  align-items: center;
  gap: var(--zd-space-2);
  background: rgba(30, 41, 59, 0.5);

  svg {
    width: 16px;
    height: 16px;
    color: var(--zd-text-gray-400);
  }
`;

const Content = styled("div")`
  text-align: left;
  flex: 1;
  min-height: 0;

  /* Scrollbar styling */
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--zd-bg-dark-600) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--zd-bg-dark-600);
    border-radius: 3px;
  }

  /* Code block styling */
  pre {
    background: rgba(15, 23, 42, 0.7);
    border-radius: 0;
    padding: var(--zd-space-4);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;
    font-size: var(--zd-text-sm);
    line-height: 1.5;
    overflow-x: auto;
    height: 400px;
  }

  /* History list styling */
  .history-list {
    display: flex;
    flex-direction: column;
  }

  .history-item {
    border-bottom: 1px solid rgba(51, 65, 85, 0.5);

    &:last-child {
      border-bottom: none;
    }
  }

  .history-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--zd-space-3) var(--zd-space-4);
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--zd-text-white);
    font-size: var(--zd-text-sm);
    transition: background-color 0.2s;

    &:hover {
      background: rgba(51, 65, 85, 0.7);
    }

    &[data-selected="true"] {
      background: rgba(51, 65, 85, 0.5);
    }

    .time {
      color: var(--zd-text-gray-400);
      display: flex;
      align-items: center;
      gap: var(--zd-space-1);
    }
  }

  .history-content {
    background: rgba(15, 23, 42, 0.7);
    padding: var(--zd-space-4);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;
    font-size: var(--zd-text-sm);
    border-bottom: 1px solid rgba(51, 65, 85, 0.5);
  }

  /* Content types */
  &[data-content="code"] {
    padding: 0;
  }

  &[data-content="default"] {
    padding: var(--zd-space-4);
  }
`;

export const Section: React.FC<
  {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    contentType?: "code" | "default";
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ title, icon, children, contentType = "default", ...props }) => {
  return (
    <Wrapper {...props}>
      <Title>
        {icon}
        <Typography level={2} color="gray300">
          {title}
        </Typography>
      </Title>
      <Content data-content={contentType}>{children}</Content>
    </Wrapper>
  );
};
