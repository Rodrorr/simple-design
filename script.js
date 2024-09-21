// $(document) .ready (function (){
//     $(".item1") .click (function (){
//         $(".hello1") .slideToggle();
//     })
//     $(".item2") .click (function (){
//         $(".hello2") .slideToggle();
//     })
// })

$(document).ready(function () {
    $(".item").click(function () {
        // Check if the clicked item's corresponding hide-item is already visible
        var $hideItem = $(this).next(".hide-item");
        
        // If another item is open, close it
        $(".hide-item").not($hideItem).slideUp();

        // Toggle the clicked item's hide-item
        $hideItem.slideToggle();
    });
});
