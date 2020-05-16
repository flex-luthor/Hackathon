import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from '../components/sidebar/SidebarComponent';
import HeaderComponent from '../components/header/HeaderComponent';
import './../App.css';

const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});

function App() {
    const [selectedItem, setSelectedItem] = React.useState('Tickets')
    let [width, setWidth] = useState(getWidth());


    useEffect(() => {
        const resizeListener = () => {
          // change width from the state object
          setWidth(getWidth())
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);
    
        // clean up function
        return () => {
          // remove resize listener
          window.removeEventListener('resize', resizeListener);
        }
      }, [])

      return (
        <Row className={css(styles.container)}>
            <SidebarComponent selectedItem={selectedItem} onChange={selectedItem => setSelectedItem(selectedItem)} />
            <Column flexGrow={1} className={css(styles.mainBlock)}>
                <HeaderComponent title={selectedItem} />
                <div className={css(styles.content)}>
                  
                </div>
            </Column>
        </Row>
    );
}


export default App;
