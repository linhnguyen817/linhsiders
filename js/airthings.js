
document.addEventListener('DOMContentLoaded', function () {
    var chart1 = Highcharts.chart('chart1', {
        chart: {
            type: 'column'
        },
        data: {
            // enablePolling: true,
            csv: document.getElementById('co_levels').innerHTML
        },
        title: {
            text: '2017 CO Levels'
        },
        yAxis: {
            title: {
                text: 'ppm'
            }
        }
    });
});

