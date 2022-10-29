
const app = new Vue({
    el: '#app',
    data: {
        date: "",
        
    },
    created() {
        fetch('http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires')
        .then(response => response.json())
        .then(data => { 
            
            
            this.date = new Date(data.datetime)
            console.log(this.date);
            })
        .catch( error => console.log(error));
    }

});

