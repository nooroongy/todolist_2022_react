import { useState } from "react";
import Modal from "../components/Modal";
import Filter from "../components/Filter";
import AddTodo from "./AddTodo";
import Paging from "../components/Paging";

const Home = () => {
    const FILTER = {
        match: ['complete', 'updated_at'],
        indcudes: ['title'],
    }
    const getTodoNameFromId = id => todos.find(todo => todo.id === id)?.title;
    const [showModal, setShowModal] = useState(false);

    const [todos, setTodos] = useState([
        { complete: false, id: 1, title: '청소하기', tags: [3, 5, 6], created_at: '20220401', updated_at: '20220421' },
<<<<<<< HEAD
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
=======
        { complete: false, id: 2, title: '공부하기', tags: [], created_at: '20220402', updated_at: '20220416' },
        { complete: false, id: 3, title: '책상치우기', tags: [2], created_at: '20220403', updated_at: '20220414' },
        { complete: false, id: 4, title: '설거지하기', tags: [], created_at: '20220404', updated_at: '20220416' },
        { complete: false, id: 5, title: '쓰레기버리기', tags: [2], created_at: '20220405', updated_at: '20220421' },
        { complete: false, id: 6, title: '물걸레질하기', tags: [2], created_at: '20220406', updated_at: '20220418' },
        { complete: false, id: 7, title: '점심먹기', tags: [], created_at: '20220406', updated_at: '20220418' },
        { complete: false, id: 8, title: '집에 가는길에 병원들리기', tags: [], created_at: '20220406', updated_at: '20220418' },
        { complete: false, id: 9, title: '운동하기', tags: [], created_at: '20220406', updated_at: '20220418' },
        { complete: false, id: 10, title: '세수하기', tags: [6], created_at: '20220406', updated_at: '20220418' },
        { complete: false, id: 11, title: '음식물쓰레기 버리기', tags: [5], created_at: '20220406', updated_at: '20220418' },
>>>>>>> 1475b2312c56495a6e982d90efc5c68488be2f16
    ])

    const [filteredTodos, setFilteredTodos] = useState(todos)

<<<<<<< HEAD
    const showAddTodoModal = () => {
        setShowModal(true)
    }
=======
    const todoModiftCallback = (data) => {
        setTodos(res => {
            return res.map(todo => {
                return todo.id === data.id ? { ...todo, ...data } : todo
            })
        })
    }

    const todoDeleteCallback = (id) => {
        setTodos(res => res.filter(todo => todo.id !== id))
    }

    const sortByComplete = todos => todos.sort(todo => todo.complete ? 1 : -1)
>>>>>>> 1475b2312c56495a6e982d90efc5c68488be2f16

    return <>
        <div className="search__wrap">
            <Filter data={todos} filter={FILTER} setter={setFilteredTodos}></Filter>
            <button className="search__btn" onClick={showAddTodoModal}>Add Todo</button>
        </div>
<<<<<<< HEAD
        {filteredTodos.map(todo => <Todo key={todo.id} {...todo} getTodoNameFromId={getTodoNameFromId}></Todo>)}
        <Modal show={showModal} setter={setShowModal}>
=======
        <Paging
            itemPerPage={5}
            datas={sortByComplete(filteredTodos)}
            dataProps={{
                modiftCallback: todoModiftCallback,
                deleteCallback: todoDeleteCallback,
                getTodoNameFromId
            }}></Paging>
        <Modal show={showModal} showSetter={setShowModal}>
>>>>>>> 1475b2312c56495a6e982d90efc5c68488be2f16
            <AddTodo></AddTodo>
        </Modal>
    </>
}

export default Home;