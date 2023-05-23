import s from './Vans.module.css'
import {LoaderDataType, VansType} from "../../Types";
import VanCard from "../../Components/VanCard";
import {Await, defer, useLoaderData, useSearchParams} from "react-router-dom";
import {getVans} from "../../api";
import {Suspense} from "react";
import Loader from "../../Components/Loader";


export async function loader() {
    return defer({vans: getVans()})
}

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    const dataPromise = useLoaderData() as LoaderDataType
    const renderVanElements = (vans: VansType[]) => {
        const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans
        const vanElement = displayedVans?.map(van => {
            return (
                <VanCard key={van.id}
                         id={van.id}
                         imageUrl={van.imageUrl}
                         name={van.name}
                         price={van.price}
                         type={van.type}
                         search={`?${searchParams.toString()}`}
                         typeFilter={typeFilter}
                />

            )
        })
        return (
            <>
                <div className={s.filters}>
                    <button onClick={() => setSearchParams({type: "simple"})}
                            className={`${s.filterBtn} ${s.simple} ${typeFilter === 'simple' ? s.selected : ''}`}>Simple
                    </button>
                    <button onClick={() => setSearchParams({type: "luxury"})}
                            className={`${s.filterBtn} ${s.luxury} ${typeFilter === 'luxury' ? s.selected : ''}`}>Luxury
                    </button>
                    <button onClick={() => setSearchParams({type: "rugged"})}
                            className={`${s.filterBtn} ${s.rugged} ${typeFilter === 'rugged' ? s.selected : ''}`}>Rugged
                    </button>
                    {typeFilter ?
                        <button onClick={() => setSearchParams({})} className={s.clearFilterBtn}>Clear
                            filters</button> : null}
                </div>
                <div className={s.vanList}>
                    {vanElement}
                </div>
            </>
        )

    }

    return (
        <div className={s.vansWrapper}>
            <h2>Explore our van options</h2>
            <Suspense fallback={<Loader/>}>
                <Await resolve={dataPromise.vans}>
                    {renderVanElements}
                </Await>
            </Suspense>
        </div>
    );
};

export default Vans;