import {createStyles, Group, Paper, TextInput} from "@mantine/core";
import {ChooseCategory} from "../ChooseCategory/ChooseCategory";
import {DataPicker} from "../DataPicker/DataPicker";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit.jsx";
import {ButtonClose} from "../ButtonClose/ButtonClose";
import {IconCurrencyZloty} from '@tabler/icons';
import {useState} from "react";


const validateFunction = (form) => {
    const errorMsg = {}

    if (!form.amount) {
        errorMsg.amount = 'Entering amount is required'
    }
    // else if (form.amount.decimalSeparator === ",") {
    //     errorMsg.amount = 'Use dot as decimal separator'
    // }

    if (!form.description) {
        errorMsg.description = 'Entering short description is required'
    }

    // if (!form.category) {
    //     errorMsg.category = 'Picking a category is required'
    // }
    //
    if (!form.month) {
        errorMsg.month = 'Picking a month is required'
    }

    return Object.keys(errorMsg).length > 0 ? errorMsg : null;
};

const useStyles = createStyles((theme) => ({
    input: {
        backgroundColor: theme.white,
        borderColor: theme.colors.gray[4],
        color: theme.black,

        '&::placeholder': {
            color: theme.colors.gray[5],
        },
    },

    inputLabel: {
        color: theme.black,
    },
}));

export function AddExpenseForm() {
    const {classes} = useStyles();
    const [errorMsg, setErrorMsg] = useState(null)
    const [form, setForm] = useState({
        amount: '',
        description: '',
        // category: '',
        month: '',
    })

    const handleChangeAmount = (event) => {
        const {name, value} = event.target
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            };
        });
    }

    const handleChangeDescription = (event) => {
        const {name, value} = event.target
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            };
        });
    }

    // const handleChangeCategory = () => {
    //     // const {name, value} = event.target
    //     // setForm(prevForm => {
    //     //     return {
    //     //         ...prevForm,
    //     //         [name]: value
    //     //     }
    //     // })
    //
    //     setForm({
    //         category: value
    //     })
    // }

    const handleChangeMonth = (event) => {
        // const {name, searchValue} = event.target
        // setForm(prevForm => {
        //     return {
        //         ...prevForm,
        //         [name]: searchValue
        //     };
        // });

        // setForm({
        //     month: event.target.values
        // })

        console.log(event)
    }

    function handleClick(event) {
        event.preventDefault();
        const errorMsg = validateFunction(form);

        if (errorMsg) {
            setErrorMsg(errorMsg)
            // console.log('błąd - name')
            return
        }

        setForm({
            amount: '',
            description: '',
            // category: '',
            // month: '',
        })
        const arrayOfExpenses = JSON.parse(localStorage.getItem('oneMonthExpense')) ?? [];

        if (localStorage.getItem('oneMonthExpense')) {
            setForm({
                amount: arrayOfExpenses.amount,
                description:arrayOfExpenses.description,
                // category: arrayOfExpenses.category,
                // month: arrayOfExpenses.month,
            })
        } else {
            setForm({
                amount: '',
                description: '',
                // category: '',
                // month: '',
            })
        }
        arrayOfExpenses.push(form)
        localStorage.setItem('oneMonthExpense', JSON.stringify(arrayOfExpenses))
        const  storageArrayOfExpenses = JSON.parse(localStorage.oneMonthExpense)
        console.log(storageArrayOfExpenses)
        // location.href = '/expenses-table'

    }


    return (
        <Paper className='AddExpenseForm' withBorder shadow="md" radius="md" p="xs">
            <div>
                <TextInput
                    type='number'
                    value={form.amount}
                    onChange={handleChangeAmount}
                    error={errorMsg?.amount}
                    name='amount'
                    // hideControls
                    // decimalSeparator='.'
                    label="Amount"
                    placeholder="0.00"
                    precision={2}
                    step={0.01}
                    icon={<IconCurrencyZloty size={20}/>}
                    classNames={{input: classes.input, label: classes.inputLabel}}
                />
                <TextInput
                    value={form.description}
                    onChange={handleChangeDescription}
                    error={errorMsg?.description}
                    name='description'
                    label="Description"
                    placeholder="Enter a short description"
                    mt="md"
                    classNames={{input: classes.input, label: classes.inputLabel}}
                />
                <ChooseCategory
                    // error={errorMsg?.category}
                    // // value={form.category}
                    // onChange={handleChangeCategory}
                    // // name='category'
                />
                <DataPicker
                    error={errorMsg?.month}
                    // // value={form.month}
                    // searchValue={form.month}
                    onChange={handleChangeMonth}
                />
                <Group position="right" mt="lg">
                    <ButtonSubmit
                        onClick={handleClick}
                    />
                    <ButtonClose/>
                </Group>
            </div>
        </Paper>
    )
}