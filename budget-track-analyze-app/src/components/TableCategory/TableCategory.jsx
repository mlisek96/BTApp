import {Table, ActionIcon, ScrollArea} from '@mantine/core';
import {IconX} from '@tabler/icons';

const expenses = [
    {id: 1, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 2, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 3, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 4, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 5, iconCategory: 'home', amount: 123, description: 'biedronka zakupy'},
]

export function TableCategory() {
    const rows = expenses.map((expense) => (
        <tr key={expense.id}>
            <td>{expense.iconCategory}</td>
            <td>{expense.amount + ' PLN'}</td>
            <td>{expense.description}</td>
            <td><ActionIcon><IconX/></ActionIcon></td>
        </tr>
    ));

    return (
        <ScrollArea style={{height: 300}}>
            <Table>
                <thead>
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
    );
}