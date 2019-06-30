<template>
    <div class="welcome center-align">
        <div class="row">
            <div class="col s12 m12">
                <div class="card">
                    <div class="card-content">
                        <h1>Chat {{ name }}</h1>
                    </div>
                    <div class="card-action">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chat',
    props: ['name'],
    data: () => ({
    }),
    methods: {
    },
};
</script>
