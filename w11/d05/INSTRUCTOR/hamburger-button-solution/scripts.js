function slideMenu() {
  var $mainContent = $('#content-wrapper');
  var $menuWrapper = $('#menu-wrapper');

  $menuWrapper.toggleClass('open');
  $mainContent.toggleClass('open');
}

function animateHamburger() {
  var $hamburgerButton = $(this);
  $hamburgerButton.toggleClass('open');
}

function selectMenuItem() {
  var $selectedMenuItem = $(this);
  $selectedMenuItem.addClass('selected');

  var $menu = $('#menu');
  var menuItems = $menu.children();
  for (var i = 0; i < menuItems.length; i++) {
    if (menuItems[i] != this) {
      menuItems[i].className = '';
    }
  }
}

var $hamburgerButton = $('#hamburger-button');
$hamburgerButton.on('click', slideMenu);
$hamburgerButton.on('click', animateHamburger);

var $menu = $('#menu');
var menuItems = $menu.children();

for (var i = 0; i < menuItems.length; i++) {
  $(menuItems[i]).on('click', selectMenuItem);
}