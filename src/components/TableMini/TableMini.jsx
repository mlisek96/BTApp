import {Text, Paper} from "@mantine/core";
import {TableTotal} from "../TableMiniTotal/TableTotal.jsx";
import {TableExpensesTotal} from "../TableExpensesTotal/TableExpensesTotal";
import './TableMini.scss';

export function TableMini() {
    return (
        <div className="TableMini">
            <Paper
                withBorder
                shadow="md"
                radius="md"
                p="md"
                classNames='TableMini-paper'
            >
                <Text
                    color="dimmed"
                    size="xs"
                    transform="uppercase"
                    weight={700}
                    align='center'
                >
                    Table
                </Text>
                <TableTotal/>
                {/*<TableExpensesTotal />*/}
            </Paper>
        </div>
    )
}