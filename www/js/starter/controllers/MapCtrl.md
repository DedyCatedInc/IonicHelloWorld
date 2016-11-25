References:

https://forum.ionicframework.com/t/gps-confirmation-pop-up-is-not-shown-why/22266/7

https://forum.ionicframework.com/t/how-to-hide-tab-bar-closed/7320/6

Hi!

I had the same requirement and managed to find a pretty quick fix.

First off in your tabs file include the ng-class:

<ion-tabs class="tabs-icon-only tabs-feely" ng-class="$root.tabsHidden">
Second add this to your css file:

.tabs-hide .tabs {
    display: none;
}
Third include this in the controller of every page where you want to hide the tab bar:

$scope.$root.tabsHidden = "tabs-hide";
Of course, when routing back from any page with hidden tab bar you need to remove this class to show it again.

Hope this helps, it sure did help me
