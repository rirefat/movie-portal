import logo from '../../assets/moviePortal-transparent-logo.png';
import { IoNotificationsSharp } from "react-icons/io5";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useContext, useState } from 'react';
import CartModal from '../CartModal/CartModal';
import { CartContext, ThemeContext } from '../../utilities/contexts';

const Header = () => {

    const [showCart, setShowCart] = useState(false);
    const [cart] = useContext(CartContext);
    const [dark, setDark] = useContext(ThemeContext);

    return (
        <>
            {showCart && <CartModal onClose={() => setShowCart(false)} />}
            <header>
                <nav className="container flex items-center justify-between space-x-10 py-6 mb-10">
                    <a href="index.html">
                        <img src={logo} width="139" height="26" alt="Logo" />
                    </a>

                    <ul className="flex items-center space-x-5">
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <button><IoNotificationsSharp color='#7f30f7' size="1.9em" /></button>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setShowCart(true)} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <button><FaCartShopping color='#7f30f7' size="1.9em" /></button>
                                {cart.length > 0 && <span className='absolute -top-3 -right-3 text-xl bg-[#D42967]/[80%] text-center text-white rounded-[50%] w-[25px] h-[25px]'>{cart.length}</span>}
                            </a>
                        </li>
                        <li>
                            <a onClick={()=> setDark(dark=>!dark)} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <button>
                                    {
                                        dark ? <button><MdSunny color='#dd6502' size="1.9em" /></button> :
                                            <button><FaMoon color='#7f30f7' size="1.9em" /></button>
                                    }
                                </button>
                            </a>
                        </li>
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <button><FaUser color='#7f30f7' size="1.9em" /></button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;