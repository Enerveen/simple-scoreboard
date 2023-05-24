import Match from "./Match";

describe("Match class", () => {

    it('class creates correctly', () => {
        const match = new Match('someId', 'Poland', 'Germany')
        expect(match.homeTeam.score).toBe(0)
        expect(match.awayTeam.score).toBe(0)
        expect(match.homeTeam.name).toBe('Poland')
        expect(match.awayTeam.name).toBe('Germany')
    })

    describe('update score method', () => {
        it('works correctly for valid score values', () => {
            const match = new Match('someId', 'Poland', 'Germany')
            match.updateScore(4, 3)
            expect(match.homeTeam.score).toBe(4)
            expect(match.awayTeam.score).toBe(3)
        })

        it('throws an Error for invalid score values', () => {
            const match = new Match('someId', 'Poland', 'Germany')
            expect(() => match.updateScore(3,-10)).toThrow('Score of a team can\'t be less than zero')
        })
    })

    it('toString method works as expected', () => {
        const match = new Match('someId', 'Poland', 'Germany')
        expect(match.toString()).toBe('Poland 0 - Germany 0')
    })

})