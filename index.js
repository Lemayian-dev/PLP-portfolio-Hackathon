// menu toggle for the mobile pone
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// container for memes. its an array
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my wife she should embrace her mistakes. She hugged me.",
  "Why don't skeletons fight each other? They don't have the guts!",
  "I bought a new computer chair, but it's been causing a lot of problems. I think it's just armless teasing.",
  "Why don't eggs tell jokes? Because they might crack up!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't some couples go to the gym? Because some relationships don't work out!",
  "What's the best thing about Switzerland? I don't know, but their flag is a huge plus!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "I started a band called 1023MB. We haven't gotten any gigs yet.",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What's the best thing about Switzerland? I don't know, but their flag is a huge plus!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "How do you organize a space party? You planet!",
  "Why don't some couples go to the gym? Because some relationships don't work out!",
  "I'm on a whiskey diet. I've lost three days already.",
  "I'm friends with 25 letters of the alphabet. I don't know why.",
  "Did you hear about the guy who invented Lifesavers? They say he made a mint!",
];

function generateMeme() {
  const memeText = document.getElementById("memeText");
  const randomIndex = Math.floor(Math.random() * jokes.length);
  memeText.textContent = jokes[randomIndex];
}

// code when someone scrolls to the middle of the page
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("popup-close");
  let hasShown = false;


// Show the popup when the user scrolls to the middle of the page
  function checkScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const middleOfPage = document.documentElement.scrollHeight / 2;

    if (scrollPosition > middleOfPage && !hasShown) {
      popup.style.display = "flex";
      hasShown = true;
    }
  }

  window.addEventListener("scroll", checkScroll);

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  // Optional: Close popup if user clicks outside of it
  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });

  // Handle popup form submission
  const popupContactForm = document.getElementById("popupContactForm");
  if (popupContactForm) {
    popupContactForm.addEventListener("submit", function (event) {
      // Optionally, you can show a thank you message or close the popup
      setTimeout(() => {
        popup.style.display = "none";
      }, 500);
    });
  }
});

// code for the popup on contact form
document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("popupMessage").style.display = "none";
});

window.addEventListener("click", function (event) {
  const popup = document.getElementById("popupMessage");
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

// Resume download functionality
document.getElementById("download-btn").addEventListener("click", function () {
  var link = document.createElement("a");
  link.href = "Resume/Isaac Lemayian CV.pdf";
  link.download = "Your_Resume_Name.pdf";
  link.click();
});

// reviews section


// Reviews section functionality
document.addEventListener("DOMContentLoaded", () => {
  const reviews = document.querySelectorAll(".review");
  let currentReview = 0;

  // Show the first review by default
  reviews[currentReview].classList.add("active");

  // Function to change reviews
  function changeReview(direction) {
    reviews[currentReview].classList.remove("active");
    currentReview =
      (currentReview + direction + reviews.length) % reviews.length;
    reviews[currentReview].classList.add("active");
  }

  // Add event listeners for buttons
  document.querySelector(".prev").addEventListener("click", () => {
    changeReview(-1); // Show previous review
  });

  document.querySelector(".next").addEventListener("click", () => {
    changeReview(1); // Show next review
  });
});
