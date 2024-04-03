'use client'

export default function Filter(props:{title:string, id:any}) {
    const test = () => {
        document.getElementsByClassName("triangle")[props.id].classList.toggle("open");
    }

    return (
        <div className="filterbox flex flex-col items-center mb-6 mt-2">
            <div onClick={test} className="filterContent flex flex-row m-2">
                <img className="triangle" src="triangle.svg" />
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}