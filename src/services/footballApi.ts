
const API_KEY = '4c0fa8a8fbb3418982d23b9b5d22d866';
const BASE_URL = 'https://api.football-data.org/v4';

const headers = {
  'X-Auth-Token': API_KEY
};

export interface Match {
  id: number;
  utcDate: string;
  status: string;
  stage: string;
  homeTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
  };
  awayTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
  };
  score: {
    fullTime: {
      home: number | null;
      away: number | null;
    };
  };
}

export interface Standing {
  position: number;
  team: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
  };
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

export interface Scorer {
  player: {
    id: number;
    name: string;
    nationality: string;
  };
  team: {
    id: number;
    name: string;
  };
  goals: number;
  assists: number;
  penalties: number;
}

export const footballApi = {
  getMatches: async (): Promise<Match[]> => {
    const response = await fetch(`${BASE_URL}/matches`, { headers });
    const data = await response.json();
    return data.matches;
  },

  getFixtures: async (teamId: number): Promise<Match[]> => {
    const response = await fetch(`${BASE_URL}/teams/${teamId}/matches?status=SCHEDULED`, { headers });
    const data = await response.json();
    return data.matches;
  },

  getResults: async (competitionId: string, matchday: number): Promise<Match[]> => {
    const response = await fetch(`${BASE_URL}/competitions/${competitionId}/matches?matchday=${matchday}`, { headers });
    const data = await response.json();
    return data.matches;
  },

  getStandings: async (competitionId: string): Promise<Standing[]> => {
    const response = await fetch(`${BASE_URL}/competitions/${competitionId}/standings`, { headers });
    const data = await response.json();
    return data.standings[0].table;
  },

  getScorers: async (competitionId: string): Promise<Scorer[]> => {
    const response = await fetch(`${BASE_URL}/competitions/${competitionId}/scorers`, { headers });
    const data = await response.json();
    return data.scorers;
  }
};
