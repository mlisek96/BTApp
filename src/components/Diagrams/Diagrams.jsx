import {SimpleGrid, Group} from '@mantine/core';
import {RingProgressTotal} from "../RingProgressTotal/RingProgressTotal.jsx";
import {RingProgressByCategory} from "../RingProgressByCategory/RingProgressByCategory.jsx";
import {useBudgets} from "../../contexts/BudgetContext.jsx";
import './Diagrams.scss';

export function Diagrams() {
    const {expenses} = useBudgets()
    const amount = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    )
    // const max =


    return (
        <SimpleGrid className='Diagrams' cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
            <Group className='Diagrams__group'>
                <RingProgressTotal
                    amount={amount}
                    // max={expenses.max}
                    max={1000}
                />
                <RingProgressByCategory />
            </Group>
        </SimpleGrid>
    )
}