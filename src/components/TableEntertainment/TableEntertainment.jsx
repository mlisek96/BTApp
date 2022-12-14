import {Container, Text, Paper, Avatar, Group} from "@mantine/core";
import './TableEntertainment.scss'
import {TableEntertainmentTable} from "./TableEntertainmentTable";


export function TableEntertainment() {
    return (
        <div className="TableEntertainment">
            <Container mt={16}>
                <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                    <Group className='TableEntertainment-group'>
                        <Avatar src={'../src/images/icon-entertainment.png'}/>
                        <Text className="TableEntertainment-group__title">Entertainment</Text>
                    </Group>
                    <TableEntertainmentTable/>
                </Paper>
            </Container>
        </div>
    )
}