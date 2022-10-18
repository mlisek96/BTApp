import { Link } from "react-router-dom";
import './Logo.scss'

export function Logo() {
    return (
        <div className="Logo">
            <Link className="Logo__name" to='/'>BTApp</Link>
        </div>
    )
}