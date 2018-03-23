<template>
    <div>{{ display }}</div>
    <p>{{msg}}</p>
</template>
<script>
    import moment from 'moment';

    export default {
        data() {
            return {
                time: Date.now()
            }
        },
        props: ['msg', 'onUpdate'],
        computed: {
            display() {
                this.onUpdate()
                return moment(this.time).format("HH:mm:ss");
            }
        },
        created() {
            setInterval(() => {
                this.time = Date.now();
            }, 1000);
        }
    }
</script>
