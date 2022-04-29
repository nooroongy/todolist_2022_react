import { useEffect, useState } from "react";

const Todo = ({ complete,id, title, tags = [], created_at, updated_at, getTodoNameFromId, modiftCallback=()=>{}, deleteCallback=()=>{} }) => {
    const [isComplete, setIsComplete] = useState(false);
    useEffect(()=>{
        setIsComplete(complete)
    },[])

    function onClickDeleteBtn (){
        deleteCallback(id)
    }

    function onChangeComplete ({target:{checked}}){
        setIsComplete(checked);
        modiftCallback({id,complete:checked})
    }

    return <div className={`todo__wrap ${isComplete ? 'todo__complete' : ''}` }>
        <input className="todo__input" type='checkbox' onChange={onChangeComplete} checked={isComplete}></input>
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