import {Button} from "@mantine/core";
import {Link} from "react-router-dom";
import './ButtonSubmit.scss'

export function ButtonSubmit() {
    return (
        <Button className='ButtonSubmit' component={Link} to='/expenses-table' radius="xl" size="sm">
            Submit
        </Button>
    )
}