const sportsValue = 'americanfootball_nfl'

const apiUrl = `https://api.the-odds-api.com/v4/sports/${sportsValue}/odds/?apiKey=${apiKey}&markets=h2h,spreads,totals&oddsFormat=american&bookmakers=draftkings&includeLinks=true`
const bodyEl = document.querySelector("body")
const cardsContainer = document.querySelector(".cards-container")

const searchButton = document.querySelector("#search-button")

searchButton.addEventListener('click', async function (e){
    e.preventDefault()
    console.log('Button')
    const res = await axios.get(apiUrl)

    //console.log(res.data)
    displayData(res.data)
    this.disabled = true
})


function displayData (data){
    for (let results of data){
        console.log(results)
        
        

        const homeTeamData = results.home_team
        const awayTeamData = results.away_team

        const date = new Date(results.commence_time)
        console.log(date.toLocaleDateString())
        const formatDate = date.toLocaleDateString()

      

        const Draftkings = {
            moneyLine : results.bookmakers[0].markets[0].outcomes,
            spread: results.bookmakers[0].markets[1].outcomes,
            overUnder: results.bookmakers[0].markets[2].outcomes,
            link: results.bookmakers[0].link
        }
        const gameLink = Draftkings.link
        console.log(gameLink)

        console.log(Draftkings.spread)

        //DraftKings MoneyLine Odds
        const bookmaker = results.bookmakers[0].key
        const moneyLine1Odds = results.bookmakers[0].markets[0].outcomes[0].price
        const moneyLine2Odds = results.bookmakers[0].markets[0].outcomes[1].price
        const moneyLine1Team = results.bookmakers[0].markets[0].outcomes[0].name
        const moneyLine2Team = results.bookmakers[0].markets[0].outcomes[1].name
        //Spread Odds/Info
        const spread1Odds = results.bookmakers[0].markets[1].outcomes[0].price
        const spread2Odds = results.bookmakers[0].markets[1].outcomes[1].price
        const spreadOver = results.bookmakers[0].markets[1].outcomes[0].point
        const spreadUnder = results.bookmakers[0].markets[1].outcomes[1].point

        //OverUnderInfo
        //console.log(Draftkings.moneyLine)
        // console.log(Draftkings.moneyLine[0].name)
        // console.log(Draftkings.moneyLine[0].price)

        //Spread Odds/Info
        // console.log(Draftkings.spread[0].name)
        // console.log(Draftkings.spread[0].price)
        // console.log(Draftkings.spread[0].point)
        // console.log(Draftkings.spread[1].name)
        // console.log(Draftkings.spread[1].price)
        // console.log(Draftkings.spread[1].point)

        //MoneyLine Info
        // console.log(Draftkings.moneyLine[0].name)
        // console.log(Draftkings.moneyLine[0].price)
        // console.log(Draftkings.moneyLine[1].name)
        // console.log(Draftkings.moneyLine[1].price)

        //OverUnder
        // console.log(Draftkings.overUnder[0].name)
        // console.log(Draftkings.overUnder[0].price)
        // console.log(Draftkings.overUnder[0].point)
        // console.log(Draftkings.overUnder[1].name)
        // console.log(Draftkings.overUnder[1].price)
        // console.log(Draftkings.overUnder[1].point)



      
        //console.log(bookmaker)
        // console.log(moneyLine1Team, moneyLine1Odds)
        // console.log(moneyLine2Team, moneyLine2Odds)
        //console.log(moneyLine1Team,spread1Team ,spread1Odds, spreadOver, moneyLine1Odds)
       // console.log(moneyLine2Team,spread2Team ,spread2Odds, spreadUnder, moneyLine2Odds)

       //Create Elements
       const carddiv = document.createElement("div")
       const topInfoDiv = document.createElement("div")
       const cardtitle = document.createElement("h4")
       const eventDate = document.createElement("p")
       const betLink = document.createElement("a")
       betLink.href = gameLink
       betLink.target = '_blank'
       //
       const team1div = document.createElement("div")
       const team2div = document.createElement("div")
       const team1Name = document.createElement("h5")
       const team2Name = document.createElement("h5")
       //
       const bigSpreadContainer = document.createElement("div")
       const bigSpreadContainer2 = document.createElement("div")
       const spreadContainer = document.createElement("div")
       const spreadContainer2 = document.createElement("div")
       const spreadTitle = document.createElement('p')
       const spreadTitle2 = document.createElement('p')
       const spreadPoints= document.createElement('p')
       const spreadOdds = document.createElement('p')
       const spreadPoints2= document.createElement('p')
       const spreadOdds2 = document.createElement('p')
       //
       const bigOverUnderContainer = document.createElement("div")
       const bigOverUnderContainer2 = document.createElement("div")
       const overUnderContainer = document.createElement("div")
       const overUnderContainer2 = document.createElement("div")
       const overUnderTitle = document.createElement('p')
       const overUnderTitle2 = document.createElement('p')
       const overUnderPoints = document.createElement('p')
       const overUnderOdds = document.createElement('p')
       const overUnderPoints2 = document.createElement('p')
       const overUnderOdds2 = document.createElement('p')

       //
       const bigMoneyLineContainer = document.createElement("div")
       const bigMoneyLineContainer2 = document.createElement("div")
       const moneyLineContainer = document.createElement("div")
       const moneyLineContainer2 = document.createElement("div")
       const moneyLineTitle = document.createElement('p')
       const moneyLineTitle2 = document.createElement('p')
       const moneyLineOdds = document.createElement('p')
       const moneyLineOdds2 = document.createElement('p')
       
       
       //Addind Data to Created Elements    
       cardtitle.innerHTML = results.bookmakers[0].key
       team1Name.innerHTML = homeTeamData
       team2Name.innerHTML = awayTeamData
       spreadTitle.innerHTML = 'Spread'
       spreadTitle2.innerHTML = 'Spread'
       overUnderTitle.innerHTML = 'Over'
       overUnderTitle2.innerHTML = 'Under'
       moneyLineTitle.innerHTML = 'Moneyline'
       moneyLineTitle2.innerHTML = 'Moneyline'
       spreadPoints.innerHTML= Draftkings.spread[0].point
       spreadOdds.innerHTML = Draftkings.spread[0].price
       overUnderOdds.innerHTML = Draftkings.overUnder[0].price
       overUnderPoints.innerHTML = Draftkings.overUnder[0].point
       moneyLineOdds.innerHTML = Draftkings.moneyLine[0].price
       spreadPoints2.innerHTML= Draftkings.spread[1].point
       spreadOdds2.innerHTML = Draftkings.spread[1].price
       overUnderOdds2.innerHTML = Draftkings.overUnder[1].price
       overUnderPoints2.innerHTML = Draftkings.overUnder[1].point
       moneyLineOdds2.innerHTML = Draftkings.moneyLine[1].price
       eventDate.innerHTML = formatDate
       betLink.innerHTML = 'View Bet'

       //Appending To DOM Elements
       //Big Cards Container
       cardsContainer.append(carddiv)
       //INdividual Cards COntainer
       //carddiv.append(cardtitle)
       carddiv.append(topInfoDiv)
       topInfoDiv.append(eventDate, cardtitle, betLink)
       carddiv.append(team1div,team2div)
       team1div.append(team1Name, bigSpreadContainer, bigOverUnderContainer, bigMoneyLineContainer)
       team2div.append(team2Name, bigSpreadContainer2, bigOverUnderContainer2, bigMoneyLineContainer2)

       bigSpreadContainer.append(spreadTitle, spreadContainer)
       bigSpreadContainer2.append(spreadTitle2, spreadContainer2)
       spreadContainer.append( spreadPoints,spreadOdds)
       spreadContainer2.append(spreadPoints2, spreadOdds2)

       bigOverUnderContainer.append(overUnderTitle, overUnderContainer)
       bigOverUnderContainer2.append(overUnderTitle2, overUnderContainer2)
       overUnderContainer.append( overUnderPoints,overUnderOdds )
       overUnderContainer2.append(overUnderPoints2, overUnderOdds2)

       bigMoneyLineContainer.append(moneyLineTitle, moneyLineContainer)
       bigMoneyLineContainer2.append(moneyLineTitle2, moneyLineContainer2)
       moneyLineContainer.append(moneyLineOdds)
       moneyLineContainer2.append(moneyLineOdds2)

       

       carddiv.classList.add("card-div")
       topInfoDiv.classList.add('top-info-div')
       team1div.classList.add("team-div","team1div")
       team2div.classList.add("team-div","team2div")
       spreadContainer.classList.add("spread-container", "odds-container")
       bigSpreadContainer.classList.add("big-spread-container", "big-containers")
       bigOverUnderContainer.classList.add("big-over-container","big-containers")
       bigMoneyLineContainer.classList.add("big-money-container","big-containers")
       bigSpreadContainer2.classList.add("big-spread-container","big-containers")
       bigOverUnderContainer2.classList.add("big-over-container","big-containers")
       bigMoneyLineContainer2.classList.add("big-moeny-container","big-containers")
       overUnderContainer.classList.add("overUnder-container", "odds-container")
       moneyLineContainer.classList.add("moneyLine-container", "odds-container")
       spreadContainer2.classList.add("spread-container", "odds-container")
       overUnderContainer2.classList.add("overUnder-container", "odds-container")
       moneyLineContainer2.classList.add("moneyLine-container2", "odds-container")
       

        // const homeTeamEl = document.createElement("p")
        // const awayTeamEl = document.createElement("p")

        // homeTeamEl.innerHTML = homeTeamData
        // awayTeamEl.innerHTML = awayTeamData

        // homeTeamEl.classList.add("teamName")
        // awayTeamEl.classList.add("teamName")
        
        // bodyEl.append(homeTeamEl)
        // bodyEl.append(awayTeamEl)



    }
}

// searchButton.addEventListener('click', function (e){
//     e.preventDefault()
//     displayItems()
// })


// function displayItems (){
//     const carddiv = document.createElement("div")
//        const cardtitle = document.createElement("h4")
//        const team1div = document.createElement("div")
//        const team2div = document.createElement("div")
//        const team1Name = document.createElement("h5")
//        const team2Name = document.createElement("h5")
//        const spreadContainer = document.createElement("div")
//        const betTitle = document.createElement("p")
//        const moneyLineContainer = document.createElement("div")
//        const overUnerContainer = document.createElement("div")


//        carddiv.classList.add("card-div")
//        cardsContainer.append(carddiv)
// }