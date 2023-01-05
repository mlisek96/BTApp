import {Container, Text, Paper, Group, Avatar} from "@mantine/core";
import {TableCategory} from "../TableCategory/TableCategory.jsx";
import IconGroceries from '../../images/icon-groceries.png';
import './TableGroceries.scss';


export function TableGroceries() {
    return (
        <div className="TableGroceries">
            <Container mt={16}>
                <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                    <Group className='TableGroceries-group'>
                        <Avatar src={IconGroceries}/>
                        <Text className="TableGroceries-group__title">Groceries</Text>
                    </Group>
                    <TableCategory category={'Groceries'}/>
                </Paper>
            </Container>
        </div>
    )
}