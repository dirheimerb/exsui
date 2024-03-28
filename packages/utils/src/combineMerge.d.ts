export type ArrayItem = any;
export interface MergeOptions {
    isMergeableObject: (item: ArrayItem) => boolean;
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
): ArrayItem[];
//# sourceMappingURL=combineMerge.d.ts.map
