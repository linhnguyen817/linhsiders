// document.addEventListener('DOMContentLoaded', function () {
//     var chart1 = Highcharts.chart('chart1', {
//         chart: {
//             type: 'column',
//             displayErrors: true
//         },
//         data: {
//             // enablePolling: true,
//             csv: document.getElementById('co_levels_small').innerHTML,
//             seriesMapping: [{
//                 x: 0, // X values are pulled from column 0 by default
//                 y: 1 // Y values are pulled from column 1 by default
//                 // label: 2 // Labels are pulled from column 2 and picked up in the dataLabels.format below
//             }]
//         },
//         title: {
//             text: '2017 CO Levels'
//         },
//         xAxis: {
//             type: 'datetime',
//             labels: {
//                 format: '{value:%b/%e/%Y}'
//             }
//         },
//         yAxis: {
//             title: {
//                 text: 'ppm'
//             }
//         },
//         plotOptions: {
//             series: {
//                 dataLabels: {
//                     enabled: true,
//                     format: '{point.label}'
//                 }
//             }
//         }
//     });
// });

var goodCOThreshold = 0.8;
var okayCOThreshold = 1.0;
var badCOThreshold = 1.2;

Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'avenir'
        }
    }
});

$(function() {
    window.chart = Highcharts.stockChart('chart1', {
        title: {
            text: 'Carbon Monoxide (2017)',
            align: 'left',
            style : {
                fontSize: '20px',
            },
        },
        data: {
            csv: document.getElementById('co_data').innerHTML,
        },
        xAxis: {
            type: 'datetime',
            labels: {
                format: '{value:%m.%d}'
            },
            tickLength: 0,
        },
        yAxis: {
            title: {
                text: 'CO Level (ppm)'
            },
            plotLines: [{
                value: badCOThreshold,
                color: 'gray',
                dashStyle: 'shortdash',
                width: 1.5,
            }],
            opposite:false, // moves y-axis label to left
        },
        rangeSelector: {
            selected: 0,
            inputDateFormat: '%m/%d/%Y',
            allButtonsEnabled: true,
            opposite: false,
            buttonTheme: { // styles for the buttons
                fill: 'none',
                stroke: 'none',
                'stroke-width': 0,
                r: 13,
                padding: 5,
                style: {
                    color: '#3b444b',
                    fontWeight: 'bold',
                    fontSize: '12px',
                },
                states: {
                    hover: {
                    },
                    select: {
                        fill: '#3b444b',
                        style: {
                            color: 'white'
                        }
                    }
                    // disabled: { ... }
                }
            },
        },
        navigator: {
            enabled: false // removes 'Zoom'
        },
        scrollbar: {
            enabled: false
        },
        plotOptions: {
            series: {
                color: '#ec6641',
                negativeColor: '#87D169',
                threshold: badCOThreshold,
            }
        },
    });
});


// var chart1 = Highcharts.stockChart('chart1', {
//     // series : [{
//     //     data: document.getElementById('co_levels_small').innerHTML
//     // }],
//     data: {
//         csv: document.getElementById('co_levels').innerHTML
//     },
//     title: {
//         text: '2017 CO Levels'
//     },
//     xAxis: {
//         type: 'datetime',
//         labels: {
//             format: '{value:%b %e, %Y}'
//         }
//     },
//     yAxis: {
//         title: {
//             text: 'CO Level (ppm)'
//         }
//     },
//     rangeSelector: {
//         selected: 1,
//         inputDateFormat: '%Y-%m-%d'
//     },
//     function(chart) {
//
//     // apply the date pickers
//     setTimeout(function() {
//         $('input.highcharts-range-selector', $('#' + chart.options.chart.renderTo)).datepicker()
//     }, 0)
// }
// });


// Set the datepicker's date format
// $.datepicker.setDefaults({
//     dateFormat: 'yy-mm-dd',
//     onSelect: function(dateText) {
//         chart.xAxis[0].setExtremes($('input.highcharts-range-selector:eq(0)').datepicker("getDate").getTime(), $('input.highcharts-range-selector:eq(1)').datepicker("getDate").getTime());
//         //this.onchange();
//         this.onblur();
//     }
// });

// Highcharts.chart('chart1', {
//     xAxis: {
//         type: 'column',
//         dateTimeLabelFormats: {
//             day: '%e of %b'
//         }
//     },
//
//     series: [{
//         data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//         pointStart: Date.UTC(2010, 0, 1),
//         pointInterval: 24 * 3600 * 1000 // one day
//     }]
// });

// Highcharts.chart('chart1', {
//
//     data: {
//         csv: document.getElementById('co_levels_small').innerHTML,
//         seriesMapping: [{
//             // x: 0, // X values are pulled from column 0 by default
//             // y: 1, // Y values are pulled from column 1 by default
//             // label: 2 // Labels are pulled from column 2 and picked up in the dataLabels.format below
//         }]
//     },
//     chart: {
//         type: 'column'
//     },
//     title: {
//         text: 'Daily runs'
//     },
//     xAxis: {
//         minTickInterval: 24 * 36e5
//     },
//     yAxis: {
//         title: {
//             text: 'Distance'
//         },
//         labels: {
//             format: '{value} km'
//         }
//     },
//     legend: {
//         enabled: false
//     },
//     plotOptions: {
//         // series: {
//         //     dataLabels: {
//         //         enabled: true,
//         //         format: '{point.label}'
//         //     },
//         //     tooltip: {
//         //         valueSuffix: ' km'
//         //     }
//         // }
//     }
//
// });
