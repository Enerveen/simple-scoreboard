import {Team} from "../types";

interface IMatch {
    id: string,
    homeTeam: Team,
    awayTeam: Team,
    updateScore: (homeTeamScore: number, awayTeamScore: number) => void,
    toString: () => string
}

export default IMatch