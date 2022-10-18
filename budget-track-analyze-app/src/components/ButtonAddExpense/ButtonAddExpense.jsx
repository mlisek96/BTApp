import { Button } from '@mantine/core';
import { Link } from 'react-router-dom'
import { IconSquarePlus } from '@tabler/icons';
import './ButtonAddExpense.scss'

export function ButtonAddExpense() {
    return (
        <div className='ButtonAddExpense' style={{width: 200}}>
            <Button className='ButtonAddExpense__button' component={ Link } to="/add-expense" variant="light" fullWidth color="gray" radius="lg" size="xl" compact>
                Add Expense
            </Button>
        </div>
    );
}