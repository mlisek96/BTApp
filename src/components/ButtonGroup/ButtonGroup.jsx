import {Group} from "@mantine/core";
import {ButtonTotal} from "../ButtonTotal/ButtonTotal.jsx";
import {ButtonByCategory} from "../ButtonByCategory/ButtonByCategory.jsx";
import {ButtonArrowLeft} from "../ButtonArrowLeft/ButtonArrowLeft.jsx";
import {ButtonArrowRight} from "../ButtonArrowRight/ButtonArrowRight.jsx";

export function ButtonGroup({marginBottom}) {
    return (
        <div>
            <Group position='left' mb={marginBottom}>
                <ButtonTotal/>
                <ButtonByCategory/>
                <ButtonArrowLeft/>
                <ButtonArrowRight/>
            </Group>
        </div>
    )
}