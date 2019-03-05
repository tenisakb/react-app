import * as React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "../../constants";

const TableWrapper = styled.table`
  min-height: 100%;
  background-color: ${props => props.theme.table.background};
  border-collapse: collapse;
  width: 100%;
`;

const Tbody = styled.tbody``;

const Thead = styled.thead``;

const Row = styled.tr`
  &:nth-child(even) {
    background-color: ${props => props.theme.table.even};
  }
`;

const Header = styled.th`
  border: 1px solid ${props => props.theme.table.border};
  text-align: left;
  padding: 8px;
`;

const Item = styled.td`
  border: 1px solid ${props => props.theme.table.border};
  text-align: left;
  padding: 8px;
`;

export interface Props {
  list: [];
  headers: [];
}

class Table extends React.Component<Props, {}> {
  renderHeader(headers: any) {
    return headers.map((header: any, key: number) => (
      <Header key={key}>{header.title}</Header>
    ));
  }

  renderList(list: any) {
    return list.map((item: any, i: number) => (
      <Row key={Math.random()}>
        <Item>{item.id}</Item>
        <Item>{item.title}</Item>
      </Row>
    ));
  }

  render() {
    const { list, headers } = this.props;
    if (!list) {
      return null;
    }
    return (
      <ThemeProvider theme={theme}>
        <TableWrapper>
          <Thead>
            <Row key={Math.random()}>{this.renderHeader(headers)}</Row>
          </Thead>
          <Tbody>{this.renderList(list)}</Tbody>
        </TableWrapper>
      </ThemeProvider>
    );
  }
}

export default Table;
