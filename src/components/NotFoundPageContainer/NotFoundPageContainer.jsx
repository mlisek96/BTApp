import {Container, Image, SimpleGrid, Text, Title} from "@mantine/core";
import {ButtonGetStarted} from "../ButtonGetStarted/ButtonGetStarted";
import image from "../../images/picture-background-404.png";
import './NotFoundPageContainer.scss';

export function NotFoundPageContainer() {
    // function handleClick(event) {
    //     // event.preventDefault();
    //     if (localStorage.getItem('valueNameTaken')) {
    //         location.href = '/main-page';
    //     }
    // }

    return (
        <div>
            <Container className="NotFoundPageContainer">
                <SimpleGrid
                    spacing={80}
                    cols={2}
                    breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}
                >
                    <div>
                        <Title
                            className='NotFoundPageContainer__title'
                        >
                            Something is not right...
                        </Title>
                        <Text
                            color="dimmed"
                            size="lg"
                        >
                            Page you are trying to open does not exist. You may have mistyped the address,
                            or the page has been moved to another URL.
                        </Text>
                        <ButtonGetStarted
                            linkTo={'/'}
                            mb={'2.5rem'}
                            mt={'1.5rem'}
                            size={'md'}
                            label={'Get back to main page'}
                            // onClick={handleClick}
                        />
                    </div>
                    <Image
                        src={image}
                        className="NotFoundPageContainer__img"
                    />
                </SimpleGrid>
            </Container>
        </div>
    )
}