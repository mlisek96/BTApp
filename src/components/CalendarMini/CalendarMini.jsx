import {useState} from 'react';
import {Paper, Text} from "@mantine/core";
import {Calendar} from "@mantine/dates";
import './CalendarMini.scss';

export function CalendarMini() {
    const [value, setValue] = useState(null);

    return (
        <div>
            <Paper
                withBorder
                shadow="md"
                radius="md"
                p="xs"
                className='CalendarMini'
            >
                <Text
                    color="dimmed"
                    size="xs"
                    transform="uppercase"
                    weight={700}
                    align='center'
                >
                    Calendar
                </Text>
                <Calendar
                    value={value}
                    onChange={setValue}
                    allowLevelChange={false}
                    className='CalendarMini__main'
                />
            </Paper>
        </div>
    )
}