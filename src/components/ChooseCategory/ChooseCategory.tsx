import {forwardRef, useEffect, useState} from 'react';
import { Group, Avatar, Text, Select } from '@mantine/core';
import './ChooseCategory.scss'

const data = [
    {
        image: '../../images/icon-entertainment.png',
        label: 'Entertainment',
        value: 'Entertainment',
        description: 'Like: movie, games, music, sports, others',
    },

    {
        image: '../../images/icon-groceries.png',
        label: 'Groceries',
        value: 'Groceries',
        description: 'Just simple daily groceries',
    },

    {
        image: '../../images/icon-dinning out.png',
        label: 'Dinning out',
        value: 'Dinning out',
        description: 'Just simple meeting up with friends',
    },

    {
        image: '../../images/icon-home.png',
        label: 'Home',
        value: 'Home',
        description: 'Like: rent, household supplies, furniture, maintenance, others',
    },

    {
        image: '../../images/icon-life.png',
        label: 'Life',
        value: 'Life',
        description: 'Like: insurance, clothing, medical expenses, taxes, education, childcare, others',
    },

    {
        image: '../../images/icon-transport.png',
        label: 'Transportation',
        value: 'Transportation',
        description: 'Like: parking, car, bus/train, gas/fuel, plane, taxi, bicycle, hotel, others',
    },

    {
        image: '../../images/icon-utilities.png',
        label: 'Utilities',
        value: 'Utilities',
        description: 'Like: electricity, heat/gas, water, TV/phone/Internet, trash, others',
    },

    {
        image: '../../images/icon-holiday.png',
        label: 'Holiday',
        value: 'Holiday',
        description: 'Just all your expenses for relax and holiday',
    },
];

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    image: string;
    label: string;
    description: string;
    value: string;
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

export function ChooseCategory({error, setForm}) {
    const [searchValue, onSearchChange] = useState('')

    useEffect(() => {
        setForm(prev => {
            return {
                ...prev,
                category: searchValue
            }
        })
    }, [searchValue])


    return (
        <Select
            error={error}
            name='category'
            className='ChooseCategory'
            label="Choose category"
            placeholder="Pick one"
            itemComponent={SelectItem}
            data={data}
            maxDropdownHeight={400}
            nothingFound="Nobody here"
            clearable
            filter={(value, item) =>
                item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
                item.description.toLowerCase().includes(value.toLowerCase().trim())
            }
            onSearchChange={onSearchChange}
            searchValue={searchValue}
        />
    );
}