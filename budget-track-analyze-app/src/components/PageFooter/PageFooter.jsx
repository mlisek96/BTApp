import { Link } from "react-router-dom";
import './PageFooter.scss'

export function PageFooter() {
    return (
        <footer className="PageFooter">
            <div className='PageFooter__author'>
                Created by <a className='PageFooter__author-github' href='https://github.com/mlisek96' target='_blank'>mlisek96</a>
            </div>
            <div className='PageFooter__text'>
                Images made by Freepik & TablerIcons
            </div>
        </footer>
    )
}