import { Select } from '@mantine/core';
import './DataPicker.scss'
import {useState} from "react";

const data = [
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
]

export function DataPicker({error, onChange, value}) {
    // const [searchValue, onSearchChange] = useState('')
    // const [value, setValue] = useState('')

    return (
        <Select
            className='DataPicker'
            value={value}
            onChange={setValue}
            // searchValue={searchValue}
            // onSearchChange={onSearchChange}
            error={error}
            name='month'
            label="Choose month"
            placeholder="Pick one"
            data={data}
        />
    );
}