import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "services/fetchMovieReviews";
import { AuthorName, List } from "./Reviews.styled";

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
    <List>
      {reviews.map(item => (
        <li key={item.id}>
          <AuthorName>Author: {item.author}</AuthorName>
          <p>{item.content}</p>
        </li>
      ))}
    </List>
  )
}

export default Reviews;