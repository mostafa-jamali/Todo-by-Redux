import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Form, Input, FormGroup, Label, Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import { useSelector } from 'react-redux'
import { connect } from 'react-redux';
import { addTodo, editTodo } from '../../Redux/Todo/Todo.action';

function AddTodo({ addTodo, length, editTodo }) {
    const history = useHistory();
    const { todoId } = useParams();

    const editObject = useSelector(state => state.todoList.todo_List.find(item => item.id == todoId)) //todoId = useParams
    const [todos, setTodos] = useState(editObject ? { title: editObject.title, text: editObject.text } : {
        title: "",
        text: "",
    })

    const [checkItem, setCheckItem] = useState(editObject ? editObject.checkList : [{
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

        editObject && editTodo({ id: editObject.id, ...todos, checkList: checkItem });

        !editObject && addTodo({ id: length + 1, ...todos, checkList: checkItem })

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
        <Form className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto p-3" onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <FormGroup>
                        <Label htmlFor="title" className="mb-0">Title:</Label>
                        <Input placeholder='title' type="text" name='title' id='title' className="text-info" value={todos.title} onChange={handleChange} />
                    </FormGroup>
                </CardHeader>
                <CardBody>
                    <FormGroup>
                        <Label htmlFor="text" className="mb-0">Text:</Label>
                        <Input placeholder='text' type="text" name='text' id='text' className="text-info" value={todos.text} onChange={handleChange} />
                    </FormGroup>
                    {checkItem.map(item =>
                        <div key={item.id}>
                            <FormGroup>
                                <Label htmlFor="checkItem" className="mb-0">Check list {item.id}</Label>
                                <Input placeholder={`Check list ${item.id}`} type="text" name='checkItem' id='checkItem' className="text-info" value={item.text} onChange={(e) => handleChangeItem(e, item.id)} />
                            </FormGroup>
                        </div>
                    )}
                </CardBody>
                <CardFooter>
                    <Button color='success' className="border" type="submit">save</Button> {' '}
                    <Button color='primary' className="border" type="button" onClick={addCheckItem} >add check list</Button> {' '}
                    <Button type="reset" className="border" onClick={handleClear}>clear</Button>
                </CardFooter>



            </Card>
        </Form>
    )

}

const mapStateToProps = (state) => {
    return {
        length: state.todoList.todo_List.length,
    }
}
export default connect(mapStateToProps, { addTodo, editTodo })(AddTodo);