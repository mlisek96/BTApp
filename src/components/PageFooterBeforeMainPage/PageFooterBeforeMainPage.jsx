import { IconBrandGithub } from '@tabler/icons';
import './PageFooterBeforeMainPage.scss'

export function PageFooterBeforeMainPage() {
    return (
        <footer className="PageFooterBeforeMainPage">
            <div className='PageFooterBeforeMainPage__author'>
                Created by
                <a className='PageFooterBeforeMainPage__author-github' href='https://github.com/mlisek96' target='_blank'>
                    <IconBrandGithub size='16' className='PageFooterBeforeMainPage__author-github__icon'/>
                    {''} mlisek96
                </a>
            </div>
            <div className='PageFooterBeforeMainPage__text'>
                Image made by pikisuperstar from Freepik
            </div>
        </footer>
    )
}