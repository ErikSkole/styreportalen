import Link from 'next/link'

export default function Header() {
    return (
        <header className="header">
            <Link className='flex items-center' href="/"><h1>Program.no</h1></Link>
        </header>
    )
}