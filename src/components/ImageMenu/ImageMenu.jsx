import {Image} from '@mantine/core';
import Piggy from "../../images/picture-piggy-bank.png";
import PiggyTwo from "../../images/Bez nazwy-2.png";
import './ImageMenu.scss'

export function ImageMenu() {
    return (
        <div
            className='ImageMenu'
            // style={{
            //     // maxWidth: 185.8,
            //     // maxWidth: '6.67%',
            //     // maxHeight: 215.84,
            //     // maxHeight: '20%',
            //     marginTop: 16,
            //     marginBottom: 16,
            //     marginLeft: 'auto',
            //     marginRight: 'auto',
            // }}
        >
            <Image
                className='ImageMenu__picture'
                // src='../../src/images/picture-piggy-bank.png'
                src={Piggy}
                // src={PiggyTwo}
                alt='piggy bank'
                // withPlaceholder
                fit='contain'
            />
        </div>
    )
}