import{h as v}from"./moment.9709ab41.js";import{_ as x,o as i,f as b,c as n,w as u,v as g,a as t,F as f,r as y,t as a,p as w,d as D,i as k}from"./index.4b011148.js";const S={name:"InPlay",components:{},data(){return{list:[],statusEventDetail:{},loading:!0}},inject:["$api"],created(){this.getLiveMatches()},methods:{formatDate(s){let e=new Date(s),r=1*60*60*1e3,h=new Date(e.getTime()-e.getTimezoneOffset()*60*1e3-r);var o=v(h,"YYYY/MM/DD"),l=o.format("DD"),_=o.format("MM");return`${l}.${_}`},formatTime(s){let e=new Date(s),r=1*60*60*1e3,h=new Date(e.getTime()-e.getTimezoneOffset()*60*1e3-r);var o=v(h,"HH:mm"),l=o.format("HH"),_=o.format("mm");return`${l}:${_}`},getLiveMatches(){let s={};this.loading=!0,this.$api.getLiveMatches(s,e=>{console.log(e.data.list),e.data&&(this.list=e.data.list,this.loading=!1)},e=>{console.log(e)})}}},d=s=>(w("data-v-8d85e2e1"),s=s(),D(),s),O={key:1},T=d(()=>t("div",{class:"divider"},[t("span",null,"Live")],-1)),F={class:"match-group bordered-top"},I={class:"header"},L={class:"title"},M=d(()=>t("div",{class:"menu"},null,-1)),$=d(()=>t("div",{class:"clearfix"},null,-1)),E={class:"match-content"},B={class:"event-list"},H={class:"event-top",style:{display:"flex","align-items":"center","justify-content":"space-around"}},U={class:"date p-2",style:{"border-right":"1px solid #c1c1c1"}},Y={class:"time p-2",style:{"border-right":"1px solid #c1c1c1",color:"#007219","font-weight":"600"}},j={class:"event-title p-2",style:{"border-right":"1px solid #c1c1c1",width:"240px"}},z={class:"bet-panel p-2",style:{"border-right":"1px solid #c1c1c1","font-weight":"bolder"}},C={class:"odd"},P=d(()=>t("span",{class:"ms-1",style:{color:"brown"}},"1",-1)),N={class:"me-1"},V={class:"odd ms-1"},X=d(()=>t("span",{class:"ms-1",style:{}},"X",-1)),q={class:"me-1"},A={class:"odd ms-1"},G=d(()=>t("span",{class:"ms-1"},"2",-1)),J={class:"me-1"},K={class:"bet-panel p-2",style:{"border-right":"1px solid #c1c1c1","font-weight":"bolder",display:"flex"}},Q={class:"threshold"},R={class:"odd ms-1"},W=d(()=>t("span",{class:"ms-1",style:{}},"O",-1)),Z={class:"me-1"},tt={class:"odd ms-1"},et=d(()=>t("span",{class:"ms-1",style:{color:"brown"}},"U",-1)),st={class:"me-1"},ot={class:"p-2",style:{"font-weight":"bolder"}},at=["onClick"],ct={key:0,class:"ms-1"},it={key:1,class:"ms-1"},dt={class:"match-details"};function nt(s,e,r,h,o,l){const _=k("Loading");return o.loading?(i(),b(_,{key:0})):(i(),n("div",O,[u(t("div",null,[T,(i(!0),n(f,null,y(o.list,p=>(i(),n("div",F,[t("div",I,[t("div",L,a(p.name),1),M,$]),t("div",E,[t("div",B,[(i(!0),n(f,null,y(p.matches,(c,m)=>(i(),n("div",{class:"event",key:m,style:{"font-size":"12px"}},[t("div",H,[t("div",U,a(l.formatDate(c.europeanStartTime)),1),t("div",Y,a(l.formatTime(c.europeanStartTime)),1),t("div",j,a(c.match.homeTeam)+"-"+a(c.match.awayTeam),1),t("div",z,[t("a",C,[P,t("span",N,a((c.betState.matchOdds102.o1/100).toFixed(2)),1)]),t("a",V,[X,t("span",q,a((c.betState.matchOdds102.o0/100).toFixed(2)),1)]),t("a",A,[G,t("span",J,a((c.betState.matchOdds102.o2/100).toFixed(2)),1)])]),t("div",K,[t("p",Q,a((c.betState.matchOddsOU.threshold/10).toFixed(1)),1),t("a",R,[W,t("span",Z,a((c.betState.matchOddsOU.over/100).toFixed(2)),1)]),t("a",tt,[et,t("span",st,a((c.betState.matchOddsOU.under/100).toFixed(2)),1)])]),t("div",ot,[t("a",{class:"odd ms-1",style:{width:"25px","justify-content":"center","align-items":"center"},onClick:lt=>s.showEventDetail(`highlight-${m}`)},[o.statusEventDetail[`highlight-${m}`]?(i(),n("span",ct,"-")):(i(),n("span",it,"+"))],8,at)])]),u(t("div",dt,null,512),[[g,o.statusEventDetail[`highlight-${m}`]]])]))),128))])])]))),256))],512),[[g,o.list.length>0]])]))}const ht=x(S,[["render",nt],["__scopeId","data-v-8d85e2e1"]]);export{ht as default};
