$(document).ready(function() {
    $("#moreAboutBtn").click(function() {
        $.ajax({
            url: "extra_info.json",
            dataType: "json",
            success: function(data) {
                $(".intro-text").text(data.extraInfo);
            },
            error: function(xhr, status, error) {
                console.error("Error fetching data:", error);
            }
        });
    });
});
