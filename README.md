[![](https://img.shields.io/npm/dw/localeval.svg)]
# vue-paginator-simple
A simple paginator/pagination for vue

## demo images
当页数小于999(包括999)页时

![image](https://github.com/LouisaNikita/resource/blob/master/vue-paginator-simple-1.png)

当页数大于999页时

![image](https://github.com/LouisaNikita/resource/blob/master/vue-paginator-simple-2.png)

首页或尾页disabled

![image](https://github.com/LouisaNikita/resource/blob/master/vue-paginator-simple-4.png)

10页之内显示

![image](https://github.com/LouisaNikita/resource/blob/master/vue-paginator-simple-3.png)

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

## Construction
```
.
├── _config.yml
├── dist
│   ├── vue-paginator-simple.css
│   └── vue-paginator-simple.js
├── example
│   ├── app.vue
│   ├── index.html
│   └── index.js
├── package.json
├── postcss.config.js
├── README.md
├── src
│   ├── index.js
│   └── paginator.vue
├── webpack.config.js
└── webpack.example.config.js
```


