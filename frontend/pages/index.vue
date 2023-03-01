<template>
  <div>
    <Loading v-if="loading"></Loading>
    <div v-else style="display: flex; justify-content: space-between;">
        <div class="left-menu">
            <div class="menu-header">Sports Betting</div>
            <div class="menu-content menu-content-l bordered-top">
                <ul>
                    <li v-for="m in menus" :key="m.id">
                        <a  class="f-menu" :class="m.id == sportId ? 'active': ''">
                            <div class="toggle-sport" @click="showSecondItem(m.id)">
                                <font-awesome-icon v-if="statusSecondItem[m.id]" icon="fa-solid fa-caret-down" />
                                <font-awesome-icon v-else icon="fa-solid fa-caret-right" />
                            </div>
                            <div class="filter-sport" @click="setMenu(m.id)">
                                <img class="sport-icon" :src="require('@/assets/images/sports/' + m.icon)">
                                {{m.name}}
                            </div>
                        </a>
                        <ul v-show="statusSecondItem[m.id]">
                            <li v-for="(s, i) in m.leagueList" :key="i" class="s-menu">
                                <a >
                                    <div class="toggle-sport" @click="showThirdItem(`${s.betradarSportId}-${i}`)" :class="categoryId == s.betradarCategoryId? 'active': ''">
                                        <font-awesome-icon v-if="statusThirdItem[`${s.betradarSportId}-${i}`]" icon="fa-solid fa-caret-down" />
                                        <font-awesome-icon v-else icon="fa-solid fa-caret-right" />
                                    </div>
                                    <div class="filter-sport" style="color:#fff" @click="setSecondMenu(m.id, s.betradarCategoryId)" :class="categoryId == s.betradarCategoryId? 'active': ''">
                                        {{s.name}}
                                    </div>
                                </a>
                                <ul v-show="statusThirdItem[`${s.betradarSportId}-${i}`]">
                                    <li v-for="t in s.leagueList" class="t-menu" @click="setThirdMenu(m.id, s.betradarCategoryId, t.name)" :class="selectedLeague == t.name? 'active': ''">
                                        <a>{{ t.name }}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div class="main-content mx-2" id="main-content">
            <div v-show="highlights.length > 0">
                <div class="divider"><span>Highlights</span></div>
                <div class="match-group bordered-top">
                    <div class="match-header">
                        <div class="title">Highlights</div>
                        <div class="menu"></div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="match-content">
                        <div class="event-list">
                            <div class="event" v-for="(h, i) in highlights" :key="i" style="font-size: 12px;">
                                <div class="event-top" style=" display: flex; align-items: center; justify-content: space-around;">
                                    <div class="date p-2" style="border-right: 1px solid #c1c1c1;">
                                        {{ formatDate(h.europeanStartTime) }}
                                    </div>
                                    <div class="time p-2" style="border-right: 1px solid #c1c1c1; color: #007219; font-weight: 600;">
                                        {{ formatTime(h.europeanStartTime) }}
                                    </div>
                                    <div class="event-title p-2" style="border-right: 1px solid #c1c1c1; width: 240px;">
                                        {{ h.match.homeTeam }}-{{ h.match.awayTeam }}
                                    </div>
                                    <div class="bet-panel p-2" style="border-right: 1px solid #c1c1c1; font-weight:bolder;">
                                        <a class="odd">
                                            <span class="ms-1" style="color: brown;">1</span>
                                            <span class="me-1">{{(h.betState['matchOdds102']['o1'] / 100).toFixed(2)}}</span>
                                        </a>
                                        <a class="odd ms-1">
                                            <span class="ms-1" style="">X</span>
                                            <span class="me-1">{{(h.betState['matchOdds102']['o0'] / 100).toFixed(2)}}</span>
                                        </a>
                                        <a class="odd ms-1">
                                            <span class="ms-1">2</span>
                                            <span class="me-1">{{(h.betState['matchOdds102']['o2'] / 100).toFixed(2)}}</span>
                                        </a>
                                    </div>
                                    <div class="bet-panel p-2" style="border-right: 1px solid #c1c1c1; font-weight:bolder; display: flex;">
                                        <p class="threshold">{{(h.betState['matchOddsOU']['threshold'] / 10).toFixed(1)}}</p>
                                        <a class="odd ms-1">
                                            <span class="ms-1" style="">O</span>
                                            <span class="me-1">{{(h.betState['matchOddsOU']['over'] / 100).toFixed(2)}}</span>
                                        </a>
                                        <a class="odd ms-1">
                                            <span class="ms-1" style="color: brown;">U</span>
                                            <span class="me-1">{{(h.betState['matchOddsOU']['under'] / 100).toFixed(2)}}</span>
                                        </a>
                                    </div>
                                    <div class="p-2" style="font-weight:bolder;">
                                        <a class="odd ms-1" style="width: 25px; justify-content: center; align-items: center;"
                                        @click="showEventDetail(`highlight-${i}`)">
                                        <span class="ms-1" v-if="statusEventDetail[`highlight-${i}`]">-</span>
                                        <span class="ms-1" v-else>+</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="match-details" v-show="statusEventDetail[`highlight-${i}`]">
                                    <MatchDetailHighlight :match="h"/>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
    
            <div v-show="lives.length > 0">
                <div class="divider"><span>Live</span></div>
                <div class="match-group bordered-top">
                    <div class="match-header">
                        <div class="title">Live</div>
                        <div class="menu"></div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="match-content">
                        <div class="event-list">
                            <div class="event" v-for="(h, i) in lives" :key="i" style="font-size: 12px;">
                                <div class="event-top" style=" display: flex; align-items: center; justify-content: space-around;">
                                    <div class="date p-2" style="border-right: 1px solid #c1c1c1;">
                                        90'
                                    </div>
                                    <div class="live-score p-2" style="border-right: 1px solid #c1c1c1;">
                                        {{ h.scoreCache.history[0][0].home }} : {{ h.scoreCache.history[0][0].away }}
                                    </div>
                                    <div class="event-title p-2" style="border-right: 1px solid #c1c1c1; width: 240px;">
                                        {{ h.match.homeTeam }}-{{ h.match.awayTeam }}
                                    </div>
                                    <div class="bet-panel p-2" style="border-right: 1px solid #c1c1c1; font-weight:bolder;">
                                        <a class="odd">
                                            <span class="ms-1" style="color: brown;">1</span>
                                            <span class="me-1">{{(h.betState['matchOdds102']['o1'] / 100).toFixed(2)}}</span>
                                        </a>
                                        <a class="odd ms-1">
                                            <span class="ms-1" style="">X</span>
                                            <span class="me-1">{{(h.betState['matchOdds102']['o0'] / 100).toFixed(2)}}</span>
                                        </a>
                                        <a class="odd ms-1">
                                            <span class="ms-1">2</span>
                                            <span class="me-1">{{(h.betState['matchOdds102']['o2'] / 100).toFixed(2)}}</span>
                                        </a>
                                    </div>
                                    <div class="bet-panel p-2" style="border-right: 1px solid #c1c1c1; font-weight:bolder; display: flex;">
                                        <p class="threshold">{{(h.betState['matchOddsOU']['threshold'] / 10).toFixed(1)}}</p>
                                        <a class="odd ms-1">
                                            <span class="ms-1" style="">O</span>
                                            <span class="me-1">{{(h.betState['matchOddsOU']['over'] / 100).toFixed(2)}}</span>
                                        </a>
                                        <a class="odd ms-1">
                                            <span class="ms-1" style="color: brown;">U</span>
                                            <span class="me-1">{{(h.betState['matchOddsOU']['under'] / 100).toFixed(2)}}</span>
                                        </a>
                                    </div>
                                    <div class="p-2" style="font-weight:bolder;">
                                        <a class="odd ms-1" style="width: 25px; justify-content: center; align-items: center;"
                                        @click="showEventDetail(`live-${i}`)">
                                        <span class="ms-1" v-if="statusEventDetail[`live-${i}`]">-</span>
                                        <span class="ms-1" v-else>+</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="match-details" v-show="statusEventDetail[`live-${i}`]">
                                    <MatchDetailLive :match="h"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div v-show="soon.length > 0">
                <div class="divider"><span>Soon</span></div>
                <div class="match-group bordered-top">
                    <div class="match-header">
                        <div class="title">Soon</div>
                        <div class="menu"></div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="match-content">
                        <div class="event-list">
                            <div class="event" v-for="(h, i) in soon" :key="i" style="font-size: 12px;">
                                <div class="event-top" style=" display: flex; align-items: center; justify-content: space-around;">
                                    <div class="date p-2" style="border-right: 1px solid #c1c1c1;">
                                        90'
                                    </div>
                                    <div class="live-score p-2" style="border-right: 1px solid #c1c1c1;">
                                        {{ h.scoreCache.history[0][0].home }} : {{ h.scoreCache.history[0][0].away }}
                                    </div>
                                    <div class="event-title p-2" style="border-right: 1px solid #c1c1c1; width: 240px;">
                                        {{ h.match.homeTeam }}-{{ h.match.awayTeam }}
                                    </div>
                                    <div class="bet-panel p-2" style="border-right: 1px solid #c1c1c1; font-weight:bolder;">
                                        <a class="odd">
                                            <span class="ms-1" style="color: brown;">1</span>
                                            <span class="me-1">{{(h.betState['matchOdds102']['o1'] / 100).toFixed(2)}}</span>
                                        </a>
                                        <a class="odd ms-1">
                                            <span class="ms-1" style="">X</span>
                                            <span class="me-1">{{(h.betState['matchOdds102']['o0'] / 100).toFixed(2)}}</span>
                                        </a>
                                        <a class="odd ms-1">
                                            <span class="ms-1">2</span>
                                            <span class="me-1">{{(h.betState['matchOdds102']['o2'] / 100).toFixed(2)}}</span>
                                        </a>
                                    </div>
                                    <div class="bet-panel p-2" style="border-right: 1px solid #c1c1c1; font-weight:bolder; display: flex;">
                                        <p class="threshold">{{(h.betState['matchOddsOU']['threshold'] / 10).toFixed(1)}}</p>
                                        <a class="odd ms-1">
                                            <span class="ms-1" style="">O</span>
                                            <span class="me-1">{{(h.betState['matchOddsOU']['over'] / 100).toFixed(2)}}</span>
                                        </a>
                                        <a class="odd ms-1">
                                            <span class="ms-1" style="color: brown;">U</span>
                                            <span class="me-1">{{(h.betState['matchOddsOU']['under'] / 100).toFixed(2)}}</span>
                                        </a>
                                    </div>
                                    <div class="p-2" style="font-weight:bolder;">
                                        <a class="odd ms-1" style="width: 25px; justify-content: center; align-items: center;"
                                        @click="showEventDetail(`live-${i}`)">
                                        <span class="ms-1" v-if="statusEventDetail[`live-${i}`]">-</span>
                                        <span class="ms-1" v-else>+</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="match-details" v-show="statusEventDetail[`live-${i}`]">
                                    <MatchDetailLive :match="h"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div v-show="odds.length > 0">
                <div class="divider"><span>Top Odds</span></div>
                <div class="match-group bordered-top">
                    <div class="match-header">
                        <div class="title">Top Odds</div>
                        <div class="menu"></div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="match-content">
                        <div class="event-list">
                            <div class="event" v-for="(h, i) in odds" :key="i" style="font-size: 12px;">
                                <div class="event-top" style=" display: flex; align-items: center; justify-content: space-around;">
                                    <div class="date p-2" style="border-right: 1px solid #c1c1c1;">
                                        {{ formatDate(h.europeanStartTime) }}
                                    </div>
                                    <div class="time p-2" style="border-right: 1px solid #c1c1c1; color: #007219; font-weight: 600;">
                                        {{ formatTime(h.europeanStartTime) }}
                                    </div>
                                    <div class="event-title p-2" style="border-right: 1px solid #c1c1c1; width: 240px;">
                                        {{ h.match.homeTeam }}-{{ h.match.awayTeam }}
                                    </div>
                                    <div class="bet-panel p-2" style="border-right: 1px solid #c1c1c1; font-weight:bolder;">
                                        <a class="odd">
                                            <span class="ms-1" style="color: brown;">1</span>
                                            <span class="me-1">{{(h.betState['matchOdds102']['o1'] / 100).toFixed(2)}}</span>
                                        </a>
                                        <a class="odd ms-1">
                                            <span class="ms-1" style="">X</span>
                                            <span class="me-1">{{(h.betState['matchOdds102']['o0'] / 100).toFixed(2)}}</span>
                                        </a>
                                        <a class="odd ms-1">
                                            <span class="ms-1">2</span>
                                            <span class="me-1">{{(h.betState['matchOdds102']['o2'] / 100).toFixed(2)}}</span>
                                        </a>
                                    </div>
                                    <div class="bet-panel p-2" style="border-right: 1px solid #c1c1c1; font-weight:bolder; display: flex;">
                                        <p class="threshold">{{(h.betState['matchOddsOU']['threshold'] / 10).toFixed(1)}}</p>
                                        <a class="odd ms-1">
                                            <span class="ms-1" style="">O</span>
                                            <span class="me-1">{{(h.betState['matchOddsOU']['over'] / 100).toFixed(2)}}</span>
                                        </a>
                                        <a class="odd ms-1">
                                            <span class="ms-1" style="color: brown;">U</span>
                                            <span class="me-1">{{(h.betState['matchOddsOU']['under'] / 100).toFixed(2)}}</span>
                                        </a>
                                    </div>
                                    <div class="p-2" style="font-weight:bolder;">
                                        <a class="odd ms-1" style="width: 25px; justify-content: center; align-items: center;"
                                        @click="showEventDetail(`odd-${i}`)">
                                        <span class="ms-1" v-if="statusEventDetail[`odd-${i}`]">-</span>
                                        <span class="ms-1" v-else>+</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="match-details" v-show="statusEventDetail[`odd-${i}`]">
                                    <MatchDetailHighlight :match="h"/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RightPanel/>
    </div>

  </div>
