import {Container, Paper} from "@mantine/core";
import {TableExpensesTotal} from "../TableExpensesTotal/TableExpensesTotal.jsx";
import {ButtonGroup} from "../ButtonGroup/ButtonGroup.jsx";
import {Header} from "../Header/Header.jsx";
import './ExpenseTableContainer.scss';

export function ExpenseTableContainer() {
    return (
        <div className="ExpenseTableContainer">
            <Container mt={16}>
                <Header
                    title={'Expenses Table'}
                    text={'Let\'s check your expenses table in total'}
                    marginBottom={'2rem'}
                />
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