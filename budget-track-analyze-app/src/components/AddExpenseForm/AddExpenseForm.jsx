import {createStyles, Group, Paper, NumberInput, TextInput} from "@mantine/core";
import {ChooseCategory} from "../ChooseCategory/ChooseCategory";
import {DataPicker} from "../DataPicker/DataPicker";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";
import {ButtonClose} from "../ButtonClose/ButtonClose";
import { IconCurrencyZloty } from '@tabler/icons';

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

    return (
        <Paper withBorder shadow="md" radius="md" p="xs">
            <div>
                <NumberInput
                    hideControls
                    label="Amount"
                    placeholder="0.00"
                    icon={<IconCurrencyZloty size={20}/>}
                    classNames={{input: classes.input, label: classes.inputLabel}}
                />
                <TextInput
                    label="Description"
                    placeholder="Enter a short description"
                    mt="md"
                    classNames={{input: classes.input, label: classes.inputLabel}}
                />
                <ChooseCategory/>
                <DataPicker/>
                <Group position="right" mt="lg">
                    <ButtonSubmit />
                    <ButtonClose />
                </Group>
            </div>
        </Paper>
    )
}