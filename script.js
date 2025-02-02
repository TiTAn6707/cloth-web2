const fileUpload = document.getElementById('file-upload');
const uploadBtn = document.getElementById('upload-btn');
const closetItems = document.getElementById('closet-items');
const combinations = document.getElementById('combinations');

let closet = [];

uploadBtn.addEventListener('click', () => {
    const files = fileUpload.files;
    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('clothing-item');
            closetItems.appendChild(img);
            closet.push(img.src); // Save image to closet
        };
        reader.readAsDataURL(file);
    }
    generateCombinations(); // Generate combinations after upload
});

function generateCombinations() {
    combinations.innerHTML = ''; // Clear previous combinations
    if (closet.length < 2) return; // Need at least 2 items to combine

    for (let i = 0; i < closet.length; i++) {
        for (let j = i + 1; j < closet.length; j++) {
            const combinationDiv = document.createElement('div');
            combinationDiv.classList.add('combination');

            const img1 = document.createElement('img');
            img1.src = closet[i];
            img1.classList.add('clothing-item');

            const img2 = document.createElement('img');
            img2.src = closet[j];
            img2.classList.add('clothing-item');

            combinationDiv.appendChild(img1);
            combinationDiv.appendChild(img2);
            combinations.appendChild(combinationDiv);
        }
    }
}

function animateCombination(combinationDiv) {
    gsap.from(combinationDiv, {
        duration: 1,
        opacity: 0,
        x: -100,
        ease: "power2.out"
    });
}

// Call this function in generateCombinations after appending each combinationDiv
animateCombination(combinationDiv);

