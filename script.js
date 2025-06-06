function getWeather() {
    const city = document.getElementById("city").value;
    const apiUrl = `/api/weather/${encodeURIComponent(city)}`;
    let tempera = 0;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city").value = "";
            console.log(data);
            tempera = data.current.temp_c;
            // document.getElementById("temperature").innerHTML = tempera;
            // document.getElementById("location").innerHTML = data.location.name;

            const box = document.createElement("div");
            box.setAttribute("class", "container");

            const container2 = document.createElement("div");
            container2.setAttribute("class", "containerin");
            box.appendChild(container2);

            const loc = document.createElement("h1");
            loc.setAttribute("id", "location");
            loc.setAttribute("class", "text");
            loc.textContent = city;
            container2.appendChild(loc);

            const loc3 = document.createElement("h1");
            loc.setAttribute("id", "location");
            loc3.setAttribute("class", "text");
            loc3.textContent = "|";
            container2.appendChild(loc3);

            const loc2 = document.createElement("h1");
            loc.setAttribute("id", "location");
            loc2.setAttribute("class", "text");
            loc2.textContent = data.location.country;
            container2.appendChild(loc2);

            const container = document.createElement("div");
            container.setAttribute("class", "containerin");
            box.appendChild(container);

            // const temptxt = document.createElement("h1");
            // temptxt.setAttribute("class", "text");
            // temptxt.textContent = "Temperature: ";
            // container.appendChild(temptxt);

            const temp = document.createElement("h1");
            temp.setAttribute("id", "temperature");
            temp.setAttribute("class", "text");
            temp.textContent = tempera;
            container.appendChild(temp);

            const temptxt2 = document.createElement("h1");
            temp.setAttribute("id", "temperature");
            temptxt2.setAttribute("class", "text");
            temptxt2.textContent = " C°";
            container.appendChild(temptxt2);
            
            

            // const b = document.createElement("div");
            // b.textContent = data.location.name;



            // document.getElementById("boxcontainer").appendChild(b);
            document.getElementById("boxcontainer").appendChild(box);
            


        })
}






