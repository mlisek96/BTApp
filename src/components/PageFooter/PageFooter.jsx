import {GitHubAuthor} from "../GitHubAuthor/GitHubAuthor.jsx";
import './PageFooter.scss'

export function PageFooter() {
    return (
        <footer className="PageFooter">
            <GitHubAuthor
                style={{
                    color: '#ffffff',
                }}
                styleLink={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }}
            />
            <div className='PageFooter__text'>
                Images made by Freepik & TablerIcons <br/>& Flaticon
            </div>
        </footer>
    )
}