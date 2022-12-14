import {SimpleGrid} from "@mantine/core";
import {Diagrams} from "../Diagrams/index.jsx";
import {TableMini} from "../TableMini/TableMini.jsx";
import {CalendarMini} from "../CalendarMini/CalendarMini.jsx";
import './MainPageContainer.scss'

export function MainPageContainer() {
    return (
        <div className="MainPageContainer">
            <h1 className="MainPageContainer__header">Budget Balance</h1>
            <p className="MainPageContainer__paragraph">Let's check your expenses</p>
            <Diagrams/>
            <SimpleGrid cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
                <TableMini/>
                <CalendarMini/>
            </SimpleGrid>
        </div>
    )
}