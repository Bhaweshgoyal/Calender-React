import { CHANGE_MONTH } from "../actions/calenderActions";
import { getDays } from "../utils/calenderUtil";
import {
  dayInMonth,
  monthDays,
  selectedMonth,
  selectedYear,
} from "../utils/dateUtil";

//  selectedMonth , "selectedMonth")

const startDay = monthDays(`${selectedMonth}-01-${selectedYear}`);

//  startDay)

const endDay = dayInMonth(selectedMonth, selectedYear);

const initialState = {
  startDay,
  endDay,
  selectedMonth,
  selectedYear,
  days: getDays(startDay, endDay),
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MONTH:
      //  'action', action)
      const { selectedMonth, selectedYear } = action.payload;
      const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`);

      const endDay = dayInMonth(selectedMonth, selectedYear);
      const days = getDays(startDay, endDay);

      //logic to change the startDAY, ENDDAY AND DAYS
      return { ...state, selectedMonth, selectedYear, days };
    default:
      return state;
  }
};
