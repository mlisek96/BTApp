import {Diagrams} from "../../components/Diagrams/index.jsx";
import {List} from "../../components/List/index.jsx";
import {Calendar} from "../../components/Calendar/Calendar.jsx";
import "./MainPage.scss"

export function MainPage() {
    return (
        <div className="MainPage">
            <h1 className="MainPage__header">Budget Balance</h1>
            <p className="MainPage__paragraph">Let's check your expenses</p>
            <Diagrams />
            <div>
                <h2 className="MainPage__text">Expenses List</h2>
                <List />
            </div>
            <div>
                <h2 className="MainPage__text">Calendar</h2>
                <Calendar />
            </div>

        </div>
    )
}