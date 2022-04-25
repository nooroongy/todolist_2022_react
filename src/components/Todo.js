import { useState } from "react";

const Todo = ({ title, id }) => {
    const [complete, setComplete] = useState(false);



    return <div>
        <div>{title}</div>
        <div>{id}</div>
    </div>
}

export default Todo;