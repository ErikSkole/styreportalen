import Image from "next/image"

export default function InfoPage() {
    return (
        <>
        <div className="infoPage flex flex-row justify-center">
            <div className="mainBox infoPageBox basis-1/2">
                <Image
                className="infoPageImg"
                src=""
                alt=""
                />
            </div>
            <div className="mainBox basis-1/4"></div>
        </div>
        </>
    )
}