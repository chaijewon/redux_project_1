import {FETCH_FOOD_LIST,FETCH_FOOD_DETAIL} from "./types";
// 서버 연동
import axios from 'axios';

export const fetchFoodList=(page)=>dispatch => {
    axios.get(`http://localhost/food/list_react/${page}`)
         .then(response=>{
             const action={
                 type:FETCH_FOOD_LIST,
                 payload:response.data
             }
             // reducer로 전송 => 자동 처리 (store) => 데이터를 읽어서 화면 출력
             dispatch(action)
         })
}