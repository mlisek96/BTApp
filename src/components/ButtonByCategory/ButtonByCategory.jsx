import {Button} from "@mantine/core";
import {Link} from "react-router-dom";
import './ButtonByCategory.scss'

export function ButtonByCategory() {
    return (
        <Button className='ButtonByCategory' component={Link} to='/expenses-table/by-category' radius="xl" size="sm">
            Category
        </Button>
    )
}