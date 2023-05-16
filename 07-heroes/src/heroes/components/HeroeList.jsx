import { HeroeCard } from './HeroeCard';
import { getHeroesPublisher } from '../helpers';


export const HeroeList = ({ publisher }) => {

    const heroes = getHeroesPublisher(publisher); //Obtener dato heroe.

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    <HeroeCard
                        key={hero.id}
                        heroe={hero}
                    />
                ))
            }
        </div>
    )
}
