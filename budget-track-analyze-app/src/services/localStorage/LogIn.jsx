import {useEffect} from "react";

// export function AddNameToLocalStorage({name}) {
//     useEffect(() => {
//         localStorage.setItem('valueNameTaken', name);
//     })
// }

export function AddNameToLocalStorage({name}) {

    localStorage.setItem('valueNameTaken', name);
}