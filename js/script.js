console.log('Ciao vuejs!');


const {createApp} = Vue;

createApp({
  data() {
    return {
      email: '',
      mumberOfEmails: 10,
      arrayOfEmails: []
    }
  },
  methods: {
    getApi() {
      for(let i = 0; i < this.mumberOfEmails; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( generatedEmail => {

          this.email = generatedEmail.data.response;
          this.arrayOfEmails.push(this.email);

        })
      }
    }
  },
  mounted() {
    console.log("Mounted 'email list'");
    this.getApi();
  }
}).mount("#app");

