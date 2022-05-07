<template>
 <div>
   <navbar></navbar>
   <DataTitle :text="title" :dataDate="dataData"></DataTitle>
   <Databoxes :stats="stats"></Databoxes>
   <Countery :counteries="counteries" @get-countery="getcounteryData"></Countery>
    <!-- <h1>hello Home </h1>
  <p>{{dateDate}}</p>
  <p>{{stats}}</p>-->
 
  
 </div>
</template>


<script>
import navbar from './navbar.vue'
import DataTitle from './DataTitle.vue'
import Databoxes from './Databoxes.vue'
import Countery from './Countery.vue'
export default {
  name:'Home',
  data(){
    return{
      loading:true,
      title:'Global',
      dataData:'',
      stats:{},
      counteries:[],
      loadingImage:''
    }
  },
  components:{
    navbar,
    DataTitle,
    Databoxes,
    Countery
  },
  methods:{
    getcounteryData(co){
      this.stats=co;
      this.title=co.Country;
    }
    
  },
  async mounted(){
    const res=await fetch('https://api.covid19api.com/summary');
    const  dat =await res.json();
    this.dataData=dat.Date;
    this.stats=dat.Global;
    this.counteries=dat.Countries;
    console.log(dat);
  }
}
</script>