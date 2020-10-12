import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loading from '../components/Loading'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Table } from 'react-bootstrap'
import { listUsers } from '../actions/userActions'

const UserListScreen = () => {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList

    const deleteHandler = () => {
        console.log('deleteHandler')
    }

    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch])

    return (
        <>
            <h1>Users</h1>
            {loading ? <Loading /> : error ? <Message variant='danger'>{error}</Message>
            : (
                <Table striped bordered hover responsive className='table-sm'>
                    <thread>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th></th>
                        </tr>
                    </thread>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user._name}</td>
                                <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                                <td>
                                    {user.isAdmin ? (<i className='fas fa-check' style={{color: 'green'}}></i>) : (
                                        <i className='fas fa-times' style={{color: 'red'}}></i>
                                    )}
                                </td>
                                <td>
                                    <LinkContainer to={`/user/${user._id}/edit`}>
                                        <Button variant='light' className='btn-sm'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                    </LinkContainer>
                                    <Button 
                                        variant='danger' 
                                        className='btn-sm' 
                                        onClick={() => deleteHandler(user._id)}
                                    >
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    )
}

export default UserListScreen
