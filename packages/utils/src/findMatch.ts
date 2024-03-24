import { ArrayItem } from './combineMerge';

/**
 * Finds an element in the provided array. Returns the element if found, otherwise returns a default value.
 *
 * @param {ArrayItem} array The array to search within.
 * @param {ArrayItem} target The element to find in the array.
 * @param {any} defaultValue The default value to return if the target is not found.
 * @return {ArrayItem} The found element or the default value.
 */
function findElementOrDefault(array: ArrayItem, target: ArrayItem, defaultValue: any): ArrayItem {
    return array.includes(target) ? target : defaultValue;
}

export default findElementOrDefault;
