import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AuthModal from '@/components/AuthModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useQuery } from '@tanstack/react-query';
import { footballApi } from '@/services/footballApi';
import { format } from 'date-fns';
import ScorersTable from '@/components/ScorersTable';

const Stats = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("standings");

  const openLoginModal = () => {
    setIsAuthModalOpen(true);
  };

  // Fetch data using React Query with proper typing
  const { data: standings, isLoading: standingsLoading } = useQuery({
    queryKey: ['standings'],
    queryFn: () => footballApi.getStandings('PL'),
  });

  const { data: fixtures, isLoading: fixturesLoading } = useQuery({
    queryKey: ['fixtures'],
    queryFn: () => footballApi.getFixtures(86),
  });

  const { data: results, isLoading: resultsLoading } = useQuery({
    queryKey: ['results'],
    queryFn: () => footballApi.getResults('PL', 11),
  });

  const { data: scorersData, isLoading: scorersLoading } = useQuery({
    queryKey: ['scorers'],
    queryFn: () => footballApi.getScorers('SA'),
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar openLoginModal={openLoginModal} />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} defaultTab="login" />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6">Football Statistics</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
            <TabsTrigger value="standings">Standings</TabsTrigger>
            <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="scorers">Top Scorers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="standings">
            <Card className="bg-gray-800 border-none">
              <CardHeader>
                <CardTitle>Premier League Table 2024/25</CardTitle>
              </CardHeader>
              <CardContent>
                {standingsLoading ? (
                  <div className="text-center py-4">Loading standings...</div>
                ) : (
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
                        {standings?.map((team) => (
                          <TableRow key={team.position} className={team.position <= 4 ? "bg-blue-900/30" : ""}>
                            <TableCell className="font-medium">{team.position}</TableCell>
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
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="fixtures">
            <Card className="bg-gray-800 border-none">
              <CardHeader>
                <CardTitle>Upcoming Fixtures</CardTitle>
              </CardHeader>
              <CardContent>
                {fixturesLoading ? (
                  <div className="text-center py-4">Loading fixtures...</div>
                ) : (
                  <div className="grid gap-4">
                    {fixtures?.map((fixture) => (
                      <div key={fixture.id} className="bg-gray-700 p-4 rounded-lg">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                          <div className="flex-1 text-right">
                            <span className="font-semibold text-lg">{fixture.homeTeam.name}</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="text-football-gold font-bold">VS</div>
                            <div className="text-sm text-gray-300 mt-1">
                              {format(new Date(fixture.utcDate), 'dd MMM yyyy - HH:mm')}
                            </div>
                          </div>
                          <div className="flex-1 text-left">
                            <span className="font-semibold text-lg">{fixture.awayTeam.name}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="results">
            <Card className="bg-gray-800 border-none">
              <CardHeader>
                <CardTitle>Recent Results</CardTitle>
              </CardHeader>
              <CardContent>
                {resultsLoading ? (
                  <div className="text-center py-4">Loading results...</div>
                ) : (
                  <div className="grid gap-4">
                    {results?.map((result) => (
                      <div key={result.id} className="bg-gray-700 p-4 rounded-lg">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                          <div className="flex-1 text-right">
                            <span className="font-semibold text-lg">{result.homeTeam.name}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="px-3 py-1 bg-gray-600 rounded text-xl font-bold">
                              {result.score.fullTime.home} - {result.score.fullTime.away}
                            </span>
                          </div>
                          <div className="flex-1 text-left">
                            <span className="font-semibold text-lg">{result.awayTeam.name}</span>
                          </div>
                        </div>
                        <div className="text-center text-xs text-gray-400 mt-2">
                          {format(new Date(result.utcDate), 'dd MMM yyyy')}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="scorers">
            <Card className="bg-gray-800 border-none">
              <CardHeader>
                <CardTitle>Top Scorers</CardTitle>
              </CardHeader>
              <CardContent>
                {scorersData && (
                  <ScorersTable 
                    scorers={scorersData.scorers}
                    competition={scorersData.competition}
                    season={scorersData.season}
                    isLoading={scorersLoading}
                  />
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Stats;
