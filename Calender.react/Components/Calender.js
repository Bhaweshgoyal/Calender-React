import React from "react";
import { connect } from "react-redux";
import { CHANGE_MONTH } from "../actions/calenderActions";
import { MONTH_LIST } from "../constants/calender";
import "./Calender.css";
export const Calender = (props) => {
  
  const changeMonth = (arrow) => {
    let selectedMonth;
    let selectedYear;
  
    if (arrow == "Left") {
      if (props.selectedMonth === 0) {
        selectedMonth = 11;
        selectedYear = props.selectedYear - 1;
      } else {
        selectedMonth = props.selectedMonth - 1;
        selectedYear = props.selectedYear;
      }
    } else if (arrow == "Right") {
      if (props.selectedMonth === 11) {
        selectedMonth = 0;
        selectedYear = props.selectedYear + 1;
      } else {
        selectedMonth = props.selectedMonth + 1;
        selectedYear = props.selectedYear;
      }
    } else {
      selectedMonth = props.selectedMonth;
      selectedYear = props.selectedYear;
    }

    props.dispatch({
      type: CHANGE_MONTH,
      payload: {
        selectedMonth,
        selectedYear,
      },
    });
  };
  return (
    <div className="calender-container">
      <div className="calender-inner-container">
        <h2 className="heading-Calender">CALENDAR</h2>
        <div id="calender-display">
          <div className="month-header">
            <div className="left-arrow" onClick={() => changeMonth("Left")}>
              {"<"}
            </div>
            <div id="month">
              {MONTH_LIST[props.selectedMonth]} , {props.selectedYear}
            </div>
            <div className="right-arrow" onClick={() => changeMonth("Right")}>
              {">"}
            </div>
          </div>
          <div className="calender-container-child">
            <div>Sunday</div>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
          </div>
          <div className="calender-container-child">
            {props.days?.map((day, index) => {
              return <div className="inner_NUM">{day}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    startDay: state.startDay,
    endDay: state.endDay,
    selectedMonth: state.selectedMonth,
    selectedYear: state.selectedYear,
    days: state.days,
  };
};

export default connect(mapStatetoProps)(Calender);
