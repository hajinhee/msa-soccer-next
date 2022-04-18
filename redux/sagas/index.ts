import { all } from 'redux-saga/effects';
import { watchJoin } from "./userSaga.ts";
import {watchTodo} from "./todoSaga.ts";

export default function* rootSaga() {
    yield all([watchJoin(), watchTodo()]);
    
}