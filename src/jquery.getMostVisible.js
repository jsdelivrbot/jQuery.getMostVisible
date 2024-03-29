/*
 * jQuery function to get most visible element in viewport
 *
 * Based on https://github.com/lamiruma/jQuery.getMostVisible
 * Copyright (c) 2018 Jeremiah
 * 
 * Licensed under MIT license.
 */

(function ( $ ) {
    'use strict';

	var pluginName = 'getMostVisible';
    (function ($) {
        $.extend({
            getMostVisible: function (options) {
                var settings = $.extend({
                    selector: 400,
                }, options );
        
                var clientRect = null;
                var clientRectTop = 0;
                var maxVisibleHeight = 0;
                var visibleHeightOfElem = 0;
                var mostVisibleElement = null;
                var skipRest = false;
            
                var visibleElems = $(settings.selector).each(function(i, element) {
                    if (skipRest === false) {
                        clientRect = element.getBoundingClientRect();
                        clientRectTop = Math.abs(clientRect.top);
            
                        if (clientRect.top >= 0) {
                            visibleHeightOfElem = window.innerHeight - clientRectTop;
                        } else {
                            visibleHeightOfElem = clientRect.height - clientRectTop;
                        }
            
                        if (visibleHeightOfElem >= clientRect.height) {
                            mostVisibleElement = element;
                            skipRest = true;
                        } else {
            
                            if (visibleHeightOfElem > maxVisibleHeight) {
                                maxVisibleHeight = visibleHeightOfElem;
                                mostVisibleElement = element;
                            }
                        }
            
                    }
                });
                return mostVisibleElement;
            }
        });
    })(jQuery);
 
}( jQuery ));