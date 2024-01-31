export default function Filter() {
    return (
        <main className="mainBox flex flex-col basis-1/4 h-1/2">
            <h2 className='flex ml-6 mt-2'>Filter</h2>
            <div className="searchBarFilter flex justify-center items-center">Søkefelt</div>
            <div className="filter">
                <div className="filterbox flex flex-col items-center mb-6">
                    <div className="filterContent flex flex-row m-2">
                        <img className="triangle" src="triangle.svg" />
                        <h3>Filter navn</h3>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="filterbox flex flex-col items-center mb-6">
                    <div className="filterContent flex flex-row m-2">
                        <img className="triangle" src="triangle.svg" />
                        <h3>Filter navn</h3>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="filterbox flex flex-col items-center mb-6">
                    <div className="filterContent flex flex-row m-2">
                        <img className="triangle" src="triangle.svg" />
                        <h3>Filter navn</h3>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="filterbox flex flex-col items-center mb-6">
                    <div className="filterContent flex flex-row m-2">
                        <img className="triangle" src="triangle.svg" />
                        <h3>Filter navn</h3>
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        </main>
    )
}