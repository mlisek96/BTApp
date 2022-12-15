import {Container, Paper, Text, Title} from "@mantine/core";
import {TableEntertainment} from "../TableEntertainment/TableEntertainment.jsx";
import {TableGroceries} from "../TableGroceries/TableGroceries.jsx";
import {TableDinningOut} from "../TableDinningOut/TableDinningOut.jsx";
import {TableHome} from "../TableHome/TableHome.jsx";
import {TableLife} from "../TableLIfe/TableLife.jsx";
import {TableTransportation} from "../TableTransportation/TableTransportation.jsx";
import {TableUtilities} from "../TableUtilities/TableUtilities.jsx";
import {TableHoliday} from "../TableHoliday/TableHoliday.jsx";
import {ButtonGroup} from "../ButtonGroup/ButtonGroup.jsx";
import {Header} from "../Header/Header.jsx";
import './ExpenseTableCategoryContainer.scss';

export function ExpenseTableCategoryContainer() {
    return (
        <div className="ExpenseTableCategory">
            <Container mt={16}>
                <Header
                    title={'Expenses Table'}
                    text={'Let\'s check your expenses table by category'}
                    marginBottom={'2rem'}
                />
                <Paper
                    withBorder
                    shadow="md"
                    radius="md"
                    p="md"
                >
                    <ButtonGroup />
                </Paper>
                <TableEntertainment/>
                <TableGroceries/>
                <TableDinningOut/>
                <TableHome/>
                <TableLife/>
                <TableTransportation/>
                <TableUtilities/>
                <TableHoliday/>
            </Container>
        </div>
    )
}