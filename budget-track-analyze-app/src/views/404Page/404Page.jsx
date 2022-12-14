import { Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import {Link} from "react-router-dom";
import image from '../../images/picture-background-404.png';
import './404Page.scss'
import {PageFooterBeforeMainPage} from "../../components/PageFooterBeforeMainPage/PageFooterBeforeMainPage";

export function NotFoundPage() {
    return (
        <div className="NotFoundPage">
            <Container className="NotFoundPage-container">
                <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
                    <div>
                        <Title className='NotFoundPage-container__title'>Something is not right...</Title>
                        <Text color="dimmed" size="lg">
                            Page you are trying to open does not exist. You may have mistyped the address, or the
                            page has been moved to another URL.
                        </Text>
                        <Button component={Link} to='/main-page' size="md" mt="xl" radius='xl' className="NotFoundPage-container__button">
                            Get back to main page
                        </Button>
                    </div>
                    <Image src={image} className="NotFoundPage-container__img" />
                </SimpleGrid>
            </Container>
            <PageFooterBeforeMainPage />
        </div>
    );
}