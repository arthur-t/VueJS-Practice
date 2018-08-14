<template>
    <transition name="swipe-right" @enter="enter">
        <div v-if="visible" >
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
          bodyColor: {type: String, default:'green'}
        },
        data() {
            return{
                index: 0

            }
        },
        methods: {
            enter: function (el, done) {
               //$(el).hide().slideDown(500,done);


            },
            leave: function (el, done) {
                $(el).show().slideUp(500,done);

            }
        },
        computed: {
            transition(){
                return 'swipe-'+ this.$parent.direction
            },
            visible() {
                return this.index === this.$parent.index

            }
        },

    }
</script>

<style>



    .swipe-right-enter-active{
        animation: swipeRightIn 0.5s ease-out;

    }

    .swipe-right-leave-active{
        animation: swipeRightOut 0.5s ease-out;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;


    }

    @keyframes swipeRightIn{
        from { transform: translateX(120%); }
        to { transform: translateX(0); }
    }
    @keyframes swipeRightOut{
        from { transform: translateX(0); }
        to { transform: translateX(-120%); }
    }


    .swipe-left-enter-active{
        animation: swipeLeftIn 2s cubic-bezier(0.1, 0.7, 1.0, 0.1);;


    }

    .swipe-left-leave-active{
        animation: swipeLeftOut 2s cubic-bezier(0.1, 0.7, 1.0, 0.1);;

        position: absolute;



    }

    @keyframes swipeLeftIn{
        from { transform: translateX(-120%); }
        to { transform: translateX(0); }
    }
    @keyframes swipeLeftOut{
        from { transform: translateX(0); }
        to { transform: translateX(120%); }
    }
</style>
