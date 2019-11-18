<template>
    <span>{{ field.value.substr(0,20) }}</span>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
    mounted() {
    	this.field.value = this.field.value.substr(0, 30) + "..."
    }
}
</script>
