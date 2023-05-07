import { useEffect, useState, useRef, Suspense } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "services/fetchMovieDetails";
import { DetailsImg, DetailsItem, DetailsList, GoBackBtn, MovieText, MovieSubtitle, MovieTitle, Wrapper, InfoList, InfoLink } from "components/MovieDetails/MovieDetails.styled";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    const fetchDetails = async (id) => {
      try {
        const fetchedMovieDetails = await fetchMovieDetails(id);
        setMovieDetails(fetchedMovieDetails);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetails(movieId);
  }, [movieId]);

  const { title, overview, poster_path, movieGenres, vote_average } = movieDetails;
  
  return (
    <>
      <GoBackBtn to={backLinkRef.current}>Go Back</GoBackBtn>
      <Wrapper>
        <DetailsList>
          <DetailsItem>
            <DetailsImg src={poster_path} alt={title} />
          </DetailsItem>
          <DetailsItem>
            <MovieTitle>{title}</MovieTitle>
            <MovieText>User Score: {vote_average}%</MovieText>
            <MovieSubtitle>Overview</MovieSubtitle>
            <MovieText>{overview}</MovieText>
            <MovieSubtitle>Genres</MovieSubtitle>
            <MovieText>{movieGenres}</MovieText>
            <MovieSubtitle>Additional information</MovieSubtitle>
            <InfoList>
              <li><InfoLink to={"cast"}>Cast</InfoLink></li>
              <li><InfoLink to={"reviews"}>Reviews</InfoLink></li>
            </InfoList>
          </DetailsItem>
        </DetailsList>
      </Wrapper>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  )
}

export default MovieDetails;