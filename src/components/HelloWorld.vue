<script>
export default {
    data() {
        return {
            test: ''
        }
    },
    mounted() {
        this.test = this.$t('body');
    }
};
</script>

<template>
    <div>{{ test }}</div>
</template>

<i18n>
{
    "en-us": {
        "body": "<p>Greetings user{'@'}domain.com</p>"
    }
}
</i18n>