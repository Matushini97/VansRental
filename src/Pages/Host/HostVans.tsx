import s from './HostVans.module.css'
import {LoaderDataType, VansType} from "../../Types";
import {Await, defer, Link, useLoaderData} from "react-router-dom";
import {getHostVans} from "../../api";
import {requireAuth} from "../../../utils";
import {Suspense} from "react";
import Loader from "../../Components/Loader";

export async function loader(obj: any) {
    await requireAuth(obj.request)
    return defer({vans: getHostVans()})
}

const HostVans = () => {

    const dataPromise = useLoaderData() as LoaderDataType

    const renderVanElement = (vans: VansType[]) => {
        const mappedVans = vans?.map(van => {
            return (
                <Link to={van.id} className={s.hostVanList} key={van.id}>
                    <div className={s.hostVanTile}>
                        <img src={van.imageUrl} alt={'van'}/>
                        <div className={s.vanInfo}>
                            <h3>{van.name}</h3>
                            <p>${van.price} / day</p>
                        </div>
                    </div>
                </Link>
            )
        })
        return (
            <div className={s.mainHostVansWrapper}>
                {mappedVans}
            </div>
        )
    }


    return (
        <div className={s.hostVansWrapper}>
            <h2>Your listed vans</h2>
            <Suspense fallback={<Loader/>}>
                <Await resolve={dataPromise.vans}>
                    {renderVanElement}
                </Await>
            </Suspense>
        </div>
    );
};

export default HostVans;