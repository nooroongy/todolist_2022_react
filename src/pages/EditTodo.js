import { useEffect, useState } from "react";

const EditTodo = ({ todo, todos, editCallback }) => {
    const [tags, setTags] = useState([])
    const [title, setTittle] = useState('')

    useEffect(() => {
        const { tags, title } = todo;
        setTags(tags)
        setTittle(title)
    }, [todo]);

    function onClickTag(id) {
        setTags(res => {
            return res.includes(id) ? res.filter(tag => tag !== id) : [...res, id]
        })
    }

    function onClickeditButton() {
        editCallback({ title, tags, id: todo.id })
        setTags([])
        setTittle('')
    }

    function onInputTitleInput({ target: { value } }) {
        setTittle(value)
    }

    return <div className="addTodo__wrap">
        <div className="addTodo__title">todo Name</div>
        <input className="addTodo__input" value={title} onInput={onInputTitleInput}></input>
        <div className="addTodo__title">tag</div>
        <div className="addTodo__tags">
            {todos.map(todo => <span key={todo.id}
                onClick={() => { onClickTag(todo.id) }}
                className={`addTodo__tag ${tags.includes(todo.id) ? 'addTodo__tag_selected' : ''}`}>{todo.title}</span>)}
        </div>
        <button className="addTodo__button" onClick={onClickeditButton}>Edit Todo</button>
    </div>
}

export default EditTodo;