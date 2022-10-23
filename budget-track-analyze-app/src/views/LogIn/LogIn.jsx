import {Link} from "react-router-dom"
import {TextInput, Paper, Title, Text, Container, Button, Image} from '@mantine/core';
import './LogIn.scss'
import {PageFooterBeforeMainPage} from "../../components/PageFooterBeforeMainPage/PageFooterBeforeMainPage";
import image from '../../images/picture-background-2.png'

export function LogIn() {
    return (
        <div className='LogIn'>
            <Container className='LogIn-container'>
                <Title className='LogIn-container__title'>Hello!</Title>
                <Text className='LogIn-container__text'>
                    Looks like you are for the first time here!
                </Text>
                <Container className='LogIn-container__content'>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <Text color="dimmed" size="sm" align="center" mt={5}>
                        Give us your name and we will organize our application for you :)
                    </Text>
                    <TextInput label="Name" placeholder="Enter your name here" required/>
                    <Button className='LogIn-container__content-btn' component={Link} to='/main-page' fullWidth mt="xl">
                        Sign in
                    </Button>
                </Paper>
                </Container>
                <Image src={image} className='LogIn-container__img'/>
            </Container>
            <PageFooterBeforeMainPage/>
        </div>
    );
}