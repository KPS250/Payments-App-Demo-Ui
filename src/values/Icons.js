import InternetErrorIcon from '../assets/images/error_internet.svg';
import ApiErrorIcon from '../assets/images/error_api.svg';
import Drawer from '../assets/icons/ic_menu.svg';
import Back from '../assets/icons/ic_arrow_back.svg';
import DrawerIcon from '../assets/icons/ic_drawer.svg';
import TransactionSent from '../assets/icons/ic_sent.svg';
import TransactionReceived from '../assets/icons/ic_received.svg';
import TransactionFailed from '../assets/icons/ic_fail.svg';
import Dot from '../assets/icons/ic_dot.svg';
import BackSpace from '../assets/icons/ic_backspace.svg';
import ArrowDown from '../assets/icons/ic_arrow_down.svg';

export const Icons= {
    drawer: <DrawerIcon />,
    arrow_back: <Back width={30} height={30} />,
    internetError: <InternetErrorIcon />,
    apiError: <ApiErrorIcon />,
    sent: <TransactionSent width={16} height={16} />,
    received: <TransactionReceived width={20} height={20}/>,
    failed: <TransactionFailed width={16} height={16}/>,
    dot: <Dot />,
    backspace: <BackSpace />,
    arrowDown: <ArrowDown width={3} height={12}/>
}