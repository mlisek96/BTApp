import {Container} from "@mantine/core";
import {AddExpenseForm} from "../AddExpenseForm/AddExpenseForm.jsx";
import {Header} from "../Header/Header.jsx";
import './AddExpenseContainer.scss';

export function AddExpenseContainer() {
    return (
        <div className="AddExpenseContainer">
            <Container size={800} mt={96}>
                <Header
                    title={'Add Expense'}
                    text={'Let\'s add your new expense'}
                    marginBottom={'2rem'}
                />
                <AddExpenseForm />
            </Container>
        </div>
    )
}