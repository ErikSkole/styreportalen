import Link from 'next/link'

export default function Header() {
    return (
        <main className="header">
            <Link className='flex items-center' href="/"><h1 className='ml-4'>Program.no</h1></Link>
        </main>
    )
}