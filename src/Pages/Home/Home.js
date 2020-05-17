import React from 'react';
import {useState, useEffect} from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from '../../components/sidebar/SidebarComponent';
import HeaderComponent from '../../components/header/HeaderComponent';
import { connect } from "react-redux";
import { fetchStudents } from "../../redux/action_types";



import '../../App.css';
import { func } from 'prop-types';
import Dashboard from '../../components/content/Dashboard';
import Students from '../../components/content/Students';
import { Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';


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

function App(props) {
    const [selectedItem, setSelectedItem] = React.useState('Dashboard')
    let [width, setWidth] = useState(getWidth());

    //Cookies for session
    const [cookies, setCookie] = useCookies(['loggedIn', 'userToken']);


    useEffect(() => {
      props.dispatch(fetchStudents());
    }, [])

    const { error, loading, students } = props;

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
            {  // Note: You have to change the Redirect condition to !cookies.loggedIn to get it working
            !cookies.loggedIn ? <Redirect to = "/signin" /> : ''
            } 
            <SidebarComponent selectedItem={selectedItem} onChange={selectedItem => setSelectedItem(selectedItem)} />
            <Column flexGrow={1} className={css(styles.mainBlock)}>
                <HeaderComponent title={selectedItem} />
                {selectedItem === 'Dashboard' ? 
                    (<div className={css(styles.content)}>
                      <Dashboard />
                     </div>) : selectedItem === 'Students' ? 
                     (<div className={css(styles.content)}>
                     <Students />
                    </div>) : selectedItem === 'Projects' ? 
                     (<div className={css(styles.content)}>
                    </div>) : '' }
            </Column>
        </Row>
    );
}

const mapStateToProps = state => ({
  students: state.students.students,
  loading: state.students.loading,
  error: state.students.error
});

export default connect(mapStateToProps)(App);
