<template>
    <div    class="date__row__main"
            :class="{'date__row__add':input.id > 0}"
    >
        <div class="date__remove__event" v-if="input.id > 0" @click="$emit('remove', input)">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="#351767"/>
                <path d="M9.16663 9.16666L20.6571 20.6571M20.9857 9.16666L9.4952 20.6571" stroke="white" stroke-width="2"/>
            </svg>
        </div>
            <my-input
                    v-model="input.beginDate"
                    placeholder="Название"
                    :input="input.beginDate"
                    :label="'Дата начала'"
                    class="date__col"
            />
            <my-input
                    v-model="input.beginTime"
                    placeholder="Название"
                    :input="input.beginTime"
                    :label="'Время начала'"
                    class="date__col"
            />
            <div class="date__row__barrier">
            </div>
            <my-input
                    v-model="input.endDate"
                    placeholder="Название"
                    :input="input.endDate"
                    :label="'Дата окончания'"
                    class="date__col"
            />
            <my-input
                    v-model="input.endTime"
                    placeholder="Название"
                    :input="input.endTime"
                    :label="'Время окончания'"
                    class="date__col"
            />
    </div>
</template>
<script>
export default {
    name: 'event-row',
    props:{
        modelValue: [String,Number],
        input: {
            type: Object,
            required: {
                type: Boolean,
                default: true
            },
        },
        index: Number
    },
    methods:{
        updateInput (event) {
            this.$emit('update:modelValue',event.target.value)
        },
    }
}
</script>
<style lang="scss" scoped>
.date__row__main{
    position: relative;
    display: grid;
    grid-template-columns: 22% 22% 6% 23% 23%;
    margin-top: 6vh;
    .date__row__barrier{
        width: 100% !important;
        height: 2px;
        background: #CDB1FB;
        border-radius: 5px;
        margin-top: 5.5vh;
        margin-left: -1.5%;
        margin-right: 0.5% !important;
    }
}
.date__row__add{
    position: relative;
    display: grid;
    grid-template-columns: 22% 22% 4% 23% 23%;
    margin-top: 6vh;
    background-color: #FAF7FE;
    padding: 2%;
    border-radius: 4px;
    box-sizing: border-box;
    .date__row__barrier{
        width: 100% !important;
        height: 2px;
        background: #CDB1FB;
        border-radius: 5px;
        margin-top: 5.5vh;
    }
}
.date__row__main:not(:last-child){
    gap: 1%;
}
.date__remove__event{
    width: min-content;
    height: min-content;
    position: absolute;
    mix-blend-mode:darken;
    right: -1%;
    top: -10%;
}
</style>