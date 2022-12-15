import { NavLink } from "react-router-dom";
import './ButtonMenu.scss';

export function ButtonMenu({linkTo, icon, label}) {
    return (
        <div className="ButtonMenu">
            <NavLink
                className='ButtonMenu__link'
                to={linkTo}
            >
                {icon}
                {label}
            </NavLink>
        </div>
    )
}