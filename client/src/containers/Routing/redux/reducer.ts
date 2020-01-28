import {
  getStudentsByGroup,
  getStudentsByContract,
  getStudentsByDiploma
} from './routines';

const initialState: {
  firstTableData: any,
  secondTableData: any,
  thirdTableData: any,
} = {
  firstTableData: null,
  secondTableData: null,
  thirdTableData: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {

    case getStudentsByGroup.SUCCESS:
      return {
        ...state,
        firstTableData: action.payload
      };
    case getStudentsByContract.SUCCESS:
      return {
        ...state,
        secondTableData: action.payload
      };
    case getStudentsByDiploma.SUCCESS:
      return {
        ...state,
        thirdTableData: action.payload
      };
    default:
      return state;
  }
}
