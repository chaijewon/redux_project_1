import {BOARD_LIST,BOARD_INSERT,BOARD_DETAIL,BOARD_DELETE,
    BOARD_UPADTE_OK,BOARD_UPDATE,RESET} from "../actions/types";

/*
     Java = JavaScript
     Map  =>  {}
     List =>  []
     VO   => {}
     String => ''

     const {isLoading,isError,data,refetch:함수} = useQuery({
          aysnc()=> await axios....
     })

     if(isLoading)
     if(isError)

     return (

     )

 */
/*
    state
      foods
      food_list
      food_detail

      recipes
      recipe_list
      recipe_detail

      boards
      board_list:{}, // Map
      board_detail:{}, // BoardEntity
      board_update:{},
      result:'' // yes / no
 */
const boardState={
    board_list:{}, // Map
    board_detail:{}, // BoardEntity
    board_update:{},
    result:'' // yes / no
}
/*
     let arr=[1,2,3,4,5]
     let arr1=[...arr,6,7,8]
 */
export default function(state=boardState, action){
    switch(action.type){
        case BOARD_LIST:
            return {
                ...state, // state유지
                board_list:action.payload
            }
        case BOARD_INSERT:
            return {
                ...state,
                result:action.payload
            }
        case BOARD_DETAIL:
            return {
                ...state,
                board_detail:action.payload
            }
        case RESET:
            return {
                ...state,
                result:action.payload
            }
        default:
            return state;
    }
}