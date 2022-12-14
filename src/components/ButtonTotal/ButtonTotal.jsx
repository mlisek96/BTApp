import {Button, createStyles} from "@mantine/core";
import {Link} from "react-router-dom";
// import {useState} from "react";
import './ButtonTotal.scss'

export function ButtonTotal() {
    // const [activ, setActiv] = useState(false)
    //
    // function handleCLick() {
    //     setActiv(prevState => !prevState)
    // }
    //
    // const useStyles = createStyles(() => ({
    //     buttonTotal: {
    //         fontWeight: 500,
    //         backgroundColor: activ === false ? '#b9cbb5' : '#2F9363',
    //
    //         '&:hover': {
    //             backgroundColor: 'rgba(47, 147, 99, 0.75)',
    //         }
    //     }
    // }))
    // const {classes, cx} = useStyles();

    return (
        <Button
            // className={cx(classes.buttonTotal)}
            className='ButtonTotal'
            component={Link} to='/expenses-table'
            radius="xl"
            size="sm"
            // onClick={handleCLick}
        >
            Total
        </Button>
    )
}