const app = new Vue(
    {
        el: '#app',
        data: {
            emails: [],
        },
        created(){
            this.getEmailsRandom();
        },
        methods: {
            getEmailsRandom: function(){
                axis.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    this.emails.push("response.data.response")
                })
            }
        },
    }
);