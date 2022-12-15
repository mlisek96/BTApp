import {GitHubAuthor} from "../GitHubAuthor/GitHubAuthor";
import './PageFooterBeforeMainPage.scss'

export function PageFooterBeforeMainPage() {
    return (
        <footer className="PageFooterBeforeMainPage">
            <GitHubAuthor
                style={{
                    color: '#868e96',
                }}
                styleLink={{
                    color: '#868e96',
                    backgroundColor: 'rgba(255,255,255,0.25)',
                }}
            />
            <div className='PageFooterBeforeMainPage__text'>
                Image made by pikisuperstar from Freepik
            </div>
        </footer>
    )
}