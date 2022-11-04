export const fillArray = (length: number, previousArray: string[]) => {
  const newArray = new Array(length).fill("");
  return newArray.map((_, index) => previousArray[index] || "");
};
