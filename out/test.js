"use strict";
var canvas = document.getElementById('examplechart');
var ctx = canvas.getContext('2d');
var lineData = {
    labels: ['03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00'],
    datasets: [
        {
            label: 'Accepted',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Quarantined',
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
var myNewChart = new Chart(ctx, {
    type: "line",
    data: lineData,
    options: {
        title: {
            display: true,
            text: 'Custom Chart Title'
        }
    }
});
