import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { addTodo } from '../../Redux/Todo/Todo.action';

function AddTodo({ addTodo, length }) {
    const history = useHistory();
    const [todos, setTodos] = useState({
        id: length + 1,
        title: "",
        text: "",
    })
    const [checkItem, setCheckItem] = useState([{
        id: 1,
        text: "",
        status: false
    }])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTodos({ ...todos, [name]: value })
    }
    const handleChangeItem = (event, id) => {
        setCheckItem(checkItem.map(item => item.id == id ? { ...item, text: event.target.value } : item))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo({ ...todos, checkList: checkItem })
        history.push('/')
    }
    const addCheckItem = () => {
        setCheckItem([...checkItem, { id: checkItem.length + 1, text: checkItem.text, status: false }])
    }
    const handleClear = () => {
        // setTodos({
        //     title: "",
        //     text: "",
        // })
    }
    return (
        <Form className="col-6 mx-auto mt-5 p-3 border rounded-lg bg-info" onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="title" className="mb-0">Title:</Label>
                <Input placeholder='title' type="text" name='title' id='title' onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="text" className="mb-0">Text:</Label>
                <Input placeholder='text' type="text" name='text' id='text' onChange={handleChange} />
            </FormGroup>

            {checkItem.map(item =>
                <div key={item.id}>
                    <FormGroup>
                        <Label htmlFor="checkItem" className="mb-0">Check item {item.id}</Label>
                        <Input placeholder={`Check item ${item.id}`} type="text" name='checkItem' id='checkItem' onChange={(e) => handleChangeItem(e, item.id)} />
                    </FormGroup>
                </div>
            )}

            <Button color='success' className="border" type="submit">save</Button> {' '}
            <Button color='primary' className="border" type="button" onClick={addCheckItem} >add check item</Button> {' '}
            <Button type="button" className="border" onClick={handleClear}>clear</Button>
        </Form>
    )

}

const mapStateToProps = (state) => {
    return {
        length: state.todoList.todo_List.length,
    }
}
export default connect(mapStateToProps, { addTodo })(AddTodo);