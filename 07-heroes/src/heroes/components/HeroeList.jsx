import React from 'react';
import { getHeroesPublisher } from '../helpers';


export const HeroeList = ({ publisher }) => {

    const heroes = getHeroesPublisher(publisher);

    return (
        <ul>
            {
                heroes.map(hero => (
                    <li key={hero.id}>
                        {hero.superhero}
                    </li>
                ))
            }
        </ul>
    )
}
