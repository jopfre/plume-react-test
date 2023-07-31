import axios from 'axios';
import Main from '@/components/Main';

async function getSeasons() {
  return axios
    .get('https://v1.formula-1.api-sports.io/seasons', {
      headers: {
        'x-rapidapi-host': 'v1.formula-1.api-sports.io',
        'x-rapidapi-key': 'ccc4612848d5966bc92390d31fe7880c',
      },
    })
    .then((res) => res.data.response);
}

export default async function Home() {
  const seasons = await getSeasons();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header
        className="flex bg-foreground h-[528px] wrapper items-center bg-contain bg-right bg-no-repeat "
        style={{ backgroundImage: "url('/header.png')" }}
      >
        <h1 className="max-w-[728px]">Formula&nbsp;1 Rankings</h1>
      </header>
      <Main seasons={seasons} />
    </div>
  );
}
