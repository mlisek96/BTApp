import {Calendar} from "@mantine/dates";
import {Paper, Text} from "@mantine/core";
import {useState} from 'react';
import './CalendarMini.scss';

export function CalendarMini() {
    const [value, setValue] = useState(null);
    return (
        <div>
            <Paper withBorder radius="md" p="xs" className='CalendarMini'>
                <Text color="dimmed" size="xs" transform="uppercase" weight={700} align='center'>
                    Calendar
                </Text>
                <Calendar value={value} onChange={setValue} className='CalendarMini__main'/>
            </Paper>
        </div>
    )
}