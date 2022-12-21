import { IconHome } from '@tabler/icons';
import { IconListDetails } from '@tabler/icons';
import { ButtonAddExpense } from "../ButtonAddExpense/ButtonAddExpense.jsx";
import {ButtonMenu} from "../ButtonMenu/ButtonMenu";
import './Menu.scss';

export function Menu() {
    return (
        <div className="Menu">
            <ButtonAddExpense />
            <ButtonMenu
                linkTo={'/user/main-page'}
                label={'Main Page'}
                icon={<IconHome className="ButtonMenu__icon"/>}
            />
            <ButtonMenu
                linkTo={'/user/expenses-table'}
                label={'Expenses Table'}
                icon={<IconListDetails className='ButtonMenu__icon'/>}
            />
        </div>
    )
}