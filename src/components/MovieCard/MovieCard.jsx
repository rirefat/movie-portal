/* eslint-disable react/prop-types */
import { IoTicket } from "react-icons/io5";
import { getImgUrl } from "../../utilities/utils";
import Ratings from "./Ratings";
import MovieDetailsModal from "../MovieDetailsModal/MovieDetailsModal";
import { useState } from "react";

const MovieCard = ({ movie }) => {
    const [modalOpen, setModalOpen]=useState(false);

    const handleModalClose =()=>{
        setModalOpen(false);
    }

    return (
        <>
            {modalOpen && <MovieDetailsModal movie={movie} onClose={handleModalClose}/>}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt={movie.title} />
                <figcaption className="pt-4">
                    <h3 onClick={()=>setModalOpen(true)}  className="text-xl mb-1 cursor-pointer hover:underline underline-offset-8">{movie.title}</h3>
                    <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                    <div className="flex items-center space-x-1 mb-5">
                        <Ratings rating={movie.rating} />
                    </div>
                    <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-white font-semibold text-m"
                        href="#">
                        <IoTicket size="1.5rem" />
                        <span>${movie.price} | Add to Cart</span>
                    </a>
                </figcaption>
            </figure>
        </>
    );
};

export default MovieCard;