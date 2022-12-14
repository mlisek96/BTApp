import {Container, Text, Paper, Avatar, Group} from "@mantine/core";
import {TableCategory} from "../TableCategory/TableCategory.jsx";
import IconTransport from '../../images/icon-transport.png';
import './TableTransportation.scss';

export function TableTransportation() {
    return (
        <div className="TableTransportation">
            <Container mt={16}>
                <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                    <Group className='TableTransportation-group'>
                        <Avatar src={IconTransport}/>
                        <Text className="TableTransportation-group__title">Transportation</Text>
                    </Group>
                    <TableCategory category={'Transportation'}/>
                </Paper>
            </Container>
        </div>
    )
}