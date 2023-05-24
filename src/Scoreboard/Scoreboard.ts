import Match from "../Match/Match";
import IScoreboard from "./IScoreboard";

class Scoreboard implements IScoreboard {

    matches: Match[] = []

    addMatch(matchId: string, homeTeamName: string, awayTeamName: string):void {
        const alreadyExistingMatch = this.matches.find(({id}) => id === matchId)
        if(!alreadyExistingMatch) {
            this.matches.unshift(new Match(matchId, homeTeamName, awayTeamName))
            console.log(`Match ${matchId} was successfully added`)
        } else {
            throw new Error(`Match with the id ${matchId} has been already started`)
        }
    }

    updateScore(matchId: string, homeTeamScore: number, awayTeamScore: number):void {
        const matchToUpdate = this.matches.find(({id}) => id === matchId)
        if (matchToUpdate) {
            matchToUpdate.updateScore(homeTeamScore, awayTeamScore)
            console.log(`Match ${matchId} score successfully updated`)
        } else {
            throw new Error(`Failed to find a match by id ${matchId}`)
        }
    }
    removeMatch(matchId: string):void {
        const matchesAmountBeforeRemoval = this.matches.length
        this.matches = this.matches.filter(({id}) => id !== matchId)
        if (this.matches.length < matchesAmountBeforeRemoval) {
            console.log(`Match ${matchId} finished`)
        } else {
            throw new Error(`Failed to find a match by id ${matchId}`)
        }
    }

    showScoreboard():string {
        //Destructuring the initial array to not mutate it during sorting
        return [...this.matches]
            .sort((matchA, matchB) =>
                (matchB.homeTeam.score + matchB.awayTeam.score) - (matchA.homeTeam.score + matchA.awayTeam.score))
            .reduce((acc, match) => {
                return acc + match.toString() + '\n'
            }, '')

    }

}

export default Scoreboard