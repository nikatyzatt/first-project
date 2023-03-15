import BannerHobbies from 'componentes/BannerHobbies';
import { Outlet } from 'react-router-dom';

export default function PaginaPadraoHobbies () {
    return (
        <main>
            <BannerHobbies />

            <Outlet/>
        </main>
    )

}