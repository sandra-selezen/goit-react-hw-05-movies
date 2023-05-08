import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "services/fetchMovieReviews";
import { AuthorName, List, NoReviewText } from "./Reviews.styled";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async (id) => {
      try {
        Loading.circle();
        const fetchedReviews = await fetchMovieReviews(id);
        setReviews(fetchedReviews);
      } catch (error) {
        console.log(error);
      } finally {
        Loading.remove();
      }
    }
    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(item => (
        <li key={item.id}>
          <AuthorName>Author: {item.author}</AuthorName>
          <p>{item.content}</p>
        </li>
      ))}
        </List>
      )
      : <NoReviewText><p>We don't have any reviews for this movie 🥺</p></NoReviewText>}
    </>
  )
}

export default Reviews;