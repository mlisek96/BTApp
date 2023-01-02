import { Image } from '@mantine/core';
import Piggybank from '../../images/picture-piggy-bank.png'
import './ImageMenu.scss'

export function ImageMenu() {
    return (
        <div className='ImageMenu'>
            <Image
                className='ImageMenu__picture'
                // src='../../src/images/picture-piggy-bank.png'
                src={Piggybank}
                alt='piggy bank'
                withPlaceholder
                translate={}
            />
        </div>
    )
}