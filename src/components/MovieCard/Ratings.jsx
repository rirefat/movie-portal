/* eslint-disable react/prop-types */
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

//  <FaStar color="#F7A031" size="1rem" />  // Full star
//  <FaStarHalfAlt color="#F7A031" size="1rem" />  // Half empty star
//  <FaRegStar color="#F7A031" size="1rem" /> // Empty star

const Ratings = ({ rating }) => {

    switch (rating) {
        case 0:
            return (
                <>
                    <FaRegStar color="#F7A031" size="1rem" />
                    <FaRegStar color="#F7A031" size="1rem" />
                    <FaRegStar color="#F7A031" size="1rem" />
                    <FaRegStar color="#F7A031" size="1rem" />
                    <FaRegStar color="#F7A031" size="1rem" />
                </>
            )
        case 1:
            return (
                <>
                    <FaStar color="#F7A031" size="1rem" />
                    <FaRegStar color="#F7A031" size="1rem" />
                    <FaRegStar color="#F7A031" size="1rem" />
                    <FaRegStar color="#F7A031" size="1rem" />
                    <FaRegStar color="#F7A031" size="1rem" />
                </>
            )
        case 2:
            return (
                <>
                    <FaStar color="#F7A031" size="1rem" />
                    <FaStar color="#F7A031" size="1rem" />
                    <FaRegStar color="#F7A031" size="1rem" />
                    <FaRegStar color="#F7A031" size="1rem" />
                    <FaRegStar color="#F7A031" size="1rem" />
                </>
            )
        case 3:
            return (
                <>
                    <FaStar color="#F7A031" size="1rem" />
                    <FaStar color="#F7A031" size="1rem" />
                    <FaStar color="#F7A031" size="1rem" />
                    <FaRegStar color="#F7A031" size="1rem" />
                    <FaRegStar color="#F7A031" size="1rem" />
                </>
            )
        case 4:
            return (
                <>
                    <FaStar color="#F7A031" size="1rem" />
                    <FaStar color="#F7A031" size="1rem" />
                    <FaStar color="#F7A031" size="1rem" />
                    <FaStar color="#F7A031" size="1rem" />
                    <FaRegStar color="#F7A031" size="1rem" />
                </>
            )
        case 4.5:
            return (
                <>
                    <FaStar color="#F7A031" size="1rem" />
                    <FaStar color="#F7A031" size="1rem" />
                    <FaStar color="#F7A031" size="1rem" />
                    <FaStar color="#F7A031" size="1rem" />
                    <FaStarHalfAlt color="#F7A031" size="1rem" />
                </>
            )
        case 5:
            return (
                <>
                    <FaStar color="#F7A031" size="1rem" />
                    <FaStar color="#F7A031" size="1rem" />
                    <FaStar color="#F7A031" size="1rem" />
                    <FaStar color="#F7A031" size="1rem" />
                    <FaStar color="#F7A031" size="1rem" />
                </>
            )
    }
};

export default Ratings;