import { api } from '../adapter';
import { ContractKindName } from '../../models/ContractKindName';

export class Domain {
  getStudentsByGroup() {
    return api.makeRequest('/api/v1/1', 'GET');
  }
  getStudentsByContract(contractType: ContractKindName) {
    return api.makeRequest(`/api/v1/2?contractType=${contractType}`, 'GET');
  }
  getStudentsByDiploma() {
    return api.makeRequest('/api/v1/3', 'GET');
  }
}
export const domain = new Domain();
