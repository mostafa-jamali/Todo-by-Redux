import React, { useState } from 'react';
import { FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import {changeCheckItemStatus} from '../../Redux/Todo/Todo.action'
import './ToggleTextCard.css'

function ToggleTextCard({ item, checkItem,changeCheckItemStatus }) {
    const [status, setStatus] = useState(null)

    return (
        <li className="liToggle">
            <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheck" onChange={() => changeCheckItemStatus(item.id, checkItem.id)} checked={checkItem.status} />
                {checkItem.status ? <del>{checkItem.text}</del> : checkItem.text}
            </FormGroup>
        </li>
    )
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList.todo_List,
    }
}
export default connect(null, {changeCheckItemStatus})(ToggleTextCard);
