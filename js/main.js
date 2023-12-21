document.addEventListener("DOMContentLoaded", function(){
    // Init Variables
    let cookiesBanner = document.querySelector(".cookies-banner");
    let cookiesBannerCloseButton = document.querySelector(".cookies-banner-button .button");

    // Show banner condition
    if(cookiesBanner){
        setTimeout(showBanner, 2000);
    }

    // Banner close button condition
    if(cookiesBannerCloseButton){
        cookiesBannerCloseButton.addEventListener("click", CookiesBannerButtonClicked);
    }

    // Show banner function
    function showBanner(){
        cookiesBanner.classList.add("show");
    };

    // Banner close button function
    function CookiesBannerButtonClicked(e){
        e.preventDefault();
        hideBanner();
    };

    // Hide banner function
    function hideBanner(){
        cookiesBanner.classList.remove("show");
    }
});