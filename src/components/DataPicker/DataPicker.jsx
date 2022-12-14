import { Select } from '@mantine/core';
import './DataPicker.scss'

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

// export function DataPicker({error, onChange}) {
export function DataPicker() {
    // const [searchValue, onSearchChange] = useState('')

    return (
        <Select
            className='DataPicker'
            // value={value}
            // onChange={onChange}
            // searchValue={searchValue}
            // onSearchChange={onSearchChange}
            // error={error}
            name='month'
            label="Choose month"
            placeholder="Pick one"
            data={data}
        />
    );
}