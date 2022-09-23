import http from "./http";
import QS from "qs";

/**
 * 
 * @param {string} url 
 * @param {object} params 
 * @returns 
 */
export const getRequest = (url:string, params?:any) => {
    return http({
        method: 'get',
        url: url,
        params: params || {}
    });
}
