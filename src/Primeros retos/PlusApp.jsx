const PlusApp = ({value}) => {

    const handleAdd = () => {
        console.log ('calling handleAdd')
    }

    return (
        <>
        <h1> counter </h1>
        <span> {value}</span>
        <button onClick={() => handleAdd () }> +1 </button>
        </>
    )
}

export default PlusApp