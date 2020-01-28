import React from 'react';
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStudentsByGroup, getStudentsByContract, getStudentsByDiploma } from './redux/routines';
import Select from 'react-select';

import './styles.scss';
import Table from '../Table';
import { ContractKindName } from '../../models/ContractKindName';

const options = [
  { value: ContractKindName.Type1, label: 'індивідуального' },
  { value: ContractKindName.Type2, label: 'посольського' },
  { value: ContractKindName.Type3, label: 'соціального' },
  { value: ContractKindName.Type4, label: 'міжнародного' },
];

interface IProps {
  getStudentsByGroup: any;
  getStudentsByContract: any;
  getStudentsByDiploma: any;
  firstTableData: any;
  secondTableData: any;
  thirdTableData: any;
}

class Routing extends React.Component<IProps & RouteComponentProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedContractType: { value: ContractKindName.Type2, label: 'посольського' }
    }
  }
  componentDidMount() {
  }

  render() {
    return (
      <div className='container'>
        <div className='request'>
          1. Вибрати студентів, що навчаються в групі ІК-62 за 151 спеціальністю на кафедрі ТК ФІОТ та здійснюють оплату в гривнях
          <button onClick={() => this.props.getStudentsByGroup()}>Показати</button>
        </div>
        { this.props.firstTableData && 
          <Table data={this.props.firstTableData}/>
        }

        <div className='request'>
          <div> 2. Вибрати студентів, яким більше 20 років та які навчаються  на основі контракту 
          <Select
            className='select-menu'
            value={(this.state as any).selectedContractType}
            onChange={(selectedContractType: any) => this.setState({ selectedContractType })}
            options={options}
          />
           типу та здійснюють оплату вище ніж 1000 грн
           </div>
          <button onClick={() => this.props.getStudentsByContract((this.state as any).selectedContractType.value)}>Показати</button>
        </div>
        { this.props.secondTableData && 
          <Table data={this.props.secondTableData}/>
        }
        <div className='request'>
          3. Вибрати студентів, які мають червоний диплом з оцінками вище 4.8 та навчалися в групі ІК-31 за 126 спеціальністю
          <button onClick={() => this.props.getStudentsByDiploma()}>Показати</button>
        </div>
        { this.props.thirdTableData && 
          <Table data={this.props.thirdTableData}/>
        } 
      </div>
    );
  }
}

const actions = { 
  getStudentsByGroup,
  getStudentsByContract,
  getStudentsByDiploma
};

const mapStateToProps = (rootState: any) => ({
  firstTableData: rootState.reducer.firstTableData,
  secondTableData: rootState.reducer.secondTableData,
  thirdTableData: rootState.reducer.thirdTableData,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actions, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routing)
);
