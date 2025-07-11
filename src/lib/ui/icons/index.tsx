import { CurrencyIcon } from './currency-icon';
import { BurgerIcon } from './burger-icon';
import { LockIcon } from './lock-icon';
import { DragIcon } from './drag-icon';
import { DeleteIcon } from './delete-icon';
import { ArrowUpIcon } from './arrow-up-icon';
import { ArrowDownIcon } from './arrow-down-icon';
import { MenuIcon } from './menu-icon';
import { CloseIcon } from './close-icon';
import { CheckMarkIcon } from './check-mark-icon';
import { ListIcon } from './list-icon';
import { ProfileIcon } from './profile-icon';
import { EditIcon } from './edit-icon';
import { InfoIcon } from './info-icon';
import { ShowIcon } from './show-icon';
import { HideIcon } from './hide-icon';
import { LogoutIcon } from './logout-icon';
import { PlusIcon } from './plus-icon';
import { RefreshIcon } from './refresh-icon';
import type { TIconProps } from './utils';

export type TIconComponent = (props: TIconProps) => React.JSX.Element;

export type TIcons = {
    CurrencyIcon: TIconComponent;
    BurgerIcon: TIconComponent;
    LockIcon: TIconComponent;
    DragIcon: TIconComponent;
    DeleteIcon: TIconComponent;
    ArrowUpIcon: TIconComponent;
    ArrowDownIcon: TIconComponent;
    MenuIcon: TIconComponent;
    CloseIcon: TIconComponent;
    CheckMarkIcon: TIconComponent;
    ListIcon: TIconComponent;
    ProfileIcon: TIconComponent;
    EditIcon: TIconComponent;
    InfoIcon: TIconComponent;
    ShowIcon: TIconComponent;
    HideIcon: TIconComponent;
    LogoutIcon: TIconComponent;
    PlusIcon: TIconComponent;
    RefreshIcon: TIconComponent;
};

export {
    CurrencyIcon,
    BurgerIcon,
    LockIcon,
    DragIcon,
    DeleteIcon,
    ArrowUpIcon,
    ArrowDownIcon,
    MenuIcon,
    CloseIcon,
    CheckMarkIcon,
    ListIcon,
    ProfileIcon,
    EditIcon,
    InfoIcon,
    ShowIcon,
    HideIcon,
    LogoutIcon,
    PlusIcon,
    RefreshIcon,
};
