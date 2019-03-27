<template>
    <div id="moneyCom">
        <select>
            <option>{{com}}</option>
        </select>
    </div>
</template>
<script>
export default {
    name:'moneyCom',
    data() {
        return {
            com:'无'
        }
    },
}
</script>
<style scoped>
    #moneyCom{
        display: inline;
    }
    
</style>
