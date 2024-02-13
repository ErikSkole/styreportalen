import Image from "next/image"

export default function InfoPage() {
    return (
        <>
        <div className="infoPage flex flex-row justify-center">
            <div className="mainBox infoPageBox">
                <img className="min-w-64 min-h-64 p-4" src="https://picsum.photos/200/300" alt="Bilde av arrangement" />
                <div className="flex flex-col arrangementInfo p-4">
                    <h1 className="arrangementTitle">Arrangement</h1>
                    <p className="arrangementDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, ut quasi recusandae ea aspernatur ullam facilis eum assumenda fugiat similique eligendi, voluptatem amet vero doloremque reprehenderit! Rem nisi laudantium numquam.</p>
                </div>
            </div>
        </div>
        </>
    )
}