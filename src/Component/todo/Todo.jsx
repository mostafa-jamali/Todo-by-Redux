import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Row } from 'reactstrap'
import { connect } from 'react-redux';
import Search from '../Search/Search'
import CardTodo from '../CardTodo/CardTodo';
import './Todo.css';


function Todo({ todoList }) {

    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setSearch(value);
    }

    let searchTodo = todoList.filter(item => item.title.toLowerCase().startsWith(search.toLowerCase()));

    return (
        <div className="border rounded py-3 mx-lg-5">
            <Search handleChange={handleChange} search={search} />
            <Row className="justify-content-left px-5" xs={1} lg={2}>
                {
                    searchTodo.map(item =>
                        <CardTodo item={item} key={item.id} />
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
export default connect(mapStateToProps, {})(Todo);
