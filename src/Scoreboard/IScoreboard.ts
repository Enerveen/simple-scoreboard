import Match from "../Match/Match";

interface IScoreboard {
    matches: Match[],
    addMatch: (matchId: string, homeTeamName: string, awayTeamName: string) => void,
    updateScore: (matchId: string, homeTeamScore: number, awayTeamScore: number) => void,
    removeMatch: (matchId: string) => void,
    showScoreboard: () => string
}

export default IScoreboard