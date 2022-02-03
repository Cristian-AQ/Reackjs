import  styles from './navbar.module.css';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';

export function Navbar(){
    return ( 
        <header className={styles.headerContainer}>
            <AppBar>
                <Toolbar className={styles.toolbarContainer}>
                    <IconButton>
                        <Menu />
                    </IconButton>
                    <IconButton>
                        <img src="public/logo192.png" alt="Home" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </header>
     );
}