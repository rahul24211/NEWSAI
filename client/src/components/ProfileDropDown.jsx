import React from 'react'

import { Menu, Button, Text, Avatar, Divider } from '@mantine/core';
import { SignOut } from '../redux/sclice/AuthSlice';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Book, Bookmark, LogOut, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCookies } from '../utils/utils';

const ProfileDropDown = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSignOut = () => {


        dispatch(SignOut())
        navigate('/login')


    }
    return (
        <div>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Avatar className="cursor-pointer" />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Profile</Menu.Label>

          <Link to="/profile">
            {' '}
            <Menu.Item leftSection={<User size={16} />}>Profile</Menu.Item>
          </Link>
          <Menu.Item
            leftSection={<Bookmark size={16} />}
            onClick={handleSignOut}
          >
            Bookmarks
          </Menu.Item>
          <Menu.Item leftSection={<Book size={16} />} onClick={handleSignOut}>
            Reading History
          </Menu.Item>

          <Divider />
          <Menu.Item
            leftSection={<LogOut size={16} />}
            color="red"
            onClick={handleSignOut}
          >
            Sign Out
          </Menu.Item>
          <Text leftSection={<Mail size={16} />} ml={20} size="sm">
            {getCookies('email')}
          </Text>
        </Menu.Dropdown>
      </Menu>
    </div>
    )
}

export default ProfileDropDown
