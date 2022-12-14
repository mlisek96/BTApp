import {Container, Text, Title} from "@mantine/core";
import {AddExpenseForm} from "../AddExpenseForm/AddExpenseForm.jsx";
import './AddExpenseContainer.scss';

export function AddExpenseContainer() {
    return (
        <div className="AddExpenseContainer">
            <Container size={800} mt={96}>
                <Title
                    className='AddExpenseContainer__header'
                >
                    Add Expense
                </Title>
                <Text
                    className='AddExpenseContainer__description'
                >
                    Let's add your new expense
                </Text>
                <AddExpenseForm />
            </Container>
        </div>
    )
}