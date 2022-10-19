let questions = [
    {
        prompt: "1. Who was the lead singer of Nirvana?",
        a: "Dave Grohl",
        b: "Kurt Cobain",
        c: "James Hetfield",
        answer: "b"
    },
    {
        prompt: "2. What heavy rock festival takes place every year at Donnington Park?",
        a: "UK Rock",
        b: "Glastonbury",
        c: "Download",
        answer: "c"
    },
    {
        prompt: "3. Which group had the most UK number one singles in the 1960s?",
        a: "The Animals",
        b: "The Beatles",
        c: "The Birds",
        answer: "b"
    },
    {
        prompt: "4. What colour was the Little Rooster according to the title of a Rolling Stones hit?",
        a: "Red",
        b: "Red/Blue",
        c: "White",
        answer: "a"
    },
    {
        prompt: "5. Gordon Sumner is the real name of which musician?",
        a: "Jim Morrison",
        b: "Sting",
        c: "Bruno Mars",
        answer: "b"
    },
    {
        prompt: "6. Which rapper had a hit with 'Gangster's Paradise' in 1995?",
        a: "Biggie Smalls",
        b: "2Pac",
        c: "Coolio",
        answer: "c"
    },
    {
        prompt: "7. 'Maybe I'm foolish, maybe I'm blind' is a lyric by which artist?",
        a: "Rag'n'Bone Man",
        b: "Adele",
        c: "Harry Styles",
        answer: "a"
    },
    {
        prompt: "8. Which member of The Beatles formed Wings?",
        a: "John Lennon",
        b: "Paul McCartney",
        c: "Ringo Star",
        answer: "b"
    },
    {
        prompt: "9. Ozzy Osbourne was the lead singer for which heavy metal band?",
        a: "Iron Maiden",
        b: "Motörhead",
        c: "Black Sabbath",
        answer: "a"
    },
    {
        prompt: "10. Which song has the lyric “This hit, that ice cold, Michelle Pfeiffer, that white gold”?",
        a: "Lose Yourself To Dance",
        b: "Look At Me Now",
        c: "Uptown Funk",
        answer: "c"
    },
    {
        prompt: "11. What nationality is Drake?",
        a: "American",
        b: "British",
        c: "Canadian",
        answer: "c"
    },
    {
        prompt: "12. Which nation won the Eurovision Song Contest 2022?",
        a: "Ukraine",
        b: "Lithuania",
        c: " Estonia",
        answer: "a"
    },
    {
        prompt: "13. According to Oasis, who knows it's too late?",
        a: "Molly",
        b: "Sally",
        c: "Sully",
        answer: "b"
    },
    {
        prompt: "14. Who had hits with 'Johnny B. Goode' and 'Roll Over Beethoven'?",
        a: "Elvis Presley",
        b: "Chubby Checker",
        c: "Chuck Berry",
        answer: "c"
    },
    {
        prompt: "15. Arctic Monkeys formed in which UK city?",
        a: "Reading",
        b: "Sheffield",
        c: " Leeds",
        answer: "b"
    },
    {
        prompt: "16. What was Elvis Presley's home called?",
        a: "Neverland",
        b: "Dreamland",
        c: " Graceland",
        answer: "c"
    },
    {
        prompt: "17. K-pop is a genre which refers to pop music from which country?",
        a: "South Korea",
        b: "Kenya",
        c: "Korea",
        answer: "a"
    },
    {
        prompt: "18. In David Bowie's 'Space Oddity', who are ground control trying to contact?",
        a: "Sargent Paul",
        b: "Major Tom",
        c: " Captain Rod",
        answer: "b"
    },
    {
        prompt: "19. “I got sunshine on a cloudy day” is the opening line to which song by The Temptations?",
        a: "Feel This Way",
        b: "Sunshine",
        c: "My Girl",
        answer: "c"
    },
    {
        prompt: "20. In what year did The Weather Girls have a hit with 'It's Raining Men'?",
        a: "1982",
        b: "1981",
        c: "1978",
        answer: "a"
    },
 
]
let score = 0;
let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex];
let optionButtons = document.getElementsByClassName('option');

function showQuestion(question) {
    document.getElementById('question').innerText = question.prompt;
    document.getElementById('option1').innerText = question.a;
    document.getElementById('option2').innerText = question.b;
    document.getElementById('option3').innerText = question.c;
}

function validateAnswer(event){
    const userAnswer = event.target.getAttribute('data-value');
    console.log('user answer', userAnswer);

    if (userAnswer === currentQuestion.answer){
        console.log("Correct");
        score = score + 1;
        document.getElementById('score').innerText = score;
    }else{
        console.log("Incorrect");
    }
    currentQuestionIndex = currentQuestionIndex + 1;
    currentQuestion = questions[currentQuestionIndex];
    showQuestion(currentQuestion);
}


for (const button of optionButtons){
    button.addEventListener('click', validateAnswer)
}

showQuestion(currentQuestion);
