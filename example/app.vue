<template lang="html">
    <paginator :pageCount="pageCount" :initPage="initPage" :pagePath="pagePath" :host="host" @togglePage="togglePage($event)"></paginator>
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
                initPage: 1,
                pagePath: '/',
            };
        },
        computed:{
            host(){
                return window.location.origin;
            }
        },
        created(){
            this.initPage = Number(this.getParam('page') ? this.getParam('page') : 1);
            console.log(paginator);
        },
        methods:{
            togglePage(index){
                console.log(index);
            },
            getParam(name) {
                var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
                var r = window.location.search.substr(1).match(reg);
                if (r != null) return (r[2]);
                return null;
            }
        }
    };
</script>
