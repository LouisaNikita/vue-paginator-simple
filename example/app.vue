<template lang="html">
    <paginator :pageCount="pageCount" @togglePage="togglePage($event)"></paginator>
</template>

<script>
    import paginator from '../src';

    export default {
        components: {
            'paginator': paginator,
        },
        data(){
            return{
                pageCount: 25
            }
        },
        created(){
            console.log(paginator);
        },
        methods:{
            togglePage(index){
                console.log(index);
            }
        }
    }
</script>
