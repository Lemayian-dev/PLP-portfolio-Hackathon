// menu toggle for the mobile phone
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
// menu toggle for mobile menu
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
const navLinksItems = document.querySelectorAll(".nav-links a");
navLinksItems.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  }
});

// Theme Toggle Functionality
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem("theme") || "dark";
body.classList.toggle("light-theme", currentTheme === "light");

// Update theme toggle icon
const updateThemeIcon = () => {
  const icon = themeToggle.querySelector("i");
  if (body.classList.contains("light-theme")) {
    icon.className = "fas fa-sun";
  } else {
    icon.className = "fas fa-moon";
  }
};

updateThemeIcon();

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  const newTheme = body.classList.contains("light-theme") ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  updateThemeIcon();
});

// Scroll Progress Bar
const scrollProgress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + "%";
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, observerOptions);


// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(el => observer.observe(el));
  
  // Animate skill bars when they come into view
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    const progressBar = item.querySelector('.skill-progress');
    const width = progressBar.getAttribute('data-width');
    
    if (width) {
      progressBar.style.setProperty('--skill-width', width);
    }
  });
});

// Enhanced skill bar animation
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillItem = entry.target;
      const progressBar = skillItem.querySelector('.skill-progress');
      const width = progressBar.getAttribute('data-width');
      
      if (width) {
        setTimeout(() => {
          progressBar.style.width = width;
        }, 200);
      }
      
      skillObserver.unobserve(skillItem);
    }
  });
}, { threshold: 0.5 });

// Observe skill items
document.addEventListener('DOMContentLoaded', () => {
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => skillObserver.observe(item));
});

// Project Filtering Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    const filter = button.getAttribute('data-filter');
    
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        card.classList.remove('filtered-out');
        card.classList.add('filtered-in');
      } else {
        card.classList.remove('filtered-in');
        card.classList.add('filtered-out');
      }
    });
  });
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

  // CTA Popup functionality
  function closePopup() {
    const popup = document.getElementById("popup");
    if (popup) {
      popup.style.display = "none";
    }
  }
  
  // Make closePopup globally available
  window.closePopup = closePopup;
});

// Contact Form 07 handling
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  const formMessageWarning = document.getElementById("form-message-warning");
  const formMessageSuccess = document.getElementById("form-message-success");
  const submitting = document.querySelector(".submitting");

  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      // Hide previous messages
      formMessageWarning.style.display = "none";
      formMessageSuccess.style.display = "none";
      
      // Show submitting state
      submitting.style.display = "block";
      
      // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
        submitting.style.display = "none";
        formMessageSuccess.style.display = "block";
        contactForm.reset();
        
        // Show popup message
        document.getElementById("popupMessage").style.display = "block";
      }, 1000);
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


// Design filter functionality
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll('.design-filters .filter-btn');
  const designItems = document.querySelectorAll('.design-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      designItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category').includes(filter)) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.5s ease-in-out';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

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

// Image Modal Functionality
function openImageModal(imageSrc, imageTitle) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const closeModal = document.querySelector('.close-modal');
  
  modalImage.src = imageSrc;
  modalImage.alt = imageTitle;
  modalTitle.textContent = imageTitle;
  modal.style.display = 'block';
  
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
  
  // Add event listener to close button
  if (closeModal) {
    closeModal.onclick = function() {
      closeImageModal();
    };
  }
}

function closeImageModal() {
  console.log('Closing modal...'); // Debug log
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
  
  // Restore body scroll
  document.body.style.overflow = 'auto';
}

// Close modal when clicking the X button
document.addEventListener('DOMContentLoaded', function() {
  // Close modal when clicking the X button
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close-modal')) {
      closeImageModal();
    }
  });
  
  // Close modal when clicking outside the image
  const modal = document.getElementById('imageModal');
  const modalContent = document.querySelector('.modal-content');
  
  if (modal) {
    modal.addEventListener('click', function(e) {
      // Only close if clicking the modal background (not the content area)
      if (e.target === modal) {
        closeImageModal();
      }
    });
  }
  
  // Prevent modal content clicks from closing the modal
  if (modalContent) {
    modalContent.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeImageModal();
    }
  });
});
