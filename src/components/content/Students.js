import React from 'react';
import {useEffect} from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import MiniCardComponent from './MiniCardComponent';
import { connect } from "react-redux";
import { fetchStudents } from "../../redux/action_types";
import StudentCardComponent from "./StudentCardComponent"

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
                {
                students.map(student => {
                    const even = students.indexOf(student) % 2 === 0 ? true : false;
                    return (
                        <StudentCardComponent name={student.name} email={student.email} phone={student.phone} college={student.college} city={student.city} role={student.role} rank={student.rank}/>
                    )
                })
            }
                </Row>
            </Row>
            
        </Column>
    );
}

const mapStateToProps = state => ({
    students: state.students.students,
    loading: state.students.loading,
    error: state.students.error
  });

export default connect(mapStateToProps)(ContentComponent);
