import { driverColumns, teamColumns } from './columns';
import { DataTable } from './ui/data-table';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function RankingsTable({
  season,
  championship,
}: {
  season: number;
  championship: string;
}) {
  const { isLoading, error, data, isFetching } = useQuery(
    [`rankings/${championship}?season=${season}`],
    () =>
      axios
        .get(
          `https://v1.formula-1.api-sports.io/rankings/${championship}?season=${season}`,
          {
            headers: {
              'x-rapidapi-host': 'v1.formula-1.api-sports.io',
              'x-rapidapi-key': 'ccc4612848d5966bc92390d31fe7880c',
            },
          },
        )
        .then((res) => res.data),
  );

  if (isLoading) return <>Loading...</>;

  if (error) {
    console.log(error);
    return <>Error fetching data</>;
  }

  if (championship === 'teams')
    return <DataTable columns={teamColumns} data={data.response} />;

  return <DataTable columns={driverColumns} data={data.response} />;
}
