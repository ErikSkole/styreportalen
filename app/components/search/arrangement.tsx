'use client'

export default function Arrangement(props: { title: string, desc: string, pic: string }) {

    return (
        <main  className="arrangement flex-row p-2 max-w-full h-fit">
            <img className="w-36 h-36 p-4" src={props.pic} alt="Bilde av arrangement" />
            <div className="arrangementInfo p-4">
                <h2 className="arrangementTitle">{props.title}</h2>
                <p className="arrangementDescription">{props.desc}</p>
            </div>
        </main>
    )
}