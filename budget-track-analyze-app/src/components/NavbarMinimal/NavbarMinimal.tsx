import {useState} from 'react';
import {Link} from "react-router-dom";
import {Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, ActionIcon} from '@mantine/core';
import {
    TablerIcon,
    IconHome2,
    IconSquarePlus,
    IconListDetails,
    IconLogout,
    IconReceipt2,
} from '@tabler/icons';
import './NavbarMinimal.scss'


const useStyles = createStyles((theme) => ({
    link: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#196159',

        '&:hover': {
            backgroundColor: '#A4C956'
        },
    },

    active: {
        '&, &:hover': {
            backgroundColor: 'rgba(164,201,86,0.25)',
            color: '#2F9363',
        },
    },
}));

interface NavbarLinkProps {
    icon: TablerIcon;
    label: string;
    active?: boolean;

    onClick?(): void;
}

function NavbarLink({icon: Icon, label, active, onClick}: NavbarLinkProps) {
    const {classes, cx} = useStyles();
    return (
        <Tooltip label={label} position="right" transitionDuration={0}>
            <UnstyledButton onClick={onClick} className={cx(classes.link, {[classes.active]: active})}>
                <Icon stroke={1.5}/>
            </UnstyledButton>
        </Tooltip>
    );
}

const mockdata = [
    {icon: IconSquarePlus, label: 'Add Expense'},
    {icon: IconHome2, label: 'Main Page'},
    {icon: IconListDetails, label: 'Expenses Table'},
    // { icon: IconCalendarStats, label: 'CalendarMini' },
    // {icon: IconLogout, label: 'Logout'},
];

export function NavbarMinimal() {
    const [active, setActive] = useState(2);

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <Navbar className='Navbar' width={{base: 80}} p="md">
            <Center>
                <Link to='/'>
                    <IconReceipt2 className='Navbar__logo'/>
                </Link>
            </Center>
            <Navbar.Section grow mt={100}>
                <Stack justify="center" spacing={0}>
                    <Link to='/add-expense'>
                        {links[0]}
                    </Link>
                    <Link to='/'>
                        {links[1]}
                    </Link>
                    <Link to='/expenses-table'>
                        {links[2]}
                    </Link>
                </Stack>
            </Navbar.Section>
            <Navbar.Section>
                <Stack justify="center" spacing={0}>
                    <NavbarLink icon={IconLogout} label="Logout"/>
                </Stack>
            </Navbar.Section>
        </Navbar>
    );
}