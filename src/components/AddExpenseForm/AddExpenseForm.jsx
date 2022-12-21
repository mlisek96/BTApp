import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createStyles, Group, Paper, TextInput} from "@mantine/core";
import {IconCurrencyZloty} from '@tabler/icons';
import {ChooseCategory} from "../ChooseCategory/ChooseCategory";
import {DataPicker} from "../DataPicker/DataPicker";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit.jsx";
import {ButtonClose} from "../ButtonClose/ButtonClose";

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

    if (!form.category) {
        errorMsg.category = 'Picking a category is required'
    }

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
        category: '',
        month: '',
    })
    const navigate = useNavigate()

    const handleChange = (event) => {
        const {name, value} = event.target
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            };
        });
    }

    function handleClick(event) {
        event.preventDefault();
        const errorMsg = validateFunction(form);

        if (errorMsg) {
            setErrorMsg(errorMsg)
            // console.log('błąd - name')
            return
        }

        const arrayOfExpenses = JSON.parse(localStorage.getItem('oneMonthExpense')) ?? [];

        if (localStorage.getItem('oneMonthExpense') !== null) {
            setForm({
                amount: arrayOfExpenses.amount,
                description:arrayOfExpenses.description,
                category: arrayOfExpenses.category,
                month: arrayOfExpenses.month,
            })
        } else {
            setForm({
                amount: '',
                description: '',
                category: '',
                month: '',
            })
        }

        arrayOfExpenses.push(form)
        localStorage.setItem('oneMonthExpense', JSON.stringify(arrayOfExpenses))
        // const  storageArrayOfExpenses = JSON.parse(localStorage.oneMonthExpense)
        // console.log(storageArrayOfExpenses)
        navigate('/user/expenses-table')
    }

    return (
        <Paper className='AddExpenseForm' withBorder shadow="md" radius="md" p="xs">
            <form>
                <TextInput
                    type='number'
                    value={form.amount}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    error={errorMsg?.description}
                    name='description'
                    label="Description"
                    placeholder="Enter a short description"
                    mt="md"
                    classNames={{input: classes.input, label: classes.inputLabel}}
                />
                <ChooseCategory
                    error={errorMsg?.category}
                    setForm={setForm}
                />
                <DataPicker
                    error={errorMsg?.month}
                    setForm={setForm}
                />
                <Group position="right" mt="lg">
                    <ButtonSubmit
                        onClick={handleClick}
                    />
                    <ButtonClose/>
                </Group>
            </form>
        </Paper>
    )
}