</template>
<script>
  import moment from 'moment';
  import constant from '@/utils/constant'
  import Loading from '@/components/Loading.vue'
  import MatchDetailHighlight from '@/components/MatchDetailHighlight.vue'
  import MatchDetailLive from '@/components/MatchDetailLive.vue'
  import RightPanel from '@/components/RightPanel.vue'

  export default {
      name: "Home",
      components: {MatchDetailHighlight, MatchDetailLive, RightPanel, Loading},
      data() {
          return {
              menus: [],
              statusSecondItem: {},
              statusThirdItem: {},

              sportId: 0,
              categoryId: -1,
              selectedLeague: '',

              highlights: [],
              statusEventDetail: {},

              lives: [],

              odds: [],

              soon: [],

              loading: true,

          }
      },
      created() {
          this.getSportsList()
          this.getSportBettingList()
      },
      mounted() {
          console.log(this.$store.state.account)
      },
      methods: {
          formatDate(date) {
              let temp = new Date(date)
              let europe_offset = 1 * 60 * 60 * 1000
              let d = new Date(temp.getTime() - temp.getTimezoneOffset() * 60 * 1000 - europe_offset )
              var check = moment(d, 'YYYY/MM/DD')
              var day = check.format('DD')
              var month = check.format('MM')
              return `${day}.${month}`
          },
          formatTime(date) {
              let temp = new Date(date)
              let europe_offset = 1 * 60 * 60 * 1000
              let d = new Date(temp.getTime() - temp.getTimezoneOffset() * 60 * 1000 - europe_offset )
              var check = moment(d, 'HH:mm')
              var hour = check.format('HH')
              var minute = check.format('mm')
              return `${hour}:${minute}`
          },
          showSecondItem(id) {
              if (this.statusSecondItem[id]) {
                  this.statusSecondItem = {}
                  this.statusThirdItem = {}
              } else {
                  this.statusSecondItem = {}
                  this.statusThirdItem = {}
                  this.statusSecondItem[id] = true;
              }
          },
          showThirdItem(index) {
              if (this.statusThirdItem[index]) {
                  this.statusThirdItem = {}
              } else {
                  this.statusThirdItem = {}
                  this.statusThirdItem[index] = true;
              }
          },
          setMenu(index) {
              this.sportId = index
              this.loading = true
              this.getSportBettingList()
          },
          setSecondMenu(sportId, categoryId) {
              this.sportId = sportId
              this.categoryId = categoryId
              this.loading = true
              this.getSportBettingList()
          },
          setThirdMenu(sportId, categoryId, league) {
              // console.log(league)
              this.sportId = sportId
              this.categoryId = categoryId
              this.selectedLeague = league
              // console.log(sportId)
              this.loading = true
              this.getSportBettingList()

          },

          showEventDetail(index) {
              if (this.statusEventDetail[index]) {
                  this.statusEventDetail = {}
              } else {
                  this.statusEventDetail = {}
                  this.statusEventDetail[index] = true;
              }
          },
          getSportsList() {
              let data = {}
              this.$api.request.getSportsList(data, (res =>{
                if (res.data){
                      res.data.list.map((m)=> {
                      // constant.demoMatches.map((m)=> {
                          let d = {}
                          d = m
                          let temp = constant.SportTypeList.find(t => t.sportTypeId == m.id)
                          d.name = temp.name
                          d.icon = temp.icon
                          d.m_icon = temp.m_icon
                          this.menus.push(d)
                      })
                }
              }), err => {
                console.log(err)
              })
          },

          getSportBettingList() {
              let data = {}
              data.sportTypeId = parseInt(this.sportId)
              data.betradarCategoryId = parseInt(this.categoryId)
              data.leagueName = this.selectedLeague

              this.$api.request.getSportBettingList(data, (res =>{
                  console.log(res.data.list.matches)
                  if (res.data){
                      let array_lives = []
                      let array_tops = []
                      let  array_odds = []
                      let array_soon = []
                      res.data.list.matches.map((m)=> {
                          if (m.betState.matchState >= 3 && m.match.willBeLive)
                              array_lives.push(m)
                          else {
                              if (m.match.isTopMatch)
                                  array_tops.push(m)
                              else {
                                  if (this.sportId == 0) 
                                      array_odds.push(m)
                                  else
                                      array_soon.push(m)
                              }
                          }
                      })
                      console.log(array_lives)
                      console.log(array_tops)
                      console.log(array_odds)
                      console.log(array_soon)

                      this.highlights = array_tops
                      this.odds = array_odds
                      this.lives = array_lives
                      this.soon = array_soon
                      this.loading = false
                  }
              }), err => {
                  console.log(err)
              })
          },
      },
  }
