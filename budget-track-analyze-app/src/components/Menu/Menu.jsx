import { NavLink } from "react-router-dom";

export function Menu() {
    return (
        <ul className="Menu">
            <li><NavLink className="Menu__item">Add Expense</NavLink></li>
            <li><NavLink className="Menu__item">Main Page</NavLink></li>
            <li><NavLink className="Menu__item">Expenses List</NavLink></li>
        </ul>
    )
}