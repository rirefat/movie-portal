import { FaFire, FaClock } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { MdUpcoming, MdOutlineFavorite } from "react-icons/md";

const Sidebar = () => {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-white" href="#">
                        <FaFire size="1.5rem" />
                        <span>Trending</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <RiMovie2Fill size="1.5rem" />
                        <span>New Releases</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <MdUpcoming size="1.5rem" />

                        <span>Coming Soon</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <MdOutlineFavorite size="1.5rem" />
                        <span>Favourites</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <FaClock size="1.5rem" />
                        <span>Watch Later</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;