import { Button } from '@/components/ui/button';

export default function SeasonButton({
  season,
  setSeason,
  value,
}: {
  season: number;
  setSeason: (season: number) => void;
  value: number;
}) {
  return (
    <Button
      className={`mr-8 mb-8 ${
        value === season &&
        'border-red border-2 shadow-[0_3px_30px_0px_hsla(0,100%,50%,0.2)]'
      }`}
      onClick={() => setSeason(value)}
    >
      {value}
    </Button>
  );
}
