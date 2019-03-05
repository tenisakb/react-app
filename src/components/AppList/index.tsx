import { connect } from "react-redux";

import { listGetAction } from "../../actions";
import { RootState } from "../../reducers";

import AppList, { AppListProps } from "./AppList";

interface OwnProps {}

const mapStateToProps = (state: RootState) => ({
  list: state.list.list
});

const mapDispatchToProps = (dispatch: Function, props: OwnProps) => ({
  getList: () => dispatch(listGetAction())
});

export default connect<{}, {}, AppListProps>(
  mapStateToProps,
  mapDispatchToProps
)(AppList) as React.ComponentClass<OwnProps>;
