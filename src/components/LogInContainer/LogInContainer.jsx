import {Button, Container, Paper, Text, TextInput} from "@mantine/core";
import './LogInContainer.scss';

export function LogInContainer({error, onClick, onChange}) {
    return (
        <div>
            <Container className='LogInContainer'>
                <Paper
                    withBorder
                    shadow="md"
                    p={30}
                    mt={30}
                    radius="md"
                >
                    <Text
                        color="dimmed"
                        size="sm"
                        align="center"
                        mt={5}
                    >
                        Give us your name and we will organize our application for you 😊
                    </Text>
                    <TextInput
                        onChange={onChange}
                        error={error}
                        label="Name"
                        placeholder="Enter your name here"
                        required
                    />
                    <Button
                        onClick={onClick}
                        className='LogInContainer-btn'
                        fullWidth
                        mt="xl"
                    >
                        Sign in
                    </Button>
                </Paper>
            </Container>
        </div>
    )
}