import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { useEffect,useState } from 'react';
import { get } from '../utils/httpClient';

export function MoviesGrid(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie").then((data) =>{
            setMovies(data.results)
        });
    }, []);//arreglo de dependencias-vacio kiere decir q se ejecute una vez cuando se carga el componente y no se vuelva a ejecutar
    return(
        <ul className={styles.moviesGrid}>
            {movies.map((movie) =>( 
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
}