</script>

<style scoped lang="scss">
    .main-content {
        width: -webkit-fill-available;
        &::after {
            content: " ";
            display: block;
            height: 0;
            clear: both;
        }
    }
  .live-score {
      background-color: #38393c;
      color: #d69309;
      font-weight: 900;
  }
  .active {
      background: #d69309 !important;
  }
  .odd {
      margin: 4px, 0px, 0px, 4px;
      // margin-right: 5px;
      width: 50px;
      font-size: 13px;
      float: left;
      color: #000;
      cursor: pointer;
      background: linear-gradient(180deg,#fefefe,#dadada);
      border: 1px solid #5a5a5a;
      border-radius: 3px;
      box-shadow: inset 0 0 0 1px #f5f5f5;
      text-align: center;
      text-decoration: none;
      text-shadow: 0 1px 0 #fafafa;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .threshold {
  width: 30px;
  color: #d69309;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  .left-menu {
      width: 25%;
      min-width: 215px;
      padding-left: 5px;
      .menu-header {
          background-color: #d69309;
          padding: 12px;
          border-radius: 5px 5px 0 0;
          font-size: 17px;
          color: #f5f5f5;
          font-weight: 700;
      }
      .menu-content {
          overflow-y: auto;
          ul {
              margin: 0px;
              padding: 0px;
              li {
                  .f-menu {
                      color: #1c1c1c;
                      padding: 12px 5px;
                      font-weight: 600;
                      border-bottom: 1px solid #c1c1c1;
                      background: linear-gradient(180deg,#f1f1f1 0,#d7d7d7);
                      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f1f1f1",endColorstr="#d7d7d7",GradientType=0);
                      font-size: 15px;
                      text-decoration: none;
                      display: block;
                      outline: 0;
                  }
                  .s-menu {
                      background: unset;
                      background-color: #007219;
                      color: #f5f5f5;
                      font-weight: 600;
                      font-size: 15px;
                      text-decoration: none;
                      display: block;
                      outline: 0;
                      padding: 12px 5px;
                      border-bottom: 1px solid #c1c1c1;
                  }
                  .t-menu {
                      padding-left: 30px!important;
                      background: unset;
                      background-color: #007219;
                      color: #f5f5f5;
                      font-weight: 600;
                      border-bottom: 1px solid #c1c1c1;
                      font-size: 15px;
                      padding: 12px 5px;
                      text-decoration: none;
                      display: block;
                      outline: 0;
                      &:first-child {
                          border-top: 1px solid #c1c1c1;
                      }
                      &:last-child {
                          border-bottom: 0px solid #c1c1c1;
                      }
                  }
                  .toggle-sport{
                      float: left;
                      width: 25px;
                  }
                  .filter-sport {
                      margin-left: 15px;
                      width: calc(100% - 15px);
                  }
                  .sport-icon {
                      margin-left: auto;
                      margin-right: 7px;
                      height: 20px;
                      vertical-align: middle;
                  }
              }
          }
      }
  }
  .bordered-top {
      border-top: 10px solid #007219;
  }
//   .content {
//       float: left;
//       padding: 0 10px 10px;
//       overflow-y: auto;
//       height: calc(100% - 200px);
//       width: calc(65% - 40px);
//       min-width: 780px;
//       overflow-x: hidden;
//       &::after {
//           content: " ";
//           display: block;
//           height: 0;
//           clear: both;
//       }
//   }
  .divider {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #777;
      line-height: .1em;
      margin: 10px 0 20px;
      font-size: 19px;
  }
  .match-group {
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      margin-bottom: 40px;
      .match-header {
          position: relative;
          background-repeat: no-repeat;
          background-size: 100% auto;
          border-bottom: 0 none;
          background-image: linear-gradient(180deg,#f3f3f3 0,#ddd);
          box-shadow: 0 6px 3px -3px #777;
          .title {
              margin: 10px;
              float: left;
          }
          .menu {
              float: right;
              &::after {
                  content: " ";
                  display: block;
                  height: 0;
                  clear: both;
              }
          }
      }
      .match-content {
          margin-top: 30px;
          .event-list {
              width: 100%;
              &::after {
                  content: " ";
                  display: block;
                  height: 0;
                  clear: both;
              }
              .event {
                  border-left: none transparent;
                  border-top: 1px solid #c1c1c1;
                  border-bottom: none transparent;
                  width: 100%;
                  &:nth-child(odd) {
                      background: #efefef;
                  }
                  &:hover {
                      background: #ccc;
                  }
              }
          }
      }

  }
  .opacity0 {
      opacity: 0;
  }
</style>