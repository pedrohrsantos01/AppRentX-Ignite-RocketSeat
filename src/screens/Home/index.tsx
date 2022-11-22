import React from "react";
import { StatusBar } from "react-native";

import { Container, Header } from "./styles";

export function Home() {
  return (
    <Container>
      <StatusBar backgroundColor="transparent" barStyle="default" translucent />
      <Header></Header>
    </Container>
  );
}
