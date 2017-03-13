<template lang="html">
    <paginator :pageCount="pageCount" :initPage="initPage" @togglePage="togglePage($event)"></paginator>
</template>

<script>
    import paginator from '../src';

    export default {
        components: {
            'paginator': paginator,
        },
        data(){
            return{
                pageCount: 25,
                initPage: 1
            };
        },
        created(){
            this.initPage = 3;
            console.log(paginator);
        },
        methods:{
            togglePage(index){
                console.log(index);
            }
        }
    }
</script>
