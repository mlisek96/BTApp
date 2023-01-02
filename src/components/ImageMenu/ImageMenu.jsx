import {Image} from '@mantine/core';
import Piggy from "../../images/picture-piggy-bank.png";
import './ImageMenu.scss'

export function ImageMenu() {
    return (
        <div
            className='ImageMenu'
        >
            <Image
                className='ImageMenu__picture'
                src={Piggy}
                alt='piggy bank'
                fit='contain'
            />
        </div>
    )
}