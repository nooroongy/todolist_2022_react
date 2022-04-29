import { useState } from "react";
import Modal from "../components/Modal";
import Filter from "../components/Filter";
import AddTodo from "./AddTodo";
import Paging from "../components/Paging";
import EditTodo from "./EditTodo";
const DATA = [
    { complete: false, id: 1, title: '청소하기', tags: [3, 5, 6], created_at: '20220401', updated_at: '20220421' },
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
]

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalInfo, setModalInfo] = useState('add')
    const [selectedTodo, setSelectedTodo] = useState({})
    const [todos, setTodos] = useState(DATA)
    const [filteredTodos, setFilteredTodos] = useState(todos)

    const FILTER = {
        match: ['complete', 'updated_at'],
        includes: ['title'],
    }

    const todoModiftCallback = data => setTodos(res => res.map(todo => todo.id === data.id ? { ...todo, ...data } : todo))

    const getTodoNameFromId = id => todos.find(todo => todo.id === id)?.title;

    const todoDeleteCallback = id => setTodos(res => res.filter(todo => todo.id !== id).map(todo => todo.tags.includes(id) ? { ...todo, tags: todo.tags.filter(tag => tag !== id) } : todo))


    const todoeditCallback = id => {
        setSelectedTodo(todos.find(todo => todo.id === id))
        setModalInfo('edit')
        setShowModal(true)
    }

    const todoConfirmComplete = tags => {
        const beforeCompleteTags = todos
            .filter(todo => tags.includes(todo.id))
            .filter(todo => !todo.complete)
            .map(todo => todo.title)

        return {
            confirm: beforeCompleteTags.length > 0 ? false : true,
            callback: () => { alert(`${beforeCompleteTags.join(',')}을 먼저 완료해주세요`) }
        };
    }

    const sortByComplete = todos => todos.sort(todo => todo.complete ? 1 : -1)

    function showAddTodoModal() {
        setModalInfo('add')
        setShowModal(true)
    }

    const addCallback = ({ tags, title }) => {
        const now = getDateString(new Date())

        setShowModal(false)
        setTodos(res => [...res, {
            complete: false,
            id: res.length + 1,
            title, tags,
            created_at: now,
            updated_at: now
        }])
    }

    const editCallback = ({ tags, title, id }) => {
        const updated_at = getDateString(new Date())

        setShowModal(false)
        setTodos(res => res.map(todo => todo.id === id ? { ...todo, title, tags, updated_at } : todo))
    }

    const getDateString = dateObj => `${dateObj.getFullYear()}${(dateObj.getMonth() + 1 + '').padStart(2, 0)}${(dateObj.getDate() + '').padStart(2, 0)}`

    return <>
        <div className="search__wrap">
            <Filter data={todos} filter={FILTER} setter={setFilteredTodos}></Filter>
            <button className="search__btn" onClick={showAddTodoModal}>Add Todo</button>
        </div>
        <Paging
            itemPerPage={7}
            datas={sortByComplete(filteredTodos)}
            dataProps={{
                modiftCallback: todoModiftCallback,
                deleteCallback: todoDeleteCallback,
                editCallback: todoeditCallback,
                confirmComplete: todoConfirmComplete,
                getTodoNameFromId
            }}></Paging>
        <Modal show={showModal} setter={setShowModal}>{
            modalInfo === 'add' ?
                <AddTodo todos={todos} addCallback={addCallback}></AddTodo> :
                <EditTodo todos={todos} todo={selectedTodo} editCallback={editCallback}></EditTodo>
        } </Modal>
    </>
}

export default Home;