const sportsValue = 'basketball_nba'
const apiKey = "e1c3ac6792a90d8eb83df121f0fe3000"
const apiUrl = `https://api.the-odds-api.com/v4/sports/${sportsValue}/odds/?apiKey=${apiKey}&markets=h2h,spreads,totals&oddsFormat=american&bookmakers=draftkings,fanduel`
const bodyEl = document.querySelector("body")

const searchButton = document.querySelector("#search-button")

searchButton.addEventListener('click', async function (e){
    e.preventDefault()
    console.log('Button')
    const res = await axios.get(apiUrl)

    //console.log(res.data)
    displayData(res.data)
})


function displayData (data){
    for (let results of data){
        //console.log(results)

        const homeTeamData = results.home_team
        const awayTeamData = results.away_team

        const bookmaker = results.bookmakers[0].key
        
        const moneyLine1Odds = results.bookmakers[0].markets[0].outcomes[0].price
        const moneyLine2Odds = results.bookmakers[0].markets[0].outcomes[1].price

        const moneyLine1Team = results.bookmakers[0].markets[0].outcomes[0].name
        const moneyLine2Team = results.bookmakers[0].markets[0].outcomes[1].name

        console.log(bookmaker)
        console.log(moneyLine1Team, moneyLine1Odds)
        console.log(moneyLine2Team, moneyLine2Odds)

        const homeTeamEl = document.createElement("h4")
        const awayTeamEl = document.createElement("h4")

        homeTeamEl.innerHTML = homeTeamData
        awayTeamEl.innerHTML = awayTeamData

        homeTeamEl.classList.add("teamName")
        awayTeamEl.classList.add("teamName")
        
        bodyEl.append(homeTeamEl)
        bodyEl.append(awayTeamEl)



    }
}