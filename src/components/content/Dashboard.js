import React from 'react';
import {useState, useEffect} from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import MiniCardComponent from './MiniCardComponent';
// import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';
import { connect } from "react-redux";
import { fetchStudents } from "../../redux/action_types";
import StudentListComponent from './StudentListComponent';
import StudentListHeader from './StudentListHeader';

const styles = StyleSheet.create({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    studentListContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30,
        }
    }
});

function ContentComponent(props) {

    useEffect(() => {
        props.dispatch(fetchStudents());
      }, [])
  
    const { error, loading, students } = props;
    console.log(students);
    console.log(loading);


    return (
        <Column>
            <Row className={css(styles.cardsContainer)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 768: 'column' }}>
                <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
                    <MiniCardComponent className={css(styles.miniCardContainer)} title="Students" value={students.length} />
                    <MiniCardComponent className={css(styles.miniCardContainer)} title="Projects" value={12} />
                    <MiniCardComponent className={css(styles.miniCardContainer)} title="Trainee" value={18} />
                </Row>
            </Row>
            {/* <Row horizontal="space-between" className={css(styles.lastRow)} breakpoints={{ 1024: 'column' }}>
                <UnresolvedTicketsComponent containerStyles={styles.unresolvedTickets} />
                <TasksComponent containerStyles={styles.tasks} />
            </Row> */}
            
            <Row className={css(styles.cardsContainer)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 768: 'column' }}>
                <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
                    <StudentListHeader className={css(styles.cardRow)} />
                </Row>
            </Row>
            {
                students.map(student => {
                    const even = students.indexOf(student) % 2 === 0 ? true : false;
                    return (<Row className={css(styles.cardsContainer)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 768: 'column' }}>
                    <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
                        <StudentListComponent className={css(styles.cardRow)} name={student.name} email={student.email} phone={student.phone} college={student.college} city={student.city} role={student.role} rank={student.rank} even={even}/ >
                    </Row>
                </Row>)
                })
            }
        </Column>
    );
}

const mapStateToProps = state => ({
    students: state.students.students,
    loading: state.students.loading,
    error: state.students.error
  });

export default connect(mapStateToProps)(ContentComponent);
