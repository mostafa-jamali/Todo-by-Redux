import React from 'react';
import { FormGroup, Input } from 'reactstrap';

function ToggleTextCard({ checkItem }) {
    return (
        <li>
            <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheck" />
                {checkItem.status ? <del>{checkItem.text}</del> : checkItem.text}
            </FormGroup>
        </li>
    )
}

export default ToggleTextCard
