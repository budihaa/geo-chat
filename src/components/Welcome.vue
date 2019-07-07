<template>
    <div class="welcome center-align">
        <div class="row">
            <div class="col s12 m12">
                <form @submit.prevent="enterChat">
                    <div class="card">
                        <div class="card-content">
                            <h2 class="teal-text">Welcome</h2>
                            <div class="divider"></div>
                            <div class="row row-input">
                                <div class="input-field">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="name" type="text" class="validate" v-model="name" />
                                    <label for="name">Enter your name</label>
                                    <span v-if="warning" class="helper-text red-text">{{ warning }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="card-action">
                            <button
                                class="btn waves-effect waves-light"
                                type="submit"
                                name="action"
                            >enter chat</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Welcome',
    data: () => ({
        name: null,
        warning: null,
    }),
    methods: {
        enterChat() {
            if (!this.name) {
                this.warning = 'Please enter your name first';
                return false;
            }

            return this.$router.push({
                name: 'Chat',
                params: { name: this.name },
            });
        },
    },
};
</script>

<style>
.welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}

.welcome .card {
    min-width: 350px;
}

.welcome .row-input {
    padding-top: 35px;
}
</style>
