# vue-paginator-simple
A simple paginator/pagination for vue

## Installation

```
npm install vue-paginator-simple --save-dev
```
## Props
pageCount //总页数

[initPage]  //初始页,选填(场景举例: URL直接指向第三页)

## Event
@togglePage  //切换页面,本组件会返回当前点击的页数

## Usage 

```
<template lang="html">
    <paginator :pageCount="pageCount" :initPage="initPage" @togglePage="togglePage($event)"></paginator>
</template>

<script>
    import vuePaginator from 'vue-paginator-simple';

    export default {
        data(){
            return {
                pageCount: 25,  //总页数
                initPage: 1  //初始页[optional],可为null
            };
        },
        components:{
            'paginator': vuePaginator,
        },
        methods:{
            togglePage(indexPage){
                console.log(indexPage);
            },
        }
    }
</script>

<style lang="css">
    @import 'vue-paginator-simple/dist/vue-paginator-simple.css';
</style>
```
