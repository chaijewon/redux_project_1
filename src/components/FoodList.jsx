import {useState,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {fetchFoodList} from "../actions/foodActions";
import {Link} from "react-router";
function FoodList() {
    // 처리
    const [curpage, setCurpage] = useState(1);
    const dispatch = useDispatch(); // Action 함수
    useEffect(() => {
        dispatch(fetchFoodList(curpage));
    },[curpage]);
    /*
      state : food , recipe , seoul , board
               |
              foods : food_list,food_detail
                          |
                       list,curpage....
     */
    const food_list=useSelector(state => state.foods.food_list.list);

    return (
        <div className="container">
            <div className="row">
                {
                    food_list &&
                    food_list.map((food,index) =>
                        <div className="col-md-3" key={index}>
                            <div className="thumbnail">
                                <Link to={`/food/detail/${food.fno}`}>
                                    <img src={food.poster}  style={{"width":"250px","height":"150px"}} />
                                    <div className="caption">
                                        <p>{food.name}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}
export default FoodList