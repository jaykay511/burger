// Make sure to wait to attach our handlers until the DOM is fully loaded
$(function () {
    $(".devour").on("click", function (event) {
        console.log("click test");
        var id = $(this).data("id");
        var devour = $(this).data("devoured");

        var devouredState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("burger devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".addburg").on("click", function (event) {
        
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburg").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
