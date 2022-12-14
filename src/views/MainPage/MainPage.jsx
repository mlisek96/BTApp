import {SimpleGrid} from '@mantine/core';
import {Diagrams} from "../../components/Diagrams/index.jsx";
import {TableMini} from "../../components/TableMini/TableMini.jsx";
import {CalendarMini} from "../../components/CalendarMini/CalendarMini.jsx";
import "./MainPage.scss"

export function MainPage() {


    return (
        <div className="MainPage">
            <h1 className="MainPage__header">Budget Balance</h1>
            <p className="MainPage__paragraph">Let's check your expenses</p>
            <Diagrams/>
            <SimpleGrid className='MainPage-grid' cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
                <TableMini/>
                <CalendarMini/>
            </SimpleGrid>
        </div>
    )
}