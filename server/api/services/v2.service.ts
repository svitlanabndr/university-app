import { getCustomRepository } from "typeorm";
import StudentRepository from "../../data/repositories/student.repository";
import { OrderKindName } from "../../common/enums/OrderKindName";
import { ContractKindName } from "../../common/enums/ContractKindName";

export const getStudentsByGroup = () => {
  const query = getCustomRepository(StudentRepository)
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

    console.log(query.getQueryAndParameters());

    return query.getMany();
}

export const getStudentsByViolation = () => {
  const query =  getCustomRepository(StudentRepository)
    .createQueryBuilder('student')
    .leftJoinAndSelect('student.person', 'person')
    .leftJoinAndSelect('person.violations', 'violation')
    .leftJoinAndSelect('violation.violationKind', 'violationKind')
    .leftJoinAndSelect('violation.order', 'order')
    .leftJoinAndSelect('order.orderKind', 'orderKind')
    .where('orderKind.orderKindName = :orderKindName', { orderKindName: OrderKindName.Drop })
    
    console.log(query.getQueryAndParameters());

    return query.getMany();
}

export const getStudentsByContract = async () => {
  const query = await getCustomRepository(StudentRepository)
    .createQueryBuilder('student')
    .leftJoinAndSelect('student.contracts', 'contract')
    .leftJoinAndSelect('contract.contractKind', 'contractKind')
    .where('contractKind.contractKindName = :contractKindName', { contractKindName:  ContractKindName.Type1 })
    .leftJoinAndSelect('student.person', 'person')
    .leftJoinAndSelect('person.personPrivileges', 'personPrivilege')
    .leftJoinAndSelect('personPrivilege.privilege', 'privilege')

  console.log(query.getQueryAndParameters());

  const students = await query.getMany();

  return students.filter(student => student.person.personPrivileges && student.person.personPrivileges.length)
}
