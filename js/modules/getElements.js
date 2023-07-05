export const getdedlinePromoElement = () =>
  document.querySelector('[data-timer-deadline]');

export const getdedlinePromoDate = () =>
  getdedlinePromoElement().getAttribute('data-timer-deadline');

export const getPromoTimerSlogan = () =>
  getdedlinePromoElement().querySelector('.ptomo-timer__slogan');

export const getPromoTimerWrapper = () =>
  getdedlinePromoElement().querySelector('.ptomo-timer__items-wrapper');

export const getPromoTimerTitle = () =>
  getdedlinePromoElement().querySelector('.ptomo-timer__title');

export const getPromoTimerDaysElem = () => {
  const daysWrapper =
    getdedlinePromoElement().querySelector('.promo-timer__unit--days');
  const daysCounter = daysWrapper.querySelector('span');
  const daysText = daysWrapper.childNodes[1];

  return {
    daysWrapper,
    daysCounter,
    daysText,
  };
};

export const getPromoTimerHoursElem = () => {
  const hoursWrapper =
    getdedlinePromoElement().querySelector('.promo-timer__unit--hours');
  const hoursCounter = hoursWrapper.querySelector('span');
  const hoursText = hoursWrapper.childNodes[1];

  return {
    hoursWrapper,
    hoursCounter,
    hoursText,
  };
};

export const getPromoTimerMinutesElem = () => {
  const minutesWrapper =
    getdedlinePromoElement().querySelector('.promo-timer__unit--minutes');
  const minutesCounter = minutesWrapper.querySelector('span');
  const minutesText = minutesWrapper.childNodes[1];

  return {
    minutesWrapper,
    minutesCounter,
    minutesText,
  };
};

export const getPromoTimerSecondsElem = () => {
  const secondsWrapper =
    getdedlinePromoElement().querySelector('.promo-timer__unit--seconds');
  const secondsCounter = secondsWrapper.querySelector('span');
  const secondsText = secondsWrapper.childNodes[1];

  return {
    secondsWrapper,
    secondsCounter,
    secondsText,
  };
};
