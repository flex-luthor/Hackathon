import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import './ContentStyle.css';

const styles = StyleSheet.create({
    containerEven: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #DFE0EB',
        borderRadius: 4,
        cursor: 'pointer',
        height: 20,
        padding: '24px 32px 24px 32px',
        marginRight: '30px',
        marginTop: '20px',
        ':hover': {
            borderColor: '#3751FF',
            ':nth-child(n) > span': {
                color: '#3751FF'
            }
        },
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'

    },
    containerOdd: {
        backgroundColor: '#ECEDFF',
        border: '1px solid #DFE0EB',
        borderRadius: 4,
        cursor: 'pointer',
        padding: '24px 32px 24px 32px',
        marginRight: '30px',
        marginTop: '20px',
        ':hover': {
            borderColor: '#3751FF',
            ':nth-child(n) > span': {
                color: '#3751FF'
            }
        },
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'

    },
    title: {
        color: '#444',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        textAlign: 'center'
    }  

});

function StudentListComponent({ name, email, phone, college, city, role, rank, even }) {
    return (
            <Column flexGrow={1} className={even ? css(styles.containerEven) : css(styles.containerOdd)} vertical="center">
            <Row wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
                <Column flexGrow={1} horizontal="center" vertical="center">
                    <span className={css(styles.title)}>{name}</span>
                </Column>
                <Column flexGrow={0.5} className="desktop1" horizontal="center" vertical="center">
                    <span className={css(styles.title)}>{email}</span>
                </Column>
                <Column flexGrow={1} className="desktop2" horizontal="center" vertical="center">
                    <span className={css(styles.title)}>{phone}</span>
                </Column>
                <Column flexGrow={1} className="desktop2" horizontal="center" vertical="center">
                    <span className={css(styles.title)}>{college}</span>
                </Column>
                <Column flexGrow={1} className="desktop2" horizontal="center" vertical="center">
                    <span className={css(styles.title)}>{city}</span>
                </Column>
                <Column flexGrow={1} horizontal="center" vertical="center">
                    <span className={css(styles.title)}>{role}</span>
                </Column><Column flexGrow={1} horizontal="center" vertical="center">
                    <span className={css(styles.title)}>{rank}</span>
                </Column>
            </Row>
        </Column>
        );
}

export default StudentListComponent;