import IMatch from "./IMatch";
import {Team} from "../types";

class Match implements IMatch {
    id: string
    homeTeam: Team
    awayTeam: Team
    constructor(matchId: string, homeTeamName: string, awayTeamName: string) {

    }

    updateScore(homeTeamScore: number, awayTeamScore: number): void {

    }

    toString(): string {
        return ''
    }
}

export default Match