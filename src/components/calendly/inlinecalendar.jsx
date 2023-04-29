import React from "react";
import { InlineWidget } from "react-calendly";

const Calendar = () => {
  return (
    <div className="Calendar">
      <InlineWidget url="https://calendly.com/anapatriciafaria/consulta" />
    </div>
  );
};

export default Calendar;
