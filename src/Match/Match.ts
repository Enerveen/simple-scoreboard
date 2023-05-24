import IMatch from "./IMatch";
import {Team} from "../types";

class Match implements IMatch {
    id: string
    homeTeam: Team
    awayTeam: Team
    constructor(matchId: string, homeTeamName: string, awayTeamName: string) {
        this.homeTeam = {name: homeTeamName, score: 0}
        this.awayTeam = {name: awayTeamName, score: 0}
        this.id = matchId
    }

    updateScore(homeTeamScore: number, awayTeamScore: number) {
        if (homeTeamScore < 0 || awayTeamScore < 0) {
            throw new Error('Score of a team can\'t be less than zero')
        }
        this.homeTeam.score = homeTeamScore
        this.awayTeam.score = awayTeamScore
    }

    toString() {
        return `${this.homeTeam.name} ${this.homeTeam.score} - ${this.awayTeam.name} ${this.awayTeam.score}`
    }
}

export default Match