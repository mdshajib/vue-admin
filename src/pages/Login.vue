<template>
    <v-app id="">
         <v-container fluid>
            <validation-observer
                ref="observer"
                v-slot="{ invalid }"
            >
                <form @submit.prevent="submit">
                <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required|max:10"
                >
                    <v-text-field
                    v-model="name"
                    :counter="10"
                    :error-messages="errors"
                    label="Name"
                    required
                    ></v-text-field>
                </validation-provider>
                <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                >
                    <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="E-mail"
                    required
                    ></v-text-field>
                </validation-provider>

                <v-btn
                    class="mr-4"
                    type="submit"
                    :disabled="invalid"
                >
                    submit
                </v-btn>
                <v-btn @click="clear">
                    clear
                </v-btn>
                </form>
            </validation-observer>
        </v-container>
    </v-app>
</template>

<script>
  import { required, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
       name: 'Login',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      name: '',
      email: ''
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.$refs.observer.reset()
      },
    },
  }
</script>
