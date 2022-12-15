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
import './ExpenseTableCategoryContainer.scss';

export function ExpenseTableCategoryContainer() {
    return (
        <div className="ExpenseTableCategory">
            <Container mt={16}>
                <Title
                    className="ExpenseTableCategory__header"
                >
                    Expenses Table
                </Title>
                <Text
                    className="ExpenseTableCategory__description"
                >
                    Let's check your expenses table by category
                </Text>
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