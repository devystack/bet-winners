<template>
    <div class="right-area">
        <div class="bet-slip">
            <div class="row m-0 p-0">
                <div class="col-md-6 m-0 p-0">
                    <a class="m-button m-2 active" style="font-size: 14px; ">
                        Simple/Multiple
                    </a>
                </div>
                <div class="col-md-6 m-0 p-0">
                    <a class="m-button m-2" style="font-size: 14px; ">
                        SYSTEM
                    </a>
                </div>
            </div>
            <div class="selected-bets p-1" style="background-color: #fff; min-height: 150px;">
                <div v-if="bets.length > 0" class="mt-4 p-1" v-for="(b, i) in bets" :key="i" @click="removeMatch(i)">
                    <div class="" style="display: flex; align-items: center; justify-content: space-between;">
                        <div>{{ b.title }}</div>
                        <i class="fa-solid fa-trash-can icon"></i>
                    </div>
                    <div class="bet" style="display: flex; align-items: center;" v-for="(s, index) in b.bet" :key="index" @click="removeBet( b.title, index)">
                        <i class="fa-solid fa-trash-can icon"></i>
                        <div  class="px-2 " style="display: flex; align-items: center; justify-content: space-between; width: 100%">
                            <div>
                                <div>
                                    {{ s.name }}
                                </div>
                                <div>
                                    {{ s.type }}
                                </div>
                            </div>
                            <div>{{ s.mark }}</div>
                        </div>
                    </div>                
                </div>
                
            </div>
            <div class="mt-4" style="display: flex; align-items: center;">
                <div class="px-4 rest-bet py-5" @click="resetBets">
                    Reset
                </div>
                <div style="width: 100%">
                    <div  class="px-2 " style="display: flex; align-items: center; justify-content: space-between;">
                        <div>
                            <p>Stake:</p>
                            <p>Tax:</p>
                            <p>Total stake:</p>
                            <p>Stake per bet:</p>
                            <p>Number of bets:</p>
                            <p>Max Winning:</p>
                        </div>
                        <div>
                            <p> {{ stake.toFixed(2) }}</p>
                            <p> {{ tax.toFixed(2) }}</p>
                            <p>{{ (stake + tax).toFixed(2) }}</p>
                            <p> {{ ((stake + tax) * 0.125).toFixed(2) }}</p>
                            <p>{{ betNumber }}</p>
                            <p> {{ ((stake + tax) * 1.125 * betNumber).toFixed(2) }}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="mt-3" style="display:flex; justify-content: center; align-items: center;">
                <a class="py-2 px-3" style="background-color: #fff; border: 1px solid #000; border-radius: 5px;" @click="decreaseStake">-</a>
                <!-- <input type="text" id="PayingAmount" class="mx-2 py-2" placeholder="" :value="parseFloat(stake).toFixed(2)" style="text-align: right; width: 65%;"> -->
                <!-- <input type="text" id="PayingAmount" class="mx-2 py-2"  @change="setStake($event.target.value)" :value="stake.toFixed(2)" style="text-align: right; width: 65%;"> -->
                <input type="text" id="PayingAmount" class="mx-2 py-2"  @change="setStake" :value="stake.toFixed(2)" style="text-align: right; width: 65%;">
                <a  class="py-2 px-3" style="background-color: #fff; border: 1px solid #000; border-radius: 5px;" @click="stake = stake + 5">+</a>
            </div>
            <div class="mt-3 mb-2" style="width: 100%; display:flex; justify-content: center; align-items: center;">
                <a class="py-2 px-3 place-bet" style="">Place Bet</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'RightPanel',
        data() {
            return {
                bets: this.$store.state.bets.matches,
                stake: 5,
                tax: 0,
                betNumber: 0
            }
        },
        created() {
            this.setCalculation()
            console.log(this.$store.state.bets)
        },
        watch: {
            '$store.state.bets.matches': {
                immediate: true,
                deep:true,
                handler() {
                // update locally relevant data
                    // this.$store.state.bets.matches.map((m) => {

                    // })
                    this.betNumber = 0
                    for (var i =0; i < this.$store.state.bets.matches.length; i++) {
                        this.betNumber = this.betNumber + this.$store.state.bets.matches[i].bet.length
                    }
                }
            }
		},
        methods: {
            resetBets() {
                this.bets = []
            },
            decreaseStake() { 
                if (this.stake > 5) {
                    this.stake = this.stake - 5
                } else
                    return
            },
            setCalculation() {
                this.betNumber = this.bets.length
            },
            setStake(event) {
                if (parseFloat(event.target.value) > 0 && !isNaN(parseFloat(event.target.value))) {
                    this.stake = Math.floor(parseFloat(event.target.value) * 100) / 100 
                } else {
                    console.log(event.target.value)
                    this.stake = parseFloat(5)
                    event.target.value = this.stake.toFixed(2)
                }
            },
            clickBet(event) {
                console.log('pppppp')
                console.log(event)
                event.target.classList.toggle('active')
            },
            removeBet(matchTitle, index) {
                let bet = this.bets.find(({title}) => title = matchTitle)
                if(bet.bet.length < 2)
                {
                    let index = this.bets.findIndex(({title}) => title = matchTitle)
                    this.bets.splice(index, 1)
                } else {
                    bet.bet.splice(index, 1)
                }
            },
            removeMatch(index) {
                this.bets.splice(index, 1)
            }

        }
     }
</script>
<style scoped lang="scss">
    .place-bet {
        background-color: #007219;
        border: 1px solid #000;
        color: #fff;
        border-radius: 5px;
        width: 100%;
        text-align: center;
        &:hover {
            color: #000;
        }
    }
    .rest-bet {
        background: #d69309;
        color: #f5f5f5;
        height: 100%;
        &:hover {
            color: #000;
        }
    }
    .bet {
        border: 1px solid #ddd;
        padding: 5px;
        margin: 5px 0px 5px 0px;
    }
    .icon {
        cursor: pointer;
    }
    .active {
        background: #f69f16 !important;
        color: #fff !important;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-bottom: none;
    }
    .m-button {
        color: #000;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3%;
        &:hover {
            background: #f69f16;
            color: #fff;
        }
    }
    .right-area {
        width: 20%;
        float: left;
        height: calc(100% - 200px);
        overflow-y: auto;
        min-width: 260px;
        .bet-slip {
            background-color: #ddd;
            border-radius: 5px;
            padding: 5px;
        }
    }

</style>