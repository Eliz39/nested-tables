import {useEffect} from "react"
import {useStore} from "../store/useStore.ts"

export const useDataInit = () => {
    const { data, setData } = useStore()

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const res = await fetch('./data.json')
            const json = await res.json()
            setData(json)
        }

        if (data.length === 0) {
            fetchData()
        }
    }, [])
}