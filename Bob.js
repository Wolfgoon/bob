let bobishere = false;

function changetoBob() { 
  let textElement = document.getElementById("myP");
  let imgElement = document.getElementById("pic");
  let kickElement = document.getElementById("kick");
  imgElement.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZaHJ5ICd5zV5orrCHBvwySVZjrCPopua3sA&usqp=CAU";
  textElement.innerText = "Bob";
  if (bobishere === true) {
    window.alert("Bob has Already Arrived");
  }
  else {
    window.alert("Bob has Arrived");
    kickElement.innerText = "Kick Bob Out";
    bobishere = true;
  }
  
}

function changetonotBob() { 
  let textElement = document.getElementById("myP");
  let imgElement = document.getElementById("pic");
  let kickElement = document.getElementById("kick");
  imgElement.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDQ0PDw8PDw8NDQ0NDQ8PDw8PDw8NFREWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAGBABAQEBAQAAAAAAAAAAAAAAABEB8EH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7DjSYoAKCKKAEWAEWKDMWLFgMxYsAQjQDMI0AzCNAMwikBIjUIDKRqEBmI1EBBUBBQEZaAYFigAoAKAsMUCKKBAUAFBBQEUAEUBFABFAQUBkUBmCgMxGkgMioCCgJ3oAAKAuCgKKAoACgAAAAAAAAAAAAAAAAIKgIjSAyjSaDIqAd6ixAXAXAVUxQVUUBQAAAAAAAAAAAVAAAAAAAAAEFQERpNBlF1AQAEzGkawFxcRQUAFAAAAAAAAAAAAVAAAAAAAAABAARUBE1UBAQDGsZxrAVUxQUAFAAAAAAAAAAAAAAAAAAAAAARUARUBNTWtZ0ERUAaZxrAVUUFABRFAAAAAAAAAAAAAAAAAAAAARUARUBE1UBICAYuMtYDSs4oKqKAqKAAAAAAAAAAAAAAAAAAACAAgKyqaAyqaAggC4yoNYuM4uaDSs40CiKAqAKIAoigAAAAAAAAAACAAICoIAhqaBqACAAyrKg0tZqg1isNZoNKzVBRFBRAFEUAAAAAAAAAEBUoACICpRN0BEpQEABWb0ATBnNazQUQBpayoNZq1mgN0Zq0Gis0oNVWSg1RKgNCUoKIUFKzSg0lSlBalSpQaqVKgLUqAFKIACaBRKgM5rVAFUAFAAqgBVACgClABagC0qALUoAUoAUqAFKAJoAJQAQACs7oAl6oAP/9k=";
  textElement.innerText = "no One";
  if (bobishere === true) {
    window.alert("Bob has Departed");
    kickElement.innerText = "no One to Kick";
  }
  else {
    window.alert("no One is Here");
  }
  bobishere = false
}
   