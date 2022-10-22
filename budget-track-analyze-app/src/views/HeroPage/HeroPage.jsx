import {Link} from "react-router-dom";
import {createStyles, Container, Title, Button, Group, Text,} from '@mantine/core';
import './HeroPage.scss'
import {PageFooterBeforeMainPage} from "../../components/PageFooterBeforeMainPage/PageFooterBeforeMainPage";

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 3,
    },

    content: {
        textAlign: 'center',
        maxWidth: 700,
        margin: '0 auto',

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    title: {
        color: '#041E24',
        fontFamily: `Poppins, ${theme.fontFamily}`,
        fontSize: 44,
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        flex: 2,

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: theme.radius.sm,
        padding: '4px 12px',
    },
}));

export function HeroPage() {
    const { classes } = useStyles();
    return (
        <div className='HeroPage'>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Welcome in <span className={classes.highlight}>BTApp</span>-<br /> BudgetTrackAnalyze App
                        </Title>
                        <Text color="dimmed" mt="md">
                            web app that allows you to <span className={classes.highlight}>track</span> and <span className={classes.highlight}>analyze</span> your monthly home <span className={classes.highlight}>budget</span>
                        </Text>
                        <Group className='HeroPage-group'>
                            <Button component={Link} to='/login' radius="xl" size="lg" className='HeroPage-group__button'>
                                Get started
                            </Button>
                        </Group>
                    </div>
                    <div className='HeroPage__img'></div>
                    <PageFooterBeforeMainPage />
                </div>
            </Container>
        </div>
    );
}