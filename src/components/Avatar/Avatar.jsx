import {useState, useEffect} from "react";
import { Avatar } from '@mantine/core';
import './Avatar.scss';

export function AvatarLogo() {
    const [name, setName] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('valueNameTaken');
        if (name) {
            setName(name);
        }
    }, []);

    return (
        <div className="Avatar">
            <Avatar
                className='Avatar__icon'
                radius="xl"
                alt='no image here'/>
            <h1
                className='Avatar__text'
            >
                Hello,
            </h1>
            <h1
                id='name-LogIn'
                className='Avatar__text'
            >
                {name}!
            </h1>
        </div>
    )
}