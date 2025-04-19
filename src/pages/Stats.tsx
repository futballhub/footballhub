import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AuthModal from '@/components/AuthModal';
<<<<<<< HEAD
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query';
import { footballApi } from '@/services/footballApi';
import { format } from 'date-fns';
import ScorersTable from '@/components/ScorersTable';
=======
>>>>>>> parent of dfd5ff6 (feat: Implement football stats API integration)
=======
>>>>>>> parent of bdcd77f (Fix: Implement Google login and stats page)

const Stats = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsAuthModalOpen(true);
  };

<<<<<<< HEAD
<<<<<<< HEAD
  // Fetch data using React Query with proper typing
  const { data: standings, isLoading: standingsLoading } = useQuery({
    queryKey: ['standings'],
    queryFn: () => footballApi.getStandings('PL'),
  });

  const { data: fixtures, isLoading: fixturesLoading } = useQuery({
    queryKey: ['fixtures'],
    queryFn: () => footballApi.getFixtures(86),
  });
=======
  // Mock data for standings
  const standings = [
    { position: 1, team: "Manchester City", played: 38, won: 27, drawn: 5, lost: 6, gf: 83, ga: 32, gd: 51, points: 86 },
    { position: 2, team: "Arsenal", played: 38, won: 26, drawn: 6, lost: 6, gf: 85, ga: 29, gd: 56, points: 84 },
    { position: 3, team: "Liverpool", played: 38, won: 24, drawn: 8, lost: 6, gf: 77, ga: 41, gd: 36, points: 80 },
    { position: 4, team: "Aston Villa", played: 38, won: 22, drawn: 7, lost: 9, gf: 76, ga: 51, gd: 25, points: 73 },
    { position: 5, team: "Tottenham", played: 38, won: 20, drawn: 6, lost: 12, gf: 74, ga: 61, gd: 13, points: 66 },
    { position: 6, team: "Chelsea", played: 38, won: 18, drawn: 10, lost: 10, gf: 77, ga: 63, gd: 14, points: 64 },
  ];

  // Mock data for fixtures
  const fixtures = [
    { id: 1, homeTeam: "Arsenal", awayTeam: "Liverpool", date: "2025-04-20", time: "15:00", venue: "Emirates Stadium" },
    { id: 2, homeTeam: "Manchester City", awayTeam: "Tottenham", date: "2025-04-20", time: "17:30", venue: "Etihad Stadium" },
    { id: 3, homeTeam: "Chelsea", awayTeam: "Manchester United", date: "2025-04-21", time: "20:00", venue: "Stamford Bridge" },
    { id: 4, homeTeam: "Newcastle", awayTeam: "Aston Villa", date: "2025-04-22", time: "19:45", venue: "St. James' Park" },
    { id: 5, homeTeam: "Brighton", awayTeam: "West Ham", date: "2025-04-22", time: "20:00", venue: "Amex Stadium" },
  ];
>>>>>>> parent of dfd5ff6 (feat: Implement football stats API integration)

  // Mock data for results
  const results = [
    { id: 1, homeTeam: "Manchester City", homeScore: 3, awayScore: 1, awayTeam: "West Ham", date: "2025-04-14" },
    { id: 2, homeTeam: "Arsenal", homeScore: 2, awayScore: 0, awayTeam: "Bournemouth", date: "2025-04-14" },
    { id: 3, homeTeam: "Liverpool", homeScore: 4, awayScore: 1, awayTeam: "Luton", date: "2025-04-13" },
    { id: 4, homeTeam: "Aston Villa", homeScore: 3, awayScore: 3, awayTeam: "Chelsea", date: "2025-04-13" },
    { id: 5, homeTeam: "Crystal Palace", homeScore: 1, awayScore: 0, awayTeam: "Manchester United", date: "2025-04-12" },
  ];

<<<<<<< HEAD
  const { data: scorersData, isLoading: scorersLoading } = useQuery({
    queryKey: ['scorers'],
    queryFn: () => footballApi.getScorers('SA'),
  });
=======
  // Mock data for top scorers
  const topScorers = [
    { position: 1, player: "Erling Haaland", team: "Manchester City", goals: 27, assists: 5, appearances: 31 },
    { position: 2, player: "Cole Palmer", team: "Chelsea", goals: 22, assists: 11, appearances: 34 },
    { position: 3, player: "Alexander Isak", team: "Newcastle", goals: 21, assists: 2, appearances: 30 },
    { position: 4, player: "Phil Foden", team: "Manchester City", goals: 19, assists: 8, appearances: 35 },
    { position: 5, player: "Bukayo Saka", team: "Arsenal", goals: 16, assists: 9, appearances: 37 },
  ];

  // Mock data for player form
  const playerForm = [
    { player: "Bukayo Saka", team: "Arsenal", lastFiveGames: [2, 1, 0, 1, 2], rating: 8.4 },
    { player: "Cole Palmer", team: "Chelsea", lastFiveGames: [1, 3, 1, 0, 1], rating: 8.2 },
    { player: "Erling Haaland", team: "Manchester City", lastFiveGames: [2, 0, 1, 3, 1], rating: 8.0 },
    { player: "Mohamed Salah", team: "Liverpool", lastFiveGames: [0, 1, 1, 1, 2], rating: 7.9 },
    { player: "Ollie Watkins", team: "Aston Villa", lastFiveGames: [0, 2, 1, 0, 1], rating: 7.8 },
  ];
