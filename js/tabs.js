// Tab Panels
$(document).ready(function () {
  // grab all container panel DIVs
  var tabContainers = $("div.tabs > div.tab-content > div");

  // hide them all, then show the first one
  tabContainers.hide().filter(":first").show();

  // set the first tab to class="selected"
  var firstTab = $("div.tabs ul.tabNavigation a:first");
  firstTab.addClass("selected");
  firstTab.animate(
    { opacity: 1, paddingLeft: "30px", paddingRight: "30px" },
    400
  );

  // add onclick handlers to all tabs
  var linkTabs = $("div.tabs ul.tabNavigation a");
  linkTabs.click(function () {

    // hide all tabContainers
    tabContainers.removeClass("animated-tabs bounceIn").hide();

    // show only the tabContainer with the ID that matches the href for the A that was clicked
    //alert(this.hash);
    tabContainers
      .filter(this.hash)
      .addClass("animated-tabs bounceInRight")
      .show(); //add animation

    // remove class="selected" from all tabs
    linkTabs.animate(
      { opacity: 1, paddingLeft: "25px", paddingRight: "25px" },
      400
    );
    linkTabs.removeClass("selected");

    // set class="selected" on the tab that was just clicked
    var currentTab = $(this);
    currentTab.addClass("selected");
    currentTab.animate(
      { opacity: 1, paddingLeft: "30px", paddingRight: "30px" },
      400
    );
    
    // stop following links
    return false;
  });
});
