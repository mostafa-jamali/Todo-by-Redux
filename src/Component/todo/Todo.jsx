import React, { useState } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import { Row, Card, CardHeader, CardBody } from 'reactstrap'
import { connect } from 'react-redux';
import Search from '../Search/Search'
import CardTodo from '../CardTodo/CardTodo';
import DoneList from '../DoneList/DoneList';
import AddTodo from '../AddTodo/AddTodo'
import './Todo.css';

//material ui
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import PlaylistAddCheckRoundedIcon from '@material-ui/icons/PlaylistAddCheckRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';

const useStyles = makeStyles({
    root: {
        margin: "auto",
        marginTop: 5,
        marginBottom: 5,
    },
    borderButIcon: {
        borderRight: "2px solid rgba(0,0,0,.03)",
    },
    butIcon: {
    }
});

function Todo({ todoList }) {
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setSearch(value);
    }

    let searchTodo = todoList.filter(item => item.title.toLowerCase().startsWith(search.toLowerCase()));

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div className="border rounded mx-lg-5">
            <Card className="">
                <CardHeader className="px-2">
                    <BottomNavigation value={value} onChange={(event, newValue) => { setValue(newValue) }} showLabels className={classes.root + " col-12 col-sm-8 col-lg-6 col-xl-5 px-0 rounded"} >
                        <BottomNavigationAction component={Link} to="/todoList/" className={classes.borderButIcon + " px-0 px-sm-3"} label="TodoList" icon={<PlaylistAddCheckRoundedIcon />} />
                        <BottomNavigationAction component={Link} to="/doneList/" className={classes.borderButIcon + " px-0 px-sm-3"} label="DoneList" icon={<DoneAllRoundedIcon />} />
                        <BottomNavigationAction component={Link} to="/searchTodo/" className={classes.borderButIcon + " px-0 px-sm-3"} label="Search" icon={<SearchRoundedIcon />} />
                        <BottomNavigationAction component={Link} to="/add/" className={classes.butIcon + " px-0 px-sm-3"} label="Add todo" icon={<PlaylistAddRoundedIcon />} />
                    </BottomNavigation>
                </CardHeader>

                <CardBody className="py-3">
                    <Switch>
                        <Route path={"/searchTodo/"}>
                            <Search handleChange={handleChange} search={search} />
                            <Row className="justify-content-left px-sm-5" xs={1} lg={2}>
                                {
                                    searchTodo.map(item =>
                                        <CardTodo item={item} key={item.id} />
                                    )
                                }
                            </Row>
                        </Route>
                        <Route path={"/todoList/"}>
                            <Row className="justify-content-left px-sm-5" xs={1} lg={2}>
                                {
                                    searchTodo.map(item =>
                                        <CardTodo item={item} key={item.id} />
                                    )
                                }
                            </Row>
                        </Route>
                        <Route path={"/doneList/"}>
                            <Card className="mx-5">
                                <CardHeader>DoneList</CardHeader>
                                <CardBody>
                                    {
                                        searchTodo.map(item =>
                                            <div key={item.id}>
                                                <h4 className="mt-4 mb-0">{item.title}</h4>
                                                <ol>
                                                    <DoneList item={item} />
                                                </ol>
                                            </div>
                                        )
                                    }
                                </CardBody>
                            </Card>
                        </Route>
                        <Route path={"/add/"}>
                            <AddTodo />
                        </Route>
                        <Route path={"/edit/:todoId/"}>
                            <AddTodo />
                        </Route>
                    </Switch>
                </CardBody>

            </Card>
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        todoList: state.todoList.todo_List,
    }
}
export default connect(mapStateToProps, {})(Todo);



