const loadCategories = () => {
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
      .then((res) => res.json())
      .then((data) => displayPets(data.pets))
      .catch((error) => console.log(error));
  };






  const displayPets = (pets) => {
    const petContainer = document.getElementById("pet-deals");
    petContainer.innerHTML = "";
  
    if (pets.length == 0) {
      petContainer.classList.remove("grid");
      petContainer.innerHTML = `
      <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
      
        <img src="images/error.png" /> 
        <h2 class="text-center text-xl font-bold"> No Content Here in this Categerory </h2> 
      </div>`;
    } else {
      petContainer.classList.add("grid");
    }
  
    pets.forEach((pet) => {
     
      const Viewpet = document.createElement("div");
      
      Viewpet.innerHTML = `
  <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-out min-w-full">
      <img src="${pet.image}" alt="" class="rounded-lg mb-4">
      <h3 class="text-xl font-semibold mb-2 ">${pet.pet_name} </h3>
      <p class="text-gray-600 text-sm mb-2">Breed:${pet.breed}</p>
      <p class="text-gray-600 text-sm mb-2">Birth:${pet.date_of_birth}</p>
      <p class="text-gray-600 text-sm mb-2">Gender:${pet.gender}</p>
      <p class="text-gray-600 text-sm mb-2">Price:${pet.price}</p>
      <div class="flex justify-around">
        <button class="  bg-gray-200 px-4 py-2 rounded-md"><i class="fa-regular fa-thumbs-up"></i></button>

<button class=" text-Primary-Btn bg-gray-200 px-4 py-2 rounded-md">Adopt</button>
        <button class="text-Primary-Btn bg-gray-200 px-4 py-2 rounded-md">Details </button>

      </div>

    </div>





       
      `;
      petContainer.append(Viewpet);
    });
  };



  const loadCategoryVideos = (id) => {
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        //sobaike active class remove korao
        removeActiveClass();
  
        //id er class k active korao
        const activeBtn = document.getElementById(`btn-${id}`);
        activeBtn.classList.add("active");
        displayVideos(data.category);
      })
      .catch((error) => console.log(error));
  };

  loadCategories();

 