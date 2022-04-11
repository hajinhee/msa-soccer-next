import {takeLatest, all, put} from "@redux-saga/core"
import {} from './user.saga'

export function* rootSaga(){
    yield all([fork(watchSignup)])
}