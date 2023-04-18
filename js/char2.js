var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Đầu mối', 'Tiềm năng', 'Khách hàng cũ', 'Vip'],

        datasets: [{
            label: 'Employees',
            data: [2, 0, 0, 0],
            backgroundColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgb(219, 23, 23)',
                'rgb(211, 189, 17)'

            ],
            borderColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgb(219, 23, 23)',
                'rgb(211, 189, 17)'

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});
