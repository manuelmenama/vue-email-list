console.log('Ciao vuejs!');


const {createApp} = Vue;

createApp({
  data() {
    return {
      email: '',
      mumberOfEmails: 10,
      arrayOfEmails: [],
      isLoading: true
    }
  },
  methods: {
    getApi() {
      this.isLoading = true;
      for(let i = 0; i < this.mumberOfEmails; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( generatedEmail => {

          this.email = generatedEmail.data.response;
          this.arrayOfEmails.push(this.email);

        })
      }
      this.isLoading = false;
    }
  },
  mounted() {
    console.log("Mounted 'email list'");
    this.getApi();
  }
}).mount("#app");

