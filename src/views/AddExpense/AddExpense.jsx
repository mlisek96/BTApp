import { Container, Title, Text } from '@mantine/core';
import {AddExpenseForm} from "../../components/AddExpenseForm/AddExpenseForm.jsx";
import './AddExpense.scss'

export function AddExpense() {
    return (
        <div className='AddExpense'>
            <Container size={800} mt={96}>
                <Title className='AddExpense__header'>Add Expense</Title>
                <Text className='AddExpense__description'>Let's add your new expense</Text>
                <AddExpenseForm />
            </Container>
        </div>
    );
}