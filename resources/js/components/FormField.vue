<template>
    <default-field :field="field" :errors="errors">
        <template slot="field" >
            <div class="emojitextarea">
                <div class="wrapper">
                    <textarea
                        :id="field.name"
                        type="text"
                        rows="8"
                        class="w-full form-control form-input form-input-bordered py-3 h-auto"
                        :class="errorClasses"
                        :placeholder="field.name"
                        v-model="value"
                    />
                    <button class="emojibutton" @click.prevent="toogleDialogEmoji"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"/>
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                    </svg></button>
                </div>
                <div :hidden="dialogHidden" >
                    <VEmojiPicker class="emojipicker" :pack="emojisNative" :showSearch="false" @select="onSelectEmoji"/>
                </div>
            </div>
        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova';
import VEmojiPicker from 'v-emoji-picker';
import packData from 'v-emoji-picker/data/emojis.json';

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    data() {
        return {
        value: "",
        dialogHidden: true
    }
    },

    components: {
    VEmojiPicker,
    },

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || '')
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value
        },

        toogleDialogEmoji() {
             this.dialogHidden = !this.dialogHidden;
        },
        onSelectEmoji(dataEmoji) {
            this.value += dataEmoji.emoji;
        },
    },
    computed: {
        emojisNative() {
            return packData;
        }
    }
}
</script>
<style lang="css">
svg {
  fill: #b1c6d0;
}
.emojitextarea {
    position: relative;
}
.wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}
.emojibutton {
  position: absolute;
  z-index: 10;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
}
.emojipicker {
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 510px;

}
</style>
