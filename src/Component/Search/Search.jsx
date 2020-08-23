import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';

function Search({search, handleChange}) {
    return (
        <Form className="py-2 px-3 mx-4 mx-md-5 rounded bg-info">
            <FormGroup>
                <Label htmlFor='search'>Search todo</Label>
                <Input type='search' id='search' name={'search'} value={search} onChange={handleChange} />
            </FormGroup>
        </Form>
    )
}

export default Search
