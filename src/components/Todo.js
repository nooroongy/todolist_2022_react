import { useState } from "react";

const Todo = ({ id, title, tags = [], created_at, updated_at, datas, getTodoNameFromId }) => {
    const [complete, setComplete] = useState(false);

    return <div className="todo__wrap">
        <input className="todo__input" type='checkbox'></input>
        <span className="todo__title">{title}
            <span className="todo__tags">
                {tags.map(tag => <span key={tag} className="todo__tag">@{getTodoNameFromId(tag)}</span>)}
            </span>
        </span>
        <span className="todo__date_wrap">
            <span className="todo__date_updated"></span>
            <span className="todo__date_created"></span>
        </span>
        <i className="todo__delete">{id}</i>
    </div>
}

export default Todo;