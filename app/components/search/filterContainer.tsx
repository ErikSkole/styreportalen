import Filter from '../filter/filter'

export default function FilterContainer() {
    const filter = ["Sted", "Tid", "test3"]

    return (
        <div className="mainBox flex flex-col basis-1/4 h-1/2">
            <h2 className='flex ml-6 mt-2'>Filter</h2>
            <div className="searchBarFilter flex justify-center items-center">Søkefelt</div>
            <div className="flex flex-col justify-center items-center filter">
                {filter.map((filter, index) => (
                    <ul key={index}>
                        <Filter title={filter} id={index}/>
                    </ul>
                ))}
            </div>
        </div>
    )
}