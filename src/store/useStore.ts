import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {removeRecursive} from '../utils/removeRecursive'
import data from '../data/data.json'
import {HierarchyItem} from "../types/HierarchyType.ts"

type HierarchyStore = {
    data: HierarchyItem[]
    removeItem: (id: string) => void
}

export const useStore = create<HierarchyStore>()(
    persist(
        (set, get) => ({
            data: data,
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
