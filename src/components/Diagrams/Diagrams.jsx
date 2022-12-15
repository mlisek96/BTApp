import {SimpleGrid, Group} from '@mantine/core';
import {RingProgressTotal} from "../RingProgressTotal/RingProgressTotal.tsx";
import {RingProgressByCategory} from "../RingProgressByCategory/RingProgressByCategory.tsx";
import {useState, useEffect} from "react";
import './Diagrams.scss';

export function Diagrams() {
    // const [form, setForm] = useState(() => {
    //   const savedItem = JSON.parse(localStorage.getItem('oneMonthExpense')) ?? []
    // })

    // const [form, setForm] = useState({
    //     amount: '',
    //     description: '',
    // })
    // useEffect(() => {
    //     // const storageArrayOfExpenses = JSON.parse(localStorage.getItem('oneMonthExpense'))
    //     // if (storageArrayOfExpenses !== null) {
    //     //     setForm({
    //     //         amount: storageArrayOfExpenses.amount,
    //     //         description: storageArrayOfExpenses.description,
    //     //     })
    //     // }
    //
    //     const storageArrayOfExpenses = localStorage.getItem('oneMonthExpense')
    //     if ( storageArrayOfExpenses !== null) setForm(JSON.parse(storageArrayOfExpenses))
    // },[])
    // console.log(form)


    return (
        <SimpleGrid className='Diagrams' cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
            <Group className='Diagrams__group'>
                <RingProgressTotal
                    data={
                    [{
                        label: "Expenses in total",
                        stats: "456,578",
                        progress: '65',
                        color: "teal",
                    }]
                }
                />
                <RingProgressByCategory />
            </Group>
        </SimpleGrid>
    )
}