import {Text, Title} from "@mantine/core";
import './Header.scss';

export function Header({title, text, marginBottom, marginTop}) {
    return (
        <div className='Header'>
            <Title
                className="Header__title"
                mt={marginTop}
            >
                {title}
            </Title>
            <Text
                className="Header__text"
                mb={marginBottom}
            >
                {text}
            </Text>
        </div>
    )
}