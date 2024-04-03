import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer">
            <Image
                src='/styreportalen.png'
                alt="Styreportalen logo"
                width={1000}
                height={2}
            />
        </footer>
    )
}