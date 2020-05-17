import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    menu: {
        zIndex: '10',
        position: "absolute",
        clear: 'both',
        background: '#fff',
        padding: '20px',
        listStyleType: 'none',
        transform: 'translate(-180px, 20px)',
        color: '#f00',
        minWidth: '150px',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        borderRadius: '10px'
        
    },
    menuItem: {
        margin: '30px 0',
        lineHeight: '40px',
        padding: '10px 30px',
        textDecoration: 'none',
        borderRadius: '10px',
        ':hover': {
            background: '#000239',
            color: 'white'
        }
    },
    menuList: {
        textAlign: 'center'
    }
});


export default function MenuComponent() {
    return (
        <ul className={css(styles.menu)}>
			<li className={css(styles.menuList)}><a href="#" className={css(styles.menuItem)}>Edit Profile</a></li>
			<li  className={css(styles.menuList)}><a href="#" className={css(styles.menuItem)}>Log out</a></li>
		</ul>
    )
} 