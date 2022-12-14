import {Container, Title, Text, Group, Paper} from "@mantine/core";
import './ExpensesTableCategory.scss'
import {ButtonTotal} from "../../components/ButtonTotal/ButtonTotal";
import {ButtonByCategory} from "../../components/ButtonByCategory/ButtonByCategory";
import {TableEntertainment} from "../../components/TableEntertainment/TableEntertainment";
import {TableGroceries} from "../../components/TableGroceries/TableGroceries";
import {TableDinningOut} from "../../components/TableDinningOut/TableDinningOut";
import {TableHome} from "../../components/TableHome/TableHome";
import {TableLife} from "../../components/TableLIfe/TableLife";
import {TableTransportation} from "../../components/TableTransportation/TableTransportation";
import {TableUtilities} from "../../components/TableUtilities/TableUtilities";
import {TableHoliday} from "../../components/TableHoliday/TableHoliday";
import {ButtonArrowLeft} from "../../components/ButtonArrowLeft/ButtonArrowLeft";
import {ButtonArrowRight} from "../../components/ButtonArrowRight/ButtonArrowRight";


export function ExpensesTableCategory() {
    return (
        <div className="ExpensesTable">
            <Container mt={16}>
                <Title className="ExpensesTable__header">Expenses Table</Title>
                <Text className="ExpensesTable__description">Let's check your expenses table by category</Text>
                <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
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