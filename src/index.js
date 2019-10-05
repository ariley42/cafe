import './css/styles.css';
import './../node_modules/@fullcalendar/core/main.css';
import './../node_modules/@fullcalendar/daygrid/main.css';
// import './../node_modules/@fullcalendar/timegrid/main.css';
// import './../node_modules/@fullcalendar/list/main.css';


import { Calendar } from './../node_modules/@fullcalendar/core';
import dayGridPlugin from './../node_modules/@fullcalendar/daygrid';

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin]
  });

  calendar.render();
});
console.log("It's working!");

