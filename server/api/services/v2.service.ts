import { getCustomRepository } from "typeorm";
import StudentRepository from "../../data/repositories/student.repository";

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