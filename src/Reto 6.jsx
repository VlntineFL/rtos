import { useEffect, useState } from "react";
export const UFetch = (url) => {

    const[state, setState] = useState({
        data: null,
        isLoading: True,
        hasError: null
    })

    const getFetch = async () =>{
        const api = await fetch(url);
        const data = await api.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() =>{
        getFetch()
    }, [url])

    return {
        ...state
    }
}