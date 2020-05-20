'use strict';
$(function () {
    $('.devour').on('click', function (event) {
        const id = $(this).data('id');
        const idObj = {
            id: id
        };

        $.ajax('/api/burgers/devour', {
            type: 'PUT',
            data: idObj
        }).then(function () {
            console.log('Devoured a burger!');
            location.reload();
        });
    });

    $('.create-form').on('submit', function (event) {
        // event.preventDefault();
        console.log("clicked!")
        const newBurger = {
            burgerName: $('#burger-input')
                .val()
                .trim()
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function () {
            console.log('Added a new burger!');
            $('.available').reload();

        });
    });
});
