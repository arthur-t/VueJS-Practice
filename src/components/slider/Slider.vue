<template>
    <div @swheel="handleWheel">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                index: 0,
                slides: [],
                direction: null,
                bgc: {
                    backgroundColor:'red'
                }
            }
        },
        mounted() {
            this.bgc.backgroundColor="red"
            this.slides=this.$children
            this.slides.forEach((slide,i)=> {
                slide.index=i
            })
        },
        computed: {
            slidesCount : function() { return this.slides.length }
        },
        methods: {
            handleWheel: function (e) {
                let delta = null;
                let direction = false;


                delta=e.deltaY

                if ( delta !== null ) {
                    direction = delta < 0 ? 'up' : 'down';
                }

                if(direction==='up'){
                    this.prev()
                }
                if(direction==='down'){
                    this.next()
                }
            },
            next() {
                this.direction='right';
                if(this.index < this.slidesCount-1){


                    this.index++


                }

            },
            prev() {
                this.direction='left';
                if(this.index >0){

                    this.index--

                }

            }
        },
        created: function () {
            window.addEventListener('wheel', this.handleWheel);
        },
        destroyed: function () {
            window.removeEventListener('wheel', this.handleWheel);
        }

    }

</script>

<style >

</style>
