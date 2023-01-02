import {ActionIcon} from "@mantine/core";
import { IconArrowBigRight } from '@tabler/icons';
import './ButtonArrowRight.scss'

export function ButtonArrowRight() {
    return (
        <ActionIcon
            className='ButtonArrowRight'
            size="lg"
            radius="lg"
            variant="filled"
        >
            <IconArrowBigRight
                size={20}
            />
        </ActionIcon>
    )
}