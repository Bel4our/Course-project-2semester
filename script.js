document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
  });

  function toggleDropdown() {
    var dropdown = document.getElementById("sortingDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function sortList(order) {
  var container = document.getElementById('flatsContainer');
  var items = container.querySelectorAll('.justflat');

  var sortedItems = Array.from(items).sort(function(a, b) {
      var priceA = parseInt(a.querySelector('.price').textContent.replace(/\s/g, ''));
      var priceB = parseInt(b.querySelector('.price').textContent.replace(/\s/g, ''));

      if (order === 'ascending') {
          return priceA - priceB;
      } else {
          return priceB - priceA;
      }
  });

  container.innerHTML = '';

  sortedItems.forEach(function(item) {
      container.appendChild(item);
  });
}

$(document).ready(function(){ 
    $.ajax({
        type: "GET",
        url: "flats.xml",
        dataType: "xml",
        success: function(xml){
            $(xml).find('flat').each(function(){
                var address = $(this).find('address').text();
                var price = $(this).find('price').text();
                var rooms = $(this).find('rooms').text();
                var area = $(this).find('area').text();
                var floor = $(this).find('floor').text();
                var description = $(this).find('description').text();
                var backgroundImage = $(this).find('background').text(); 
                
                $('#flatsContainer').append(`
                    <div class="justflat" data-price="${price}">
                        <div class="outer-rectangle" style="background-image: url(${backgroundImage});">
                            <div class="inner-rectangle">
                                <div class="price">${price} BYN</div>
                                <div class="info-about-flat">
                                    <div>${rooms} комн.</div>
                                    <div>${area} м²</div>
                                    <div>${floor} этаж</div>
                                </div>
                            </div>
                        </div>
                        <div class="flat-description">
                            <h1>${address}</h1>
                            <p>${description}</p>
                        </div>
                    </div>
                `);
            });
        }
    });
});


$(document).ready(function(){ 
    $.ajax({
        type: "GET",
        url: "flats.xml",
        dataType: "xml",
        success: function(xml){
            var count = 0; 

            $(xml).find('flat').each(function(){
                if (count < 3) {
                    var price = $(this).find('price').text();
                    var rooms = $(this).find('rooms').text();
                    var area = $(this).find('area').text();
                    var floor = $(this).find('floor').text();
                    var backgroundImage = $(this).find('background').text(); 
                    
                    $('.minskWorld-sell .flat-container').append(`
                    <div class="outer-rectangle" style="background-image: url(${backgroundImage});">
                            <div class="inner-rectangle">
                                <div class="price">${price} BYN</div>
                                <div class="info-about-flat">
                                    <div>${rooms} комн.</div>
                                    <div>${area} м²</div>
                                    <div>${floor}</div>
                                </div>
                            </div>
                        </div>
                    `);
                    count++; 
                } else {
                    return false;
                }
            });
        }
    });
});

$(document).ready(function(){ 
    $.ajax({
        type: "GET",
        url: "flats-NewBorovaya.xml",
        dataType: "xml",
        success: function(xml){
            var count = 0; 
            $(xml).find('flat').each(function(){
                if (count < 3) {
                    var price = $(this).find('price').text();
                    var rooms = $(this).find('rooms').text();
                    var area = $(this).find('area').text();
                    var floor = $(this).find('floor').text();
                    var backgroundImage = $(this).find('background').text(); 
                    $('.New-Borovaya-sell .flat-container').append(`
                    <div class="outer-rectangle" style="background-image: url(${backgroundImage});">
                            <div class="inner-rectangle">
                                <div class="price">${price} BYN</div>
                                <div class="info-about-flat">
                                    <div>${rooms} комн.</div>
                                    <div>${area} м²</div>
                                    <div>${floor}</div>
                                </div>
                            </div>
                        </div>
                    `);
                    count++; 
                } else {
                    return false;
                }
            });
        }
    });
});

let pageNumbers = document.querySelectorAll('.page-numbers li');

pageNumbers.forEach(page => {
  page.addEventListener('click', function() {
    document.querySelector('.current').classList.remove('current');
    this.classList.add('current');
  });
});


