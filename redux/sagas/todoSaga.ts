import { call, delay, put, takeLatest} from 'redux-saga/effects'
import { todoActions } from '../../redux/reducers/todoReducer.ts';
import { postTodo } from '../api/todoApi.ts'

interface TodoType{
    type: string;
    payload: {
        userid: string, task: string, completed: string
    }
}
interface TodoSuccessType{
    type: string;
    payload: {
        userid: string
    }
}
function* Todo(todo: TodoType){
    try{
        alert('진행 3: Saga 내부 진입 성공' + JSON.stringify(todo))
        const response: TodoSuccessType = yield postTodo(todo.payload)
        yield put(todoActions.taskSuccess(response))    
    }catch(error){
        alert('진행 3: Saga 내부 진입 실패')
        yield put(todoActions.taskFailure(error))
    }
}
export function* watchTodo(){
    yield takeLatest(todoActions.taskRequest, Todo)
}