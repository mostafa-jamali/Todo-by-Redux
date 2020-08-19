import React from 'react';
import { FormGroup, Input } from 'reactstrap';

function ToggleTextCard({ check }) {
    return (
        <li key={check.id}>
            <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheck" />
                {check.status ? <del>{check.text}</del> : check.text}
            </FormGroup>
        </li>
    )
}

export default ToggleTextCard
