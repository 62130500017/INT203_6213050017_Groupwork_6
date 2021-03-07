const app = {
    data() {
        return {
            name: null,
            email: null,
            tel:null,
            location: null,
            male: null,
            female: null,
            errors: null,
        }
    },
    methods: {
        checkForm() {
            this.errors = validate({
                name: this.name,
                email: this.email,
                tel: this.tel,
                location: this.location
            },constraints)
            if(this.errors){
                console.log(this.errors)
            }else{
                alert("Your profile is updated successfully");
            }
        }
    }
}
const constraints = {
    name: {
        presence: true
    },
    email: {
        presence: true,
        email: true
    },
    tel: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        }
    },
    location: {

    },


}
mountedApp = Vue.createApp(app).mount('#app')