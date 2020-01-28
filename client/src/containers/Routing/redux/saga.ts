import { all, put, takeEvery, call, select } from 'redux-saga/effects';
import * as routines from './routines';
import { domain } from '../../../api/domains/domain';

function* getStudentsByGroup(action: any) {
  try {
    const { data } = yield call(domain.getStudentsByGroup);
    yield put(routines.getStudentsByGroup.success(data.map((student: any) => ({
      id: student.id,
      surname: student.person.surname,
      name: student.person.name,
      patronymic: student.person.patronymic,
      sex: student.person.sex,
      birthPlace: student.person.birthPlace,
      bookNo: student.bookNo,
      groupCode: student.studentGroups[0].group.groupCode,
      specialityShifr: student.studentGroups[0].group.speciality.specialityShifr,
      specialityName: student.studentGroups[0].group.speciality.specialityName,
      cafedraShifr: student.studentGroups[0].group.speciality.cafedra.cafedraShifr,
      cafedraName: student.studentGroups[0].group.speciality.cafedra.cafedraName,
      faculty: student.studentGroups[0].group.speciality.cafedra.faculty.facultyName,
      financeName: student.finance.financeName,
    }))));
  } catch (e) {
    console.log(e)
  }
}

function* watchgetStudentsByGroup() {
  yield takeEvery(routines.getStudentsByGroup.trigger, getStudentsByGroup);
}

function* getStudentsByContract(action: any) {
  try {
    const { data } = yield call(domain.getStudentsByContract, action.payload);
    yield put(routines.getStudentsByContract.success(data.map((student: any) => ({
      id: student.id,
      surname: student.person.surname,
      name: student.person.name,
      patronymic: student.person.patronymic,
      sex: student.person.sex,
      birthPlace: student.person.birthPlace,
      bookNo: student.bookNo,
      payerKind: student.contracts[0].payerKind,
      contractKindName: student.contracts[0].contractKind.contractKindName,
      payments: student.contracts[0].payments[0].paymentSum,
    }))));
  } catch (e) {
    console.log(e)
  }
}

function* watchgetStudentsByContract() {
  yield takeEvery(routines.getStudentsByContract.trigger, getStudentsByContract);
}

function* getStudentsByDiploma(action: any) {
  try {
    const { data } = yield call(domain.getStudentsByDiploma);
    yield put(routines.getStudentsByDiploma.success(data.map((student: any) => ({
      id: student.id,
      surname: student.person.surname,
      name: student.person.name,
      patronymic: student.person.patronymic,
      sex: student.person.sex,
      birthPlace: student.person.birthPlace,
      bookNo: student.bookNo,
      groupCode: student.studentGroups[0].group.groupCode,
      specialityShifr: student.studentGroups[0].group.speciality.specialityShifr,
      specialityName: student.studentGroups[0].group.speciality.specialityName,
      studentMark: student.studentMarks[0].mark.markName,
      diploma: student.diploma.diplomaName,
    }))));
  } catch (e) {
    console.log(e)
  }
}

function* watchgetStudentsByDiploma() {
  yield takeEvery(routines.getStudentsByDiploma.trigger, getStudentsByDiploma);
}

export default function* saga() {
  yield all([
    watchgetStudentsByGroup(),
    watchgetStudentsByContract(),
    watchgetStudentsByDiploma(),
  ]);
}
