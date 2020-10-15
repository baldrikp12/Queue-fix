// ==UserScript==
// @name           PCOM Fix
// @author          Kenneth P. Baldridge
// @namespace   PCOM-Fix
// @description    Refreshes every 3 minutes and checks for new Ticket.
// @include          http://
// @include          http://
// @version         1.0
// @released       08/23/2017
// @grant            GM_getValue
// @grant            GM_setValue
// ==/UserScript==

setTimeout(location.reload.bind(location), 3 * 60 * 1000); // change to adjust time

if (performance.navigation.type == 1) { //Checks if page was refreshed or opened for the first time

     var newRowCount = document.getElementById("ctl00__mainContent_gvQueueData").rows.length; // Grabs current row count
     var oldRowCount = GM_getValue("tableRowCount"); // Grabs last row count
     
     if(newRowCount){ 

        if(newRowCount > oldRowCount) {

            //creates a new popup window
            window.open('data:image/png,', 'NewTicket', 'height=666,width=140,toolbar=no,location=no,menubar=no');

        } 
        
        GM_setValue("tableRowCount", newRowCount); // Update "last row count" with current row count.

     }

} else {

    var initRowCount = document.getElementById("ctl00__mainContent_gvQueueData").rows.length;
    
    if(initRowCount){
    
        GM_setValue("tableRowCount", initRowCount);

    } else {
    
        GM_setValue("tableRowCount", 0);

    }
    
}
