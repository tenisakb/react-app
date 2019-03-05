import * as React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "../../constants";

import Table from "../generic/Table";

export interface AppListProps {
  list: [];
  getList: Function;
}

const AddButton = styled.button`
  border: 1px solid ${props => props.theme.button.border};
  text-align: center;
  padding: 8px;
  background-color: ${props => props.theme.button.background};
`;

const ListWrapper = styled.div``;

class AppList extends React.Component<AppListProps, {}> {
  public componentWillMount() {
    this.props.getList();
  }

  render() {
    const { list } = this.props;
    const headers: any = [{ title: "id" }, { title: "title" }];
    return (
      <ThemeProvider theme={theme}>
        <ListWrapper>
          <AddButton>Add</AddButton>
          <Table list={list} headers={headers} />
        </ListWrapper>
      </ThemeProvider>
    );
  }
}

export default AppList;
