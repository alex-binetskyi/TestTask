$menuButton.click(function(currentWidth){
  var flag = $menuButton.hasClass("page-header__menu-button--menu-opened");
  currentWidth = window.innerWidth;
  if (currentWidth <= mobileWidth){
    if(!flag){
      $menuButton.addClass("page-header__menu-button--menu-opened");
      $pageHeader.addClass("page-header--menu-opened");
      $pageHeaderMenuLinks.addClass("page-header__menu-links--menu-opened");
      $banner.addClass("banner--menu-opened");
    } else {
      $menuButton.removeClass("page-header__menu-button--menu-opened");
      $pageHeader.removeClass("page-header--menu-opened");
      $pageHeaderMenuLinks.removeClass("page-header__menu-links--menu-opened");
      $banner.removeClass("banner--menu-opened");
    }
  }
});
