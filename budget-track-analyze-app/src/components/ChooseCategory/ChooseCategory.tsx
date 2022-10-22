import { forwardRef } from 'react';
import { Group, Avatar, Text, Select } from '@mantine/core';
import './ChooseCategory.scss'

const data = [
    {
        image: '../src/images/icon-entertainment.png',
        label: 'Entertainment',
        value: 'Entertainment',
        description: 'Like: movie, games, music, sports, others',
    },

    {
        image: '../src/images/icon-groceries.png',
        label: 'Groceries',
        value: 'Groceries',
        description: 'Just simple daily groceries',
    },

    {
        image: '../src/images/icon-dinning out.png',
        label: 'Dinning out',
        value: 'Dinning out',
        description: 'Just simple meeting up with friends',
    },

    {
        image: '../src/images/icon-home.png',
        label: 'Home',
        value: 'Home',
        description: 'Like: rent, household supplies, furniture, maintenance, others',
    },

    {
        image: '../src/images/icon-life.png',
        label: 'Life',
        value: 'Life',
        description: 'Like: insurance, clothing, medical expenses, taxes, education, childcare, others',
    },

    {
        image: '../src/images/icon-transport.png',
        label: 'Transportation',
        value: 'Transportation',
        description: 'Like: parking, car, bus/train, gas/fuel, plane, taxi, bicycle, hotel, others',
    },

    {
        image: '../src/images/icon-utilities.png',
        label: 'Utilities',
        value: 'Utilities',
        description: 'Like: electricity, heat/gas, water, TV/phone/Internet, trash, others',
    },

    {
        image: '../src/images/icon-holiday.png',
        label: 'Holiday',
        value: 'Holiday',
        description: 'Just all your expenses for relax and holiday',
    },
];

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    image: string;
    label: string;
    description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ image, label, description, ...others }: ItemProps, ref) => (
        <div ref={ref} {...others}>
            <Group noWrap>
                <Avatar src={image} />

                <div>
                    <Text size="sm">{label}</Text>
                    <Text size="xs" color="dimmed">
                        {description}
                    </Text>
                </div>
            </Group>
        </div>
    )
);

export function ChooseCategory() {
    return (
        <Select
            className='ChooseCategory'
            label="Choose category"
            placeholder="Pick one"
            itemComponent={SelectItem}
            data={data}
            maxDropdownHeight={400}
            nothingFound="Nobody here"
            filter={(value, item) =>
                item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
                item.description.toLowerCase().includes(value.toLowerCase().trim())
            }
        />
    );
}