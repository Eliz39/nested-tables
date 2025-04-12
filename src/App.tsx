import {Table} from "./components/Table.tsx"
import {useStore} from "./store/useStore.ts"

function App() {
    const { data, removeItem } = useStore()

    return (
        <div className="p-4">
            <Table data={data} onRemove={removeItem}/>
        </div>
    )
}

export default App
