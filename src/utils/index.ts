import { capitalize } from "lodash-es";

export const buildPrefix = (method: string, url: string) => {
  const urlstr = url
    .split("/")
    .filter((i) => i)
    .map((i) => capitalize(i))
    .join("");
  return `${capitalize(method)}${urlstr}`;
};
