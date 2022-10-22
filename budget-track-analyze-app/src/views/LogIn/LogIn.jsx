import {Link} from "react-router-dom"
import {TextInput, Paper, Title, Text, Container, Button} from '@mantine/core';
import './LogIn.scss'
import {PageFooterBeforeMainPage} from "../../components/PageFooterBeforeMainPage/PageFooterBeforeMainPage";

export function LogIn() {
    return (
        <div className='LogIn'>
            <Container size={420} mt={36} my={12}>
                <Title
                    align="center"
                    sx={(theme) => ({fontFamily: `Poppins, ${theme.fontFamily}`, fontWeight: 900})}
                >
                    Hello!
                </Title>
                <Text color="dimmed" size="sm" align="center" mt={5}>
                    Looks like you are for the first time here!
                </Text>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <Text color="dimmed" size="sm" align="center" mt={5}>
                        Give us your name and we will organize our application for you :)
                    </Text>
                    <TextInput label="Name" placeholder="Enter your name here" required/>
                    <Button className='LogIn__button' component={Link} to='/main-page' fullWidth mt="xl">
                        Sign in
                    </Button>
                </Paper>
            </Container>
            <div className='LogIn__img'></div>
            <PageFooterBeforeMainPage/>
        </div>
    );
}