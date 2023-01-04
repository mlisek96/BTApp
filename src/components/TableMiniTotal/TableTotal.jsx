import {useState} from "react";
import {ActionIcon, ScrollArea, Table, createStyles} from '@mantine/core';
import {IconX} from '@tabler/icons';
import {useBudgets} from "../../contexts/BudgetContext.jsx";
import './TableTotal.scss';

const useStyles = createStyles((theme) => ({
    scrolled: {
        boxShadow: theme.shadows.sm,
    },
}));

export function TableTotal() {
    const {classes, cx} = useStyles();
    const [scrolled, setScrolled] = useState(false);
    const {expenses, deleteExpense} = useBudgets()

    const rows = expenses.map((expense) => (
        <tr key={expense.id}>
            <td>{expense.category}</td>
            <td>{expense.amount + ' zł'}</td>
            <td>{expense.description}</td>
            <td>
                <ActionIcon onClick={() => deleteExpense(expense)}>
                    <IconX/>
                </ActionIcon>
            </td>
        </tr>
    ));

    return (
        <ScrollArea
            style={{height: 300}}
            onScrollPositionChange={({y}) => setScrolled(y !== 0)}
        >
            <Table className='TableTotal'>
                <thead
                    className={cx('TableTotal-thead', {[classes.scrolled]: scrolled})}
                >
                <tr>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </ScrollArea>
    );
}
