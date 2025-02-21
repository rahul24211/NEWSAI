import React from 'react'

import { Menu, Button, Text, Avatar } from '@mantine/core';
import { SignOut } from '../redux/sclice/AuthSlice';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const ProfileDropDown = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSignOut = () => {

        dispatch(SignOut())
        navigate('/login')
       

    }
    return (
        <div className=''>








            <Menu shadow="md" width={150} >
                <Menu.Target>
                    <Avatar />
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Label>Application</Menu.Label>
                    <Menu.Item>
                        Settings
                    </Menu.Item>
                    <Menu.Item >
                        Messages
                    </Menu.Item>
                    <Menu.Item color='red' onClick={handleSignOut}>
                        Sign-Out
                    </Menu.Item>

                </Menu.Dropdown>
            </Menu>
        </div>
    )
}

export default ProfileDropDown
