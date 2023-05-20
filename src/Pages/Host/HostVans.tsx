import s from './HostVans.module.css'
import {VansType} from "../../Types";
import {Link, useLoaderData} from "react-router-dom";
import {getHostVans} from "../../api";
import {requireAuth} from "../../../utils";

export async function loader(obj: any) {
    await requireAuth(obj.request)
    return getHostVans()
}

const HostVans = () => {

    const vans = useLoaderData() as VansType[]

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
        <div className={s.hostVansWrapper}>
            <h2>Your listed vans</h2>
            <div className={s.mainHostVansWrapper}>
                {mappedVans}
            </div>
        </div>
    );
};

export default HostVans;