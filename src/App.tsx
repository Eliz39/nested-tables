import {Table} from "./components/Table.tsx"
import {useStore} from "./store/useStore.ts"
import {useDataInit} from "./hooks/useDataInit.ts"

function App() {
    const { data, removeItem } = useStore()

    useDataInit()

    return (
        <div className="p-4">
            <Table data={data} onRemove={removeItem}/>
        </div>
    )
}

export default App
