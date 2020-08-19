import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Row } from 'reactstrap'
import { connect } from 'react-redux';
import Search from '../Search/Search'
import CardTodo from '../CardTodo/CardTodo';
import './Todo.css';


function Todo({ todoList }) {
    const [search, setSearch] = useState('');
    // const [todolist, setTodolist] = useState([
    //     {
    //         id: 1,
    //         title: "title1",
    //         checkList: [
    //             { id: 1, text: "text1", status: false },
    //             { id: 2, text: "text2", status: false },
    //         ]
    //     },
    //     {
    //         id: 2,
    //         title: "title2",
    //         checkList: [
    //             { id: 1, text: "text1", status: false },
    //             { id: 2, text: "text2", status: true },
    //         ]
    //     }
    // ]);
    const handleChange = (event) => {
        const { value } = event.target;
        setSearch(value);
    }

    let searchTodo = todoList.filter(item => item.title.toLowerCase().startsWith(search.toLowerCase()));

    return (
        <div className="border rounded py-3">
            <Search handleChange={handleChange} search={search} />
            <Row className="justify-content-center px-5" xs={1} md={2} xl={3}>
                {
                    searchTodo.map(item =>
                        <CardTodo item={item} />
                    )
                }
            </Row>
            <Link to={"/add"}><button className="btn btn-primary add-button">Add</button></Link>
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        todoList: state.todoList.todo_List,
    }
}
export default connect(mapStateToProps)(Todo);
