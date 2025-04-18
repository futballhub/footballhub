
const API_KEY = '4c0fa8a8fbb3418982d23b9b5d22d866';
const BASE_URL = 'https://api.football-data.org/v4';

const headers = {
  'X-Auth-Token': API_KEY
};

export interface Player {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  section: string;
  position: string | null;
  shirtNumber: number | null;
  lastUpdated: string;
}

export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
}

export interface Match {
  id: number;
  utcDate: string;
  status: string;
  stage: string;
  homeTeam: Team;
  awayTeam: Team;
  score: {
    fullTime: {
      home: number | null;
      away: number | null;
    };
  };
}

export interface Standing {
  position: number;
  team: Team;
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
  player: Player;
  team: Team;
  playedMatches: number;
  goals: number;
  assists: number | null;
  penalties: number | null;
}

export interface Competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: string | null;
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

  getScorers: async (competitionId: string): Promise<{ competition: Competition; season: Season; scorers: Scorer[] }> => {
    const response = await fetch(`${BASE_URL}/competitions/${competitionId}/scorers`, { headers });
    const data = await response.json();
    return {
      competition: data.competition,
      season: data.season,
      scorers: data.scorers
    };
  }
};

