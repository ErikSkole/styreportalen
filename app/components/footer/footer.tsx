import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="flex flex-col m-6 justify-center">
                <Image className="rounded-lg"
                src='/styreportalen.png'
                alt="Styreportalen logo"
                width={500}
                height={500}
                 />
            </div>
            
        </footer>
    )
}