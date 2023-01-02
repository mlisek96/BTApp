import { Link } from "react-router-dom";
import { IconReceipt2 } from '@tabler/icons';
import './Logo.scss'

export function Logo() {
    return (
        <div className="Logo">
            <Link
                className="Logo__name"
                to='/main-page'
            >
                <IconReceipt2
                    className='Logo__icon'
                />
                BTApp
            </Link>
        </div>
    )
}