$(document).ready(function () {
    var image= $('#ban');

    $('.slider-top').click(function () {
        var value= $(this).val();
        image.attr('src',value);
        start();
    });
    //da znam moje da sa pove4e. no ve4e sum pravil slider mnogo puti
    var change=function () {
        var activeSlide=$('.active');
        var inactiveSlide=$('.inactive');
        // console.log(activeSlide);
        // console.log(inactiveSlide);

        activeSlide.removeClass('active');
        inactiveSlide.removeClass('inactive');
        activeSlide.addClass('inactive');
        inactiveSlide.addClass('active');

    }

    $('.arrow-left').click(function () {
        change();
    });
    $('.arrow-right').click(function () {
        change();
    });

});


//By stefcho :D for somone else :D woohoo i`m too lazy to do it for me
//
// $(document).ready(function(){
//     var timer;
//     var location = 1;
//
//     function start(){
//
//         timer= setTimeout(function(){
//             location++;
//             if (location===5) {
//                 location = 1;
//             }
//             slideChange();
//         },5000);
//     }
//
//     start();
//
//     $("#main-first-button").click(function(){
//         location = 1;
//         slideChange();
//     });
//     $("#main-second-button").click(function(){
//         location = 2;
//         slideChange();
//     });
//     $("#main-third-button").click(function(){
//         location = 3;
//         slideChange();
//     });
//     $("#main-fourth-button").click(function(){
//         location = 4;
//
//         slideChange();
//     });
//
//     function dotChange(){
//
//         switch (location){
//             case 1:
//                 $("#main-first-button").css("color", "#2574ad ");
//                 break;
//             case 2:
//                 $("#main-second-button").css("color", "#2574ad ");
//                 break;
//             case 3:
//                 $("#main-third-button").css("color", "#2574ad ");
//                 break;
//             case 4:
//                 $("#main-fourth-button").css("color", "#2574ad ");
//                 break;
//         }
//     }
//     function slideChange(){
//         clearTimeout(timer);
//         $("#have-a-look button").css("color", "white");
//         dotChange();
//         $("#majestic-image").fadeOut(1000, function(){
//             switch (location){
//                 case 1:
//                     $("#majestic-image").attr('src', 'images/MAJESTIC.jpg');
//                     break;
//                 case 2:
//                     $("#majestic-image").attr('src', 'images/MAJESTICGORILA.jpg');
//                     break;
//                 case 3:
//                     $("#majestic-image").attr('src', 'images/MAJESTICCORN.png');
//                     break;
//                 case 4:
//                     $("#majestic-image").attr('src', 'images/RDJMAJESTIC.jpg');
//                     break;
//             }
//             $("#majestic-image").fadeIn(1000);
//         });
//         start();
//     }
// });