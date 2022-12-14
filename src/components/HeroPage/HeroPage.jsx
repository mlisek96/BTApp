import {PageFooterBeforeMainPage} from "../PageFooterBeforeMainPage/PageFooterBeforeMainPage.jsx";
import {HeroPageContainer} from "../HeroPageContainer/HeroPageContainer";
import './HeroPage.scss';

export function HeroPageAll() {
    return (
        <div className="HeroPage">
            <HeroPageContainer />
            <PageFooterBeforeMainPage />
        </div>
    )
}