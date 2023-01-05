import {Container, Text, Paper, Avatar, Group} from "@mantine/core";
import {TableCategory} from "../TableCategory/TableCategory.jsx";
import IconDinningOut from '../../images/icon-dinning out.png';
import './TableDinningOut.scss'


export function TableDinningOut() {
    return (
        <div className="TableDinningOut">
            <Container mt={16}>
                <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                    <Group className='TableDinningOut-group'>
                        <Avatar src={IconDinningOut}/>
                        <Text className="TableDinningOut-group__title">Dinning out</Text>
                    </Group>
                    <TableCategory category={'DinningOut'}/>
                </Paper>
            </Container>
        </div>
    )
}