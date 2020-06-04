   function addStores() {
       for (var i in stores) {
           var val = stores[i].addressLines[1].split(",");

           document.getElementById("container").innerHTML += ` 
                <div class = "list" >
                    <div id="demo" class="address">
                    ${stores[i].addressLines[0]} ,
                    ${val[0]},
                    ${val[1]} 
                        <div id = "phone" > 
                        ${stores[i].phoneNumber} 
                        </div> 
                    </div> 
                    <div class = "number" > 
                    ${++i} 
                    </div> 
                </div>`;
       }

   }