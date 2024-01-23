import Results from '@/app/components/search/results';
import SearchBar from '@/app/components/search/search';
import Filter from '@/app/components/search/filter';

export default function Search() {
    return (
        <main>
            <SearchBar />
            <div className="searchContent flex flex-row justify-end items-center p-24">
                <Results />
                <Filter />
            </div>
        </main>
    )
}