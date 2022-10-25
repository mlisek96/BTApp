import {Button} from "@mantine/core";
import {Link} from "react-router-dom";
import './ButtonSubmit.scss'

export function ButtonSubmit() {
    // function handleClick(event) {
    //     event.preventDefault()
    //
    // }

    return (
        <Button
            onClick={handleClick}
            className='ButtonSubmit'
            component={Link} to='/expenses-table'
            radius="xl" size="sm"
        >
            Submit
        </Button>
    )
}