import styles from './Search.module.css';
import {FaSearch} from 'react-icons/fa';
import { useHistory } from 'react-router';
import {useQuery} from '../hooks/useQuery';

export function Search() {
    const query = useQuery();
    const search = query.get("search");
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        //history.push("/?search="+searchText);//enviar lo del input al buscador
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput} 
                    type="text" 
                    value={search} 
                    placeholder="search"
                    area-label="Search Movies"
                    onChange={(e)=> {//se modifico para realizar una mejor busqueda
                        const value = e.target.value;
                        //setSearchText(value);
                        history.push("/?search="+value);
                    }} 
                />
                <FaSearch size={20} color="black" className={styles.searchButton} />    
            </div>
        </form>
    );
}
