// Actions
import { ADD_ARTICLE } from "../constants/action-types";

/**
 * Actions are just functions that are dispatched
 * @param article
 * @returns {{type, payload: *}}
 */

export const addArticle = (article) => ({
  type: ADD_ARTICLE,
  payload: article
});