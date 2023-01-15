import {SimpleGrid, Group} from '@mantine/core';
import {RingProgressTotal} from "../RingProgressTotal/RingProgressTotal.jsx";
import {RingProgressByCategory} from "../RingProgressByCategory/RingProgressByCategory.jsx";
import {useBudgets} from "../../contexts/BudgetContext.jsx";
import './Diagrams.scss';

export function Diagrams() {
    const {expenses, getCategoryExpenses} = useBudgets()
    const amount = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    )
    // const max =

    // const category = expenses.forEach(expense => {
    //     return expense.category
    // })

    // const category = getCategoryExpenses(expenses.category)


    return (
        <SimpleGrid className='Diagrams' cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
            <Group className='Diagrams__group'>
                <RingProgressTotal
                    amount={amount}
                    // max={max}
                    max={1000}
                />
                <RingProgressByCategory
                    amount={amount}
                    max={1000}
                    // category={category}
                    categories={[
                        'Entertainment',
                        'Groceries',
                        'Dinning out',
                        'Home',
                        'Life',
                        'Transportation',
                        'Utilities',
                        'Holiday',
                    ]}
                />
            </Group>
        </SimpleGrid>
    )
}