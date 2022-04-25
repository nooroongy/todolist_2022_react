import { useState } from "react";
import Modal from "../components/Modal";
import Todo from "../components/Todo";
import AddTodo from "./AddTodo";

const Home = () => {
    const [testData] = useState([
        { title: 'test1' ,id:1},
        { title: 'test2' ,id:2},
        { title: 'test3' ,id:3},
        { title: 'test4' ,id:4},
        { title: 'test5' ,id:5},
        { title: 'test6' ,id:6},
        { title: 'test7' ,id:7},
    ])




    return <>
        <div>
            <input></input>
            <button>Add Todo</button>
        </div>
        {testData.map(v => <Todo {...v} ></Todo>)}
        <Modal>
            <AddTodo></AddTodo>
        </Modal>
    </>
}

export default Home;