// EngineInterface.ts
// Defines the base interface for all chess engines.

export interface EngineInterface {
    /**
     * Initialize the engine with the given configuration.
     * @param config - Configuration options for the engine.
     */
    initialize(config: object): void;

    /**
     * Start the engine and begin processing.
     */
    start(): void;

    /**
     * Stop the engine gracefully.
     */
    stop(): void;

    /**
     * Make a move on the board.
     * @param move - The move to be made.
     */
    makeMove(move: string): void;

    /**
     * Get the current state of the board.
     * @returns The current board state.
     */
    getBoardState(): string;

    /**
     * Analyze the position and return a score.
     * @returns The evaluation score of the current position.
     */
    analyzePosition(): number;
}