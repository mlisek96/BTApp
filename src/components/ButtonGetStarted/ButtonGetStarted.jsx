import {Link} from "react-router-dom";
import {Button} from "@mantine/core";
import './ButtonGetStarted.scss';

export function ButtonGetStarted({linkTo, size, mt, mb, label, onClick}) {
    return (
        <div>
            <Button
                onClick={onClick}
                component={Link}
                to={linkTo}
                radius='xl'
                size={size}
                mt={mt}
                mb={mb}
                className="ButtonGetStarted"
            >
                {label}
            </Button>
        </div>
    )
}