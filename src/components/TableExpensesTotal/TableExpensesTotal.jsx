import {ActionIcon, ScrollArea, Table, createStyles} from '@mantine/core';
import {IconX} from '@tabler/icons';
import {useState} from 'react';
import './TableExpensesTotal.scss'

const expenses = [
    {id: 1, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 2, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 3, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 4, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 5, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 6, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 7, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 8, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 9, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 10, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 11, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 12, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 13, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 14, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 15, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
]

const useStyles = createStyles((theme) => ({
    scrolled: {
        boxShadow: theme.shadows.sm,
    },
}));

export function TableExpensesTotal() {
    const {classes, cx} = useStyles();
    const [scrolled, setScrolled] = useState(false);

    // const rows = data.map((row) => (
    //     <tr key={row.name}>
    //         <td>{row.name}</td>
    //         <td>{row.email}</td>
    //         <td>{row.company}</td>
    //     </tr>
    // ));

    const rows = expenses.map((expense) => (
        <tr key={expense.id}>
            <td>{expense.iconCategory}</td>
            <td>{expense.amount + ' zł'}</td>
            <td>{expense.description}</td>
            <td><ActionIcon><IconX/></ActionIcon></td>
        </tr>
    ));

    return (
        <div>
            <ScrollArea sx={{height: 500}} onScrollPositionChange={({y}) => setScrolled(y !== 0)}>
                <Table className='TableExpensesTotal'>
                    <thead className={cx('TableExpensesTotal-thead', {[classes.scrolled]: scrolled})}>
                    <tr>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </ScrollArea>
        </div>

    );
}
