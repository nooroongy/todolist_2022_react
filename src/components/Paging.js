import { useEffect, useState } from "react";
import Todo from "./Todo";

function Paging({ datas, dataProps, itemPerPage = 10 }) {
    const [pages, setPages] = useState([1])
    const [currentPage, setCurrentPage] = useState(1)
    const [displaedData, setDisplayedData] = useState(datas)

    useEffect(() => {
        const getPages = pageNum => new Array(pageNum).fill(0).map((_, i) => i + 1)
        setDisplayedData(datas.filter(
            (data, i) => (i < itemPerPage * currentPage && i >= itemPerPage * (currentPage - 1))))

        setPages(getPages(Math.ceil(datas.length / itemPerPage)))
    }, [datas, currentPage])

    useEffect(() => {
        if (!pages.includes(currentPage)) {
            setCurrentPage(res => res - 1);
        }
    }, [pages])

    function onClickPage({ target: { innerText } }) {
        setCurrentPage(innerText * 1)
    }

    return <div className="paging__wrap">
        {displaedData.map(todo => <Todo key={todo.id} {...todo} {...dataProps}
        ></Todo>)}
        <div className="paging_pages">
            {pages.map(page => <span key={page}
                className={`paging__page ${currentPage === page ? 'paging__current' : ''}`}
                onClick={onClickPage} >{page}</span>)}
        </div>
    </div>
}

export default Paging;