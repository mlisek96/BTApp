import {Container, Text, Paper, Avatar, Group} from "@mantine/core";
import {TableCategory} from "../TableCategory/TableCategory.jsx";
import IconEntertainment from '../../images/icon-entertainment.png'
import './TableEntertainment.scss'


export function TableEntertainment() {
    return (
        <div className="TableEntertainment">
            <Container mt={16}>
                <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                    <Group className='TableEntertainment-group'>
                        <Avatar src={IconEntertainment}/>
                        <Text className="TableEntertainment-group__title">Entertainment</Text>
                    </Group>
                    <TableCategory category={'Entertainment'}/>
                </Paper>
            </Container>
        </div>
    )
}