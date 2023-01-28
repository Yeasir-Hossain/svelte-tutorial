/**
 * @type {any}
 */
// @ts-ignore
import { ParamMatcher } from "@sveltejs/kit"
export const match = (param: any) => {
    return /\d+$/.test(param)
}