import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>MovieDetails</h1>
      <button type="button">Back to Home</button>
    </>
  )
}

export default MovieDetails;