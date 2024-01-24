import logo from '../../assets/moviePortal-transparent-logo.png';
import { IoNotificationsSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
const Header = () => {
    return (
        <header>
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={logo} width="139" height="26" alt="Logo" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <button><IoNotificationsSharp color='#7f30f7' size="1.9em"/></button>
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <button><MdSunny color='#dd6502' size="1.9em"/></button>
                            <button><FaMoon color='#7f30f7' size="1.9em"/></button>
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <button><FaCartShopping color='#7f30f7' size="1.9em"/></button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;