import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { addTodo } from '../../Redux/Todo/Todo.action';

function AddTodo({ todoList, addTodo }) {
    const history = useHistory();
    const [checkItem, setCheckItem] = useState([{
        id: 1,
        text: "text1",
        status: false
    }])

    const handleChange = (event) => {
        const { name, value } = event.target;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // addTodo()
        history.push('/')
    }
    const addCheckItem = () => {
        checkItem.id = checkItem.length + 1
        setCheckItem([...checkItem, checkItem])
    }
    return (
        <Form className="col-6 mx-auto mt-5 p-3 border rounded-lg bg-info" onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="name" className="mb-0">Title:</Label>
                <Input placeholder='title' type="text" name='name' id='name' onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email" className="mb-0">Text:</Label>
                <Input placeholder='text' type="email" name='email' id='email' onChange={handleChange} />
            </FormGroup>

            {checkItem.map(item =>
                <div key={item.id}>
                    <FormGroup>
                        <Label htmlFor="email" className="mb-0">Check item {item.id}</Label>
                        <Input placeholder={`Check item ${item.id}`} type="email" name='email' id='email' onChange={handleChange} />
                    </FormGroup>
                </div>
            )}

            <Button color='success' className="border" type="submit">save</Button> {' '}
            <Button color='primary' className="border" type="button" onClick={addCheckItem} >add check item</Button> {' '}
            <Button type="button" className="border" >clear</Button>
        </Form>
    )

}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList.todo_List,
    }
}
export default connect(mapStateToProps, { addTodo })(AddTodo);