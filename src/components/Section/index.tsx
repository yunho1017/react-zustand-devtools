import { styled } from "goober";
import { Typography } from "../Typography";

const Wrapper = styled("section")`
  display: flex;
  flex-direction: column;
  background-color: var(--zd-bg-gray-600);
`;

const Title = styled("div")`
  padding: 8px 16px;
  text-align: left;
`;

const Content = styled("div")`
  padding: 16px;

  text-align: left;
  flex: 1;
  min-height: 0;
`;

export const Section: React.FC<
  {
    title: string;
    children: React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ title, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Title>
        <Typography level={1}>{title}</Typography>
      </Title>
      <Content>{children}</Content>
    </Wrapper>
  );
};
