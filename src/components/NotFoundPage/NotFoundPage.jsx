import {NotFoundPageContainer} from "../NotFoundPageContainer/NotFoundPageContainer";
import {PageFooterBeforeMainPage} from "../PageFooterBeforeMainPage/PageFooterBeforeMainPage";
import './NotFoundPage.scss';

export function NotFoundPageAll() {
    return (
        <div className="NotFoundPage">
            <NotFoundPageContainer />
            <PageFooterBeforeMainPage />
        </div>
    )
}