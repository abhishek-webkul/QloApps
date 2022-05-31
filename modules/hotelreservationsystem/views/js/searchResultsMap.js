/**
* 2010-2022 Webkul.
*
* NOTICE OF LICENSE
*
* All right is reserved,
* Please go through LICENSE.txt file inside our module
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade this module to newer
* versions in the future. If you wish to customize this module for your
* needs please refer to CustomizationPolicy.txt file inside our module for more information.
*
* @author Webkul IN
* @copyright 2010-2022 Webkul IN
* @license LICENSE.txt
*/

function initMap() {
    const hotelLocation = {
        lat: Number(hotel_location.latitude),
        lng: Number(hotel_location.longitude),
    };

    const map = new google.maps.Map($($('#search-results-wrap .map-wrap')).get(0), {
        zoom: 10,
        center: hotelLocation,
        disableDefaultUI: true,
    });

    const marker = new google.maps.Marker({
        position: hotelLocation,
        map: map,
        title: hotel_name,
    });

    const btn = $('#search-results-wrap .btn-map-control-ui').get(0);
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(btn);

    btn.addEventListener('click', function () {
        console.log(1);
        const directionsLink = 'https://www.google.com/maps/dir/?api=1&destination='+
        hotelLocation.lat+','+hotelLocation.lng;
        window.open(directionsLink, '_blank');
    });

    const iwContent = '<div is="hotel-map-iw-content"><b>'+hotel_name+'</b>'+'<p>'+hotel_address+'</p></div>';
    const infowindow = new google.maps.InfoWindow({
        content: iwContent,
    });

    infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
    });
}

$(document).ready(function() {
    if (typeof hotel_location == 'object') {
        initMap();
    }
});
