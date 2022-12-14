import { IconBrandGithub } from '@tabler/icons';
import './PageFooter.scss'

export function PageFooter() {
    return (
        <footer className="PageFooter">
            <div className='PageFooter__author'>
                Created by
                <a className='PageFooter__author-github' href='https://github.com/mlisek96' target='_blank'>
                    <IconBrandGithub size='16' className='PageFooter__author-github__icon'/>
                    {''} mlisek96
                </a>
            </div>
            <div className='PageFooter__text'>
                Images made by Freepik & TablerIcons <br/>& Flaticon
            </div>
        </footer>
    )
}