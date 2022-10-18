import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { AvatarLogo } from "../Avatar";
import { PageFooter } from "../PageFooter/index.jsx";
import { ImageMenu } from "../ImageMenu/ImageMenu.jsx";
import './PageHeader.scss'

export function PageHeader() {
    return (
        <header className="PageHeader">
            <Logo />
            <AvatarLogo />
            <Menu />
            <ImageMenu />
            <PageFooter />
        </header>
    )
}