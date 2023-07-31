import { Switch } from '@/components/ui/switch';

export default function ChampionshipSwitch({
  championship,
  setChampionship,
}: {
  championship: 'teams' | 'drivers';
  setChampionship: (championship: 'teams' | 'drivers') => void;
}) {
  return (
    <>
      <span className="mr-[10px]">Drivers</span>
      <Switch
        checked={championship === 'teams'}
        onCheckedChange={() =>
          setChampionship(championship === 'teams' ? 'drivers' : 'teams')
        }
      />
      <span className="ml-[10px]">Teams</span>
    </>
  );
}
