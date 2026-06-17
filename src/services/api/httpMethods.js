//src\services\api\httpMethods.js
import { apiClient } from "./apiClient";

export const get = (url) =>
  apiClient(url);

export const post = (url, body) =>
  apiClient(url, {
    method: "POST",
    body: JSON.stringify(body),
  });

export const put = (url, body) =>
  apiClient(url, {
    method: "PUT",
    body: JSON.stringify(body),
  });

export const del = (url) =>
  apiClient(url, {
    method: "DELETE",
  });