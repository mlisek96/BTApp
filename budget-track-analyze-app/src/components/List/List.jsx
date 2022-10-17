import {ListTotal} from "../ListTotal/ListTotal.jsx";
import {ListCategory} from "../ListCategory/ListCategory.jsx";

export function List() {
    return (
        <div className="List">
            <ListTotal />
            <ListCategory />
        </div>
    )
}