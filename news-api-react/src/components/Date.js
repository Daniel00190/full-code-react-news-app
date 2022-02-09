import React from "react";
import Moment from "react-moment";
import "moment-timezone";

export default class Date extends React.Component {
   render() {
      const fullDate = new Date();
      return (
         <Moment className="date" format=" dddd | Do MMMM gggg">
            {fullDate}
         </Moment>
      );
   }
}
