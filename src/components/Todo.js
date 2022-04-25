import { useState } from "react";
import styledComponents from "styled-components";

const Todo = ({ title, id, tags = [] }) => {
    const [complete, setComplete] = useState(false);



    return <div className="todo__wrap">
        <input className="todo__input" type='checkbox'></input>
        <span className="todo__title">{title}</span>
        <span className="todo__tags">
            {tags.map(tag => <span>{tag}</span>)}
        </span>
        <div>{id}</div>
    </div>
}

export default Todo;