import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { useEffect,useState } from 'react';
import { get } from '../utils/httpClient';
import Spinner from './Spinner';
import { useQuery } from '../hooks/useQuery';

export function MoviesGrid(){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        const searchUrl = search ? "/search/movie?query="+search : "/discover/movie"
        get(searchUrl).then((data) =>{
            setMovies(data.results)
            setIsLoading(false);
        });
    }, [search]);//arreglo de dependencias-vacio kiere decir q se ejecute una vez cuando se carga el componente y no se vuelva a ejecutar
    
    if(isLoading){
        return <Spinner />;
    }

    return(
        <ul className={styles.moviesGrid}>
            {movies.map((movie) =>( 
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
}