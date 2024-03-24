// Import the merge function's type if available, or define an approximation
import merge from 'deepmerge';

// Define a generic type for the items in the arrays
export type ArrayItem = any; // Use `any` for simplicity; consider specifying a more precise type

// Define the structure of the merge options
export interface MergeOptions {
    // Function to determine if an item is mergeable
    isMergeableObject: (item: ArrayItem) => boolean;
    // Function to clone items unless specified otherwise
    cloneUnlessOtherwiseSpecified: (item: ArrayItem, options: MergeOptions) => ArrayItem;
}

/**
 * Custom merge function to combine arrays with the capability to deeply merge objects within them.
 *
 * @param targetArray - The target array to merge into.
 * @param sourceArray - The source array to merge from.
 * @param mergeOptions - Options for controlling the merge behavior.
 * @returns The resulting array after merging.
 */
export default function combineMerge(
    targetArray: ArrayItem[],
    sourceArray: ArrayItem[],
    mergeOptions: MergeOptions,
): ArrayItem[] {
    const destination = [...targetArray]; // Clone the target array

    sourceArray.forEach((item, index) => {
        if (typeof destination[index] === 'undefined') {
            destination[index] = mergeOptions.cloneUnlessOtherwiseSpecified(item, mergeOptions);
        } else if (mergeOptions.isMergeableObject(item)) {
            destination[index] = merge(destination[index], item, mergeOptions);
        } else if (!targetArray.includes(item)) {
            destination.push(item);
        }
    });

    return destination;
}
