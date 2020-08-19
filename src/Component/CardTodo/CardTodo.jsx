import React, { useState } from 'react'
import {
    Card, Button, CardHeader, CardBody,
    CardTitle, Col, FormGroup, Input,
} from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ToggleTextCard from '../ToggleTextCard/ToggleTextCard';

function CardTodo({ item }) {

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
        <Col key={item.id} className="p-3">
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
                                    <DropdownItem>Edit</DropdownItem>
                                    <DropdownItem>Delete</DropdownItem>
                                </DropdownMenu>
                                : <div></div>
                        }

                    </Dropdown>
                </CardHeader>
                <CardBody>
                    <CardTitle>{item.text}</CardTitle>
                    <Button onClick={() => toggleButton(item.id)}>Toggle</Button>
                    {
                        toggleId == item.id && toggleShow ?
                            <ol>
                                {item.checkList.map(check =>
                                    <ToggleTextCard check={check} />
                                )}
                            </ol>
                            : <div></div>
                    }
                </CardBody>
            </Card>
        </Col>

    )
}

export default CardTodo
