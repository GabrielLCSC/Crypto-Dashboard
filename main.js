let graph = document.getElementById('graph').getContext('2d')

new Chart(graph, {
    type: 'line',
    data: {
        labels: [
            '5nov',
            '6nov',
            '7nov',
            '8nov',
            '9nov',
            '10nov',
            '11nov',
            '12nov',
            '13nov',
            '14nov',
            '15nov',
        ],
        datasets: [
            {
                label: 'ETH',
                data: [
                    100,
                    400,
                    600,
                    400,
                    900,
                    100,
                    300,
                    600,
                    300,
                    500,
                    400
                ],
                borderColor: 'rgb(255, 60, 60)',
                backgroundColor: 'transparent',
            },
            {
            label: 'BTC',
                data: [
                    100,
                    200,
                    400,
                    700,
                    800,
                    300,
                    200,
                    500,
                    200,
                    400,
                    700
                ],
                borderColor: 'rgb(82, 114, 255)',
                backgroundColor: 'transparent',
            }
        ]
        
    }
})