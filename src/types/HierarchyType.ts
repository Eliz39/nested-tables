export type HierarchyItem = {
    data: Record<string, unknown>
    children: Record<string, { records: HierarchyItem[] } | undefined>
}