import {ActionIcon} from "@mantine/core";
import { IconArrowBigLeft } from '@tabler/icons';
import './ButtonArrowLeft.scss'

export function ButtonArrowLeft() {
    return (
        <ActionIcon className='ButtonArrowLeft' size="lg" radius="lg" variant="filled">
            <IconArrowBigLeft size={20} />
        </ActionIcon>
    )
}