
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Scorer, Competition, Season } from '@/services/footballApi';
import { format } from 'date-fns';

interface ScorersTableProps {
  scorers: Scorer[];
  competition: Competition;
  season: Season;
  isLoading: boolean;
}

const ScorersTable = ({ scorers, competition, season, isLoading }: ScorersTableProps) => {
  if (isLoading) {
    return <div className="text-center py-4">Loading top scorers...</div>;
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        {competition.emblem && (
          <img src={competition.emblem} alt={competition.name} className="h-8 w-8" />
        )}
        <div>
          <h3 className="font-semibold">{competition.name} Top Scorers</h3>
          <p className="text-sm text-muted-foreground">Season {format(new Date(season.startDate), 'yyyy')}/{format(new Date(season.endDate), 'yyyy')}</p>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Rank</TableHead>
            <TableHead>Player</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-center">Matches</TableHead>
            <TableHead className="text-center">Goals</TableHead>
            <TableHead className="text-center">Assists</TableHead>
            <TableHead className="text-center">Penalties</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scorers.map((scorer, index) => (
            <TableRow key={scorer.player.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{scorer.player.name}</div>
                  <div className="text-sm text-muted-foreground">{scorer.player.nationality}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {scorer.team.crest && (
                    <img src={scorer.team.crest} alt={scorer.team.name} className="h-5 w-5" />
                  )}
                  <span>{scorer.team.shortName}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">{scorer.playedMatches}</TableCell>
              <TableCell className="text-center font-bold">{scorer.goals}</TableCell>
              <TableCell className="text-center">{scorer.assists || 0}</TableCell>
              <TableCell className="text-center">{scorer.penalties || 0}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ScorersTable;
