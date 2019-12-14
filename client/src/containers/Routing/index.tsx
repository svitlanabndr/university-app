import React from 'react';
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles.module.scss';

interface IProps {
}

class Routing extends React.Component<IProps & RouteComponentProps> {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        University app
      </div>
    );
  }
}

const actions = { 
};

const mapStateToProps = (rootState: any) => ({
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actions, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routing)
);
