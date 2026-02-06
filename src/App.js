
/*
      npm start => 서버 동작 (nodejs기반)
          |
       index.js
          |
        App호출
          | === return HTML
        index.html
     public : image / css / javascript lib / html
     src : js / ts / jsx / tsx
                    ----------- XML형식으로 HTML을 제작
           ------- 일반
     자바
       React : JSP
       Redux : MVC
       TanStackQuery : SpringFramework
       Next : SpringBoot
     Redux : 데이터 관리 + 화면 출력
             단방향 통신
             ---------- 보완 => 배민 / 쿠팡
     store : 실제 React에서 출력한 데이터 저장
     reducer : React에서 전송된 데이터를 store에 보내주는 역할
     action : 사용자 요청한 이벤트
     dispatch : store를 데이터를 읽어서 => 화면 출력

     store ------ component(HTML) => JSP
                       |
                     Action
                       |
                     Dispatch
                       |
                      Reduce
                       |
                      store
                          axios => 서버 데이터 읽기
      사용자(UI) -------- action호출 ------- reducer ---- store
                    |                  |      | 자동으로 store에 저장
                  dispatch()        dispatch()
          |                  |
         return          controller ---------------       | DB
          |
         JSP화면

      1. Action : reducer ==> store(사용자 UI에 출력)
         => 기능 수행 : foodListData()
               | dispatch
      2. Reducer: 결과값을 받아서 => Store
               | dispatch
      3. Store : 데이터 갱신 => 화면에 전송

 */
import {Provider} from "react-redux";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import store from "./store/store"
import FoodList from "./components/FoodList";
import FoodDetail from "./components/FoodDetail";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import BoardList from "./components/BoardList";
import BoardInsert from "./components/BoardInsert";
import BoardDetail from "./components/BoardDetail";
function App() {
  return (
     <Provider store={store}>
       <Router>
         <Routes>
           <Route path={"/"} element={<FoodList/>}/>
           <Route path={"/detail/:fno"} element={<FoodDetail/>}/>
           <Route path={"/recipe/list"} element={<RecipeList/>}/>
           <Route path={"/recipe/detail/:no"} element={<RecipeDetail/>}/>
           <Route path={"/board/list"} element={<BoardList/>}/>
           <Route path={"/board/insert"} element={<BoardInsert/>}/>
           <Route path={"/board/detail/:no"} element={<BoardDetail/>}/>
         </Routes>
       </Router>
     </Provider>
  );
}

export default App;
