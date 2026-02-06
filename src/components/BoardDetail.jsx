import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {boardDetail} from "../actions/boardActions";


function BoardDetail() {
    const {no}=useParams()
    const dispatch = useDispatch()
    const nav=useNavigate()

    useEffect(()=>{
        dispatch(boardDetail(no))
    },[])

    const detail=useSelector((state)=>state.boards.board_detail)
    return (
        <div className="container">
            <div className="row">
                <h3 className={"text-center"}>내용보기</h3>
                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th className={"text-center success"} width={"20%"}>번호</th>
                        <th className={"text-center"} width={"30%"}>{detail.no}</th>
                        <th className={"text-center success"} width={"20%"}>작성일</th>
                        <th className={"text-center"} width={"30%"}>{detail.regdate}</th>
                    </tr>
                    <tr>
                        <th className={"text-center success"} width={"20%"}>이름</th>
                        <td className={"text-center"} width={"30%"}>{detail.name}</td>
                        <th className={"text-center success"} width={"20%"}>조회수</th>
                        <td className={"text-center"} width={"30%"}>{detail.hit}</td>
                    </tr>
                    <tr>
                        <th className={"text-center success"} width={"20%"}>제목</th>
                        <td colSpan={3}>{detail.subject}</td>
                    </tr>
                    <tr>
                        <td colSpan={4} className={"text-left"} height={200}
                         valign={"top"}
                        ><pre style={{"whiteSpace":"pre-wrap"}}>{detail.content}</pre></td>
                    </tr>
                    <tr>
                        <td colSpan={4} className={"text-right"}>
                            <Link to={"/board/list"} className={"btn-xs btn-danger"}>목록</Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BoardDetail
