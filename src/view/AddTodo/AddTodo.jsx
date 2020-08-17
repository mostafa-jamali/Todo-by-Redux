import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';

import { connect } from 'react-redux';
import {addTodo} from '../../Redux/Todo/Todo.action';

function AddTodo({addTodo}) {
    const history = useHistory();

    const handleChange = (event) => {
        const { name, value } = event.target;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // addTodo()
        history.push('/')
    }
    return (
        <Form className="col-6" onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="name">title:</Label>
                <Input placeholder='title' type="text" name='name' id='name' onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">text:</Label>
                <Input placeholder='Email' type="email" name='email' id='email' onChange={handleChange} />
            </FormGroup>
        
            <Button color='success' type="submit">save</Button> {' '}
            <Button color='primary' type="button">add text</Button> {' '}
            <Button type="button" >clear</Button>
        </Form>
    )

}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList.todo_List,
    }
}
export default connect(mapStateToProps, {addTodo})(AddTodo);