import { Image } from '@mantine/core';
import './ImageMenu.scss'

export function ImageMenu() {
    return (
        <div className='ImageMenu'>
            <Image
                className='ImageMenu__picture'
                src='../../src/images/picture-menu-1.png'
            />
        </div>
    )
}