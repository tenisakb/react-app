import * as React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "../constants";

const Container = styled.div`
  background-color: ${props => props.theme.background};
`;

export interface RootProps {
  children: React.ReactNode;
}

class Root extends React.Component<RootProps, {}> {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container>{children}</Container>
      </ThemeProvider>
    );
  }
}

export default Root;
