const btn = document.querySelector('.j-btn');
const input1 = document.querySelector('.page');
const input2 = document.querySelector('.limit');
const resultNode = document.querySelector('.result');
const imageContainer = document.querySelector('.image-container')

// let p = document.createElement('p');

// function addTextNode(text) {
// 	let newText = document.createTextNode(text),
// 		p1 = document.getElementById("p1");
// 		p1.appendChild(newtext);
// }
	

btn.addEventListener('click', async () => {
    imageContainer.innerHTML = ''; // Clear the existing images
    const page = parseInt(input1.value);
    const limit = parseInt(input2.value);

    if ((page < 1 || page > 10 || isNaN(page)) && (limit < 1 || limit > 10 || isNaN(limit))) {
        document.getElementById("p1").textContent = "Number and limit are out of range 1-10";
    } else if (page < 1 || page > 10 || isNaN(page)) {
        document.getElementById("p1").textContent = "Number is out of range 1-10";
    } else if (limit < 1 || limit > 10 || isNaN(limit)) {
        document.getElementById("p1").textContent = "Limit is out of range 1-10";
    } else if (limit >= 1 && limit <= 10 && page >= 1 && page <= 10) {
        try {
            const requestResult = await useRequest(page, limit);
            localStorage.setItem('lastResponse', JSON.stringify(requestResult));
            renderImages(requestResult, 400, 200); // Render the images with a size of 400x400 pixels
        } catch (error) {
            console.error(error);
            // Handle the error if the request fails
        }
    }
});

// Function to make the API request
function useRequest(page, limit) {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.json();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
}

// Function to render images with the specified width and height
 async function renderImages(data, width, height) {
	const imgElements = [];
	// Создаем и асинхронно загружаем изображения
	await Promise.all(data.map(async(image)=> {
		const img = document.createElement('img');
        img.src = `${image.download_url}?w=${width}&h=${height}`;
		img.width = 400; // Устанавливаем ширину изображения в 600 пикселей
        img.height = 200; // Устанавливаем высоту изображения в 400 пикселей
		img.classList.add('gallery-image'); // Add a class to the image
		imgElements.push(img);	
	}));
		imgElements.forEach((img)=> {
			imageContainer.appendChild(img);
		});
	}
    

// Check if there is a last response in localStorage and render images from it
document.addEventListener('DOMContentLoaded', () => {
    const lastResponse = localStorage.getItem('lastResponse');
    if (lastResponse) {
        const lastResponseData = JSON.parse(lastResponse);
        renderImages(lastResponseData,400,200);
    }
});

	  	//   or i can use:
		//btn.addEventListener('click', async () => {
		// 	const page = parseInt(input1.value);
		// 	const limit = parseInt(input2.value);
		// 	switch (true) {
		// 		case (limit < 1 || limit > 10 || isNaN(limit)) && (page < 1 || page > 10 || isNaN(page)):
		// 		  document.getElementById("p1").textContent = "Number and limit are out of range 1-10";
		// 		  break;
		// 		case page < 1 || page > 10 || isNaN(page):
		// 		  document.getElementById("p1").textContent = "Number is out of range 1-10";
		// 		  break;
		// 		case limit < 1 || limit > 10 || isNaN(limit):
		// 		  document.getElementById("p1").textContent = "Limit is out of range 1-10";
		// 		  break;
		// 		case limit >= 1 && limit <= 10 && page >= 1 && page <= 10:
		// 		  // Perform the request and handle the results here
		// 		  break;
		// 		default:
		// 		  // Handle any other cases here
		// 		  break;
		// 	  }});





 
  
  