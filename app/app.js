function initListeners(){
    $("nav a").click(function(evt){
        // this stores the id from the anchor tag.
        let aID= evt.currentTarget.id;
        let contentID = aID + "Content";
         MODEL._updateView(contentID);
    });
}
$(document).ready(function(){

   initListeners();
   MODEL._updateView("homeContent");
    
});