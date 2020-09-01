import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardTitle, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom'
import ToggleTextCard from '../ToggleTextCard/ToggleTextCard';
import { connect } from 'react-redux';
import { deleteTodo } from '../../Redux/Todo/Todo.action';
import './CardTodo.css'

//material ui
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
    },
    toggleButton: {
        background: 'linear-gradient(45deg, #FE6B8B 10%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    dropDownButton: {
        background: 'linear-gradient(45deg, #2196F3 10%, #21CBF3 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    }
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

function CardTodo({ item, deleteTodo }) {
    const classes = useStyles();

    const [toggleId, setToggleId] = useState(null)
    const [toggleShow, setToggleShow] = useState(false)
    const toggleButton = (id) => {
        setToggleId(id);
        setToggleShow(!toggleShow)
    }

    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => {
        setOpenModal(!openModal)
        setAnchorEl(null);
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Col className="py-3 px-0 p-md-3">
            <Card>
                <CardHeader className="d-flex justify-content-between">
                    <h4 className="my-auto">{item.title}</h4>
                    <div>
                        <Button aria-controls="customized-menu" aria-haspopup="true" className={classes.dropDownButton} onClick={handleClick} >
                            Edit / Delete
                        </Button>
                        <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
                            <StyledMenuItem>
                                <ListItemIcon>
                                    <EditIcon fontSize="small" />
                                </ListItemIcon>
                                <Link to={`/edit/${item.id}`} className="editDropdownItem"><ListItemText primary="Edit todo" /></Link>
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon>
                                    <DeleteOutlinedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText onClick={toggleModal} primary="Delete todo" />
                            </StyledMenuItem>
                        </StyledMenu>
                    </div>
                </CardHeader>

                <Modal isOpen={openModal} toggle={toggleModal}>
                    <ModalHeader className="bg-warning" toggle={toggleModal}>Delete todo</ModalHeader>
                    <ModalBody>
                        <h5>Are you sure delete this todo?</h5>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="contained" color="secondary" onClick={() => deleteTodo(item.id)} className={classes.root} >Delete</Button>
                        <Button variant="contained" color="primary" onClick={toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <CardBody>
                    <CardTitle><h5>{item.text}</h5></CardTitle>
                    <Button onClick={() => toggleButton(item.id)} className={`${classes.toggleButton} mb-3`}>Toggle items</Button>
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
