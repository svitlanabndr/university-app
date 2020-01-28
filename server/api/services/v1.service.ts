import { getCustomRepository } from "typeorm";
import StudentRepository from "../../data/repositories/student.repository";
import { FinanceName } from "../../common/enums/FinanceName";
import { ContractKindName } from "../../common/enums/ContractKindName";
import { DiplomaName } from "../../common/enums/DiplomaName";

export const getStudentsByGroup = () => {
  return getCustomRepository(StudentRepository)
    .createQueryBuilder('student')
    .leftJoinAndSelect('student.person', 'person')
    .leftJoinAndSelect('student.studentGroups', 'studentGroup')
    .leftJoinAndSelect('studentGroup.group', 'group')
    .where('group.groupCode = :groupCode', { groupCode: 'IK-62' })
    .leftJoinAndSelect('group.speciality', 'speciality')
    .andWhere('speciality.specialityShifr = :specialityShifr', { specialityShifr: '151' })
    .leftJoinAndSelect('speciality.cafedra', 'cafedra')
    .andWhere('cafedra.cafedraShifr = :cafedraShifr', { cafedraShifr: 'TC' })
    .leftJoinAndSelect('cafedra.faculty', 'faculty')
    .andWhere('faculty.facultyName = :facultyName', { facultyName: 'FICT' })
    .leftJoinAndSelect('student.finance', 'finance')
    .andWhere('finance.financeName = :financeName', { financeName: FinanceName.UAH })
    .getMany()
}

function getSqlFormatDate (date:Date){
  return "'"+date.toISOString()+"'";
}

export const getStudentsByContract = (contractKindName: ContractKindName) => {
  return getCustomRepository(StudentRepository)
    .createQueryBuilder('student')
    .leftJoinAndSelect('student.person', 'person')
    .where('person.birthDate BETWEEN ' + getSqlFormatDate(new Date(1900, 1, 1)) + ' AND ' + getSqlFormatDate(new Date(2000, 1, 1)))
    .leftJoinAndSelect('student.contracts', 'contract')
    .leftJoinAndSelect('contract.contractKind', 'contractKind')
    .andWhere('contractKind.contractKindName = :contractKindName', { contractKindName })//:  ContractKindName.Type2 })
    .leftJoinAndSelect('contract.payments', 'payment')
    .andWhere('payment.paymentSum > 1000')
    .getMany()
}

export const getStudentsByDiploma = () => {
  return getCustomRepository(StudentRepository)
    .createQueryBuilder('student')
    .leftJoinAndSelect('student.person', 'person')
    .leftJoinAndSelect('student.studentGroups', 'studentGroup')
    .leftJoinAndSelect('studentGroup.group', 'group')
    .where('group.groupCode = :groupCode', { groupCode: 'IK-31' })
    .leftJoinAndSelect('group.speciality', 'speciality')
    .andWhere('speciality.specialityShifr = :specialityShifr', { specialityShifr: '126' })
    .leftJoinAndSelect('student.studentMarks', 'studentMark')
    .leftJoinAndSelect('studentMark.mark', 'mark')
    .andWhere('mark.markName > :markName', { markName: 4 })
    .leftJoinAndSelect('student.diploma', 'diploma')
    .andWhere('diploma.diplomaName = :diplomaName', { diplomaName: DiplomaName.Red })
    .getMany()
}
