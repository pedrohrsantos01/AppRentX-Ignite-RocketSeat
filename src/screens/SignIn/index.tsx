import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, SubTitle, Footer } from "./styles";

import { Button } from "../../components/Button";
import theme from "../../styles/theme";

export function SignIn() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Title>Estamos {"\n"} quase lá</Title>
        <SubTitle>
          Faça seu login para começar {"\n"} uma experiência incrível.
        </SubTitle>
      </Header>

      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />
        <Button
          title="Criar conta gratuita"
          color={theme.colors.background_secondary}
          light
          onPress={() => {}}
          enabled={false}
          loading={false}
        />
      </Footer>
    </Container>
  );
}
