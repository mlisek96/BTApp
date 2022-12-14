import {Container, Text, Paper, Avatar, Group} from "@mantine/core";
import {TableCategory} from "../TableCategory/TableCategory.jsx";
import IconHoliday from '../../images/icon-holiday.png';
import './TableHoliday.scss';


export function TableHoliday() {
    return (
        <div className="TableHoliday">
            <Container mt={16}>
                <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                    <Group className='TableHoliday-group'>
                        <Avatar src={IconHoliday}/>
                        <Text className="TableHoliday-group__title">Holiday</Text>
                    </Group>
                    <TableCategory category={"Holiday"}/>
                </Paper>
            </Container>
        </div>
    )
}