// ClubSystem.ts

export interface Club {
    id: string;
    name: string;
    members: string[];
    platform: 'chess.com' | 'lichess' | 'chesskid';
    matches: Match[];
}

export interface Match {
    matchId: string;
    clubId: string;
    date: Date;
    players: string[];
    result?: 'ongoing' | 'draw' | 'player1_win' | 'player2_win';
}

export class ClubSystem {
    private clubs: Club[] = [];

    public createClub(name: string, platform: 'chess.com' | 'lichess' | 'chesskid'): Club {
        const newClub: Club = {
            id: this.generateId(),
            name,
            members: [],
            platform,
            matches: [],
        };
        this.clubs.push(newClub);
        return newClub;
    }

    public joinClub(clubId: string, memberId: string): boolean {
        const club = this.clubs.find(c => c.id === clubId);
        if (club && !club.members.includes(memberId)) {
            club.members.push(memberId);
            return true;
        }
        return false;
    }

    public scheduleMatch(clubId: string, players: string[], date: Date): Match | null {
        const club = this.clubs.find(c => c.id === clubId);
        if (club) {
            const match: Match = {
                matchId: this.generateId(),
                clubId,
                date,
                players,
            };
            club.matches.push(match);
            return match;
        }
        return null;
    }

    public generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
}