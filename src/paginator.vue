<template lang="html">
    <div class="pagination">
        <ul @click="page($event)">
            <li :class="{disabled: curPage == 1}" @click="prevPage" v-if="pageCount > 1">上一页</li>
            <li :class="{active: curPage == 1}"><a :href="path+'1'">1</a></li>
            <li class="ellipsis" v-show="curPage > 5 && pageCount > 10">...</li>
            <li :class="{active: curPage == index+offset}" v-for="(item,index) in middlePages">
                <a :href=path+(index+offset)>{{index+offset}}</a>
            </li>
            <li class="ellipsis" v-show="curPage < bigLimit && pageCount > 10">...</li>
            <li :class="{active: curPage == pageCount}" v-if="pageCount > 1">
                <a :href=path+pageCount>{{pageCount}}</a>
            </li>
            <li :class="{disabled: curPage == pageCount}" @click="nextPage" v-if="pageCount > 1">下一页</li>
        </ul>
    </div>
</template>

<script>
    export default {
        // props:['pageCount', 'initPage', 'pagePath'],
        props: {
            pageCount: {
                type: Number,
                default: 1
            },
            initPage: {
                type: Number,
                default: 1
            },
            pagePath: {
                type: String
            },
            host: {
                type: String
            },
            // color: {
            //     default: ''
            // },
            // borderRadius: {
            //     default: '0'
            // }
        },
        data(){
            return {
                curPage: 1,
            };
        },
        created(){
            if(this.initPage !== 1 && this.initPage){
                this.curPage = Number(this.initPage);
            }
        },
        watch:{
            initPage(val){
                this.curPage = val;
            }
        },
        computed:{
            path(){
                return this.host+this.pagePath+'?page=';
            },
            middlePages(){
                if(this.pageCount <= 2){
                    return 0;
                }else if(this.pageCount> 2 && this.pageCount <= 10){
                    return this.pageCount-2;
                }else{
                    return this.curPage > 999 ? 5 : 8;
                }
            },
            bigLimit(){
                return this.middlePages > 5 ? this.pageCount-6 : this.pageCount -3;
            },
            offset(){
                if(this.curPage <= 5){
                    return 2;
                }else if(this.curPage >= this.bigLimit){
                    return this.bigLimit-2;
                }else{
                    return this.middlePages > 5 ? this.curPage-3 : this.curPage-2;
                }
            }
        },
        methods:{
            page(e){
                let target = e.target;
                console.log('target',target,e);
                let n = target.innerText;
                console.log(Number(n));
                if(Number(n)){
                    console.log('inisde');
                    this.$emit('togglePage',Number(n));
                    this.curPage = Number(n);
                }
            },
            prevPage(){
                event.stopPropagation();
                if(this.curPage != 1){
                    this.page(this.curPage-1);
                }
            },
            nextPage(){
                event.stopPropagation();
                if(this.curPage != this.pageCount){
                    this.page(this.curPage+1);
                }
            }
        }
    };
</script>

<style lang="css" scoped>
    .pagination {
        text-align: center;
        ul {
            li {
                cursor: pointer;
                display: inline-block;
                padding: 5px 9px;
                border: 1px solid #e7e7e7;
                border-radius: 5px;
                margin-right: 12px;
                &.active {
                    background: #ee3a4a;
                    border-color: #ee3a4a;
                    a {
                        color: #fff;
                    }
                }
                &.ellipsis {
                    /*border: none;*/
                }
                &.disabled {
                    color: #a7adb9;
                }
            }
        }
        a {
            color: #333;
            text-decoration: none;
            -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
            cursor: pointer;
        }
    }
</style>
