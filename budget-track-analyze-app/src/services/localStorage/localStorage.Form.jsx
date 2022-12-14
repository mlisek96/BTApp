// import {createStyles, Group, Paper, NumberInput, TextInput, Button} from "@mantine/core";
// import {ChooseCategory} from "../ChooseCategory/ChooseCategory";
// import {DataPicker} from "../DataPicker/DataPicker";
// // import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";
// import {ButtonClose} from "../ButtonClose/ButtonClose";
// import {IconCurrencyZloty} from '@tabler/icons';
// import {useState, useEffect} from "react";
// import {Link} from "react-router-dom";
//
// const validateFunction = (form) => {
//     const errorMsg = {}
//
//     if (!form.amount) {
//         errorMsg.amount = 'Entering amount is required'
//     } else if (form.amount.decimalSeparator === ",") {
//         errorMsg.amount = 'Use dot as decimal separator'
//     }
//
//     if (!form.description) {
//         errorMsg.description = 'Entering short description is required'
//     }
//
//     return Object.keys(errorMsg).length > 0 ? errorMsg : null;
// };
//
// const useStyles = createStyles((theme) => ({
//     input: {
//         backgroundColor: theme.white,
//         borderColor: theme.colors.gray[4],
//         color: theme.black,
//
//         '&::placeholder': {
//             color: theme.colors.gray[5],
//         },
//     },
//
//     inputLabel: {
//         color: theme.black,
//     },
// }));
//
// export function AddExpenseForm() {
//     const {classes} = useStyles();
//     const [errorMsg, setErrorMsg] = useState(null)
//     const [form, setForm] = useState({
//         amount: '',
//         description: '',
//         // category: '',
//         // month: '',
//     })
//
//     const handleChangeAmount = (event) => {
//         setForm({ amount: event.target.value })
//     }
//
//     const handleChangeDescription = (event) => {
//         setForm({ description: event.target.value })
//     }
//
//     function handleClick(event) {
//         event.preventDefault();
//         const errorMsg = validateFunction(form);
//
//         if(errorMsg) {
//             setErrorMsg(errorMsg)
//             // console.log('błąd - name')
//             return
//         }
//
//         setForm({
//             amount: '',
//             description: '',
//             // category: '',
//             // month: '',
//         })
//     }
//
//     useEffect(() => {
//
//     })
//
//     return (
//         <Paper className='AddExpenseForm' withBorder shadow="md" radius="md" p="xs">
//             <div>
//                 <NumberInput
//                     value={form.amount}
//                     onChange={handleChangeAmount}
//                     error={errorMsg?.amount}
//                     name='amount'
//                     hideControls
//                     decimalSeparator='.'
//                     label="Amount"
//                     placeholder="0.00"
//                     precision={2}
//                     step={0.01}
//                     icon={<IconCurrencyZloty size={20}/>}
//                     classNames={{input: classes.input, label: classes.inputLabel}}
//                 />
//                 <TextInput
//                     value={form.description}
//                     onChange={handleChangeDescription}
//                     error={errorMsg?.description}
//                     name='description'
//                     label="Description"
//                     placeholder="Enter a short description"
//                     mt="md"
//                     classNames={{input: classes.input, label: classes.inputLabel}}
//                 />
//                 <ChooseCategory/>
//                 <DataPicker/>
//                 <Group position="right" mt="lg">
//                     {/*<ButtonSubmit onClick={handleClick}/>*/}
//                     <Button
//                         onClick={handleClick}
//                         className='ButtonSubmit'
//                         component={Link} to='/expenses-table'
//                         radius="xl" size="sm"
//                     >
//                         Submit
//                     </Button>
//                     <ButtonClose/>
//                 </Group>
//             </div>
//         </Paper>
//     )
// }