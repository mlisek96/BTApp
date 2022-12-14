import {Link} from "react-router-dom";
import {Container, Title, Button, Group, Text, Image} from '@mantine/core';
import {PageFooterBeforeMainPage} from "../../components/PageFooterBeforeMainPage/PageFooterBeforeMainPage";
import image from '../../images/picture-background-2.png'
import './HeroPage.scss'

export function HeroPage() {
    return (
        <div className='HeroPage'>
            <Container className='HeroPage-container'>
                    <div className='HeroPage-content'>
                        <Title className='HeroPage-content__title'>
                            Welcome in <span className='HeroPage-content__highlight'>BTApp</span>-<br /> BudgetTrackAnalyze App
                        </Title>
                        <Text color="dimmed" mt="md">
                            web app that allows you to <span className='HeroPage-content__highlight'>track</span> and <span className='HeroPage-content__highlight'>analyze</span> your monthly home <span className='HeroPage-content__highlight'>budget</span>
                        </Text>
                        <Group className='HeroPage-group'>
                            <Button component={Link} to='/login' radius="xl" size="lg" className='HeroPage-content__button'>
                                Get started
                            </Button>
                        </Group>
                    </div>
                    <Image src={image} className='HeroPage-img' />
            </Container>
            <PageFooterBeforeMainPage />
        </div>
    );
}