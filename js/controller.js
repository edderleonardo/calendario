angular.module('mwl.calendar.docs')
    .controller('OptionalEventEndDatesCtrl', function ($scope, moment, alert) {
        var vm = this;
        vm.events = [
            {
                title: 'No event end date',
                startsAt: moment().hours(6).minutes(0).toDate(),
                type: 'info'
            },
            {
                title: 'No event end date',
                startsAt: moment().hours(5).minutes(0).toDate(),
                type: 'success'
            },
            {
                title: 'dev.lugo es Gay!', // titulo del evento
                type: 'info', // tipo de color que aparece en el icono del evento
                startsAt: moment("2016-03-26").hours(9).minutes(23).toDate() // fecha inicio
            }
        ];

        vm.calendarView = 'month';
        vm.viewDate = new Date();

        vm.isCellOpen = true;

        vm.eventClicked = function(event) {
            alert.show('Clicked', event);
        };

        /* add custom event whit scope :) */
        $scope.addEvent = function() {
            vm.events.push({
                title: 'Nuevo Evento Agregado',
                type: 'info',
                startsAt: moment("2016-03-27").hours(9).minutes(23).toDate()
            });
        };

    });