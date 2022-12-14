import {Container, Title, Text, Group, Paper} from "@mantine/core";
import './ExpensesTable.scss'
import {TableExpensesTotal} from "../../components/TableExpensesTotal/TableExpensesTotal.jsx";
import {ButtonTotal} from "../../components/ButtonTotal/ButtonTotal";
import {ButtonByCategory} from "../../components/ButtonByCategory/ButtonByCategory";
import {ButtonArrowRight} from "../../components/ButtonArrowRight/ButtonArrowRight";
import {ButtonArrowLeft} from "../../components/ButtonArrowLeft/ButtonArrowLeft";


export function ExpensesTable() {
    return (
       <div className="ExpensesTable">
           <Container mt={16}>
               <Title className="ExpensesTable__header">Expenses Table</Title>
               <Text className="ExpensesTable__description">Let's check your expenses table in total</Text>
               <div>
                   <Paper withBorder shadow="md" radius="md" p="md" classNames='Table__paper'>
                       <Group position='left' mb='md' >
                           <ButtonTotal />
                           <ButtonByCategory />
                           <ButtonArrowLeft />
                           <ButtonArrowRight />
                       </Group>
                       <TableExpensesTotal />
                   </Paper>
               </div>
           </Container>
       </div>
    )
}