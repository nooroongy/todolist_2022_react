import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Filter from "../components/Filter";
import Todo from "../components/Todo";
import AddTodo from "./AddTodo";

const Home = () => {
    const FILTER = {
        match: ['complete', 'updated_at'],
        indcudes: ['title'],
    }
    const getTodoNameFromId = id => todos.find(todo => todo.id === id)?.title;
    const [showModal, setShowModal] = useState(false);

    const [todos, setTodos] = useState([
        { complete: false, id: 1, title: '청소하기', tags: [3, 5, 6], created_at: '20220401', updated_at: '20220421' },
        // { complete: false, id: 2, title: '공부하기', tags: [], created_at: '20220402', updated_at: '20220416' },
        // { complete: false, id: 3, title: '책상치우기', tags: [2], created_at: '20220403', updated_at: '20220414' },
        // { complete: false, id: 4, title: '설거지하기', tags: [], created_at: '20220404', updated_at: '20220416' },
        // { complete: true, id: 5, title: '쓰레기버리기', tags: [2], created_at: '20220405', updated_at: '20220421' },
        // { complete: false, id: 6, title: '물걸레질하기', tags: [2], created_at: '20220406', updated_at: '20220418' },
        // { complete: false, id: 7, title: '점심먹기', tags: [], created_at: '20220406', updated_at: '20220418' },
        // { complete: false, id: 8, title: '집에 가는길에 병원들리기', tags: [], created_at: '20220406', updated_at: '20220418' },
        // { complete: false, id: 9, title: '운동하기', tags: [], created_at: '20220406', updated_at: '20220418' },
        // { complete: false, id: 10, title: '세수하기', tags: [6], created_at: '20220406', updated_at: '20220418' },
        // { complete: false, id: 11, title: '세수하기', tags: [6], created_at: '20220406', updated_at: '20220418' },
    ])

    const [filteredTodos, setFilteredTodos] = useState(todos)

    const showAddTodoModal = () => {
        setShowModal(true)
    }

    return <>
        <div className="search__wrap">
            <Filter data={todos} filter={FILTER} setter={setFilteredTodos}></Filter>
            <button className="search__btn" onClick={showAddTodoModal}>Add Todo</button>
        </div>
        {filteredTodos.map(todo => <Todo key={todo.id} {...todo} getTodoNameFromId={getTodoNameFromId}></Todo>)}
        <Modal show={showModal} setter={setShowModal}>
            <AddTodo></AddTodo>
        </Modal>
    </>
}

export default Home;