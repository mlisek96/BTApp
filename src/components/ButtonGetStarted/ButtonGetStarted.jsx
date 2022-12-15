import {Link} from "react-router-dom";
import {Button} from "@mantine/core";
import './ButtonGetStarted.scss';

export function ButtonGetStarted({linkTo}) {
    return (
        <div>
            <Button
                component={Link}
                to={linkTo}
                radius='xl'
                size='lg'
                className="ButtonGetStarted"
            >
                Get started
            </Button>
        </div>
    )
}