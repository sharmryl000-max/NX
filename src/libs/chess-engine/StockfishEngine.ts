// StockfishEngine.ts

import { Stockfish } from 'stockfish';

class StockfishEngine {
    private engine: Stockfish;

    constructor() {
        this.engine = Stockfish();
        this.initializeEngine();
    }

    private initializeEngine() {
        this.engine.postMessage('uci');
        this.engine.onmessage = this.handleMessage.bind(this);
    }

    public makeMove(move: string): void {
        this.engine.postMessage(`position startpos`);
        this.engine.postMessage(`go movetime 1000`);
        this.engine.postMessage(`move ${move}`);
    }

    private handleMessage(message: string) {
        console.log('Stockfish message:', message);
        // Handle response from the Stockfish engine
    }
}

export default StockfishEngine;