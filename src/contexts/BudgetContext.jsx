import React, {useContext, useState} from "react";
import {v4 as uuidV4} from  'uuid'
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetsContext = React.createContext()

export function useBudgets() {
    return useContext(BudgetsContext)
}

// const category = [
//     {
//         id: '1',
//         image: '../../images/icon-entertainment.png',
//         label: 'Entertainment',
//         value: 'Entertainment',
//         description: 'Like: movie, games, music, sports, others',
//     },
//
//     {
//         id: '2',
//         image: '../../images/icon-groceries.png',
//         label: 'Groceries',
//         value: 'Groceries',
//         description: 'Just simple daily groceries',
//     },
//
//     {
//         id: '3',
//         image: '../../images/icon-dinning out.png',
//         label: 'Dinning out',
//         value: 'Dinning out',
//         description: 'Just simple meeting up with friends',
//     },
//
//     {
//         id: '4',
//         image: '../../images/icon-home.png',
//         label: 'Home',
//         value: 'Home',
//         description: 'Like: rent, household supplies, furniture, maintenance, others',
//     },
//
//     {
//         id: '5',
//         image: '../../images/icon-life.png',
//         label: 'Life',
//         value: 'Life',
//         description: 'Like: insurance, clothing, medical expenses, taxes, education, childcare, others',
//     },
//
//     {
//         id: '6',
//         image: '../../images/icon-transport.png',
//         label: 'Transportation',
//         value: 'Transportation',
//         description: 'Like: parking, car, bus/train, gas/fuel, plane, taxi, bicycle, hotel, others',
//     },
//
//     {
//         id: '1',
//         image: '../../images/icon-utilities.png',
//         label: 'Utilities',
//         value: 'Utilities',
//         description: 'Like: electricity, heat/gas, water, TV/phone/Internet, trash, others',
//     },
//
//     {
//         id: '8',
//         image: '../../images/icon-holiday.png',
//         label: 'Holiday',
//         value: 'Holiday',
//         description: 'Just all your expenses for relax and holiday',
//     },
// ];

// {
//     amount: '',
//     description: '',
//     category(budgetId): '',
//     month: '',
// }

export const BudgetsProvider = ({ children }) => {
    const [expenses, setExpenses] = useLocalStorage('expenses',[]);
    // const [months, setMonths] = useLocalStorage('months',[])

    function getCategoryExpenses(category) {
        return expenses.filter(expense => expense.category === category)
    }
    function getMonthExpenses(month) {
        return expenses.filter(expense => expense.month === month)
    }
    function addExpense ({amount, description, category}) {
        setExpenses(prevExpenses => {
            return [...prevExpenses, {id: uuidV4(), description, amount, category}]
        })
    }
    function deleteExpense({id}) {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })

    }

    return (
        <BudgetsContext.Provider value={{
            // budgets,
            // months,
            // setMonths,
            expenses,
            getCategoryExpenses,
            getMonthExpenses,
            addExpense,
            deleteExpense
        }}>
            {children}
        </BudgetsContext.Provider>
    )
}