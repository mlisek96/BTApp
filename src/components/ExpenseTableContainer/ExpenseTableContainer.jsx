import {Container, Group, Paper, Text, Title} from "@mantine/core";
import {ButtonTotal} from "../ButtonTotal/ButtonTotal.jsx";
import {ButtonByCategory} from "../ButtonByCategory/ButtonByCategory.jsx";
import {ButtonArrowLeft} from "../ButtonArrowLeft/ButtonArrowLeft.jsx";
import {ButtonArrowRight} from "../ButtonArrowRight/ButtonArrowRight.jsx";
import {TableExpensesTotal} from "../TableExpensesTotal/TableExpensesTotal.jsx";
import './ExpenseTableContainer.scss';

export function ExpenseTableContainer() {
    return (
        <div className="ExpenseTableContainer">
            <Container mt={16}>
                <Title
                    className="ExpenseTableContainer__header"
                >
                    Expenses Table
                </Title>
                <Text
                    className="ExpenseTableContainer__description"
                >
                    Let's check your expenses table in total
                </Text>
                    <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                        <Group position='left' mb='md' >
                            <ButtonTotal />
                            <ButtonByCategory />
                            <ButtonArrowLeft />
                            <ButtonArrowRight />
                        </Group>
                        <TableExpensesTotal />
                    </Paper>
            </Container>
        </div>
    )
}