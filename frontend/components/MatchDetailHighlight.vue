<template>
    <div class="match-bets">
        <div class="row mt-4">
            <div class="col-md-6">
                <div class="bet-group">
                    <div class="bets-header">
                        Winner
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
                        Handicap {{ match.betState['handicapOdds2nd102']['handicap']['home'] }}:{{ match.betState['handicapOdds2nd102']['handicap']['away'] }}
                    </div>
                    <div class="bets mt-2 py-3" :data-value="`Handicap ${match.betState['handicapOdds2nd102']['handicap']['home']}:${ match.betState['handicapOdds2nd102']['handicap']['away']}`">
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                            <div class="score" :data-value="(match.betState['handicapOdds2nd102']['BASE']['o1'] / 100).toFixed(2)">{{ (match.betState['handicapOdds2nd102']['BASE']['o1'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" data-value="Draw">Draw</div>
                            <div class="score" :data-value="(match.betState['handicapOdds2nd102']['BASE']['o0'] / 100).toFixed(2)">{{ (match.betState['handicapOdds2nd102']['BASE']['o0'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.awayTeam">{{ match.match.awayTeam }}</div>
                            <div class="score" :data-value="(match.betState['handicapOdds2nd102']['BASE']['o2'] / 100).toFixed(2)">{{ (match.betState['handicapOdds2nd102']['BASE']['o2'] / 100).toFixed(2) }}</div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Over/Under {{(match.betState['matchOdds2ndOU']['threshold'] / 10).toFixed(1)}}
                    </div>
                    <div class="bets mt-2 py-3">
                        <div :data-value="`Over/Under ${(match.betState['matchOdds2ndOU']['threshold'] / 10).toFixed(1)}`" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Over">Over</div>
                                <div class="score" :data-value="(match.betState['matchOdds2ndOU']['over'] / 100).toFixed(2)">{{ (match.betState['matchOdds2ndOU']['over'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Under">Under</div>
                                <div class="score" :data-value="(match.betState['matchOdds2ndOU']['under'] / 100).toFixed(2)">{{ (match.betState['matchOdds2ndOU']['under'] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Both Teams To Score
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="Both Teams To Score" style="display: flex; justify-content: space-between; align-items: center;">
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
                        1st Half Over/Under {{(match.betState['firstHalftimeOdds2ndOU']['threshold'] / 10).toFixed(1)}}
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="1st Half Over/Under 0.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="1st Half Over">1st Half Over</div>
                                <div class="score" :data-value="(match.betState['firstHalftimeOdds2ndOU']['over'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeOdds2ndOU']['over'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="1st Half Under">1st Half Under</div>
                                <div class="score" :data-value="(match.betState['firstHalftimeOdds2ndOU']['under'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeOdds2ndOU']['under'] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        1st Half
                    </div>
                    <div class="bets mt-2 py-3" data-value="1st Half">
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                            <div class="score" :data-value="(match.betState['firstHalftimeOdds102']['o1'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeOdds102']['o1'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" data-value="Draw">Draw</div>
                            <div class="score" :data-value="(match.betState['firstHalftimeOdds102']['o0'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeOdds102']['o0'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.awayTeam">{{ match.match.awayTeam }}</div>
                            <div class="score" :data-value="(match.betState['firstHalftimeOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeOdds102']['o2'] / 100).toFixed(2) }}</div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Home Over/Under {{(match.betState['totalsHomeTeamOddsOU']['threshold'] / 10).toFixed(1)}}
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="Home Over/Under 1.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Over Home">Over Home</div>
                                <div class="score" :data-value="(match.betState['totalsHomeTeamOddsOU']['over'] / 100).toFixed(2)">{{ (match.betState['totalsHomeTeamOddsOU']['over'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Under Home">Under Home</div>
                                <div class="score" :data-value="(match.betState['totalsHomeTeamOddsOU']['under'] / 100).toFixed(2)">{{ (match.betState['totalsHomeTeamOddsOU']['under'] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        1st Half Handicap {{ match.betState['firstHalfTimeEUHandicapOdds102']['handicap']['home'] }}:{{ match.betState['handicapOdds2nd102']['handicap']['away'] }}
                    </div>
                    <div class="bets mt-2 py-3" :data-value="`1st Half Handicap ${match.betState['firstHalfTimeEUHandicapOdds102']['handicap']['home']}:${match.betState['firstHalfTimeEUHandicapOdds102']['handicap']['away']}`">
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                            <div class="score" :data-value="(match.betState['firstHalfTimeEUHandicapOdds102']['BASE']['o1'] / 100).toFixed(2)">{{ (match.betState['firstHalfTimeEUHandicapOdds102']['BASE']['o1'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" data-value="Draw">Draw</div>
                            <div class="score" :data-value="(match.betState['firstHalfTimeEUHandicapOdds102']['BASE']['o0'] / 100).toFixed(2)">{{ (match.betState['firstHalfTimeEUHandicapOdds102']['BASE']['o0'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.awayTeam">{{ match.match.awayTeam }}</div>
                            <div class="score" :data-value="(match.betState['firstHalfTimeEUHandicapOdds102']['BASE']['o2'] / 100).toFixed(2)">{{ (match.betState['firstHalfTimeEUHandicapOdds102']['BASE']['o2'] / 100).toFixed(2) }}</div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Winner And Over/Under 1.5
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="Winner And Over/Under 1.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.homeTeam} Over`">{{ match.match.homeTeam }} Over</div>
                                <div class="score" :data-value="(match.betState['matchOddsOU102']['odds'][3][1] / 100).toFixed(2)">{{ (match.betState['matchOddsOU102']['odds'][3][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.homeTeam} Under`">{{ match.match.homeTeam }} Under</div>
                                <div class="score" :data-value="(match.betState['matchOddsOU102']['odds'][4][1] / 100).toFixed(2)">{{ (match.betState['matchOddsOU102']['odds'][4][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                        <div data-value="Winner And Over/Under 1.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Draw Over">Draw Over</div>
                                <div class="score" :data-value="(match.betState['matchOddsOU102']['odds'][5][1] / 100).toFixed(2)">{{ (match.betState['matchOddsOU102']['odds'][5][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Draw Under">Draw Under</div>
                                <div class="score" :data-value="(match.betState['matchOddsOU102']['odds'][0][1] / 100).toFixed(2)">{{ (match.betState['matchOddsOU102']['odds'][0][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                        <div data-value="Winner And Over/Under 1.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.awayTeam} Over`">{{ match.match.awayTeam }} Over</div>
                                <div class="score" :data-value="(match.betState['matchOddsOU102']['odds'][1][1] / 100).toFixed(2)">{{ (match.betState['matchOddsOU102']['odds'][1][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.awayTeam} Under`">{{ match.match.awayTeam }} Under</div>
                                <div class="score" :data-value="(match.betState['matchOddsOU102']['odds'][2][1] / 100).toFixed(2)">{{ (match.betState['matchOddsOU102']['odds'][2][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Winner And Over/Under 3.5
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="Winner And Over/Under 3.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.homeTeam} Over`">{{ match.match.homeTeam }} Over</div>
                                <div class="score" :data-value="(match.betState['matchOdds3rdOU102']['odds'][1][1] / 100).toFixed(2)">{{ (match.betState['matchOdds3rdOU102']['odds'][1][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.homeTeam} Under`">{{ match.match.homeTeam }} Under</div>
                                <div class="score" :data-value="(match.betState['matchOdds3rdOU102']['odds'][0][1] / 100).toFixed(2)">{{ (match.betState['matchOdds3rdOU102']['odds'][0][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                        <div data-value="Winner And Over/Under 3.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Draw Over">Draw Over</div>
                                <div class="score" :data-value="(match.betState['matchOdds3rdOU102']['odds'][2][1] / 100).toFixed(2)">{{ (match.betState['matchOdds3rdOU102']['odds'][2][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Draw Under">Draw Under</div>
                                <div class="score" :data-value="(match.betState['matchOdds3rdOU102']['odds'][3][1] / 100).toFixed(2)">{{ (match.betState['matchOdds3rdOU102']['odds'][3][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                        <div data-value="Winner And Over/Under 3.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.awayTeam} Over`">{{ match.match.awayTeam }} Over</div>
                                <div class="score" :data-value="(match.betState['matchOdds3rdOU102']['odds'][4][1] / 100).toFixed(2)">{{ (match.betState['matchOdds3rdOU102']['odds'][4][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.awayTeam} Under`">{{ match.match.awayTeam }} Under</div>
                                <div class="score" :data-value="(match.betState['matchOdds3rdOU102']['odds'][5][1] / 100).toFixed(2)">{{ (match.betState['matchOdds3rdOU102']['odds'][5][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Result
                    </div>
                    <div class="bets mt-2 py-3" >
                        <div class="row" style="padding: 0px; margin: 0px;">
                            <div class="col-md-3" data-value="Result" style="padding: 0px; margin: 0px;" v-for="a in match.betState['betradarOdds']['releasedBetradarOdds'][3][1]">
                                <div class="bet" @click="setWinnerBet">
                                    <div class="name" :data-value="a[0]">{{ a[0] }}</div>
                                    <div class="score" :data-value="(a[1][0][1] / 100).toFixed(2)">{{ (a[1][0][1] / 100).toFixed(2) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Over/Under {{ (match.betState['matchOdds5thOU']['threshold'] / 10).toFixed(1) }}
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="Over/Under 4.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Over">Over</div>
                                <div class="score" :data-value="(match.betState['matchOdds5thOU']['over'] / 100).toFixed(2)">{{ (match.betState['matchOdds5thOU']['over'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Under">Under</div>
                                <div class="score" :data-value="(match.betState['matchOdds5thOU']['under'] / 100).toFixed(2)">{{ (match.betState['matchOdds5thOU']['under'] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Handicap {{ match.betState['handicapOdds4th102']['handicap']['home'] }}:{{ match.betState['handicapOdds4th102']['handicap']['away'] }}
                    </div>
                    <div class="bets mt-2 py-3" data-value="Handicap 1:0">
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                            <div class="score" :data-value="(match.betState['handicapOdds4th102']['BASE']['o1'] / 100).toFixed(2)">{{ (match.betState['handicapOdds4th102']['BASE']['o1'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" data-value="Draw">Draw</div>
                            <div class="score" :data-value="(match.betState['handicapOdds4th102']['BASE']['o0'] / 100).toFixed(2)">{{ (match.betState['handicapOdds4th102']['BASE']['o0'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.awayTeam">{{ match.match.awayTeam }}</div>
                            <div class="score" :data-value="(match.betState['handicapOdds4th102']['BASE']['o2'] / 100).toFixed(2)">{{ (match.betState['handicapOdds4th102']['BASE']['o2'] / 100).toFixed(2) }}</div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        1st Half Over/Under {{ (match.betState['firstHalftimeOdds3rdOU']['threshold'] / 10).toFixed(1) }}
                    </div>
                    <div class="bets mt-2 py-3" >
                        <div :data-value="`1st Half Over/Under ${(match.betState['firstHalftimeOdds3rdOU']['threshold'] / 10).toFixed(1)}`" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="1st Half Over">1st Half Over</div>
                                <div class="score" :data-value="(match.betState['firstHalftimeOdds3rdOU']['over'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeOdds3rdOU']['over'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="1st Half Under">1st Half Under</div>
                                <div class="score" :data-value="(match.betState['firstHalftimeOdds3rdOU']['under'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeOdds3rdOU']['under'] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        1st Half Draw No Bet
                    </div>
                    <div class="bets mt-2 py-3" data-value="Winner">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                                <div class="score" :data-value="(match.betState['matchOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeDrawNoBetOdds12']['o1'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="match.match.awayTeam">{{ match.match.awayTeam }}</div>
                                <div class="score" :data-value="(match.betState['matchOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeDrawNoBetOdds12']['o2'] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group" v-if="match.betState['toQualifyOdds12']['o2'] > 0">
                    <div class="bets-header">
                        Which team to qualify?
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="Which team to qualify?" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                                <div class="score" :data-value="(match.betState['toQualifyOdds12']['o1'] / 100).toFixed(2)">{{ (match.betState['toQualifyOdds12']['o1'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="match.match.awayTeam">{{ match.match.awayTeam }}</div>
                                <div class="score" :data-value="(match.betState['toQualifyOdds12']['o2'] / 100).toFixed(2)">{{ (match.betState['toQualifyOdds12']['o2'] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="bet-group">
                    <div class="bets-header">
                        Handicap {{ match.betState['handicapOdds102']['handicap']['home'] }}:{{ match.betState['handicapOdds102']['handicap']['away'] }}
                    </div>
                    <div class="bets mt-2 py-3" data-value="Handicap 0:1">
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
                        Double Chance
                    </div>
                    <div class="bets mt-2 py-3" data-value="Double Chance">
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
                        Over/Under {{(match.betState['matchOdds3rdOU']['threshold'] / 10).toFixed(1)}}
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="Over/Under 3.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Over">Over</div>
                                <div class="score" :data-value="(match.betState['matchOdds3rdOU']['over'] / 100).toFixed(2)">{{ (match.betState['matchOdds3rdOU']['over'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Under">Under</div>
                                <div class="score" :data-value="(match.betState['matchOdds3rdOU']['under'] / 100).toFixed(2)">{{ (match.betState['matchOdds3rdOU']['under'] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        1st Half Over/Under {{(match.betState['firstHalftimeOddsOU']['threshold'] / 10).toFixed(1)}}
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="1st Half Over/Under 1.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="1st Half Over">1st Half Over</div>
                                <div class="score" :data-value="(match.betState['firstHalftimeOddsOU']['over'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeOddsOU']['over'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="1st Half Under">1st Half Under</div>
                                <div class="score" :data-value="(match.betState['firstHalftimeOddsOU']['under'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeOddsOU']['under'] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Draw No Bet
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="Draw No Bet" style="display: flex; justify-content: space-between; align-items: center;">
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
                <div class="bet-group">
                    <div class="bets-header">
                        Total Goals
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="Total Goals" style="display: flex; justify-content: space-between; align-items: center;">
                                <div class="bet" @click="setWinnerBet" style="width: 25%;">
                                    <div class="name" data-value="0-1">0-1</div>
                                    <div class="score" :data-value="(match.betState['totalsOdds']['odds'][0][1] / 100).toFixed(2)">{{ (match.betState['totalsOdds']['odds'][0][1]  / 100).toFixed(2) }}</div>
                                </div>
                                <div class="bet" @click="setWinnerBet" style="width: 25%;">
                                    <div class="name" data-value="2-3">2-3</div>
                                    <div class="score" :data-value="(match.betState['totalsOdds']['odds'][1][1] / 100).toFixed(2)">{{ (match.betState['totalsOdds']['odds'][1][1]  / 100).toFixed(2) }}</div>
                                </div>
                                <div class="bet" @click="setWinnerBet" style="width: 25%;">
                                    <div class="name" data-value="4-5">4-5</div>
                                    <div class="score" :data-value="(match.betState['totalsOdds']['odds'][2][1] / 100).toFixed(2)">{{ (match.betState['totalsOdds']['odds'][2][1]  / 100).toFixed(2) }}</div>
                                </div>
                                <div class="bet" @click="setWinnerBet" style="width: 25%;">
                                    <div class="name" data-value="6+">6+</div>
                                    <div class="score" :data-value="(match.betState['totalsOdds']['odds'][3][1] / 100).toFixed(2)">{{ (match.betState['totalsOdds']['odds'][3][1]  / 100).toFixed(2) }}</div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        1st Half Next Goal
                    </div>
                    <div class="bets mt-2 py-3" data-value="1st Half Next Goal">
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                            <div class="score" :data-value="(match.betState['firstHalftimeNextGoalOdds102']['o1'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeNextGoalOdds102']['o1'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" data-value="Draw">Draw</div>
                            <div class="score" :data-value="(match.betState['firstHalftimeNextGoalOdds102']['o0'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeNextGoalOdds102']['o0'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.awayTeam">{{ match.match.awayTeam }}</div>
                            <div class="score" :data-value="(match.betState['firstHalftimeNextGoalOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeNextGoalOdds102']['o2'] / 100).toFixed(2) }}</div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Away Over/Under {{(match.betState['totalsAwayTeamOddsOU']['threshold'] / 10).toFixed(1)}}
                    </div>
                    <div class="bets mt-2 py-3">
                        <div :data-value="`Away Over/Under ${(match.betState['totalsAwayTeamOddsOU']['threshold'] / 10).toFixed(1)}`" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Over Away">Over Away</div>
                                <div class="score" :data-value="(match.betState['totalsAwayTeamOddsOU']['over'] / 100).toFixed(2)">{{ (match.betState['totalsAwayTeamOddsOU']['over'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Under Away">Under Away</div>
                                <div class="score" :data-value="(match.betState['totalsAwayTeamOddsOU']['under'] / 100).toFixed(2)">{{ (match.betState['totalsAwayTeamOddsOU']['under'] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Winner And Both To Score
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="Winner And Both To Score" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.homeTeam} Yes`">{{ match.match.homeTeam }} Yes</div>
                                <div class="score" :data-value="(match.betState['matchWinnerAndBothToScoreOdds']['odds'][0][1] / 100).toFixed(2)">{{ (match.betState['matchWinnerAndBothToScoreOdds']['odds'][0][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.homeTeam} No`">{{ match.match.homeTeam }} No</div>
                                <div class="score" :data-value="(match.betState['matchWinnerAndBothToScoreOdds']['odds'][1][1] / 100).toFixed(2)">{{ (match.betState['matchWinnerAndBothToScoreOdds']['odds'][1][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                        <div data-value="Winner And Both To Score" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Draw Yes">Draw Yes</div>
                                <div class="score" :data-value="(match.betState['matchWinnerAndBothToScoreOdds']['odds'][2][1] / 100).toFixed(2)">{{ (match.betState['matchWinnerAndBothToScoreOdds']['odds'][2][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Draw No">Draw No</div>
                                <div class="score" :data-value="(match.betState['matchWinnerAndBothToScoreOdds']['odds'][3][1] / 100).toFixed(2)">{{ (match.betState['matchWinnerAndBothToScoreOdds']['odds'][3][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                        <div data-value="Winner And Both To Score" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.awayTeam} Yes`">{{ match.match.awayTeam }} Yes</div>
                                <div class="score" :data-value="(match.betState['matchWinnerAndBothToScoreOdds']['odds'][4][1] / 100).toFixed(2)">{{ (match.betState['matchWinnerAndBothToScoreOdds']['odds'][4][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.awayTeam} No`">{{ match.match.awayTeam }} No</div>
                                <div class="score" :data-value="(match.betState['matchWinnerAndBothToScoreOdds']['odds'][5][1] / 100).toFixed(2)">{{ (match.betState['matchWinnerAndBothToScoreOdds']['odds'][5][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Winner And Over/Under 2.5
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="Winner And Over/Under 2.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.homeTeam} Over`">{{ match.match.homeTeam }} Over</div>
                                <div class="score" :data-value="(match.betState['matchOdds2ndOU102']['odds'][0][1] / 100).toFixed(2)">{{ (match.betState['matchOdds2ndOU102']['odds'][0][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.homeTeam} Under`">{{ match.match.homeTeam }} Under</div>
                                <div class="score" :data-value="(match.betState['matchOdds2ndOU102']['odds'][1][1] / 100).toFixed(2)">{{ (match.betState['matchOdds2ndOU102']['odds'][1][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                        <div data-value="Winner And Over/Under 2.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Draw Over">Draw Over</div>
                                <div class="score" :data-value="(match.betState['matchOdds2ndOU102']['odds'][2][1] / 100).toFixed(2)">{{ (match.betState['matchOdds2ndOU102']['odds'][2][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Draw Under">Draw Under</div>
                                <div class="score" :data-value="(match.betState['matchOdds2ndOU102']['odds'][3][1] / 100).toFixed(2)">{{ (match.betState['matchOdds2ndOU102']['odds'][3][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                        <div data-value="Winner And Over/Under 2.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.awayTeam} Over`">{{ match.match.awayTeam }} Over</div>
                                <div class="score" :data-value="(match.betState['matchOdds2ndOU102']['odds'][4][1] / 100).toFixed(2)">{{ (match.betState['matchOdds2ndOU102']['odds'][4][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.awayTeam} Under`">{{ match.match.awayTeam }} Under</div>
                                <div class="score" :data-value="(match.betState['matchOdds2ndOU102']['odds'][5][1] / 100).toFixed(2)">{{ (match.betState['matchOdds2ndOU102']['odds'][5][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Winner And Over/Under 4.5
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="Away Over/Under 4.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.homeTeam} Over`">{{ match.match.homeTeam }} Over</div>
                                <div class="score" :data-value="(match.betState['matchOdds4thOU102']['odds'][4][1] / 100).toFixed(2)">{{ (match.betState['matchOdds4thOU102']['odds'][4][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.homeTeam} Under`">{{ match.match.homeTeam }} Under</div>
                                <div class="score" :data-value="(match.betState['matchOdds4thOU102']['odds'][5][1] / 100).toFixed(2)">{{ (match.betState['matchOdds4thOU102']['odds'][5][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                        <div data-value="Away Over/Under 4.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Draw Over">Draw Over</div>
                                <div class="score" :data-value="(match.betState['matchOdds4thOU102']['odds'][0][1] / 100).toFixed(2)">{{ (match.betState['matchOdds4thOU102']['odds'][0][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Draw Under">Draw Under</div>
                                <div class="score" :data-value="(match.betState['matchOdds4thOU102']['odds'][1][1] / 100).toFixed(2)">{{ (match.betState['matchOdds4thOU102']['odds'][1][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                        <div data-value="Away Over/Under 4.5" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.awayTeam} Over`">{{ match.match.awayTeam }} Over</div>
                                <div class="score" :data-value="(match.betState['matchOdds4thOU102']['odds'][2][1] / 100).toFixed(2)">{{ (match.betState['matchOdds4thOU102']['odds'][2][1] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" :data-value="`${match.match.awayTeam} Under`">{{ match.match.awayTeam }} Under</div>
                                <div class="score" :data-value="(match.betState['matchOdds4thOU102']['odds'][3][1] / 100).toFixed(2)">{{ (match.betState['matchOdds4thOU102']['odds'][3][1] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Halftime/Fulltime
                    </div>
                    <div class="bets mt-2 py-3">
                        <div class="row" style="padding: 0px; margin: 0px;">
                            <div  data-value="Halftime/Fulltime" class="col-md-4" style="padding: 0px; margin: 0px;">
                                <div class="bet" @click="setWinnerBet">
                                    <div class="name" :data-value="`${match.match.homeTeam} / ${match.match.homeTeam}`">1/1</div>
                                    <div class="score" :data-value="(match.betState['matchOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['halftimeFulltimeOdds']['odds'][8][1] / 100).toFixed(2) }}</div>
                                </div>
                            </div>
                            <div  data-value="Halftime/Fulltime" class="col-md-4" style="padding: 0px; margin: 0px;">
                                <div class="bet" @click="setWinnerBet">
                                    <div class="name" :data-value="`${match.match.homeTeam} / Draw`">1/0</div>
                                    <div class="score" :data-value="(match.betState['matchOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['halftimeFulltimeOdds']['odds'][0][1] / 100).toFixed(2) }}</div>
                                </div>
                            </div>
                            <div  data-value="Halftime/Fulltime" class="col-md-4" style="padding: 0px; margin: 0px;">
                                <div class="bet" @click="setWinnerBet">
                                    <div class="name" :data-value="`${match.match.homeTeam} / ${match.match.awayTeam}`">1/2</div>
                                    <div class="score" :data-value="(match.betState['matchOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['halftimeFulltimeOdds']['odds'][1][1] / 100).toFixed(2) }}</div>
                                </div>
                            </div>
                            <div  data-value="Halftime/Fulltime" class="col-md-4" style="padding: 0px; margin: 0px;">
                                <div class="bet" @click="setWinnerBet">
                                    <div class="name" :data-value="`Draw / ${match.match.homeTeam}`">0/1</div>
                                    <div class="score" :data-value="(match.betState['matchOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['halftimeFulltimeOdds']['odds'][2][1] / 100).toFixed(2) }}</div>
                                </div>
                            </div>
                            <div  data-value="Halftime/Fulltime" class="col-md-4" style="padding: 0px; margin: 0px;">
                                <div class="bet" @click="setWinnerBet">
                                    <div class="name" :data-value="`Draw / Draw`">0/0</div>
                                    <div class="score" :data-value="(match.betState['matchOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['halftimeFulltimeOdds']['odds'][3][1] / 100).toFixed(2) }}</div>
                                </div>
                            </div>
                            <div  data-value="Halftime/Fulltime" class="col-md-4" style="padding: 0px; margin: 0px;">
                                <div class="bet" @click="setWinnerBet">
                                    <div class="name" :data-value="`Draw / ${match.match.awayTeam}`">0/2</div>
                                    <div class="score" :data-value="(match.betState['matchOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['halftimeFulltimeOdds']['odds'][4][1] / 100).toFixed(2) }}</div>
                                </div>
                            </div>
                            <div  data-value="Halftime/Fulltime" class="col-md-4" style="padding: 0px; margin: 0px;">
                                <div class="bet" @click="setWinnerBet">
                                    <div class="name" :data-value="`${match.match.awayTeam} / ${match.match.homeTeam}`">2/1</div>
                                    <div class="score" :data-value="(match.betState['matchOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['halftimeFulltimeOdds']['odds'][5][1] / 100).toFixed(2) }}</div>
                                </div>
                            </div>
                            <div  data-value="Halftime/Fulltime" class="col-md-4" style="padding: 0px; margin: 0px;">
                                <div class="bet" @click="setWinnerBet">
                                    <div class="name" :data-value="`${match.match.awayTeam} / Draw`">2/0</div>
                                    <div class="score" :data-value="(match.betState['matchOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['halftimeFulltimeOdds']['odds'][6][1] / 100).toFixed(2) }}</div>
                                </div>
                            </div>
                            <div  data-value="Halftime/Fulltime" class="col-md-4" style="padding: 0px; margin: 0px;">
                                <div class="bet" @click="setWinnerBet">
                                    <div class="name" :data-value="`${match.match.awayTeam} / ${match.match.awayTeam}`">2/2</div>
                                    <div class="score" :data-value="(match.betState['matchOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['halftimeFulltimeOdds']['odds'][7][1] / 100).toFixed(2) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Over/Under {{(match.betState['matchOdds4thOU']['threshold'] / 10).toFixed(1)}}
                    </div>
                    <div class="bets mt-2 py-3" data-value="Winner">
                        <div :data-value="`Over/Under ${(match.betState['matchOdds4thOU']['threshold'] / 10).toFixed(1)}`" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Over">Over</div>
                                <div class="score" :data-value="(match.betState['matchOdds4thOU']['over'] / 100).toFixed(2)">{{ (match.betState['matchOdds4thOU']['over'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Under">Under</div>
                                <div class="score" :data-value="(match.betState['matchOdds4thOU']['under'] / 100).toFixed(2)">{{ (match.betState['matchOdds4thOU']['under'] / 100).toFixed(2) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        Handicap {{ match.betState['handicapOdds3rd102']['handicap']['home'] }}:{{ match.betState['handicapOdds3rd102']['handicap']['away'] }}
                    </div>
                    <div :data-value="`Handicap ${match.betState['handicapOdds3rd102']['handicap']['home']}:${ match.betState['handicapOdds3rd102']['handicap']['away']}`" class="bets mt-2 py-3" data-value="Winner">
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                            <div class="score" :data-value="(match.betState['handicapOdds3rd102']['BASE']['o1'] / 100).toFixed(2)">{{ (match.betState['handicapOdds3rd102']['BASE']['o1'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" data-value="Draw">Draw</div>
                            <div class="score" :data-value="(match.betState['handicapOdds3rd102']['BASE']['o0'] / 100).toFixed(2)">{{ (match.betState['handicapOdds3rd102']['BASE']['o0'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.awayTeam">{{ match.match.awayTeam }}</div>
                            <div class="score" :data-value="(match.betState['handicapOdds3rd102']['BASE']['o2'] / 100).toFixed(2)">{{ (match.betState['handicapOdds3rd102']['BASE']['o2'] / 100).toFixed(2) }}</div>
                        </div>
                    </div>
                </div>
                <div class="bet-group" v-if="match.betState['handicapOdds5th102']['handicap']['home'] > -1">
                    <div class="bets-header">
                        Handicap {{ match.betState['handicapOdds5th102']['handicap']['home'] }}:{{ match.betState['handicapOdds5th102']['handicap']['away'] }}
                    </div>
                    <div class="bets mt-2 py-3">
                        <div :data-value="`Handicap ${match.betState['handicapOdds5th102']['handicap']['home']}:${match.betState['handicapOdds5th102']['handicap']['away']}`" class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                            <div class="score" :data-value="(match.betState['handicapOdds5th102']['BASE']['o1'] / 100).toFixed(2)">{{ (match.betState['handicapOdds5th102']['BASE']['o1'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" data-value="Draw">Draw</div>
                            <div class="score" :data-value="(match.betState['handicapOdds5th102']['BASE']['o0'] / 100).toFixed(2)">{{ (match.betState['handicapOdds5th102']['BASE']['o0'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="`${match.match.awayTeam}`">{{ match.match.awayTeam }}</div>
                            <div class="score" :data-value="(match.betState['handicapOdds5th102']['BASE']['o2'] / 100).toFixed(2)">{{ (match.betState['handicapOdds5th102']['BASE']['o2'] / 100).toFixed(2) }}</div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        1st Half Double Chance
                    </div>
                    <div class="bets mt-2 py-3" data-value="1st Half Double Chance">
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.homeTeam">{{ match.match.homeTeam }}</div>
                            <div class="score" :data-value="(match.betState['firstHalftimeDoubleChanceOdds102']['o1'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeDoubleChanceOdds102']['o1'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" data-value="Draw">Draw</div>
                            <div class="score" :data-value="(match.betState['firstHalftimeDoubleChanceOdds102']['o0'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeDoubleChanceOdds102']['o0'] / 100).toFixed(2) }}</div>
                        </div>
                        <div class="bet" @click="setWinnerBet">
                            <div class="name" :data-value="match.match.awayTeam">{{ match.match.awayTeam }}</div>
                            <div class="score" :data-value="(match.betState['firstHalftimeDoubleChanceOdds102']['o2'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeDoubleChanceOdds102']['o2'] / 100).toFixed(2) }}</div>
                        </div>
                    </div>
                </div>
                <div class="bet-group">
                    <div class="bets-header">
                        1st Half Both Teams To Score
                    </div>
                    <div class="bets mt-2 py-3">
                        <div data-value="1st Half Both Teams To Score" style="display: flex; justify-content: space-between; align-items: center;">
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="Yes">Yes</div>
                                <div class="score" :data-value="(match.betState['firstHalftimeBothToScoreOddsYN']['yes'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeBothToScoreOddsYN']['yes'] / 100).toFixed(2) }}</div>
                            </div>
                            <div class="bet" @click="setWinnerBet" style="width: 50%;">
                                <div class="name" data-value="No">No</div>
                                <div class="score" :data-value="(match.betState['firstHalftimeBothToScoreOddsYN']['no'] / 100).toFixed(2)">{{ (match.betState['firstHalftimeBothToScoreOddsYN']['no'] / 100).toFixed(2) }}</div>
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