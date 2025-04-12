import {TableRow} from "./TableRow.tsx"
import {HierarchyItem} from "../types/HierarchyType.ts"

type TableProps = {
    data: HierarchyItem[]
    onRemove: (id: string) => void
}

export const Table = ({data, onRemove}: TableProps) => {
    if (data.length === 0) return null

    const allKeys: string[] = Array.from(
        new Set(data.flatMap((item: HierarchyItem) => Object.keys(item.data)))
    )

    return (
        <div className="relative">
            <div
                className="overflow-x-auto md:before:hidden before:content-[''] before:pointer-events-none before:absolute before:top-0 before:right-0 before:w-8 before:h-full before:bg-gradient-to-l before:from-gray-200 before:to-transparent before:z-10">
                <table className="w-full text-sm font-medium text-gray-900 border-collapse">
                    <thead>
                    <tr className="bg-gray-200 text-left uppercase tracking-wide text-xs text-gray-600">
                        <th></th>
                        {allKeys.map(col => (
                            <th key={col} className="px-4 py-6 text-sm sm:text-xs md:text-sm">{col}</th>
                        ))}
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item: HierarchyItem, index: number) => (
                        <TableRow
                            key={index} // index is used as a key here because there is a duplicated ID in data
                            item={item}
                            columns={allKeys}
                            index={index}
                            onRemove={onRemove}
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
