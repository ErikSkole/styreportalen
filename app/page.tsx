import Link from 'next/link'

export default function Home() {
  return (
    <main className="main flex min-h-screen flex-col items-center justify-center p-10">
        <h1>Denne nettsiden er under arbeid</h1>
      <div className="mainContent rounded-lg flex flex-col items-center">
        <Link className='tempLink flex m-40' href="/search">Arrangementer</Link>
      </div>
    </main>
  )
}
