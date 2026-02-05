import {useState,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {fetchRecipeList} from "../actions/recipeActions";
import {Link} from "react-router";
function RecipeList() {
    // 처리
    const [curpage, setCurpage] = useState(1);
    const dispatch = useDispatch(); // Action 함수
    useEffect(() => {
        dispatch(fetchRecipeList(curpage));
    },[curpage]);
    /*
      state : food , recipe , seoul , board
               |
              foods : food_list,food_detail
                          |
                       list,curpage....
     */
    const recipe_list=useSelector(state => state.recipes.recipe_list.list);
    const totalpage=useSelector(state=> state.recipes.recipe_list.totalpage)
    const startPage=useSelector(state=> state.recipes.recipe_list.startPage)
    const endPage=useSelector(state=> state.recipes.recipe_list.endPage)
    // food_list => Map으로 전송된 모든 값
    const pageChange=(page)=>{
        setCurpage(page)
    }
    const prev=()=>{
        setCurpage(startPage-1)
    }
    const next=()=>{
        setCurpage(endPage+1)
    }

    const row=[]
    // <<
    if(startPage>1)
    {
        row.push(
            <li><a className={"a-link"} onClick={prev}>&laquo;</a></li>
        )
    }

    // 1 2 3 4 5...
    for(let i=startPage;i<=endPage;i++){
        row.push(
            <li className={i===curpage?"active":""}>
                <a className={"a-link"} onClick={()=>pageChange(i)}>{i}</a>
            </li>
        )
    }
    // >>
    if(endPage<totalpage)
    {
        row.push(
            <li><a className={"a-link"} onClick={next}>&raquo;</a></li>
        )
    }

    return (
        <div className="container">
            <div className="row">
                {
                    recipe_list &&
                    recipe_list.map((recipe,index) =>
                        <div className="col-md-3" key={index}>
                            <div className="thumbnail">
                                <Link to={`/recipe/detail/${recipe.no}`}>
                                    <img src={recipe.poster}  style={{"width":"250px","height":"150px"}}
                                      title={recipe.title}
                                    />
                                    <div className="caption">
                                        <p>{recipe.chef}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    )
                }
            </div>
            <div className="row text-center" style={{"marginTop":"10px"}} >
                <ul className="pagination">
                    {row}
                </ul>
            </div>
        </div>
    )
}
export default RecipeList