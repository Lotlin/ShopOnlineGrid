import {getdedlinePromoDate} from './getElements.js';
import {neededTimezoneOffset} from './data.js';
import {convertMinutesToMilliSeconds, convertHoursToMilliSeconds}
  from './util.js';

const getDedlineFromHTML = () => new Date(getdedlinePromoDate()).getTime();

const getLocalDateNow = () => Date.now();

const getLocalTimezoneOffset = () => new Date().getTimezoneOffset();

const convertLocaDateToGMT = () => {
  const timestampUTC = getDedlineFromHTML() -
    convertMinutesToMilliSeconds(getLocalTimezoneOffset());

  return timestampUTC;
};

const convertToNeededTimezone = (neededTimezoneOffset) => {
  const timestampUTC = convertLocaDateToGMT();
  const generalDedline =
    timestampUTC - convertHoursToMilliSeconds(neededTimezoneOffset);

  return generalDedline;
};

export const getTimeLeftInSeconds = () => {
  const generalDedline = convertToNeededTimezone(neededTimezoneOffset);
  const timeLeftInSeconds = (generalDedline - getLocalDateNow()) / 1000;

  return timeLeftInSeconds;
};

export const getAllItemsOfTimeLeft = () => {
  const days = Math.floor(getTimeLeftInSeconds() / (60 * 60 * 24));
  const hours = Math.floor(getTimeLeftInSeconds() %
    (60 * 60 * 24) / (60 * 60));
  const minutes = Math.floor(getTimeLeftInSeconds() / 60 % 60);
  const seconds = Math.floor(getTimeLeftInSeconds() % 60);

  return {
    days, hours, minutes, seconds,
  };
};

export const checkTimeIsRun = (timeLeftInSeconds) => {
  if ((timeLeftInSeconds <= 0)) {
    return true;
  }
  return false;
};

export const checkTimeLeftLessDay = (timeLeftInSeconds) => {
  if ((timeLeftInSeconds <= 60 * 60 * 24)) {
    return true;
  }
  return false;
};


