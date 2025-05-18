<script setup>
    import { ref } from 'vue';
    const props = defineProps({
        label:{
            type: String
        },
        value:{
            type: [String, Number]
        },
        percentage:{
            type: [Number],
            default: 0,
            validator: value => value >= 0 && value <= 100
        },
        color:{
            type: [String],
            default: '#111'
        },
    })
</script>

<template>
    <div class="card-box">
        <div class="card-descp">
            <h6>
                {{ props.label }}
            </h6>
            <div class="bottom-area">
                <p class="percentage" :style="{ backgroundColor: props.color }">
                    {{ props.percentage }}%
                </p>
                <p>
                    {{ props.value }}
                </p>
            </div>
            <div class="lower-area">
                <div class="percentage-bar">
                    <div class="percentage-bar-completed" :style="{width: `${props.percentage}%`, backgroundColor: props.color}">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>