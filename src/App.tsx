import {Table} from "./components/Table.tsx"
import data from './data/data.json'

function App() {
  return (
      <div className="p-4">
          <Table data={data} />
      </div>
  )
}

export default App
