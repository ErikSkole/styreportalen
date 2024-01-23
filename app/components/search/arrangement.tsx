export default function Arrangement() {
    return (
        <main className="arrangement flex-row p-2 max-w-full h-fit">
            <img className="w-36 h-36 p-4" src="https://picsum.photos/200/300" alt="Bilde av arrangement" />
            <div className="arrangementInfo p-4">
                <h2 className="arrangementTitle">Arrangement</h2>
                <p className="arrangementDescription">Beskrivelse av arrangement</p>
            </div>
        </main>
    )
}