import {addZero, getCorrectPlural} from './util.js';
import {
  getPromoTimerDaysElem, getPromoTimerHoursElem,
  getPromoTimerMinutesElem, getPromoTimerSecondsElem,
  getPromoTimerWrapper, getPromoTimerTitle,
  getdedlinePromoElement, getPromoTimerSlogan,
} from './getElements.js';
import {dayForms, hoursForms, minutesForm, secondsForms} from './data.js';
import {
  createPromoTimerSloganElem, createPromoTimerHeaderElem,
  createPromoTimerWrapperElem, createPromoTimerDaysElem,
  createPromoTimerNumElem, createPromoTimerHoursElem,
  createPromoTimerMinutesElem, createPromoTimerSecondsElem,
} from './createElements.js';

const renderPromoTimerSeconds = (allItemsOfTimeLeft) => {
  getPromoTimerSecondsElem().secondsCounter.textContent =
    addZero(allItemsOfTimeLeft.seconds);
  getPromoTimerSecondsElem().secondsText.textContent =
    getCorrectPlural(allItemsOfTimeLeft.seconds, secondsForms);
};

const renderPromoTimerMinutes = (allItemsOfTimeLeft) => {
  getPromoTimerMinutesElem().minutesCounter.textContent =
    addZero(allItemsOfTimeLeft.minutes);
  getPromoTimerMinutesElem().minutesText.textContent =
    getCorrectPlural(allItemsOfTimeLeft.minutes, minutesForm);
};

const renderPromoTimerHour = (allItemsOfTimeLeft) => {
  getPromoTimerHoursElem().hoursCounter.textContent =
    addZero(allItemsOfTimeLeft.hours);
  getPromoTimerHoursElem().hoursText.textContent =
    getCorrectPlural(allItemsOfTimeLeft.hours, hoursForms);
};

const renderPromoTimerDays = (allItemsOfTimeLeft) => {
  getPromoTimerDaysElem().daysCounter.textContent = allItemsOfTimeLeft.days;
  getPromoTimerDaysElem().daysText.textContent =
    getCorrectPlural(allItemsOfTimeLeft.days, dayForms);
};

export const renderPromoTimerAllItems = (allItemsOfTimeLeft) => {
  renderPromoTimerSeconds(allItemsOfTimeLeft);
  renderPromoTimerMinutes(allItemsOfTimeLeft);
  renderPromoTimerHour(allItemsOfTimeLeft);
  renderPromoTimerDays(allItemsOfTimeLeft);
};

export const hidePromo = () => {
  getPromoTimerWrapper().style.display = 'none';
  getPromoTimerTitle().style.display = 'none';
  getPromoTimerSlogan().style.display = 'none';
};

export const hideSeconds = () => {
  getPromoTimerSecondsElem().secondsWrapper.style.display = 'none';
};

export const hideDays = () => {
  getPromoTimerDaysElem().daysWrapper.style.display = 'none';
};

const renderPromoTimerDaysElem = () => {
  const promoTimerDays = createPromoTimerDaysElem();
  promoTimerDays.append(createPromoTimerNumElem());
  promoTimerDays.append('');

  return promoTimerDays;
};

const renderPromoTimerHoursElement = () => {
  const promoTimerHours = createPromoTimerHoursElem();
  promoTimerHours.append(createPromoTimerNumElem());
  promoTimerHours.append('');

  return promoTimerHours;
};

const renderPromoTimerMinutesElement = () => {
  const promoTimerMinutes = createPromoTimerMinutesElem();
  promoTimerMinutes.append(createPromoTimerNumElem());
  promoTimerMinutes.append('');

  return promoTimerMinutes;
};

const renderPromoTimerSecondsElement = () => {
  const promoTimerSeconds = createPromoTimerSecondsElem();
  promoTimerSeconds.append(createPromoTimerNumElem());
  promoTimerSeconds.append('');

  return promoTimerSeconds;
};

const renderPrormoTimerWrapperElem = () => {
  const promoTimerWrapper = createPromoTimerWrapperElem();

  promoTimerWrapper.append(renderPromoTimerDaysElem());
  promoTimerWrapper.append(renderPromoTimerHoursElement());
  promoTimerWrapper.append(renderPromoTimerMinutesElement());
  promoTimerWrapper.append(renderPromoTimerSecondsElement());

  return promoTimerWrapper;
};

export const renderPromoTimer = () => {
  getdedlinePromoElement().append(createPromoTimerSloganElem());
  getdedlinePromoElement().append(createPromoTimerHeaderElem());
  getdedlinePromoElement().append(renderPrormoTimerWrapperElem());
};
