import Match from "../Match/Match";
import IScoreboard from "./IScoreboard";

class Scoreboard implements IScoreboard {

    matches: Match[] = []

    addMatch(matchId: string, homeTeamName: string, awayTeamName: string):void {

    }

    updateScore(matchId: string, homeTeamScore: number, awayTeamScore: number):void {

    }
    removeMatch(matchId: string):void {

    }

    showScoreboard():string {
        return ''
    }

}

export default Scoreboard