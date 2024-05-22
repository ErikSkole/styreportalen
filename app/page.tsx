import Results from '@/app/components/search/results';
import FilterContainer from '@/app/components/search/filterContainer';

export default function Search() {
    return (
        <main>
            <div className="searchContent flex flex-row justify-end items-center p-24">
                <Results />
                <FilterContainer />
            </div>
        </main>
    )
}