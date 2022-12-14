import {Container, Group, Paper, Text, Title} from "@mantine/core";
import {ButtonTotal} from "../ButtonTotal/ButtonTotal.jsx";
import {ButtonByCategory} from "../ButtonByCategory/ButtonByCategory.jsx";
import {ButtonArrowLeft} from "../ButtonArrowLeft/ButtonArrowLeft.jsx";
import {ButtonArrowRight} from "../ButtonArrowRight/ButtonArrowRight.jsx";
import {TableEntertainment} from "../TableEntertainment/TableEntertainment.jsx";
import {TableGroceries} from "../TableGroceries/TableGroceries.jsx";
import {TableDinningOut} from "../TableDinningOut/TableDinningOut.jsx";
import {TableHome} from "../TableHome/TableHome.jsx";
import {TableLife} from "../TableLIfe/TableLife.jsx";
import {TableTransportation} from "../TableTransportation/TableTransportation.jsx";
import {TableUtilities} from "../TableUtilities/TableUtilities.jsx";
import {TableHoliday} from "../TableHoliday/TableHoliday.jsx";
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
                    classNames='Table__paper'
                >
                    <Group position='left'>
                        <ButtonTotal/>
                        <ButtonByCategory/>
                        <ButtonArrowLeft />
                        <ButtonArrowRight />
                    </Group>
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