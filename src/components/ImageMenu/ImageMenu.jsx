import { Image } from '@mantine/core';
// import image from 'src/images/picture-piggy-bank.png'
import './ImageMenu.scss'

export function ImageMenu() {
    return (
        <div className='ImageMenu'>
            <Image
                className='ImageMenu__picture'
                src='../../src/images/picture-piggy-bank.png'
                // src={image}
                alt='piggy bank'
                withPlaceholder
            />
        </div>
    )
}