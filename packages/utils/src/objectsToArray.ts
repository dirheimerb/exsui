/**
 * Converts an object to an array of all string values found in the object.
 * @param {Object} object - The object to convert to a string.
 * @returns {string[]} An array of all string values found in the object.
 */
export default function objectsToArray(object: any): string[] {
    const result = [] as string[];

    Object.values(object).forEach((value) => {
        if (typeof value === 'string') {
            result.push(value);
        } else if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
            result.push(...objectsToArray(value)); // Directly spread recursive call
        }
        // No need for a return statement here
    });

    return result;
}
