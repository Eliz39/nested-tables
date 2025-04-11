import {useState} from "react"
import {Table} from "./Table.tsx"
import {HierarchyItem} from "../types/HierarchyType.ts"

type TableRowProps = {
    item: HierarchyItem
    columns: string[]
    index: number
}

export const TableRow = ({item, columns, index}: TableRowProps) => {
    const [expanded, setExpanded] = useState(false)
    const hasChildren = item.children && Object.keys(item.children).length > 0;
    return (
        <>
            <tr className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition`}>
                <td className="px-4 py-4 align-center">
                    {hasChildren ? (
                        <button
                            type="button"
                            onClick={() => setExpanded(!expanded)}
                            className="flex items-center gap-1 font-mono"
                        >
                            {expanded ? '▼' : '▶'}
                        </button>
                    ) : (
                        ''
                    )}
                </td>
                {columns.map((key, idx) => (
                    <td key={idx} className="px-4 py-4 align-center">
                        {typeof item.data[key] === 'string' || typeof item.data[key] === 'number' ? item.data[key] : ''}
                    </td>
                ))}
            </tr>
            {expanded && hasChildren &&
                <tr>
                    <td colSpan={columns.length + 1} className="p-2 bg-gray-50">
                        {Object.entries(item.children).map(([key, child]) => {
                            if (!child?.records) return null

                            return <div key={key} className="p-4 inline-block">
                                <Table data={child.records}/>
                            </div>
                        })}
                    </td>
                </tr>
            }
        </>
    )
}