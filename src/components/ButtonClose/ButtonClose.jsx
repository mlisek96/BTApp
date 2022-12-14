import {Button} from "@mantine/core";
import {Link} from "react-router-dom";
import './ButtonClose.scss'

export function ButtonClose() {
    return (
        <Button className='ButtonClose' component={Link} to='/main-page' radius="xl" size="sm">
            Close
        </Button>
    )
}