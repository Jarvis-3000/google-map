function displayStores() {
    var Address = document.getElementsByTagName("input")[0].value;

    for (var store of stores) {
        if (store.address.city == Address) {
            Lat = store.coordinates.latitude;
            Lng = store.coordinates.longitude;
            break;
        }

    }
    afterClickMap(Lat, Lng, store.addressLines[1])
}


function displayClickList(e) {
    var ADD = e.target.textContent.split(",");
    var Address = ADD[0];
    alert(Address);
    var La, Ln, i = 1,
        j = 0;
    for (var store of stores) {
        var Add = store.addressLines[0];
        console.log(Address + " " +
            Add);
        if (Address.trim() === Add.trim()) {
            La = store.coordinates.latitude;
            Ln = store.coordinates.longitude;

            break;
        }
        i++;
        j++;
    }
    afterClickMap(La, Ln, store.addressLines[1], i);
    //  alert("hello");

}

function afterClickMap(Lat, Lng, add, store, j) {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: Lat,
            lng: Lng
        },
        //    title: stores[index].addressLines[1],

        zoom: 20,

    });
    var marker = new google.maps.Marker({
        position: {
            lat: Lat,
            lng: Lng
        },
        map: map,
        title: add,
        label: store.toString()
    });




    marker.addListener('click', function() {
        //alert(this.getPosition() + " " + this.label);
        // map.setZoom(16);
        // alert("yes");
        // infoWindow = new google.maps.InfoWindow({
        //     content: stores[j].addressLines[0] + "<br>" + stores[j].addressLines[1],
        //     maxWidth: 300

        // });
        alert(marker.title);

        infoWindow.open(map, marker);

        setTimeout(function() {
            infoWindow.close();
        }, 2000);
        //infoWindow.close();
        // map.setZoom(20);
        // map.setCenter(this.getPosition());
    });
}