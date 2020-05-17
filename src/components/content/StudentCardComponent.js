import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import avatar1 from '../../assets/img/man.svg'
import avatar2 from '../../assets/img/man1.svg'
import avatar3 from '../../assets/img/man2.svg'
import avatar4 from '../../assets/img/man3.svg'
import avatar5 from '../../assets/img/girl.svg'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler, faStar, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #DFE0EB',
        borderRadius: 4,
        cursor: 'pointer',
        height: 200,
        minWidth: 400,
        marginBottom: 20,
        marginRight: 20,

        ':hover': {
            borderColor: '#3751FF',
            ':nth-child(n) > span': {
                color: '#3751FF'
            }
        },
        '@media (max-width: 768px)': {
            minWidth: 350,
        },
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    },
    title: {
        color: '#0000bb',
        fontFamily: 'Muli',
        fontStyle: 'bold',
        fontWeight: '800',
        fontSize: 21,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        marginBottom: '0',
        marginLeft: 20,
        minWidth: 102
    },
    subTitle: {
        color: '#9FA2B4',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        marginBottom: 12,
        marginTop: 12,
        marginLeft: 20,
        minWidth: 102
        },
    header: {
        paddingTop: '25px',
        margin: '0',
        height: '100px',
        width: '100%',
    },
    avatar: {
        marginTop: '10px',
        marginLeft: '20px',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    },
    info: {
        color: '#9FA2B4',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        marginLeft: '20px',
    },
    footer: {
        background: "#fefefe",
        margin: '15px',
        marginTop: '25px',
        height: '40px',
        borderRadius: '10px'
    },
    footerText: {
        marginLeft: '10px',
        color: '#0000bb',
        fontFamily: 'Muli',
        fontStyle: 'bold',
        fontWeight: '800',
        fontSize: 14,
        lineHeight: '24px'    },
    badge: {
        marginRight: '30px'
    }
});

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

function StudentCardComponent({ name, email, phone, college, city, role, rank, even }) {
    return (
        <Column flexGrow={1} className={css(styles.container)}>
            <Row className={css(styles.header)}>
                <img src={avatars[Math.floor(Math.random() * 5)]} className={css(styles.avatar)}/>
                <div>
                <h1 className={css(styles.title)}>{name}</h1>
                <h1 className={css(styles.subTitle)}>{college.toUpperCase()}</h1>
                <span className={css(styles.info)}><FontAwesomeIcon icon={faPencilRuler} /> {role}</span>
                <span className={css(styles.info)}><FontAwesomeIcon icon={faStar} /> {rank}</span>
                </div>
            </Row>
            <Row className={css(styles.footer)} vertical="center">
                <div className={css(styles.footerText)}>
                <Row breakpoints={{ 400: 'column' }}>
                    <Column className={css(styles.badge)}>
                    <span><FontAwesomeIcon icon={faPhone} /> {phone}</span>
                    </Column>
                    <Column className={css(styles.badge)}>
                    <span><FontAwesomeIcon icon={faEnvelope}/> {email}</span>
                    </Column>
                </Row>
                </div>
            </Row>
        </Column>
    );
}

export default StudentCardComponent;
