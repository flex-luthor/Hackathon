import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000239',
        border: '1px solid #DFE0EB',
        borderRadius: '5px 5px 0 0',
        height: 10,
        padding: '24px 32px 24px 32px',
        marginRight: '30px',
        marginTop: '50px',
        '@media (max-width: 768px)': {
            marginBottom: 30,
        },
        },
    title: {
        color: '#fff',
        fontFamily: '',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        textAlign: 'center'
    },
    desktop: {
        '@media (max-width: 768px)': {
            display: 'none'
        }
    }
});

function StudentListHeader({ name, email, phone, college, city, role, rank }) {
    return (
        <Column flexGrow={1} className={css(styles.container)} vertical="center">
            <Row wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
                <Column flexGrow={1} horizontal="center" vertical="center">
                    <span className={css(styles.title)}>Name</span>
                </Column>
                <Column flexGrow={1} horizontal="center" className="desktop1" vertical="center">
                    <span className={css(styles.title)}>Email-Id</span>
                </Column>
                <Column flexGrow={1} horizontal="center" vertical="center" className="desktop2">
                    <span className={css(styles.title)}>Phone</span>
                </Column>
                <Column flexGrow={1} horizontal="center" vertical="center" className="desktop2">
                    <span className={css(styles.title)}>College</span>
                </Column>
                <Column flexGrow={1} horizontal="center" vertical="center" className="desktop2">
                    <span className={css(styles.title)}>City</span>
                </Column>
                <Column flexGrow={1} horizontal="center" vertical="center">
                    <span className={css(styles.title)}>Role</span>
                </Column><Column flexGrow={1} horizontal="center" vertical="center">
                    <span className={css(styles.title)}>Rank</span>
                </Column>
            </Row>
        </Column>
    );
}

export default StudentListHeader;