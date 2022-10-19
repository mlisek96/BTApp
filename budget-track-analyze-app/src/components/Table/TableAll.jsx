import {TableTotal} from "../TableTotal/TableTotal.jsx";
import {TableCategory} from "../TableCategory/TableCategory.jsx";
import {Text, Paper} from "@mantine/core";
import './TableAll.scss'

export function TableAll() {
    return (
        <div className="Table">
            <Paper classNames='Table__paper' withBorder radius="md" p="md" className='CalendarMini'>
                <Text color="dimmed" size="xs" transform="uppercase" weight={700} align='center'>
                    Table
                </Text>
                <TableTotal/>
                {/*<TableCategory />*/}
            </Paper>
        </div>
    )
}