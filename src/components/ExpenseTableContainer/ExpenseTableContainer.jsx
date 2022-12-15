import {Container, Paper, Text, Title} from "@mantine/core";
import {TableExpensesTotal} from "../TableExpensesTotal/TableExpensesTotal.jsx";
import {ButtonGroup} from "../ButtonGroup/ButtonGroup.jsx";
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
                    <Paper
                        withBorder
                        shadow="md"
                        radius="md"
                        p="md"
                    >
                        <ButtonGroup
                            marginBottom={'md'}
                        />
                        <TableExpensesTotal />
                    </Paper>
            </Container>
        </div>
    )
}