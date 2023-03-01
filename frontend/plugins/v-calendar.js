import Vue from 'vue'
import Vcalendar from 'v-calendar'
// import 'v-calendar/lib/v-calendar.min.css';
Vue.use(Vcalendar, {             // second is optional
    // componentPrefix: 'vc',
    datePickerShowDayPopover: false
//   datePickerTintColor: '#F00',
//   datePickerShowDayPopover: false
})