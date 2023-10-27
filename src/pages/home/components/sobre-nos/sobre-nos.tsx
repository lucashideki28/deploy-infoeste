import { CardContent } from "./card-content";
import { Card, Message, SubTitle, Title, Wrapper } from "./sobre-nos.styles";
import { CardType } from "./types";

type Props = {
  isAbsolute: boolean;
};

export const SobreNos = ({ isAbsolute }: Props) => {
  const messages: CardType[] = CardContent();

  return (
    <Wrapper isAbsolute={isAbsolute}>
      <Title>Sobre nós</Title>

      <SubTitle>console.log("Hello world!")</SubTitle>
      {messages.map((item) => (
        <Card key={item.id}>
          <Message>{item.message}</Message>
        </Card>
      ))}
    </Wrapper>
  );
};
