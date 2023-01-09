import {RingProgress, Text, Paper, Group} from '@mantine/core';
import {currencyFormatter} from "../../../utils.jsx";
import './RingProgressTotal.scss';


function getRingProgressVariant(amount, max) {
    const ratio = amount / max;
    if (ratio < 0.5) {
        return "green.5"
    } else if (ratio < 0.75) {
        return "yellow.5"
    } else {
        return "red.8"
    }
}

function getProgress(amount, max) {
    return (amount / max) * 100
}

export function RingProgressTotal({amount, max}) {
    return (
        <Paper
            className='RingProgressTotal'
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
                    sections={
                        [{
                            value: getProgress(amount, max),
                            color: getRingProgressVariant(amount, max)
                        }]
                    }
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
                        {currencyFormatter.format(amount)}
                        <Text
                            span
                            weight={400}
                            size='lg'
                            color='dimmed'
                        >
                            {''} / {currencyFormatter.format(max)}
                        </Text>
                    </Text>
                </div>
            </Group>
        </Paper>
    );

    // return (
    //     <div>
    //         {stats}
    //     </div>
    // );
}