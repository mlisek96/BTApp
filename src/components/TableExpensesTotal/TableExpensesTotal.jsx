import {useState, useEffect} from 'react';
import {ActionIcon, ScrollArea, Table, createStyles} from '@mantine/core';
import {IconX} from '@tabler/icons';
import './TableExpensesTotal.scss';

const expenses = [
    {id: 1, category: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 2, category: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 3, category: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 4, category: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 5, category: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 6, category: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 7, category: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 8, category: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 9, category: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 10, category: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 11, category: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 12, category: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 13, category: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 14, category: 'home', amount: 123, description: 'biedronka zakupy'},
    {id: 15, category: 'home', amount: 123, description: 'biedronka zakupy'},
]

const useStyles = createStyles((theme) => ({
    scrolled: {
        boxShadow: theme.shadows.sm,
    },
}));

export function TableExpensesTotal() {
    const {classes, cx} = useStyles();
    const [scrolled, setScrolled] = useState(false);
    const [form, setForm] = useState({
        amount: '',
        description: '',
        category: '',
        month: '',
    })
    //
    // // const rows = data.map((row) => (
    // //     <tr key={row.id}>
    // //         <td>{row.name}</td>
    // //         <td>{row.email}</td>
    // //         <td>{row.company}</td>
    // //     </tr>
    // // ));
    //
    // useEffect(() => {
    //     // const arrayOfExpenses = JSON.parse(localStorage.getItem('oneMonthExpense')) ?? [];
    //     //
    //     // arrayOfExpenses.forEach = (singleExpense) => {
    //     //     setForm({
    //     //         amount: singleExpense.amount,
    //     //         description:singleExpense.description,
    //     //         category: singleExpense.category,
    //     //         month: singleExpense.month,
    //     //     })
    //     // }
    //
    //     if (localStorage.getItem('oneMonthExpense') !== null) {
    //         // const arrayOfExpenses = JSON.parse(localStorage.getItem('oneMonthExpense')) ?? [];
    //         const arrayOfExpenses = window.localStorage.getItem('oneMonthExpense') ?? [];
    //
    //         JSON.parse(arrayOfExpenses.forEach = (singleExpense) => {
    //             setForm({
    //                 amount: singleExpense.amount,
    //                 description:singleExpense.description,
    //                 category: singleExpense.category,
    //                 month: singleExpense.month,
    //             })
    //         })
    //     }
    //     // console.log(JSON.parse(localStorage.oneMonthExpense))
    //     // console.log(form)
    // },[])

    const rows = expenses.map((expense) => (
        <tr key={expense.id}>
            <td>{expense.category}</td>
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
