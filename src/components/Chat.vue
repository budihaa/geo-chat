<template>
    <div class="container chat">
        <h2 class="center pink-text">Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="message" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="deep-purple-text sender">{{ message.name }}</span>
                        <div class="card-panel grey lighten-3 text-darken-3">{{ message.content }}</div>
                        <span class="grey-text time">{{ message.timestamp }}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name" />
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init';
import moment from 'moment';
import NewMessage from '@/components/NewMessage';

moment.locale('id');

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage,
    },
    data: () => ({
        messages: [],
    }),
    created() {
        // Get last chat from firebase
        const ref = db.collection('messages').orderBy('timestamp');

        // Firestore methods to watch if something has been changed in DB
        ref.onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const doc = change.doc;
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('LLLL'),
                    });
                }
            });
        });
    },
    methods: {},
};
</script>

<style>
.sender {
    font-size: 1.5em;
    font-weight: 500;
}

.chat .card-panel {
    padding: 10px;
    margin: 0 auto;
}

.message {
    max-height: 350px;
    overflow: auto;
}

.message::-webkit-scrollbar {
    width: 5px;
}

.message::-webkit-scrollbar-track {
    background: #ddd;
}

.message::-webkit-scrollbar-thumb {
    background: #aaa;
}

.message > li {
    margin: 5px auto;
}

.time {
    font-size: 0.7em;
}
</style>
