<template>
    <label class="label-photo"> Фотографии </label>
    <div class="photos-row">
        <div style="display: flex; flex-direction: column; width: 126px;">
            <input
                    @input="onFileChange"
                    type="file"
                    class="input__photo"
                    name="photo"
                    required
            />
            <div>
                <p class="photo__description">Главная фотография <br>(обложка мероприятия)</p>
            </div>
        </div>
        <div v-if="url" style="display: flex; flex-direction: column; width: 126px; margin-left: 10px;">
            <div class="close" @click="$emit('remove', url)">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#351767"/>
                    <path d="M9.16663 9.16666L20.6571 20.6571M20.9857 9.16666L9.4952 20.6571" stroke="white" stroke-width="2"/>
                </svg>
            </div>
            <img
                    :src="url"
                    class="image__upload"
            />
            <div>
                <p class="photo__description">Главная фотография <br>(обложка мероприятия)</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'my-photo',
        props:{
            modelValue: [String,Number],
            url: String
        },
        methods: {
            onFileChange(e) {
                const file = e.target.files[0];
                let url = URL.createObjectURL(file);
                this.$emit('update:modelValue',url)

            }
        },
        computed: {

        }
    }
</script>
<style>
    .input__photo{
        color: transparent;
        width: 126px;
        height: 126px;
    }
    .input__photo::file-selector-button {
        color: transparent;
        width: 126px;
        height: 126px;
        border: 4px solid #CDB1FB;
        padding: .2em .4em;
        border-radius: .2em;
        background-color: #F8F8FE;
        transition: 1s;
        background-image: url("../../assets/Photo.svg");
        background-size: 40%;
        background-position-x: 50%;
        background-position-y: 50%;
        background-repeat: no-repeat;
    }
    .input__photo::file-selector-button:hover{
        border: 4px solid #9B63F8;
    }
    .photos-row{
        display: flex;
        flex-direction: row;
    }
    .image__upload{
        width: 126px;
        height: 126px;
        border-radius: .2em;
    }
    .image__upload:hover::after{
        content: attr(data-description);
        position: absolute;
        top: 100%;
        background-color: red;
    }
    .photo__description{
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        color: #211536;
        opacity: 0.7;
        text-align: left;
    }
    .label-photo{
        font-weight: 600;
        font-size: 1rem;
        line-height: 20px;
        margin-top: 40px !important;
        margin-bottom: 40px !important;
    }

    .close{
        width: min-content;
        height: min-content;
        position: absolute;
        margin-left:110px;
        margin-top: -10px;
    }
</style>