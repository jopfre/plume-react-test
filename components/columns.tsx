'use client';

import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronsUpDown } from 'lucide-react';

interface TeamRanking {
  position: number;
  team: {
    id: number;
    logo: string;
    name: string;
  };
  points: number;
  season: number;
}

interface DriverRanking {
  position: number;
  driver: {
    id: number;
    logo: string;
    name: string;
    abbr: string;
    number: number;
    image: string;
  };
  points: number;
  season: number;
}

export const driverColumns: ColumnDef<DriverRanking>[] = [
  {
    accessorKey: 'position',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Position
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'driver.name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'driver.image',
    header: 'Image',
    cell: ({ row }) => (
      <Image
        src={row.getValue('driver_image')}
        width={128}
        height={72}
        alt={`${row.getValue('driver_name')} image`}
      />
    ),
  },
  {
    accessorKey: 'points',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Points
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];

export const teamColumns: ColumnDef<TeamRanking>[] = [
  {
    accessorKey: 'position',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Position
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'team.name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'team.logo',
    header: 'Logo',
    cell: ({ row }) => (
      <Image
        src={row.getValue('team_logo')}
        width={128}
        height={72}
        alt={`${row.getValue('team_name')} logo`}
      />
    ),
  },
  {
    accessorKey: 'points',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Points
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
