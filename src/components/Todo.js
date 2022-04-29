import { useState } from "react";

const Todo = ({ id, title, tags = [], created_at, updated_at, datas, getTodoNameFromId, modiftCallback=()=>{}, deleteCallback=()=>{} }) => {
    const [complete, setComplete] = useState(false);

    function onClickDeleteBtn (){
        deleteCallback(id)
    }

    return <div className="todo__wrap">
        <input className="todo__input" type='checkbox'></input>
        <span className="todo__title">{title}
            <span className="todo__tags">
                {tags.map(tag => <span key={tag} className="todo__tag">@{getTodoNameFromId(tag)}</span>)}
            </span>
        </span>
        <span className="todo__date_wrap">
            <div className="todo__date_updated"><span>update </span>{updated_at}</div>
            <div className="todo__date_created"><span>create </span>{created_at}</div>
        </span>
        <i className="todo__delete" onClick={onClickDeleteBtn}>delete</i>
    </div>
}

export default Todo;