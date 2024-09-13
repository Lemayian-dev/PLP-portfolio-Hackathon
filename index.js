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
   "Did you hear about the guy who invented Lifesavers? They say he made a mint!"
  ];
  
function generateMeme() {
    const memeText = document.getElementById('memeText');
    const randomIndex = Math.floor(Math.random() * jokes.length);
    memeText.textContent = jokes[randomIndex];

};