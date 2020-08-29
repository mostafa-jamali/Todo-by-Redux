import React, { useState } from 'react';
import { Card, Button, CardHeader, CardBody, CardTitle, Col } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'
import ToggleTextCard from '../ToggleTextCard/ToggleTextCard';
import { connect } from 'react-redux';
import { deleteTodo } from '../../Redux/Todo/Todo.action';
import './CardTodo.css'


function CardTodo({ item, deleteTodo }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownId, setDropdownId] = useState(null)
    const toggle = (id) => {
        setDropdownOpen(prevState => !prevState);
        setDropdownId(id)
    };

    const [toggleId, setToggleId] = useState(null)
    const [toggleShow, setToggleShow] = useState(false)
    const toggleButton = (id) => {
        setToggleId(id);
        setToggleShow(!toggleShow)
    }

    return (
        <Col className="py-3 px-0 p-md-3">
            <Card>
                <CardHeader className="d-flex justify-content-between">
                    <p>{item.title}</p>
                    <Dropdown isOpen={dropdownOpen} toggle={() => toggle(item.id)}>
                        <DropdownToggle caret>
                            Actions
                        </DropdownToggle>
                        {
                            dropdownOpen && dropdownId == item.id ?
                                <DropdownMenu>
                                    <DropdownItem><Link to={`/edit/${item.id}`} className="editDropdownItem">Edit</Link></DropdownItem>
                                    <DropdownItem onClick={() => deleteTodo(item.id)}>Delete</DropdownItem>
                                </DropdownMenu>
                                : <div></div>
                        }

                    </Dropdown>
                </CardHeader>
                <CardBody>
                    <CardTitle>{item.text}</CardTitle>
                    <Button onClick={() => toggleButton(item.id)} className="mb-3">Toggle</Button>
                    {
                        toggleId == item.id && toggleShow ?
                            <ol>
                                {item.checkList.map(checkItem =>
                                    <ToggleTextCard item={item} checkItem={checkItem} key={checkItem.id} />
                                )}
                            </ol>
                            : <div></div>
                    }
                </CardBody>
            </Card>
        </Col>

    )
}

export default connect(null, { deleteTodo })(CardTodo);
