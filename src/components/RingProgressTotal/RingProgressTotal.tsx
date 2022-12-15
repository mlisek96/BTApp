import {RingProgress, Text, Paper, Group} from '@mantine/core';
import './RingProgressTotal.scss';

interface StatsRingProps {
    data: {
        label: string;
        stats: string;
        progress: number;
        color: string;
    }[];
}

export function RingProgressTotal({data}: StatsRingProps) {
    const stats = data.map((stat) => {
        return (
            <Paper
                className='RingProgressTotal'
                withBorder
                shadow="md"
                radius="md"
                p="xs"
                key={stat.label}
            >
                <Group>
                    <RingProgress
                        size={150}
                        roundCaps
                        thickness={15}
                        sections={[{value: stat.progress, color: stat.color}]}
                    />

                    <div>
                        <Text
                            color="dimmed"
                            size="xs"
                            transform="uppercase"
                            weight={700}
                        >
                            Expenses in total
                        </Text>
                        <Text
                            weight={700}
                            size="xl"
                        >
                            {stat.stats}
                        </Text>
                    </div>
                </Group>
            </Paper>
        );
    });

    return (
        <div>
            {stats}
        </div>
    );
}