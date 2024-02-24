import AsyncSelect from 'react-select/async';
import { getSpells } from '../api/spell';
import { useEffect } from 'react';

const fetchSpells = async () => {
    const respone = await getSpells();
    console.log(respone)
}
fetchSpells();

const dragonSpells = [
    {
        value: 'fireBreath',
        label: 'Fire Breath',
        type: 'Fire',
        description: 'Unleashes a scorching breath of fire upon enemies.',
        power: 'High',
    },
    {
        value: 'frostNova',
        label: 'Frost Nova',
        type: 'Ice',
        description: 'Freezes adversaries in their tracks with a powerful icy blast.',
        power: 'Moderate',
    },
    {
        value: 'thunderRoar',
        label: 'Thunder Roar',
        type: 'Electric',
        description: 'Creates a deafening thunderclap, stunning foes in its range.',
        power: 'High',
    },
    {
        value: 'venomousGaze',
        label: 'Venomous Gaze',
        type: 'Poison',
        description: 'Casts a venomous glare that poisons and weakens enemies over time.',
        power: 'Moderate',
    },
    {
        value: 'earthquakeTremor',
        label: 'Earthquake Tremor',
        type: 'Earth',
        description: 'Shakes the ground beneath, causing a destructive earthquake.',
        power: 'High',
    },
    {
        value: 'aerialCyclone',
        label: 'Aerial Cyclone',
        type: 'Wind',
        description: 'Summons a powerful cyclone, tossing enemies into the air.',
        power: 'Moderate',
    },
    {
        value: 'arcaneVortex',
        label: 'Arcane Vortex',
        type: 'Magic',
        description: 'Creates a swirling vortex of arcane energy, disrupting magic users.',
        power: 'High',
    },
    {
        value: 'timeWarp',
        label: 'Time Warp',
        type: 'Temporal',
        description: 'Manipulates time to slow down or speed up the battlefield.',
        power: 'High',
    },
    {
        value: 'crystalPrism',
        label: 'Crystal Prism',
        type: 'Light',
        description: 'Channels pure light energy, blinding and damaging enemies.',
        power: 'Moderate',
    },
    {
        value: 'shadowVeil',
        label: 'Shadow Veil',
        type: 'Dark',
        description: 'Cloaks the dragon in shadows, making it nearly invisible.',
        power: 'Low',
    },
];

const filterDragonSpells = (inputValue) => {
    return dragonSpells.filter((spell) =>
        spell.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(filterDragonSpells(inputValue));
        }, 1000);
    });

export default () => (
    <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} />
);
