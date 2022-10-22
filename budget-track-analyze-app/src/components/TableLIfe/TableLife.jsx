import {Container, Text, Paper, Avatar, Group} from "@mantine/core";
import {TableLifeTable} from "./TableLifeTable";
import './TableLife.scss'


export function TableLife() {
    return (
        <div className="TableLife">
            <Container mt={16}>
                <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                    <Group className='TTableLife-group'>
                        <Avatar src={'../src/images/icon-life.png'}/>
                        <Text className="TableLife-group__title">Life</Text>
                    </Group>
                    <TableLifeTable />
                </Paper>
            </Container>
        </div>
    )
}