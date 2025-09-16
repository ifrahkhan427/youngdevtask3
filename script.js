// Alert Button
document.getElementById("alertBtn").addEventListener("click", function () {
  alert("Hello! You clicked the button.");
});

// Image Slider
let images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400"
];
let index = 0;

function showImage(i) {
  document.getElementById("slider-img").src = images[i];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "All fields are required!";
  } else {
    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});
