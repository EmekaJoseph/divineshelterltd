<template>
    <div class="search-field " :class="{ 'form-floating': floatLabel }">
        <span class=" bi bi-search icon"> </span>
        <input type="text" class="form-control w-100 search-box" :id :class="className" :value="modelValue"
            @input="emitValue" :placeholder :aria-label="placeholder" />
    </div>
</template>

<script setup lang="ts">

const id = ref<string>('');
onMounted(() => {
    id.value = `input-${Math.random().toString(36).slice(2, 10)}`;
});

defineProps({
    modelValue: String,
    className: { type: String, default: '' },
    placeholder: { type: String, default: 'search..' },
    floatLabel: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue'])

function emitValue(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
}



</script>

<style scoped>
.search-field {
    position: relative;
    display: flex;
    align-items: center;
}

.search-box {
    padding-left: 2.6rem;
    width: 300px !important;
}

.icon {
    position: absolute;
    left: 1rem;
    color: #b3b9bf;
}
</style>