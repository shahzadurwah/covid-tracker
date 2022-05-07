<template>
    <div class="main">
        <h2>{{text}}</h2>
        <span><p>{{dataDate}}</p></span>
    </div>
</template>

<script>
export default {
    props:['text', 'dataDate'],
   
    
    
}
</script>

<style scoped>
*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}
 .main{
     text-align: center;
     margin-top: 2rem;
 }
 h2{
     font-size: 40px;
 }
 span p{
     display: block;
     padding-bottom: 5px;
     font-size: 30px;
 }
</style>