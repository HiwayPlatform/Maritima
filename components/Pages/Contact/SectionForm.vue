<template>
  <section class="contact-form">
    <div class="container">

      <div class="contact-form-title">
        <h1>{{$t('contact.title')}}</h1>
      </div>

      <b-form v-if="!emailSent" id="contact">
        <b-row>
          <b-col sm="6">
            <div class="form-group">
              <label for="first_name">{{$t('contact.firstName')}}</label>
              <b-form-input type="text"
                            id="first_name"
                            :placeholder="$t('contact.typeHere')"
                            v-model="form.firstName"
                            required/>
            </div>
          </b-col>
          <b-col sm="6">
            <div class="form-group">
              <label for="last_name">{{$t('contact.lastName')}}</label>
              <b-form-input type="text"
                            id="last_name"
                            :placeholder="$t('contact.typeHere')"
                            v-model="form.lastName"
                            required/>
            </div>
          </b-col>
        </b-row>

        <div class="form-group">
          <label for="email">{{$t('contact.email')}}</label>
          <b-form-input type="email"
                        id="last_name"
                        :placeholder="$t('contact.typeHere')"
                        v-model="form.email"
                        required/>
        </div>

        <div class="form-group">
          <label for="phone">{{$t('contact.phone')}}</label>
          <b-form-input type="text"
                        id="phone"
                        :placeholder="$t('contact.typeHere')"
                        v-model="form.phone"
                        required/>
        </div>


        <label>{{$t('contact.message')}}</label>
        <b-form-textarea
          :placeholder="$t('contact.agree')"
          rows="6"
          max-rows="10"
          v-model="form.message">
        </b-form-textarea>

        <!--<b-form-checkbox-->
        <!--id="accept"-->
        <!--name="accept"-->
        <!--value="accepted"-->
        <!--unchecked-value="not_accepted"-->
        <!--v-model="form.status">-->
        <!--Yes I agree on the term and service, read them here.-->
        <!--</b-form-checkbox>-->

        <div class="view-more">
          <a href="#" class="button-extend-large-round" @click="sendEmail">{{$t('contact.send')}}</a>
        </div>

      </b-form>
      <template v-else>
        <div class="mt-5 text-center">
          <h3>{{ $t('contact.thankyou') }}</h3>
          <h3>{{ $t('contact.reachOut') }}</h3>
        </div>
      </template>
    </div>

    <div class="contact-form-back"></div>
  </section>
</template>

<script>
  export default {
    name: "app-page-contact-form",
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          status: 'accepted'
        },
        emailSent: false
      }
    },
    methods: {
      async sendEmail() {
        const data = this.form;
        const result = await this.$axios.$post('/contact', data);
        if (result.data === true) {
          this.emailSent = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
