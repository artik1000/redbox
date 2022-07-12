<template>
    <div class="input-wrapper">
        <label :for="input.name" class="label">
            {{input.label}}
        </label>
     <select class="select" :name="input.name" v-model="modelValue" @change="changeOption" required>
        <option class="option" disabled value="">0+</option>
        <option
                v-for="option in options"
                :key="option.id"
                :value="option.title"
        >
            {{ option.title }}
        </option>
     </select>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'my-select',
        props:{
            modelValue: [String,Number],
            input: {
                type: Object,
                required: {
                    type: Boolean,
                    default: true
                },
            }
        },
        data () {
            return{
                options: []
            }
        },
        methods: {
            changeOption (event) {
                this.$emit('update:modelValue', event.target.value)
            },
            async getRating () {
                try {
                    //setTimeout ( async ()=>{
                    // },1000)
                    const response = await axios.get('http://testwork.rdbx24.ru/api/',{
                    });
                    console.log(response.data)
                    this.options = response.data.result;
                } catch (e){
                    alert('Ошибка')
                } finally {
                }
            },
        },
        mounted (){
            this.getRating ();
        }
    }
</script>
<style scoped>
    .input-wrapper{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .label{
        font-weight: 600;
        font-size: 1rem;
        line-height: 20px;
    }
    .select{
        margin-top: 0.51%;
        border: 1px solid #CDB1FB;
        border-radius: 4px;
        height: 6.1vh;
        padding-left: 25px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    }
    .option{
        color: #34495E;
        font-size: 15px;
        font-weight: bold;
    }
</style>