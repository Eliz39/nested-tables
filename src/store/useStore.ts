import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {removeRecursive} from '../utils/removeRecursive'
import {HierarchyItem} from "../types/HierarchyType.ts"

type HierarchyStore = {
    data: HierarchyItem[]
    setData: (data: HierarchyItem[]) => void
    removeItem: (id: string) => void
}

export const useStore = create<HierarchyStore>()(
    persist(
        (set, get) => ({
            data: [],
            setData: (newData: HierarchyItem[]) => set({data: newData}),
            removeItem: (id: string) => {
                const newData = removeRecursive(get().data, id)
                set({data: newData})
            },
        }),
        {
            name: 'current-data-storage',
        }
    )
)
