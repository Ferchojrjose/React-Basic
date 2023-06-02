import { HeroeCard } from './HeroeCard';
import { getHeroesPublisher } from '../helpers';
import { useMemo } from 'react';


export const HeroeList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesPublisher(publisher), [publisher]); //Obtener dato heroe.

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
