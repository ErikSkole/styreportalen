import Results from '@/app/components/results';
import SearchBar from '@/app/components/search';
import Filter from '@/app/components/filter';

export default function Search() {
    return (
        <main>
            <SearchBar />
            <div className="mainContent">
                <Results />
                <Filter />
            </div>
        </main>
    )
}