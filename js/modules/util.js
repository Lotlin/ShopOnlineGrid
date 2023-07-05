export const addZero = num => (num < 10 ? `0${num}` : num);

export const getCorrectPlural = (amount, nounForms) => {
  let result = '';

  if ((amount % 10 === 1) && amount % 100 !== 11) {
    result = nounForms[1];
  } else if (((amount % 10 >= 2) && (amount % 10 <= 4)) &&
        (amount % 100 < 10 || amount % 100 >= 20)) {
    result = nounForms[2];
  } else {
    result = nounForms[0];
  }

  return result;
};

export const convertMinutesToMilliSeconds = (minutes) => minutes * 60 * 1000;
export const convertHoursToMilliSeconds = (hours) => hours * 60 * 60 * 1000;
