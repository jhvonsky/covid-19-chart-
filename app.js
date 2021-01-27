const ctx = document.getElementById('myChart').getContext('2d');
const btn = document.querySelector('button');


var chart =
        fetch('https://covid19.mathdro.id/api/countries/indonesia')
        .then(res => res.json())
            .then(res => {
                let confirm = res.confirmed.value;    
                let deaths = res.deaths.value;    
                let recovered = res.recovered.value;
                
                // Chart

                Chart.defaults.global.defaultFontSize = '20';
                Chart.defaults.global.defaultFontFamily = 'serif';

                new Chart(ctx, {
                    // The type of chart we want to create
                    type: 'pie', // pie
                
                    // The data for our dataset
                    data: {
                        labels: ['Confirm','Death','Recovered'],
                        datasets: [{
                            label: 'Covid 19',
                            data: [
                                confirm,
                                deaths,
                                recovered
                            ],
                            backgroundColor: [
                                'red',
                                'black',
                                'aqua'
                            ]
                        }]
                    },
                
                    // Configuration options go here
                    options: {
                        title: {
                            display: true,
                            text: 'Covid 19 Data in Indonesia',
                            fontSize: 25,
                            fontColor: 'black',
                            fontFamily: 'Montserrat'
                        },
                        legend: {
                            position: 'right',
                        }
                    }
                })
            })
; 