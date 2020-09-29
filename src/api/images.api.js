import httpClient from "./httpClient";
const END_POINT = "/images";

export default class ImageService {
  /**
   * Get all images
   * Use for index
   * @param  { object } params
   *
   * @returns {AxiosPromise<any>}
   */
  static getAll(params = null) {
    return httpClient.get(END_POINT, params);
  }

  /**
   * Get detail image
   * Use for detail
   * @param  { int } id
   * @param {object}params
   *
   * @returns {AxiosPromise<any>}
   */
  static getDetail(id, params = null) {
    return httpClient.get(`${END_POINT}/${id}`, params);
  }

  /**
   * Create image object
   * Use for user who has permission
   * @param {object}params
   *
   * @returns {AxiosPromise<any>}
   */
  static create(params) {
    return httpClient.post(END_POINT, params);
  }

  /**
   * Update status image object
   * Use for user who has permission
   * @param  { int } id
   * @param {object}params
   *
   * @returns {AxiosPromise<any>}
   */
  static update(id, params) {
    return httpClient.put(END_POINT, params);
  }
}
