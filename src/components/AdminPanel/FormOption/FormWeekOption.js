import React from "react";

const FormWeekOption = ({ week }) => {
  return week.map((item) => <option key={item.idWeek}>{item.dateWeek}</option>);
};

export default FormWeekOption;
