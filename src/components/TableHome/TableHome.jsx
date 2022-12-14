import {Container, Text, Paper, Avatar, Group} from "@mantine/core";
import {TableCategory} from "../TableCategory/TableCategory.jsx";
import IconHome from '../../images/icon-home.png';
import './TableHome.scss'


export function TableHome() {
    return (
        <div className="TableHome">
            <Container mt={16}>
                <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                    <Group className='TableHome-group'>
                        <Avatar src={IconHome}/>
                        <Text className="TableHome-group__title">Home</Text>
                    </Group>
                    <TableCategory category={'Home'}/>
                </Paper>
            </Container>
        </div>
    )
}