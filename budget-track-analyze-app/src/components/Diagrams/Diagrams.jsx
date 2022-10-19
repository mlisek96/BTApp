import {SimpleGrid, Group} from '@mantine/core';
import {RingProgressTotal} from "../RingProgressTotal/RingProgressTotal.tsx";
import {RingProgressByCategory} from "../RingProgressByCategory/RingProgressByCategory.tsx";

import './Diagrams.scss'

export function Diagrams() {
    return (
        <SimpleGrid className='Diagrams' cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
            <Group className='Diagrams__group'>
                <RingProgressTotal data={
                    [{
                        label: "Page views",
                        stats: "456,578",
                        progress: '65',
                        color: "teal",
                    }]
                }
                />
                <RingProgressByCategory />
            </Group>
        </SimpleGrid>
    )
}