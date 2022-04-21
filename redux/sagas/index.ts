import { all } from 'redux-saga/effects';
import { watchJoin, watchLogin } from "./userSaga.ts";
import {watchTodo} from "./todoSaga.ts";

export default function* rootSaga() {
    yield all([watchJoin(), watchTodo(), watchLogin()]);
    
}