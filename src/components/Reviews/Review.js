import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "services/fetchMovieReviews";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async (id) => {
      try {
        const fetchedReviews = await fetchMovieReviews(id);
        setReviews(fetchedReviews);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews(movieId);
  }, [movieId]);

  return (
    <ul>
      {reviews.map(item => (
        <li key={item.id}>
          <p>Author: {item.author}</p>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  )
}

export default Reviews;