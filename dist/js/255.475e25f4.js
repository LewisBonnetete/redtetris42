"use strict";(globalThis["webpackChunkstronger_tetris"]=globalThis["webpackChunkstronger_tetris"]||[]).push([[255],{7255:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Z});var a=r(9835),o=r(6970),s=r(1957);const l={key:0,style:{width:"65vw",height:"65vh"}},n=(0,a._)("div",{class:"row justify-center"},[(0,a._)("h2",{class:"text-primary"},[(0,a.Uk)(" Welcome to a Stronger "),(0,a._)("span",{class:"text-secondary"},"Tetris")])],-1),i={class:"q-ma-sm row justify-center"},m={class:"col",style:{"max-width":"300px"}},u={class:"q-ma-sm row justify-center"},c={class:"col",style:{"max-width":"300px"}},d={class:"row justify-center"},p=(0,a._)("div",{class:"q-ma-md text-primary"}," Rooms: ",-1),y=(0,a.Uk)("playing"),h=(0,a.Uk)("joinable"),g=(0,a._)("div",null,null,-1);function w(e,t,r,w,_,f){const k=(0,a.up)("q-input"),v=(0,a.up)("q-btn"),N=(0,a.up)("q-item-label"),j=(0,a.up)("q-item-section"),q=(0,a.up)("q-item"),E=(0,a.up)("q-list"),b=(0,a.up)("q-circular-progress"),x=(0,a.up)("q-page"),$=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)(x,{class:"flex flex-center"},{default:(0,a.w5)((()=>[_.connecting?((0,a.wg)(),(0,a.j4)(b,{key:1,indeterminate:"",size:"100px",color:"primary",class:"q-ma-md"})):((0,a.wg)(),(0,a.iD)("div",l,[n,(0,a._)("div",i,[(0,a._)("div",m,[(0,a.Wm)(k,{class:"q-ma-sm row justify-center",color:"primary",square:"",outlined:"",modelValue:_.playerName,"onUpdate:modelValue":t[0]||(t[0]=e=>_.playerName=e),label:"Player Name"},null,8,["modelValue"]),(0,a.wy)((0,a._)("div",{class:"q-ma-sm row justify-center text-accent"},(0,o.zw)(`Player name already taken try: ${f.playerError}`),513),[[s.F8,f.playerError]])])]),(0,a._)("div",u,[(0,a._)("div",c,[(0,a.Wm)(k,{class:"q-ma-sm row justify-center",color:"primary",square:"",outlined:"",modelValue:_.roomName,"onUpdate:modelValue":t[1]||(t[1]=e=>_.roomName=e),label:"Room Name"},null,8,["modelValue"]),(0,a.wy)((0,a._)("div",{class:"q-ma-sm row justify-center text-accent"},(0,o.zw)(`Room name already taken try: ${f.roomError}`),513),[[s.F8,f.roomError]])])]),(0,a._)("div",d,[(0,a.Wm)(v,{disabled:f.isEmpty,flat:"",onClick:f.joinRoom,class:"text-primary",label:"GO"},null,8,["disabled","onClick"])]),p,(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(f.rooms,((e,t)=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(q,{key:t,onClick:e=>_.roomName=t,clickable:""},{default:(0,a.w5)((()=>[(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(N,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(t),1)])),_:2},1024),(0,a.Wm)(N,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.master),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[e.game_on?((0,a.wg)(),(0,a.j4)(N,{key:0,caption:"",class:"text-red"},{default:(0,a.w5)((()=>[y])),_:1})):((0,a.wg)(),(0,a.j4)(N,{key:1,caption:"",class:"text-green"},{default:(0,a.w5)((()=>[h])),_:1}))])),_:2},1024),(0,a.Wm)(j,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.players_number)+" players",1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[$]]))),128))])),_:1}),g]))])),_:1})}const _={name:"MenuPage",data(){return{connecting:!1,playerName:"",roomName:""}},created(){this.$socket.emit("room_info"),window.addEventListener("keydown",(e=>{["Enter"].includes(e.code)&&(e.preventDefault(),this.keyEvent(e))}),!1)},beforeUnmount(){window.removeEventListener("keydown",this.keyEvent)},computed:{room(){return this.$store.getters["game/getRoomName"]},rooms(){return this.$store.getters["game/getRoomState"]},player(){return this.$store.getters["game/getPlayerName"]},isInGame(){return this.room.length>0&&this.player.length>0},isEmpty(){return 0===this.playerName.length||0===this.roomName.length},playerError(){return this.$store.getters["error/getPlayerError"]},roomError(){return this.$store.getters["error/getRoomError"]}},methods:{keyEvent(e){"Enter"===e.code&&this.joinRoom()},stringsAreClear(e,t){return!e.includes("#")&&!t.includes("#")},joinRoom(){if(this.stringsAreClear(this.playerName,this.roomName)||this.$router.push("notFound"),0===this.room.length&&this.stringsAreClear(this.playerName,this.roomName)){const e={player_name:this.playerName,room_name:this.roomName};e.player_name&&e.room_name&&e.player_name.length>0&&e.room_name.length>0&&this.$socket.emit("join_room",e)}}},watch:{isInGame:{immediate:!0,handler(e){if(e)if(this.stringsAreClear(this.player,this.room)){const e=`${this.room}[${this.player}]`;this.$router.push(e)}else this.$router.push("notFound")}}}};var f=r(1639),k=r(9885),v=r(6611),N=r(4455),j=r(3246),q=r(490),E=r(1233),b=r(3115),x=r(3302),$=r(1136),C=r(9984),W=r.n(C);const R=(0,f.Z)(_,[["render",w]]),Z=R;W()(_,"components",{QPage:k.Z,QInput:v.Z,QBtn:N.Z,QList:j.Z,QItem:q.Z,QItemSection:E.Z,QItemLabel:b.Z,QCircularProgress:x.Z}),W()(_,"directives",{Ripple:$.Z})}}]);