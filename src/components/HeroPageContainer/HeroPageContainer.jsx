import {Container, Group, Image, Text, Title} from "@mantine/core";
import {ButtonGetStarted} from "../ButtonGetStarted/ButtonGetStarted";
import {HighlightText} from "../HighlightText/HighlightText";
import image from "../../images/picture-background-2.png";
import './HeroPageContainer.scss';

export function HeroPageContainer() {
    return (
        <div>
            <Container className='HeroPageContainer'>
                <div className='HeroPageContainer-content'>
                    <Title className='HeroPageContainer-content__title'>
                        Welcome in {''}
                        <HighlightText text={'BTApp'}/>
                        {''} -
                        <br />
                        BudgetTrackAnalyze App
                    </Title>
                    <Text color="dimmed" mt="md">
                        web app that allows you to {''}
                        <HighlightText text={'track'}/>
                        {''} and {''}
                        <HighlightText text={'analyze'}/>
                        {''} your monthly home {''}
                        <HighlightText text={'budget'}/>
                    </Text>
                    <Group className='HeroPageContainer-content__group'>
                        <ButtonGetStarted
                            linkTo={'/login'}
                            mt={'3rem'}
                            mb={'2.5rem'}
                            size={'lg'}
                            label={'Get started'}
                        />
                    </Group>
                </div>
                <Image
                    src={image}
                    className='HeroPageContainer-img'
                />
            </Container>
        </div>
    )
}