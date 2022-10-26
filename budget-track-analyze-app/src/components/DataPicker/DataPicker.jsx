import { Select } from '@mantine/core';
import './DataPicker.scss'

export function DataPicker({error, onChange}) {
    return (
        <Select
            className='DataPicker'
            // value={value}
            error={error}
            onChange={onChange}
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