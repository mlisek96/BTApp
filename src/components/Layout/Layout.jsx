import {Outlet} from "react-router-dom";
import {PageHeader} from "../PageHeader/PageHeader";
import {NavbarMinimal} from "../NavbarMinimal/NavbarMinimal.tsx";
import './_Layout.scss'

export function Layout() {
    return (
        <div className="Layout">
            <NavbarMinimal/>
            <main className="Layout__main">
                <Outlet/>
            </main>
            <PageHeader/>
        </div>
    )
}