<template>
    <Loading v-if="loading"></Loading>

    <div v-else>
        <div v-show="list.length > 0">
            <div class="divider"><span>Live</span></div>
            <div class="match-group bordered-top" v-for="l in list">
                <div class="match-header">
                    <div class="title">{{ l.name }}</div>
                    <div class="menu"></div>
                    <div class="clearfix"></div>
                </div>
                <div class="match-content">
                    <div class="event-list">
                        <div class="event" v-for="(h, i) in l.matches" :key="i" style="font-size: 12px;">
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
                                <!-- <MatchDetailHighlight :match="h"/> -->
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import moment from 'moment';
    import Loading from '@/components/Loading.vue'

    export default {
        name: "InPlay",
        components: {Loading},
        data() {
            return {
                list: [],
                statusEventDetail: {},

                loading: true,

            }
        },
        created() {
            this.getLiveMatches()
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
            getLiveMatches() {
                let data = {}
                this.loading = true
                this.$api.request.getLiveMatches(data, (res =>{
                    console.log(res.data.list)
                	if (res.data){
                        this.list = res.data.list
                        this.loading = false
                	}
                }), err => {
                	console.log(err)
                })
            }
        }

    }
</script>
<style scoped lang="scss">
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
        width: 15%;
        float: left;
        min-width: 200px;
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
    .content {
        float: left;
        padding: 0 10px 10px;
        overflow-y: auto;
        height: calc(100% - 200px);
        width: calc(65% - 40px);
        min-width: 780px;
        overflow-x: hidden;
        &::after {
            content: " ";
            display: block;
            height: 0;
            clear: both;
        }
    }
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