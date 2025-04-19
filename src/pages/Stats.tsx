import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AuthModal from '@/components/AuthModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useQuery } from '@tanstack/react-query';
import { footballApi } from '@/services/footballApi';
import ScorersTable from '@/components/ScorersTable';

const Stats = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('standings');

  const openLoginModal = () => {
    setIsAuthModalOpen(true);
  };

  // Fetch standings
  const { data: standings, isLoading: standingsLoading } = useQuery({
    queryKey: ['standings'],
    queryFn: () => footballApi.getStandings('PL'),
  });

  // Fetch fixtures
  const { data: fixtures, isLoading: fixturesLoading } = useQuery({
    queryKey: ['fixtures'],
    queryFn: () => footballApi.getFixtures(86),
  });

  // Fetch scorers
  const { data: scorersData, isLoading: scorersLoading } = useQuery({
    queryKey: ['scorers'],
    queryFn: () => footballApi.getScorers('PL'),
  });

  // Mock data for results
  const results = [
    { id: 1, homeTeam: "Manchester City", homeScore: 3, awayScore: 1, awayTeam: "West Ham", date: "2025-04-14" },
    { id: 2, homeTeam: "Arsenal", homeScore: 2, awayScore: 0, awayTeam: "Bournemouth", date: "2025-04-14" },
    { id: 3, homeTeam: "Liverpool", homeScore: 4, awayScore: 1, awayTeam: "Luton", date: "2025-04-13" },
    { id: 4, homeTeam: "Aston Villa", homeScore: 3, awayScore: 3, awayTeam: "Chelsea", date: "2025-04-13" },
    { id: 5, homeTeam: "Crystal Palace", homeScore: 1, awayScore: 0, awayTeam: "Manchester United", date: "2025-04-12" },
  ];

  // Mock data for player form
  const playerForm = [
    { player: "Bukayo Saka", team: "Arsenal", lastFiveGames: [2, 1, 0, 1, 2], rating: 8.4 },
    { player: "Cole Palmer", team: "Chelsea", lastFiveGames: [1, 3, 1, 0, 1], rating: 8.2 },
    { player: "Erling Haaland", team: "Manchester City", lastFiveGames: [2, 0, 1, 3, 1], rating: 8.0 },
    { player: "Mohamed Salah", team: "Liverpool", lastFiveGames: [0, 1, 1, 1, 2], rating: 7.9 },
    { player: "Ollie Watkins", team: "Aston Villa", lastFiveGames: [0, 2, 1, 0, 1], rating: 7.8 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar openLoginModal={openLoginModal} />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab="login"
      />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6">Football Statistics</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6">
            <TabsTrigger value="standings">Standings</TabsTrigger>
            <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="top-scorers">Top Scorers</TabsTrigger>
            <TabsTrigger value="player-form">Player Form</TabsTrigger>
          </TabsList>

          <TabsContent value="standings">
            <Card className="bg-gray-800 border-none">
              <CardHeader><CardTitle>Premier League Table 2024/25</CardTitle></CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Pos</TableHead>
                        <TableHead>Team</TableHead>
                        <TableHead className="text-center">P</TableHead>
                        <TableHead className="text-center">W</TableHead>
                        <TableHead className="text-center">D</TableHead>
                        <TableHead className="text-center">L</TableHead>
                        <TableHead className="text-center">GF</TableHead>
                        <TableHead className="text-center">GA</TableHead>
                        <TableHead className="text-center">GD</TableHead>
                        <TableHead className="text-center">Pts</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {standings?.map((team) => (
                        <TableRow key={team.team.id}>
                          <TableCell>{team.position}</TableCell>
                          <TableCell>{team.team.name}</TableCell>
                          <TableCell className="text-center">{team.playedGames}</TableCell>
                          <TableCell className="text-center">{team.won}</TableCell>
                          <TableCell className="text-center">{team.draw}</TableCell>
                          <TableCell className="text-center">{team.lost}</TableCell>
                          <TableCell className="text-center">{team.goalsFor}</TableCell>
                          <TableCell className="text-center">{team.goalsAgainst}</TableCell>
                          <TableCell className="text-center">{team.goalDifference}</TableCell>
                          <TableCell className="text-center font-bold">{team.points}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fixtures">
            <Card className="bg-gray-800 border-none">
              <CardHeader><CardTitle>Upcoming Fixtures</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {fixtures?.map((fixture) => (
                    <div key={fixture.id} className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="text-right font-semibold">{fixture.homeTeam.name}</div>
                        <div className="text-football-gold font-bold text-center">
                          VS<br />
                          <span className="text-sm text-gray-300">{fixture.utcDate.split('T')[0]}</span>
                        </div>
                        <div className="text-left font-semibold">{fixture.awayTeam.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results">
            <Card className="bg-gray-800 border-none">
              <CardHeader><CardTitle>Recent Results</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {results.map((result) => (
                    <div key={result.id} className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="text-right font-semibold">{result.homeTeam}</div>
                        <div className="text-xl font-bold">
                          {result.homeScore} - {result.awayScore}
                        </div>
                        <div className="text-left font-semibold">{result.awayTeam}</div>
                      </div>
                      <div className="text-center text-xs text-gray-400">{result.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="top-scorers">
            <Card className="bg-gray-800 border-none">
              <CardHeader><CardTitle>Top Scorers</CardTitle></CardHeader>
              <CardContent>
                {scorersData ? (
                  <ScorersTable 
                    scorers={scorersData.scorers}
                    competition={scorersData.competition}
                    season={scorersData.season}
                    isLoading={scorersLoading}
                  />
                ) : (
                  <div>Loading top scorers...</div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="player-form">
            <Card className="bg-gray-800 border-none">
              <CardHeader><CardTitle>Player Form (Last 5 Games)</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {playerForm.map((player) => (
                    <div key={player.player} className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="font-semibold text-lg">{player.player}</div>
                        <div className="flex gap-2">
                          {player.lastFiveGames.map((goals, idx) => (
                            <div 
                              key={idx}
                              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                                goals > 0 ? "bg-green-600" : "bg-gray-600"
                              }`}
                            >
                              {goals}
                            </div>
                          ))}
                        </div>
                        <div className="text-football-gold font-bold">Rating: {player.rating}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Stats;
