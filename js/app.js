$(document).ready(function(){
    // Start Back To Top
    $(".btn-backtotops").hide();
    $(window).scroll(function(){
        let getScrolltop = $(this).scrollTop();
        if(getScrolltop >= 370){
            $(".btn-backtotops").fadeIn(1000);
        }else{
            $(".btn-backtotops").fadeOut(1000);
        }
    })
    // End Back To Top

    // Start Header
        // Start nav
            //for bugger
            $(".navbuttons").click(function(){
                $(".navbuttons").toggleClass("crossxs");
            });
            //for nav
            $(window).scroll(function(){
                let getScrolltop = $(this).scrollTop();

                if(getScrolltop >= 200) {
                    $(".navbar").addClass("navmenus");
                }else {
                    $(".navbar").removeClass("navmenus");
                }
            })
        // End nav
    // End Header

    // Start propertieslist
    $(".propertieslist").click(function(){
        // for active item
        $(this).addClass("activeitem").siblings().removeClass("activeitem");
        //for filter
        let getattvalue = $(this).attr("data-filter");
        if(getattvalue === "all"){
            $(".filters").show("slide", 500)
        }else{
            $(".fliters").hide();
            $(".filters").not("."+getattvalue).hide("slide", 500);
            $(".filters").filter("."+getattvalue).show("slide", 500);
        }
    });
    // For image overlay (or) lightbox
    lightbox.option({
        showImageNumberLabel: false
    })
    // End propertieslist

    // Start Adv Section
    $(window).scroll(function(){
        let getScrolltop = $(this).scrollTop();

        if(getScrolltop >= 900){
            $(".advimage").addClass("fromleft");
            $(".advtext").addClass("fromright");
        }else{
            $(".advimage").removeClass("fromleft");
            $(".advtext").removeClass("fromright");
        }
    })
    // End Adv Section

    // Start footer Section
    const getyear = $("#getyear");
    const getfullyear = new Date().getUTCFullYear();
    getyear.text(getfullyear);
    // End footer Section
});