// Enhanced interface for chess engine

interface EngineConfig {
    setConfiguration(config: object): void;
    getConfiguration(): object;
}

interface AnalysisResult {
    mateFound: boolean;
    bestMove: string;
    multiPVMoves: string[];
}

interface EngineEvent {
    eventType: string;
    data: any;
}

interface EngineEventListener {
    onEvent(event: EngineEvent): void;
}

interface IChessEngine {
    analyze(position: string, depth: number): AnalysisResult;
    detectMate(position: string): boolean;
    supportMultiPV(multiPV: boolean): void;
    emitEvent(event: EngineEvent): void;
}