import Image from "next/image";
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="flex flex-col m-6 justify-center">
                <Link href="https://styreportalen.no/">
                    <Image className="rounded-lg"
                    src='/styreportalen.png'
                    alt="Styreportalen logo"
                    width={500}
                    height={500}
                    />
                </Link>
            </div>
            
        </footer>
    )
}