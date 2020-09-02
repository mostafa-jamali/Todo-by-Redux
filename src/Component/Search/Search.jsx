import React from 'react'
import { Form, FormGroup, Input } from 'reactstrap';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

function Search({ search, handleChange }) {
    return (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <Paper elevation={0}>
                <Form className="py-2 px-3 mx-sm-5 mx-md-5 rounded bg-info">
                    <FormGroup>
                        <Input className="my-3" type='search' id='search' name={'search'} value={search} placeholder="Search todo" onChange={handleChange} />
                    </FormGroup>
                </Form>
            </Paper>
        </Slide>
    )
}

export default Search
