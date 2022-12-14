import {Container, Text, Paper, Avatar, Group} from "@mantine/core";
import './TableUtilities.scss'
import {TableUtilitiesTable} from "./TableUtilitiesTable";

export function TableUtilities() {
    return (
        <div className="TableUtilities">
            <Container mt={16}>
                <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                    <Group className='TableUtilities-group'>
                        <Avatar src={'../src/images/icon-utilities.png'}/>
                        <Text className="TTableUtilities-group__title">Utilities</Text>
                    </Group>
                    <TableUtilitiesTable/>
                </Paper>
            </Container>
        </div>
    )
}