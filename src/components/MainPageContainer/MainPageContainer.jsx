import {SimpleGrid, Title, Text} from "@mantine/core";
import {Diagrams} from "../Diagrams/Diagrams";
import {TableMini} from "../TableMini/TableMini.jsx";
import {CalendarMini} from "../CalendarMini/CalendarMini.jsx";
import './MainPageContainer.scss';

export function MainPageContainer() {
    return (
        <div className="MainPageContainer">
            <Title
                className="MainPageContainer__header"
            >
                Budget Balance
            </Title>
            <Text
                className="MainPageContainer__paragraph"
            >
                Let's check your expenses
            </Text>
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