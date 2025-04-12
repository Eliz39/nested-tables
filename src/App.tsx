import {useState} from "react"
import {Table} from "./components/Table.tsx"
import data from './data/data.json'
import {HierarchyItem} from "./types/HierarchyType.ts"
import {removeRecursive} from "./utils/removeRecursive.ts"

function App() {
    const [currentData, setCurrentData] = useState<HierarchyItem[]>(data)

    const onRemove = (idToRemove: string) => {
        setCurrentData(removeRecursive(currentData, idToRemove))
    }

    return (
        <div className="p-4">
            <Table data={currentData} onRemove={onRemove}/>
        </div>
    )
}

export default App
