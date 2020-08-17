import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {
    Card, Button, CardHeader, CardBody,
    CardTitle, CardText, Row, Col, FormGroup, Label, Input,
} from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import './Todo.css'
function Todo({ todoList }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    
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

    return (
        <div>
            <Row className="justify-content-center px-5" xs={1} md={2} xl={3}>
                {
                    todoList.map(item =>
                        <Col key={item.id} className="p-3">
                            <Card>
                                <CardHeader className="d-flex justify-content-between">
                                    <p>to do 1</p>
                                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                        <DropdownToggle caret>
                                            Actions
                                            </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Edit</DropdownItem>
                                            <DropdownItem>Delete</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle>{item.title}</CardTitle>

                                    <Button>Toggle</Button>
                                    <CardText>
                                        <ol>
                                            {item.checkList.map(check =>
                                                <li key={check.id}>
                                                    <FormGroup check>
                                                        <Input type="checkbox" name="check" id="exampleCheck" />
                                                        <Label for="exampleCheck" className="check-input" check>
                                                            {check.status ? <del>{check.text}</del> : <p className="m-0">{check.text}</p>}
                                                        </Label>
                                                    </FormGroup>
                                                </li>
                                            )}
                                        </ol>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
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
