import {RingProgress, Text, Paper, Group} from '@mantine/core';
import {useBudgets} from "../../contexts/BudgetContext.jsx";
import {currencyFormatter} from "../../../utils.jsx";
import './RingProgressByCategory.scss';

// interface StatsRingProps {
//     data: {
//         label: string;
//         stats: string;
//         progress: number;
//         color: string;
//     }[];
// }

// export function RingProgressByCategory({data}: StatsRingProps) {
//     const stats = data.map((stat) => {
//         return (
//             <Paper withBorder radius="md" p="xs" key={stat.label}>
//                 <Group>
//                     <RingProgress
//                         size={125}
//                         roundCaps
//                         thickness={12}
//                         sections={[
//                             {value: stat.progress, color: stat.color},
//                             {value: stat.progress, color: stat.color},
//                             {value: stat.progress, color: stat.color},
//                             {value: stat.progress, color: stat.color},
//                             {value: stat.progress, color: stat.color},
//                             {value: stat.progress, color: stat.color},
//                         ]}
//                     />
//
//                     <div>
//                         <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
//                             Expenses in total
//                         </Text>
//                         <Text weight={700} size="xl">
//                             {stat.stats}
//                         </Text>
//                     </div>
//                 </Group>
//             </Paper>
//         );
//     });
//     return (
//         <div>
//             {stats}
//         </div>
//     );
// }
// function getProgress(amount, max) {
//     return (amount / max) * 100
// }

export function RingProgressByCategory({max, categories}) {
    // const {getCategoryExpenses} = useBudgets()
    // // // const category = categories.forEach(category)
    // // // const expenses = categories.map(category => {
    // // //     return getCategoryExpenses(category)
    // // // })
    // // // const expenses = categories.forEach(category => {
    // // //     return getCategoryExpenses(category)
    // // // })
    // const category = categories.forEach(category => {
    //     return category
    // })
    //
    // const expenses = getCategoryExpenses(category)
    // const amount = getCategoryExpenses(category).reduce(
    //     (total, expense) => total + expense.amount,
    //     0
    // )
    //
    // const sections = expenses.map((expense) => {
    //     return {
    //         value: getProgress(amount, max),
    //         color: 'cyan',
    //         tooltip: `${expense.category} - ${currencyFormatter.format(expense.amount)}`
    //     }
    // })

    return (
        <div>
            <Paper
                className='RingProgressByCategory'
                withBorder
                shadow="md"
                radius="md"
                p="xs"
            >
                <Group>
                    <RingProgress
                        size={150}
                        roundCaps
                        thickness={15}
                        sections={sections}
                    />

                    <div>
                        <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                            Expenses by Category
                        </Text>
                        <Text weight={300} size="xs">
                            Hover sections
                        </Text>
                        <Text weight={300} size="xs">
                            to see amounts
                        </Text>
                    </div>
                </Group>
            </Paper>
        </div>
    );
}