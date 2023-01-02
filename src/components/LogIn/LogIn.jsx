import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Container, Image, Text, Title} from "@mantine/core";
import {PageFooterBeforeMainPage} from "../PageFooterBeforeMainPage/PageFooterBeforeMainPage.jsx";
import {LogInContainer} from "../LogInContainer/LogInContainer";
import image from "../../images/picture-background-2.png";
import './LogIn.scss';

const validateFunction = name => {
    if (!name) {
        return 'Entering name is required'
    } else if (name.length <= 2) {
        return 'The name must be more than two characters long'
    } else {
        return null
    }
}

export function LogInAll() {
    const [errorMsg, setErrorMsg] = useState(null)
    const [name, setName] = useState('')
    const navigate = useNavigate()

    function handleChange(event) {
        setName(event.target.value)
    }

    function handleClick(event) {
        event.preventDefault();
        const errorMsg = validateFunction(name);

        if(errorMsg) {
            setErrorMsg(errorMsg)
            // console.log('błąd - name')
            return
        }
        // console.log('submitted', name)
        localStorage.setItem('valueNameTaken', name);
        // location.href = '/main-page';
        navigate('/main-page');
    }

    // if (localStorage.getItem('valueNameTaken')) {
    //     // location.href = '/main-page';
    //     navigate('/main-page');
    // }

    return (
        <div className="LogIn">
            <Container className='LogIn-container'>
                <Title
                    className='LogIn-container__title'
                >
                    Hello!
                </Title>
                <Text
                    className='LogIn-container__text'
                >
                    Looks like you are for the first time here!
                </Text>
                <LogInContainer
                    error={errorMsg}
                    onClick={handleClick}
                    onChange={handleChange}
                />
                <Image
                    src={image}
                    className='LogIn-container__img'
                />
            </Container>
            <PageFooterBeforeMainPage/>
        </div>
    )
}