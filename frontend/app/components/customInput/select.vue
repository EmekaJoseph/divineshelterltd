<template>
    <vueSelect class="d-none d-md-block" append-to-body :calculate-position="templateStore.vueSelectPositioning"
        v-model="localValue" :teleport="true" :options :label :placeholder :clearable :loading :disabled :taggable>

        <template #no-options="{ search, searching, loading }">
            {{ noOptionsText }}
        </template>

        <!-- Forward #selected-option slot -->
        <template #selected-option="option">
            <slot name="selected-option" v-bind="option" />
        </template>


        <template #option="option">
            <slot name="option" v-bind="option" />
        </template>

    </vueSelect>

    <select :disabled class="form-select d-md-none" v-model="localValue">
        <option value="" disabled>{{ placeholder }}</option>
        <option v-for="option in options" :key="option[label]" :value="option">{{ option[label] }}</option>
    </select>

</template>

<script setup lang="ts">
const templateStore = useTemplateStore()

interface OptionType {
    [key: string]: any;
}


const props = defineProps({
    modelValue: {
        type: null,
        default: () => null
    },
    options: {
        type: Array as () => OptionType[],
        default: []
    },

    label: {
        type: String,
        default: 'label'
    },
    placeholder: {
        type: String,
        default: 'select'
    },
    clearable: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    taggable: {
        type: Boolean,
        default: false
    },
    noOptionsText: {
        type: String,
        default: 'There are no options available'
    },

})
const emit = defineEmits(['update:modelValue']);
const localValue = ref(props.modelValue)


watch(() => localValue.value, () => {
    emit('update:modelValue', localValue.value);

})

watch(() => props.modelValue, () => {
    if (JSON.stringify(props.modelValue) !== JSON.stringify(localValue.value)) localValue.value = props.modelValue
}, { immediate: true, deep: true })

</script>
