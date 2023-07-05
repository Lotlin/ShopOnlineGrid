import {promoSloganText, promoTimerHeaderText} from './data.js';

export const createPromoTimerSloganElem = () => {
  const promoSlogan = document.createElement('h2');
  promoSlogan.className = 'ptomo-timer__slogan';
  promoSlogan.textContent = promoSloganText;

  return promoSlogan;
};

export const createPromoTimerHeaderElem = () => {
  const promoTimerHeader = document.createElement('p');
  promoTimerHeader.className = 'ptomo-timer__title';
  promoTimerHeader.textContent = promoTimerHeaderText;

  return promoTimerHeader;
};

export const createPromoTimerWrapperElem = () => {
  const promoTimerWrapper = document.createElement('div');
  promoTimerWrapper.className = 'ptomo-timer__items-wrapper';

  return promoTimerWrapper;
};

export const createPromoTimerNumElem = () => {
  const promoTimerNum = document.createElement('span');
  promoTimerNum.className = 'promo-timer__numbers';

  return promoTimerNum;
};

export const createPromoTimerDaysElem = () => {
  const promoTimerDays = document.createElement('p');
  promoTimerDays.className = 'promo-timer__unit promo-timer__unit--days';

  return promoTimerDays;
};


export const createPromoTimerHoursElem = () => {
  const promoTimerHours = document.createElement('p');
  promoTimerHours.className = 'promo-timer__unit promo-timer__unit--hours';

  return promoTimerHours;
};

export const createPromoTimerMinutesElem = () => {
  const promoTimerMinutes = document.createElement('p');
  promoTimerMinutes.className = 'promo-timer__unit promo-timer__unit--minutes';

  return promoTimerMinutes;
};

export const createPromoTimerSecondsElem = () => {
  const promoTimerSeconds = document.createElement('p');
  promoTimerSeconds.className = 'promo-timer__unit promo-timer__unit--seconds';

  return promoTimerSeconds;
};
