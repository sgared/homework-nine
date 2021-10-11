var MODEL = (function(){
    // usually means private variable 
    var _homeContent =  `<h1>HOME</h1></h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a
    d. Non vel exercitationem, doloremque tenetur accusantium iure.</p>
    </p>
    <p> nulla voluptatibus soluta sed sequi ratione voluptatem recusandae quam! mollitia repudiandae, accusantium, quibusdam nulla voluptatibus soluta sed sequi ratione voluptatem recusandae quam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel aliquid suscipit assumenda adipisci quasi.</p><img src="images/road-lion.jfif" alt="" />`;
    var _aboutContent =`<h1>ABOUT</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a
    d. Non vel exercitationem, doloremque tenetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit fugit corrupti,corrupti, mollitia repudiandae, accusantium, quibusdamaccusantium iure.</p>
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit fugit </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel aliquid suscipit assumenda adipisci quasi.</p> <img src="images/lion-1.jfif" alt="" />`;
    var _productsContent= `<h1>PRODUCTS</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a
    d. Non Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit fugit corrupti,corrupti, mollitia repudiandae, accusantium, quibusdamvel exercitationem, doloremque tenetur accusantium iure.</p>
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit fugit corrupti, mollitia repudiandae, accusantium, quibusdam nulla voluptatibus soluta sed sequi ratione voluptatem recusandae quam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel aliquid suscipit assumenda adipisci quasi.</p> <img src="images/2-lion.jfif" alt="" />`;
    var _contactContent = `<h1>CONTACT</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a
    d. Non vel Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit fugit corrupti,corrupti, mollitia repudiandae, accusantium, quibusdamexercitationem, doloremque tenetur accusantium iure.</p>
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit fugit corrupti, mollitia repudiandae, accusantium, quibusdam nulla voluptatibus soluta sed sequi ratione voluptatem recusandae quam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel aliquid suscipit assumenda adipisci quasi.</p> <img src="images/run-lion0.jpg" alt="" />`;

    var _updateView = function(pageName){

        var pageContent = "_" + pageName; 
        $("#app").html(eval(pageContent));
            //   console.log("Model" + pageName
    };

    return {
        _updateView:_updateView,
    };

})(); // self executing function with parenthesis at the end;


