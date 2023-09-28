$(document).ready(function () {
    $(".task-title .task-icon").on("click", function () {
        $(this).parents().eq(1).parent(".task").toggleClass("check");
    });
    $("input").on("click", function () {
        event.stopPropagation();
    });
    $("a .icon-important i").on("click", function () {
        $(this).siblings().removeClass("d-none");
        $(this).addClass("d-none");
    });

    $("a .icon-edit i").on("click", function () {
        $(this).parents().eq(5).toggleClass("edit");
        $(this).parents().eq(4).children(".icon-content").toggleClass("d-none");
        $(this).parents().eq(3).children("h3").toggleClass("d-none");
        $(this).parents().eq(5).children(".task-edit").toggleClass("d-none");
        $(this).parents().eq(5).children(".task-save").toggleClass("d-none");
    });
});