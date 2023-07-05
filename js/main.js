import {getdedlinePromoElement} from './modules/getElements.js';
import {renderPromoTimer} from './modules/render.js';
import {promoTimerInit} from './modules/init.js';

if (getdedlinePromoElement()) {
  renderPromoTimer();
  promoTimerInit();
}
