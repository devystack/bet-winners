<template>
    <Loading v-if="loading"></Loading>

    <div v-else class="content">
        <div class="match">
            <div class="results-header"><div class="match-header"><select id="betradarSportTypes" class="sporttype"><option value="1">Football</option><option value="2">Basketball</option><option value="3">Baseball</option><option value="4">IceHockey</option><option value="5">Tennis</option><option value="6">Handball</option><option value="10">Boxing</option><option value="16">American Football</option><option value="12">Rugby</option><option value="19">Snooker</option><option value="22">Darts</option><option value="23">Volleyball</option><option value="29">Futsal</option></select><select id="dates"><option value="2023-01-12">Today</option><option value="2023-01-11">Yesterday</option><option value="2023-01-10">Tue 10.01.2023</option><option value="2023-01-09">Mon 09.01.2023</option><option value="2023-01-08">Sun 08.01.2023</option><option value="2023-01-07">Sat 07.01.2023</option><option value="2023-01-06">Fri 06.01.2023</option><option value="2023-01-05">Thu 05.01.2023</option><option value="2023-01-04">Wed 04.01.2023</option><option value="2023-01-03">Tue 03.01.2023</option><option value="2023-01-02">Mon 02.01.2023</option><option value="2023-01-01">Sun 01.01.2023</option></select></div></div>
            <div class="match-body">
                <div v-for="l in list">
                    <div class="league-title">
                        {{ l.name }} - {{ l.matches[0]['BASE']['brCategory']['name'] }}
                    </div>
                    <div class="finished-match-item" v-for="m  in l.matches">
                        <div>{{ formatDate(m.startDateTime) }}</div>
                        <div>{{ m['BASE']['homeTeamName'] }}</div>
                        <div>{{ m['BASE']['awayTeamName'] }}</div>
                        <div>Interim: {{  m['BASE']['matchResults']['interimResults'] }}</div>
                        <div>Final: {{ m['BASE']['matchResults']['fullTimeResult'] }}</div>
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
        name: "Result",
        components: {Loading},
        data() {
            return {
                list: [],
                statusEventDetail: {},

                loading: true,

            }
        },
        created() {
            this.getResultData()
        },
        methods: {
            formatDate(date) {
                let temp = new Date(date)
                let europe_offset = 1 * 60 * 60 * 1000
                let d = new Date(temp.getTime() - temp.getTimezoneOffset() * 60 * 1000 - europe_offset )
                var check = moment(d, 'YYYY-MM-DD HH:mm')
                var day = check.format('DD')
                var month = check.format('MM')
                return `${check}`
            },

            getResultData() {
                let data = {}
                this.loading = true
                this.$api.request.getResultData(data, (res =>{
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
    .content {
        float: left;
        padding: 0 10px 10px;
        overflow-y: auto;
        height: calc(100% - 200px);
        width: 100%;

        // .match {
        //     display: block;
        //     width: 92%;
        //     height: 100%;
        // }
        .match-header {
            color: #000;
            padding: 10px;
            margin: 3px;
            background: linear-gradient(180deg,#a6aab5 0,#38393c 99%);
        }
    }
    .match-body {
        width: 100%;
        float: left;
        overflow: auto;
        height: calc(100% - 64px);
        .league-title {
            color: #fff;
            background-color: #38393c;
            padding: 10px 10px 10px 50px;
        }
    }
    .finished-match-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        font-size: 12px;

    }
</style>