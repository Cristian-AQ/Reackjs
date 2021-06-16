import { Link } from 'react-router-dom'

const Home = () => {
    return ( 
        <div className='App'>
            <header className='App-header'>
                <img src={process.env.PUBLIC_URL+'/images/pokemon_logo.png'} alt='logo' width='400'/>
                <h1>POKEAPP</h1>
                <Link to='/pokemons'>Ver Pokemons</Link>
                </header>
        </div>
     );
}
export default Home;
