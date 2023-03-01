<template>
    <div class="match-bets">
        <div class="row mt-4">
            <div class="col-md-6">
                <div class="bet-group">
                    <div class="bets-header">
                        Rest of Match
                    </div>
                    <div class="bets mt-2 py-3" data-value="Winner">
                        <!-- <div class="bet" @click="setWinnerBet(match, $event)"> -->
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                            <div class="score" :data-value="(match.betState['matchOdds102']['o1'] / 100).toFixed(2)">{{ (match.betState['matchOdds102']['o1'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" data-value="Draw">Draw</div>
                            <div class="score" :data-value="(match.betState['matchOdds102']['o0'] / 100).toFixed(2)">{{ (match.betState['matchOdds102']['o0'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.awayTeam">{{ match.match.awayTeam }}</div>
                            <div class="score" :data-value="(match.betState['matchOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['matchOdds102']['o2'] / 100).toFixed(2) }}</div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Over/Under {{(match.betState['matchOddsOU']['threshold'] / 10).toFixed(1)}}
                    </div>
                    <div class="bets mt-2 py-3">
                        <div :data-value="`Over/Under ${(match.betState['matchOddsOU']['threshold'] / 10).toFixed(1)}`" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Over">Over</div>
                                <div class="score" :data-value="(match.betState['matchOddsOU']['over'] / 100).toFixed(2)">{{ (match.betState['matchOddsOU']['over'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Under">Under</div>
                                <div class="score" :data-value="(match.betState['matchOddsOU']['under'] / 100).toFixed(2)">{{ (match.betState['matchOddsOU']['under'] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bet-group">
                    <div class="bets-header">
                        Rest of Match - Double Chance
                    </div>
                    <div class="bets mt-2 py-3" :data-value="`Rest of Match - Double Chance`">
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="`${match.match.homeTeam} 1X`">{{ match.match.homeTeam }} 1X</div>
                            <div class="score" :data-value="(match.betState['doubleChanceOdds102']['o1'] / 100).toFixed(2)">{{ (match.betState['doubleChanceOdds102']['o1'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="`${match.match.homeTeam} 12 ${match.match.awayTeam}`">{{ match.match.homeTeam }} 12 {{ match.match.awayTeam }}</div>
                            <div class="score" :data-value="(match.betState['doubleChanceOdds102']['o0'] / 100).toFixed(2)">{{ (match.betState['doubleChanceOdds102']['o0'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="`X2 ${match.match.awayTeam}`">X2 {{ match.match.awayTeam }}</div>
                            <div class="score" :data-value="(match.betState['doubleChanceOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['doubleChanceOdds102']['o2'] / 100).toFixed(2) }}</div>
                        </div>
                    </div>
                </div>

                <div class="bet-group">
                    <div class="bets-header">
                        Winner
                    </div>
                    <div class="bets mt-2 py-3" data-value="Winner">
                        <!-- <div class="bet" @click="setWinnerBet(match, $event)"> -->
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                            <div class="score" :data-value="(match.betState['matchWinnerOdds102']['o1'] / 100).toFixed(2)">{{ (match.betState['matchWinnerOdds102']['o1'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" data-value="Draw">Draw</div>
                            <div class="score" :data-value="(match.betState['matchWinnerOdds102']['o0'] / 100).toFixed(2)">{{ (match.betState['matchWinnerOdds102']['o0'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.awayTeam">{{ match.match.awayTeam }}</div>
                            <div class="score" :data-value="(match.betState['matchWinnerOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['matchWinnerOdds102']['o2'] / 100).toFixed(2) }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">

                <div class="bet-group">
                    <div class="bets-header">
                        Rest of Match - Handicap {{ match.betState['handicapOdds102']['handicap']['home'] }}:{{ match.betState['handicapOdds102']['handicap']['away'] }}
                    </div>
                    <div class="bets mt-2 py-3" :data-value="`Rest of Match - Handicap ${match.betState['handicapOdds102']['handicap']['home']}:${match.betState['handicapOdds102']['handicap']['away']}`">
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                            <div class="score" :data-value="(match.betState['handicapOdds102']['BASE']['o1'] / 100).toFixed(2)">{{ (match.betState['handicapOdds102']['BASE']['o1'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" data-value="Draw">Draw</div>
                            <div class="score" :data-value="(match.betState['handicapOdds102']['BASE']['o0'] / 100).toFixed(2)">{{ (match.betState['handicapOdds102']['BASE']['o0'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.awayTeam">{{ match.match.awayTeam }}</div>
                            <div class="score" :data-value="(match.betState['handicapOdds102']['BASE']['o2'] / 100).toFixed(2)">{{ (match.betState['handicapOdds102']['BASE']['o2'] / 100).toFixed(2) }}</div>
                        </div>
                    </div>
                </div>

                <div class="bet-group">
                    <div class="bets-header">
                        Next Goal
                    </div>
                    <div class="bets mt-2 py-3" data-value="Next Goal">
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                            <div class="score" :data-value="(match.betState['nextGoalOdds102']['o1'] / 100).toFixed(2)">{{ (match.betState['nextGoalOdds102']['o1'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" data-value="Draw">Draw</div>
                            <div class="score" :data-value="(match.betState['nextGoalOdds102']['o0'] / 100).toFixed(2)">{{ (match.betState['nextGoalOdds102']['o0'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.awayTeam">{{ match.match.awayTeam }}</div>
                            <div class="score" :data-value="(match.betState['nextGoalOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['nextGoalOdds102']['o2'] / 100).toFixed(2) }}</div>
                        </div>
                    </div>
                </div>

                <div class="bet-group">
                    <div class="bets-header">
                        Rest of Match - Both Teams To Score
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="Rest of Match - Both Teams To Score" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Yes">Yes</div>
                                <div class="score" :data-value="(match.betState['bothToScoreOddsYN']['yes'] / 100).toFixed(2)">{{ (match.betState['bothToScoreOddsYN']['yes'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="No">No</div>
                                <div class="score" :data-value="(match.betState['bothToScoreOddsYN']['no'] / 100).toFixed(2)">{{ (match.betState['bothToScoreOddsYN']['no'] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bet-group">
                    <div class="bets-header">
                        Rest of Match - Draw No Bet
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="Rest of Match - Draw No Bet" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                                <div class="score" :data-value="(match.betState['drawNoBet12']['o1'] / 100).toFixed(2)">{{ (match.betState['drawNoBet12']['o1'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="match.match.awayTeam">{{ match.match.awayTeam }}</div>
                                <div class="score" :data-value="(match.betState['drawNoBet12']['o2'] / 100).toFixed(2)">{{ (match.betState['drawNoBet12']['o2'] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            

        </div>
    </div>
</template>
<script>
    export default {
        name: 'MatchDetail',
        props: {
            match: {
                type: Object
            }
        },
        created() {
            // console.log(this.$store)
        },
        methods: {
            setWinnerBet(event) {
                let data = {}
                data.title =  `${this.match.match.homeTeam} - ${this.match.match.awayTeam}`
                var main;
                if (event.target.classList.contains("bet"))
                    main = event.target
                else
                    main = event.target.parentNode
                
                let name = main.firstChild.getAttribute('data-value')
                let mark = main.lastChild.getAttribute('data-value')
                let type = main.parentNode.getAttribute('data-value')
                let bet = {}
                bet.name = name
                bet.type = type
                bet.mark = mark
                data.bet = bet
                this.$store.commit('bets/ADD_BETS', data)

                // setting the class
                let i = this.$store.state.bets.matches.findIndex(({title}) => title == data.title)
                if (i > -1) {
                    let index = this.$store.state.bets.matches[i].bet.findIndex(({type, name}) => type == data.bet.type && name == data.bet.name)
                    if (index > -1) {
                            main.classList.add('active')
                    } else
                        main.classList.remove('active')
                } else {
                    main.classList.remove('active')
                }
                
            }

        }
     }
</script>
<style scoped lang="scss">
    .active {
        background-color: #f69f16;
        color: #fff;
    }
    .bet-group {
        border: 1px solid #aaa;
        background-color: #fff;
        font-size: 12px;
        margin-top: 12px;
        margin-bottom: 12px;
        margin-left: 8px;
        margin-right: 8px;

        .bets-header {
            background-image: linear-gradient(180deg,#f3f3f3 0,#ddd);
            padding: 7px;
            font-weight: 700;
            box-shadow: 0 6px 3px -3px #777;
            color: #333;
        }
        .bet {
            border-radius: 3px;
            border: 1px solid #777;
            padding: 5px;
            margin: 5px;
            color: #000;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>