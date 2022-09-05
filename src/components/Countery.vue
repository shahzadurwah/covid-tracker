<template>
  
    <div class="row justify-content-center mt-4">
      <div  class="col-sm-12 col-md-6 text-center">
        <select v-model="selected" @change="onchange">
          <option value="0">Select Countery</option>
          <option v-for="co in counteries" :key="co.ID" :value="co.ID">
            {{ co.Country }}
          </option>
        </select>
      </div>
    </div>
  
</template>

<script>
export default {
  name: "Countery",
  data() {
    return {
      selected: 0,
    };
  },
  props: ["counteries"],

  methods:{
      onchange(){
          const coun=this.counteries.find((item)=> item.ID===this.selected);
          this.$emit('get-countery',coun);
         
      }
  }
};
</script>