>>>>>>> parent of dfd5ff6 (feat: Implement football stats API integration)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar openLoginModal={openLoginModal} />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} defaultTab="login" />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6">Football Statistics</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6">
            <TabsTrigger value="standings" className="text-sm md:text-base">Standings</TabsTrigger>
            <TabsTrigger value="fixtures" className="text-sm md:text-base">Fixtures</TabsTrigger>
            <TabsTrigger value="results" className="text-sm md:text-base">Results</TabsTrigger>
            <TabsTrigger value="top-scorers" className="text-sm md:text-base">Top Scorers</TabsTrigger>
            <TabsTrigger value="player-form" className="text-sm md:text-base">Player Form</TabsTrigger>
          </TabsList>
          
          <TabsContent value="standings">
            <Card className="bg-gray-800 border-none">
              <CardHeader>
                <CardTitle>Premier League Table 2024/25</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">Pos</TableHead>
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
                      {standings.map((team) => (
                        <TableRow key={team.position} className={team.position <= 4 ? "bg-blue-900/30" : ""}>
                          <TableCell className="font-medium">{team.position}</TableCell>
                          <TableCell>{team.team}</TableCell>
                          <TableCell className="text-center">{team.played}</TableCell>
                          <TableCell className="text-center">{team.won}</TableCell>
                          <TableCell className="text-center">{team.drawn}</TableCell>
                          <TableCell className="text-center">{team.lost}</TableCell>
                          <TableCell className="text-center">{team.gf}</TableCell>
                          <TableCell className="text-center">{team.ga}</TableCell>
                          <TableCell className="text-center">{team.gd}</TableCell>
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
              <CardHeader>
                <CardTitle>Upcoming Fixtures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {fixtures.map((fixture) => (
                    <div key={fixture.id} className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex-1 text-right">
                          <span className="font-semibold text-lg">{fixture.homeTeam}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="text-football-gold font-bold">VS</div>
                          <div className="text-sm text-gray-300 mt-1">
                            {fixture.date} - {fixture.time}
                          </div>
                          <div className="text-xs text-gray-400">{fixture.venue}</div>
                        </div>
                        <div className="flex-1 text-left">
                          <span className="font-semibold text-lg">{fixture.awayTeam}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="results">
            <Card className="bg-gray-800 border-none">
              <CardHeader>
                <CardTitle>Recent Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {results.map((result) => (
                    <div key={result.id} className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex-1 text-right">
                          <span className="font-semibold text-lg">{result.homeTeam}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="px-3 py-1 bg-gray-600 rounded text-xl font-bold">
                            {result.homeScore} - {result.awayScore}
                          </span>
                        </div>
                        <div className="flex-1 text-left">
                          <span className="font-semibold text-lg">{result.awayTeam}</span>
                        </div>
                      </div>
                      <div className="text-center text-xs text-gray-400 mt-2">{result.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="top-scorers">
            <Card className="bg-gray-800 border-none">
              <CardHeader>
                <CardTitle>Top Scorers</CardTitle>
              </CardHeader>
              <CardContent>
<<<<<<< HEAD
                {scorersData && (
                  <ScorersTable 
                    scorers={scorersData.scorers}
                    competition={scorersData.competition}
                    season={scorersData.season}
                    isLoading={scorersLoading}
                  />
                )}
=======
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">Rank</TableHead>
                      <TableHead>Player</TableHead>
                      <TableHead>Team</TableHead>
                      <TableHead className="text-center">Goals</TableHead>
                      <TableHead className="text-center">Assists</TableHead>
                      <TableHead className="text-center">Appearances</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topScorers.map((player) => (
                      <TableRow key={player.position}>
                        <TableCell className="font-medium">{player.position}</TableCell>
                        <TableCell>{player.player}</TableCell>
                        <TableCell>{player.team}</TableCell>
                        <TableCell className="text-center font-bold">{player.goals}</TableCell>
                        <TableCell className="text-center">{player.assists}</TableCell>
                        <TableCell className="text-center">{player.appearances}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="player-form">
            <Card className="bg-gray-800 border-none">
              <CardHeader>
                <CardTitle>Player Form (Goals in Last 5 Games)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {playerForm.map((player) => (
                    <div key={player.player} className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="md:w-1/3">
                          <div className="font-semibold text-lg">{player.player}</div>
                          <div className="text-sm text-gray-300">{player.team}</div>
                        </div>
                        <div className="md:w-1/3 flex justify-center my-2 md:my-0">
                          <div className="flex gap-1">
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
                        </div>
                        <div className="md:w-1/3 text-center md:text-right">
                          <div className="text-football-gold font-bold">
                            Rating: {player.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
>>>>>>> parent of dfd5ff6 (feat: Implement football stats API integration)
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
=======
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar openLoginModal={openLoginModal} />
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab="login"
      />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Football Statistics</h1>
        <p className="text-xl mb-4">Comprehensive football statistics coming soon...</p>
>>>>>>> parent of bdcd77f (Fix: Implement Google login and stats page)
      </div>
    </div>
  );
};

export default Stats;
