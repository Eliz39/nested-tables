import {HierarchyItem} from "../types/HierarchyType.ts";

export  const removeRecursive = (items: HierarchyItem[], idToRemove: string): HierarchyItem[] => {
    return items
        .filter(item => item.data.ID !== idToRemove)
        .map(item => {
            if (item.children) {
                const newChildren: Record<string, { records: HierarchyItem[] }> = {}
                for (const key in item.children) {
                    const records = item?.children[key]?.records || []
                    const filtered = removeRecursive(records, idToRemove)
                    if (filtered.length > 0) {
                        newChildren[key] = { records: filtered }
                    }
                }
                return { ...item, children: newChildren }
            }
            return item
        })
}