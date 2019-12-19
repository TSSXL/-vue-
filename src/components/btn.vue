<template>
    <div class="con">
        <span>    READ MORE</span>
    </div>
</template>

<script>
    export default {
        name: "btn"
    }
</script>

<style lang="scss" scoped>
.con{
    margin: 30px auto;
    span{
        padding: 12px 25px;
        background-color: black;
        color:white;
        transition: all 1s;
        cursor: pointer;
        font-size: 14px;
    }
    span:hover{
        background-color: #F7BC30;
    }
}
</style>