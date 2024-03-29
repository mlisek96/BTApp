import {RingProgress, Text, Paper, Group} from '@mantine/core';
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
function getProgress(amount, max) {
    return (amount / max) * 100
}

export function RingProgressByCategory({amount, max, category}) {
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
                        sections={[
                            {value: 10, color: 'cyan', tooltip: 'Documents – 40 Gb'},
                            {value: 10, color: 'orange', tooltip: 'Apps – 25 Gb'},
                            {value: 10, color: 'grape', tooltip: 'Other – 15 Gb'},
                            {value: 10, color: 'blue', tooltip: 'Other – 18 Gb'},
                            {value: 15, color: 'yellow', tooltip: 'Other – 98 Gb'},
                            {value: 15, color: 'red', tooltip: 'Other – 10 Gb'},
                            {value: 15, color: 'pink', tooltip: 'Other – 10 Gb'},
                        ]}
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