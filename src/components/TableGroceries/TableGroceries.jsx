import {Container, Text, Paper, Group, Avatar} from "@mantine/core";
import {TableGroceriesTable} from "./TableGroceriesTable.jsx";
import './TableGroceries.scss'


export function TableGroceries() {
    return (
        <div className="TableGroceries">
            <Container mt={16}>
                <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                    <Group className='TableGroceries-group'>
                        <Avatar src={'../src/images/icon-groceries.png'}/>
                        <Text className="TableGroceries-group__title">Groceries</Text>
                    </Group>
                    <TableGroceriesTable/>
                </Paper>
            </Container>
        </div>
    )
}