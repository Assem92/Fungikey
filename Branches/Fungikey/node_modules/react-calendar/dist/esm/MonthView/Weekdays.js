import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { getYear, getMonth, getMonthStart } from '@wojtekmaj/date-utils';
import Flex from '../Flex';
import { getDayOfWeek, isWeekend } from '../shared/dates';
import { formatShortWeekday as defaultFormatShortWeekday, formatWeekday as defaultFormatWeekday } from '../shared/dateFormatter';
import { isCalendarType } from '../shared/propTypes';
var className = 'react-calendar__month-view__weekdays';
var weekdayClassName = "".concat(className, "__weekday");
export default function Weekdays(props) {
  var calendarType = props.calendarType,
    _props$formatShortWee = props.formatShortWeekday,
    formatShortWeekday = _props$formatShortWee === void 0 ? defaultFormatShortWeekday : _props$formatShortWee,
    _props$formatWeekday = props.formatWeekday,
    formatWeekday = _props$formatWeekday === void 0 ? defaultFormatWeekday : _props$formatWeekday,
    locale = props.locale,
    onMouseLeave = props.onMouseLeave;
  var anyDate = new Date();
  var beginOfMonth = getMonthStart(anyDate);
  var year = getYear(beginOfMonth);
  var monthIndex = getMonth(beginOfMonth);
  var weekdays = [];
  for (var weekday = 1; weekday <= 7; weekday += 1) {
    var weekdayDate = new Date(year, monthIndex, weekday - getDayOfWeek(beginOfMonth, calendarType));
    var abbr = formatWeekday(locale, weekdayDate);
    weekdays.push( /*#__PURE__*/React.createElement("div", {
      key: weekday,
      className: clsx(weekdayClassName, isWeekend(weekdayDate, calendarType) && "".concat(weekdayClassName, "--weekend"))
    }, /*#__PURE__*/React.createElement("abbr", {
      "aria-label": abbr,
      title: abbr
    }, formatShortWeekday(locale, weekdayDate).replace('.', ''))));
  }
  return /*#__PURE__*/React.createElement(Flex, {
    className: className,
    count: 7,
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave
  }, weekdays);
}
Weekdays.propTypes = {
  calendarType: isCalendarType.isRequired,
  formatShortWeekday: PropTypes.func,
  formatWeekday: PropTypes.func,
  locale: PropTypes.string,
  onMouseLeave: PropTypes.func
};