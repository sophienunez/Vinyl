import { Screens } from "../Types/types";

export const navigate = (screen: Screens) => {
  return {
    type: "NAVIGATE",
    payload: screen,
  };
};