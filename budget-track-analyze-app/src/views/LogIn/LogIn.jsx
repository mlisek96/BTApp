import {useState} from "react";
import {TextInput, Paper, Title, Text, Container, Button, Image} from '@mantine/core';
import './LogIn.scss'
import {PageFooterBeforeMainPage} from "../../components/PageFooterBeforeMainPage/PageFooterBeforeMainPage";
import image from '../../images/picture-background-2.png'

const validateFunction = name => {
    if (!name) {
        return 'Entering name is required'
    } else if (name.length <= 2) {
        return 'The name must be more than two characters long'
    } else {
        return null
    }
}

export function LogIn() {
    const [errorMsg, setErrorMsg] = useState(null)
    const [name, setName] = useState('')

    function handleChange(event) {
        setName(event.target.value)
    }

    function handleClick(event) {
        event.preventDefault();
        const errorMsg = validateFunction(name);

        if(errorMsg) {
            setErrorMsg(errorMsg)
            // console.log('błąd - name')
            return
        }

        // console.log('submitted', name)
        localStorage.setItem('valueNameTaken', name);
        location.href = '/main-page';
    }

    if (localStorage.getItem('valueNameTaken')) {
        location.href = '/main-page';
    }

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
                    <TextInput
                        onChange={handleChange}
                        error={errorMsg}
                        label="Name"
                        placeholder="Enter your name here"
                        required
                    />
                    <Button
                        onClick={handleClick}
                        className='LogIn-container__content-btn'
                        fullWidth
                        mt="xl"
                    >
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