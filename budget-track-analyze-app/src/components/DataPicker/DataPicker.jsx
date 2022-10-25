import { Select } from '@mantine/core';
import './DataPicker.scss'

export function DataPicker() {
    return (
        <Select
            className='DataPicker'
            name='month'
            label="Choose month"
            placeholder="Pick one"
            data={[
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
            ]}
        />
    );
}