import { Avatar } from '@mantine/core';
import './Avatar.scss'

export function AvatarLogo() {
    return (
        <div className="Avatar">
            <Avatar className='Avatar__icon' radius="xl" alt='no image here'/>
            <h1 className='Avatar__text'>Hello,</h1>
            <h1 className='Avatar__text'>name!</h1>
        </div>
    )
}