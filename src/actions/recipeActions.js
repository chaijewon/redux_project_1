import {FETCH_RECIPE_LIST,FETCH_RECIPE_DETAIL} from "./types";
// 서버 연동
import axios from 'axios';

export const fetchRecipeList=(page)=>dispatch => {
    axios.get(`http://localhost/recipe/list_react/${page}`)
        .then(response=>{
            const action={
                type:FETCH_RECIPE_LIST,
                payload:response.data
            }
            // reducer로 전송 => 자동 처리 (store) => 데이터를 읽어서 화면 출력
            dispatch(action)
        })
}
export const fetchRecipeDetail=(no)=> async dispatch => {
    console.log("no="+no);
    try {
       const res= await axios.get(`http://localhost/recipe/detail_react/${no}`)

                const action={
                    type:FETCH_RECIPE_DETAIL,
                    payload:res.data
                }
                dispatch(action)

    }catch(error){
        console.log(error)
    }

}