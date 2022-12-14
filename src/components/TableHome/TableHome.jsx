import {Container, Text, Paper, Avatar, Group} from "@mantine/core";
import {TableHomeTable} from "./TableHomeTable";
import './TableHome.scss'


export function TableHome() {
    return (
        <div className="TableHome">
            <Container mt={16}>
                <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                    <Group className='TableHome-group'>
                        <Avatar src={'../src/images/icon-home.png'}/>
                        <Text className="TableHome-group__title">Home</Text>
                    </Group>
                    <TableHomeTable/>
                </Paper>
            </Container>
        </div>
    )
}