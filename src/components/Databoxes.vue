<template>
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-4 border bg-info p-4">
                <h3 class="pb-2">Deathes</h3>
                <span><h5>New : {{stats.NewDeaths}}</h5></span>
                <span><h5>Total : {{stats.TotalDeaths}}</h5></span>
            </div>
            <div class="col-4 border mx-3 bg-info p-4">
                <h3 class="pb-2">Cases</h3>
                 <span><h5>New : {{stats.NewConfirmed}}</h5></span>
                <span><h5>Total : {{stats.TotalConfirmed}}</h5></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['stats'],
    methods:{
        
    }
}
</script>

<style scoped>

</style>