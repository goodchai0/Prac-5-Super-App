import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./List.module.css";

const List = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        headers: {
          "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.get(
          `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`,
          options
        );

        console.log(response)
        setMovies(response.data.results.slice(4, 8));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [genre]);

  return (
    <>
      <p className={styles.heading} style={{ overflowY: "hidden" }}>
        {genre}
      </p>
      <div style={{ display: "flex", overflow: "hidden", marginLeft: "2vw" }}>
        {movies.map((movie, idx) => (
          <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
            <img
              src={movie?.primaryImage?.url}
              style={{
                objectFit: "cover",
                width: "20vw",
                height: "15vh",
                borderRadius: "12px",
              }}
              alt={movie?.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
