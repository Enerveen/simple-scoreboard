import Match from "../Match/Match";
import Scoreboard from "./Scoreboard";

describe("Scoreboard class", () => {
    describe('addMatch method', () => {
        let scoreboard: Scoreboard

        beforeEach(() => {
            scoreboard = new Scoreboard()
        })

        it('should add match to the scoreboard if provided match id is unique', () => {
            const match = new Match('someId', 'Poland', 'Germany')
            scoreboard.addMatch('someId', 'Poland', 'Germany')
            expect(scoreboard.matches[0]).toEqual(match)
        })

        it('should throw an error if provided match id is not unique', () => {
            scoreboard.addMatch('someId', 'Poland', 'Germany')
            expect(() => scoreboard.addMatch('someId', 'Poland', 'Germany'))
                .toThrow('Match with the id someId has been already started')
        })
    })

    describe('updateScore method', () => {
        let scoreboard: Scoreboard

        beforeEach(() => {
            scoreboard = new Scoreboard()
            scoreboard.addMatch('someId1', 'Poland', 'Germany')
        })

        it('should update match score if match id is found', () => {
            scoreboard.updateScore('someId1', 3, 2)
            expect(scoreboard.matches[0].homeTeam.score).toBe(3)
            expect(scoreboard.matches[0].awayTeam.score).toBe(2)
        })

        it('should throw an error if provided match id is not found', () => {
            scoreboard.updateScore('someId1', 3, 2)
            expect(() => scoreboard.updateScore('someId2', 3, 2))
                .toThrow('Failed to find a match by id someId2')
        })
    })

    describe('removeMatch method', () => {
        let scoreboard: Scoreboard

        beforeEach(() => {
            scoreboard = new Scoreboard()
            scoreboard.addMatch('someId1', 'Poland', 'Germany')
            scoreboard.addMatch('someId2', 'Poland', 'Germany')
        })

        it('should remove match from the scoreboard if provided match id is found', () => {
            scoreboard.removeMatch('someId1')
            expect(scoreboard.matches.length).toBe(1)
            expect(scoreboard.matches[0].id).toBe('someId2')
        })

        it('should throw an error if provided match id is not found', () => {
            expect(() => scoreboard.removeMatch('someId3'))
                .toThrow('Failed to find a match by id someId3')
        })
    })

    describe('showScore method', () => {


        it('should show match score as expected', () => {
            const scoreboard = new Scoreboard()
            scoreboard.addMatch('someId1', 'Mexico', 'Canada')
            scoreboard.updateScore('someId1', 0, 5)
            scoreboard.addMatch('someId2', 'Spain', 'Brazil')
            scoreboard.updateScore('someId2', 10, 2)
            scoreboard.addMatch('someId3', 'Germany', 'France')
            scoreboard.updateScore('someId3', 2, 2)
            scoreboard.addMatch('someId4', 'Uruguay', 'Italy')
            scoreboard.updateScore('someId4', 6, 6)
            scoreboard.addMatch('someId5', 'Argentina', 'Australia')
            scoreboard.updateScore('someId5', 3, 1)

            expect(scoreboard.showScoreboard()).toBe(`Uruguay 6 - Italy 6
Spain 10 - Brazil 2
Mexico 0 - Canada 5
Argentina 3 - Australia 1
Germany 2 - France 2
`)
        })
    })
})
