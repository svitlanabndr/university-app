import { getCustomRepository } from "typeorm";
import StudentRepository from "../../data/repositories/student.repository";
import { OrderKindName } from "../../common/enums/OrderKindName";
import { ContractKindName } from "../../common/enums/ContractKindName";

export const getStudentsByGroup = () => {
  return getCustomRepository(StudentRepository)
    .createQueryBuilder('student')
    .leftJoinAndSelect('student.studentGroups', 'studentGroup')
    .leftJoinAndSelect('studentGroup.group', 'group')
    .where('group.groupCode = :groupCode', { groupCode: 'IK-62' })
    .leftJoinAndSelect('group.speciality', 'speciality')
    .andWhere('speciality.specialityShifr = :specialityShifr', { specialityShifr: '126' })
    .leftJoinAndSelect('speciality.cafedra', 'cafedra')
    .andWhere('cafedra.cafedraShifr = :cafedraShifr', { cafedraShifr: 'TC' })
    .leftJoinAndSelect('student.person', 'person')
    .leftJoinAndSelect('person.citizen', 'citizen')
    .andWhere('citizen.citizenName = :citizen', { citizen: 'киянин' })
    .getMany()
}

export const getStudentsByViolation = () => {
  return getCustomRepository(StudentRepository)
    .createQueryBuilder('student')
    .leftJoinAndSelect('student.person', 'person')
    .leftJoinAndSelect('person.violations', 'violation')
    .leftJoinAndSelect('violation.violationKind', 'violationKind')
    .leftJoinAndSelect('violation.order', 'order')
    .leftJoinAndSelect('order.orderKind', 'orderKind')
    .where('orderKind.orderKindName = :orderKindName', { orderKindName: OrderKindName.Drop })
    .getMany()
}

export const getStudentsByContract = async () => {
  const students = await getCustomRepository(StudentRepository)
    .createQueryBuilder('student')
    .leftJoinAndSelect('student.contracts', 'contract')
    .leftJoinAndSelect('contract.contractKind', 'contractKind')
    .where('contractKind.contractKindName = :contractKindName', { contractKindName:  ContractKindName.Type1 })
    .leftJoinAndSelect('student.person', 'person')
    .leftJoinAndSelect('person.personPrivileges', 'personPrivilege')
    .leftJoinAndSelect('personPrivilege.privilege', 'privilege')
    .getMany();

  return students.filter(student => student.person.personPrivileges && student.person.personPrivileges.length)
}
