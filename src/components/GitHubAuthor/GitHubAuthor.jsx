import {IconBrandGithub} from "@tabler/icons";
import './GitHubAuthor.scss';

export function GitHubAuthor({style, styleLink}) {
    return (
        <div
            className="GitHubAuthor"
            style={style}
        >
            Created by
            <a
                className='GitHubAuthor-link'
                href='https://github.com/mlisek96/BTApp'
                target='_blank'
                style={styleLink}
            >
                <IconBrandGithub
                    size='16'
                    className='GitHubAuthor-link__icon'
                />
                {''} mlisek96
            </a>
        </div>
    )
}