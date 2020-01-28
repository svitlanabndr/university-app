import { all } from 'redux-saga/effects';
import saga from '../containers/Routing/redux/saga';

export default function* rootSaga() {
  yield all([
    saga()
  ]);
}
