import { IoTicket } from "react-icons/io5";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { getImgUrl } from "../../utilities/utils";

const MovieCard = ({ movie }) => {
    console.log(getImgUrl(movie.cover))
    return (
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt={movie.title} />
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{movie.title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                <div className="flex items-center space-x-1 mb-5">
                    <FaStar color="#F7A031" size="1.55rem" />
                    <FaStarHalfAlt color="#F7A031" size="1.55rem" />
                    <FaRegStar color="#F7A031" size="1.55rem" />
                </div>
                <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-white font-semibold text-m"
                    href="#">
                    <IoTicket size="1.5rem" />
                    <span>${movie.price} | Add to Cart</span>
                </a>
            </figcaption>
        </figure>
    );
};

export default MovieCard;