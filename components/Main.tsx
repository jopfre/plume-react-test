'use client';

import SeasonButton from './SeasonButton';
import RankingsTable from './Rankings';
import { useState } from 'react';
import ChampionshipSwitch from './ChampionshipSwitch';

export default function Main({ seasons }: { seasons: number[] }) {
  const [season, setSeason] = useState(2023);
  const [championship, setChampionship] = useState<'drivers' | 'teams'>(
    'drivers',
  );

  return (
    <main className="wrapper mt-[8px] pb-[103px]">
      <h2>Seasons</h2>
      {seasons.map((value: number) => (
        <SeasonButton
          key={value}
          value={value}
          season={season}
          setSeason={setSeason}
        />
      ))}
      <div className="flex items-center justify-between mt-[82px] mb-[48px]">
        <h2 className="my-0">Rankings</h2>
        <div>
          <ChampionshipSwitch
            championship={championship}
            setChampionship={setChampionship}
          />
        </div>
      </div>
      <div className="min-h-screen">
        <RankingsTable season={season} championship={championship} />
      </div>
    </main>
  );
}
