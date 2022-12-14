import {Link} from "react-router-dom";
import {Button, Container, Group, Image, Text, Title} from "@mantine/core";
import image from "../../images/picture-background-2.png";
import './HeroPageContainer.scss';

export function HeroPageContainer() {
    return (
        <div>
            <Container className='HeroPageContainer'>
                <div className='HeroPageContainer-content'>
                    <Title className='HeroPageContainer-content__title'>
                        Welcome in <span className='HeroPageContainer-content__highlight'>BTApp</span>-<br /> BudgetTrackAnalyze App
                    </Title>
                    <Text color="dimmed" mt="md">
                        web app that allows you to <span className='HeroPageContainer-content__highlight'>track</span> and <span className='HeroPageContainer-content__highlight'>analyze</span> your monthly home <span className='HeroPageContainer-content__highlight'>budget</span>
                    </Text>
                    <Group>
                        <Button component={Link} to='/login' radius="xl" size="lg" className='HeroPageContainer-content__button'>
                            Get started
                        </Button>
                    </Group>
                </div>
                <Image src={image} className='HeroPageContainer-img' />
            </Container>
        </div>
    )
}