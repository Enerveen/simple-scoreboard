# Simple Scoreboard
## Documentation
Use `yarn test` to run tests, and `yarn build` to build the project. Scoreboard class can be exported either from index.js or Scoreboard.js file after the build is complete. Documentation of the methods of this class can be found below.

### Scoreboard methods
`addMatch(matchId: string, homeTeamName: string, awayTeamName: string): void`. 
Adds a new match to the scoreboard with the provided id, home team name, and away team name parameters. Throws an error if match with the same id as provided already exists on a scoreboard.  
`updateScore(matchId: string, homeTeamScore: number, awayTeamScore: number): void`. 
This method updates the scores of a match with the provided id. If a match with the specified id exists in the matches array, the scores of the home team and away team are updated accordingly. Throws an error if a match with the specified matchId does not exist.  

`removeMatch(matchId: string): void`
This method removes a match from the scoreboard based on the provided id. Throws an error if no match with the specified id is found.  

`showScoreboard(): string`   
This method returns a formatted string representation of the current scoreboard. Matches are sorted accordingly to their total score.  

## Notes and thoughts
1) Considering we are following the SOLID principles precisely, the methods of `Scoreboard` class should be separated into another class (e.g. `ScoreboardManager`) to adhere to the Single Responsibility principle. However, I found such an approach excessive in this particular case as the first point of the guidelines says *Keep it simple*. 
2) To achieve more sustainability for the cases of sorting matches with the same total score, I would add `startTimestamp` field to the Match class. However, considering that we add matches to the Scoreboard immediatly after their start, it works as it is. So, once again, I've tried to *Keep it simple* and not add additional fields.
