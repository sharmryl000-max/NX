// UserProfile.ts

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    platformAccounts: PlatformAccount[];
}

export interface PlatformAccount {
    platform: Platform;
    username: string;
}

export enum Platform {
    CHESS_COM = 'chess.com',
    LICHESS = 'lichess',
    CHESSKID = 'chesskid',
}