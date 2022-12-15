import {SimpleGrid} from "@mantine/core";
import {Diagrams} from "../Diagrams/Diagrams";
import {TableMini} from "../TableMini/TableMini.jsx";
import {CalendarMini} from "../CalendarMini/CalendarMini.jsx";
import {Header} from "../Header/Header.jsx";
import './MainPageContainer.scss';

export function MainPageContainer() {
    return (
        <div className="MainPageContainer">
            <Header
                title={'Budget Balance'}
                text={'Let\'s check your expenses'}
                marginTop={'1rem'}
            />
            <Diagrams/>
            <SimpleGrid
                cols={2}
                breakpoints={[{maxWidth: 'sm', cols: 1}]}
            >
                <TableMini/>
                <CalendarMini/>
            </SimpleGrid>
        </div>
    )
}