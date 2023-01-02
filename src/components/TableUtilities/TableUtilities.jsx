import {Container, Text, Paper, Avatar, Group} from "@mantine/core";
import {TableUtilitiesTable} from "./TableUtilitiesTable";
import IconUtilities from '../../images/icon-utilities.png';
import './TableUtilities.scss'

export function TableUtilities() {
    return (
        <div className="TableUtilities">
            <Container mt={16}>
                <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                    <Group className='TableUtilities-group'>
                        <Avatar src={IconUtilities}/>
                        <Text className="TTableUtilities-group__title">Utilities</Text>
                    </Group>
                    <TableUtilitiesTable/>
                </Paper>
            </Container>
        </div>
    )
}