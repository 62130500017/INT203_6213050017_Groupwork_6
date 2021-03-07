const app = {
    data() {
        return {
            name: 'Jirawath Anantheerathat',
            job: 'Sophomore',
            myimage: 'Images/91304411_2524070331060960_6381153114916913152_o.jpg',
            myfacebook: 'https://www.facebook.com/jirawath.anantheerathat',
            myig: 'https://www.instagram.com/jirawath_jiw/',
            mygoogle: 'https://myaccount.google.com/u/2/personal-info'
        }
    }
}

mountedApp = Vue.createApp(app).mount('#app')