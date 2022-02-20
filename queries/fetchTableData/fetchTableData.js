import { topics } from "./mockData";

export const fetchTableData = ({ id }) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (id === "topics") {
        res({
          data: topics
        });
      } else {
        rej("error");
      }
    }, 1000);
  });
};
