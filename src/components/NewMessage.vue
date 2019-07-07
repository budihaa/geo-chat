<template>
    <form @submit.prevent="sendMessage" autocomplete="off">
        <label for>Press enter to send message</label>
        <input type="text" v-model="message" />
        <p class="red-text" v-if="warning">{{ warning }}</p>
    </form>
</template>

<script>
import db from '@/firebase/init';

export default {
    name: 'NewMessage',
    props: ['name'],
    data: () => ({
        message: null,
        warning: null,
    }),
    methods: {
        sendMessage() {
            if (!this.message) {
                this.warning = 'You must enter a message in order to send one';
                return;
            }

            db.collection('messages')
                .add({
                    name: this.name,
                    content: this.message,
                    timestamp: Date.now(),
                })
                .catch(err => console.error(err));

            this.warning = null;
            this.message = null;
        },
    },
};
</script>

<style>
</style>
