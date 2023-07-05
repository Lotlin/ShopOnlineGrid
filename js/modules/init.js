import {
  getTimeLeftInSeconds, getAllItemsOfTimeLeft, checkTimeIsRun,
  checkTimeLeftLessDay,
} from './timerControl.js';
import {
  renderPromoTimerAllItems, hidePromo, hideDays, hideSeconds,
} from './render.js';

export const promoTimerInit = () => {
  const timeLeftInSeconds = getTimeLeftInSeconds();
  const allItemsOfTimeLeft = getAllItemsOfTimeLeft();

  renderPromoTimerAllItems(allItemsOfTimeLeft);

  const intervalId = setTimeout(promoTimerInit, 1000);

  if (!checkTimeLeftLessDay(timeLeftInSeconds)) {
    hideSeconds();
  }

  if (checkTimeLeftLessDay(timeLeftInSeconds)) {
    hideDays();
  }

  if (checkTimeIsRun(timeLeftInSeconds)) {
    hidePromo();
    clearTimeout(intervalId);
  }
};
