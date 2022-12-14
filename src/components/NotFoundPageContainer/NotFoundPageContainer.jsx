import {Link} from "react-router-dom";
import {Button, Container, Image, SimpleGrid, Text, Title} from "@mantine/core";
import image from "../../images/picture-background-404.png";
import './NotFoundPageContainer.scss';

export function NotFoundPageContainer() {
    return (
        <div>
            <Container className="NotFoundPageContainer">
                <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
                    <div>
                        <Title className='NotFoundPageContainer__title'>Something is not right...</Title>
                        <Text color="dimmed" size="lg">
                            Page you are trying to open does not exist. You may have mistyped the address, or the
                            page has been moved to another URL.
                        </Text>
                        <Button component={Link} to='/main-page' size="md" mt="xl" radius='xl' className="NotFoundPageContainer__button">
                            Get back to main page
                        </Button>
                    </div>
                    <Image src={image} className="NotFoundPageContainer__img" />
                </SimpleGrid>
            </Container>
        </div>
    )
}