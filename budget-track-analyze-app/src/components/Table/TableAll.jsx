import {TableTotal} from "../TableTotal/TableTotal.jsx";
import {TableCategory} from "../TableCategory/TableCategory.jsx";
import {Text, Paper} from "@mantine/core";
import './TableAll.scss'

export function TableAll() {
    return (
        <div className="Table">
            <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                <Text color="dimmed" size="xs" transform="uppercase" weight={700} align='center'>
                    Table
                </Text>
                <TableTotal/>
                {/*<TableCategory />*/}
            </Paper>
        </div>
    )
}