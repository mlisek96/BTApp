import {ActionIcon, ScrollArea, Table, createStyles, Text} from '@mantine/core';
import {IconX} from '@tabler/icons';
import {useState} from 'react';
import {useBudgets} from "../../contexts/BudgetContext.jsx";
import './TableCategory.scss';


const useStyles = createStyles((theme) => ({
    scrolled: {
        boxShadow: theme.shadows.sm,
    },
}));

export function TableCategory({category}) {
    const {classes, cx} = useStyles();
    const [scrolled, setScrolled] = useState(false);
    const {getCategoryExpenses, deleteExpense} = useBudgets()

    const expenses = getCategoryExpenses(category)
    const rows = expenses.map((expense) => (
        <tr key={expense.id}>
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
        <div>
            <ScrollArea mt={8} style={{maxHeight: 300}} onScrollPositionChange={({y}) => setScrolled(y !== 0)}>
                <Table className='TableCategory'>
                    <thead className={cx('TableCategory-thead', {[classes.scrolled]: scrolled})}>
                    <tr>
                        <th>Amount</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </ScrollArea>
            {/*<Text mt={16} weight={300}>Seems you haven't got any expenses in {category}</Text>*/}
        </div>
    );
}