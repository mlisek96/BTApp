import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { Avatar } from "../Avatar";
import { PageFooter } from "../PageFooter/index.jsx";
import './PageHeader.scss'

export function PageHeader() {
    return (
        <header className="PageHeader">
            <Logo />
            <Avatar />
            <Menu />
            <PageFooter />
        </header>
    )
}