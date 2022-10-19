import { NavLink } from "react-router-dom";
import { IconHome } from '@tabler/icons';
import { IconListDetails } from '@tabler/icons';
import { ButtonAddExpense } from "../ButtonAddExpense/ButtonAddExpense.jsx";
import './Menu.scss'

export function Menu() {
    return (
        <ul className="Menu">
            <li>
                <ButtonAddExpense />
            </li>
            <li>
                <NavLink className="Menu__item" to="/">
                    <IconHome className="Menu__icon"/>
                    Main Page
                </NavLink>
            </li>
            <li>
                <NavLink className="Menu__item" to="/expenses-table">
                    <IconListDetails className='Menu__icon'/>
                    Expenses Table
                </NavLink>
            </li>
        </ul>
    )
}