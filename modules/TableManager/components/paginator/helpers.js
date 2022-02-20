const findLeftNumbers = (currentNumber, leftCount) => {
  let power = 0;
  let count = 0;
  let leftPageNumber = currentNumber - Math.pow(2, power);
  const leftNumbers = [];
  while (leftPageNumber > 0 && count < leftCount) {
    leftNumbers.unshift(leftPageNumber);
    power += 1;
    count += 1;
    leftPageNumber -= Math.pow(2, power);
  }
  const currentCount = leftNumbers.length;
  if (leftNumbers[0] !== 1 && currentNumber !== 1) {
    return currentCount < leftCount
      ? [1, ...leftNumbers]
      : [1, ...leftNumbers.slice(1)];
  }
  return leftNumbers;
};

const findRightNumbers = (currentNumber, rightCount, pageCount) => {
  let power = 0;
  let count = 0;
  let rightPageNumber = currentNumber + Math.pow(2, power);
  const rightNumbers = [];
  while (rightPageNumber <= pageCount && count < rightCount) {
    rightNumbers.push(rightPageNumber);
    power += 1;
    count += 1;
    rightPageNumber += Math.pow(2, power);
  }
  const currentCount = rightNumbers.length;
  if (
    rightNumbers[currentCount - 1] !== pageCount &&
    currentNumber !== pageCount
  ) {
    return currentCount < rightCount
      ? [...rightNumbers, pageCount]
      : [...rightNumbers.slice(0, currentCount - 1), pageCount];
  }
  return rightNumbers;
};

export const getPageNumbers = ({
  pageCount,
  pageCountToShow,
  activePageNumber
}) => {
  const leftNumbers = findLeftNumbers(activePageNumber, pageCountToShow / 2);
  const rightNumbers = findRightNumbers(
    activePageNumber,
    pageCountToShow / 2,
    pageCount
  );
  console.log(leftNumbers, rightNumbers, "leftNumbers, rightNumbers");

  const pageNumbers = [...leftNumbers, activePageNumber, ...rightNumbers];
  return pageNumbers;
};
