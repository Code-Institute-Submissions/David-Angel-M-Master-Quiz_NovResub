let questions = [
    {
        prompt: "1. Who was the lead singer of Nirvana?\n(a) Dave Grohl(b) Kurt Cobain\n(c) James Hetfield",
        answer: "b"
    },
    {
        prompt: "2. What heavy rock festival takes place every year at Donnington Park?\n(a) UK Rock\n(b) Glastonbury\n(c) Download",
        answer:"c"
    },
    {
        prompt: "3. Which group had the most UK number one singles in the 1960s?\n(a) The Animals\n(b) The Beatles\n(c) The Birds",
        answer:"b"
    },
    {
        prompt: "4. What colour was the Little Rooster according to the title of a Rolling Stones hit?\n(a) Red\n(b) Red/Blue\n(c) White",
        answer:"a"
    },
    {
        prompt: "5. Gordon Sumner is the real name of which musician?\n(a) Jim Morrison\n(b) Sting\n(c) Bruno Mars",
        answer:"b"
    },
    {
        prompt: "6. Which rapper had a hit with 'Gangster's Paradise' in 1995?\n(a) Biggie Smalls\n(b) 2Pac\n(c) Coolio",
        answer:"c"
    },
    {
        prompt: "7. 'Maybe I'm foolish, maybe I'm blind' is a lyric by which artist?\n(a) Rag'n'Bone Man\n(b) Adele\n(c) Harry Styles",
        answer:"a"
    },
    {
        prompt: "8. Which member of The Beatles formed Wings?/n(a) John Lennon\n(b) Paul McCartney\n(c) Ringo Star",
        answer:"b"
    },
    {
        prompt: "9. Ozzy Osbourne was the lead singer for which heavy metal band?\n(a) Iron Maiden\n(b) Motörhead\n(c) Black Sabbath",
        answer:"a"
    },
    {
        prompt: "10. Which song has the lyric “This hit, that ice cold, Michelle Pfeiffer, that white gold”?\n(a) Lose Yourself To Dance\n(b) Look At Me Now\n(c) Uptown Funk",
        answer:"c"
    },
    {
        prompt: "11. What nationality is Drake?\n(a) American\n(b) British\n(c) Canadian",
        answer:"c"
    },
    {
        prompt: "12. Which nation won the Eurovision Song Contest 2022?\n(a) Ukraine\n(b) Lithuania\n(c) Estonia",
        answer:"a"
    },
    {
        prompt: "13. According to Oasis, who knows it's too late?\n(a) Molly\n(b) Sally\n(c) Sully",
        answer:"b"
    },
    {
        prompt: "14. Who had hits with 'Johnny B. Goode' and 'Roll Over Beethoven'?\n(a) Elvis Presley\n(b) Chubby Checker\n(c) Chuck Berry",
        answer:"c"
    },
    {
        prompt: "15. Arctic Monkeys formed in which UK city?\n(a) Reading\n(b) Sheffield\n(c) Leeds",
        answer:"b"
    },
    {
        prompt: "16. What was Elvis Presley's home called?\n(a) Neverland\n(b) Dreamland\n(c) Graceland",
        answer:"c"
    },
    {
        prompt: "17. K-pop is a genre which refers to pop music from which country?\n(a) South Korea\n(b) Kenya\n(c) Korea",
        answer:"a"
    },
    {
        prompt: "18. In David Bowie's 'Space Oddity', who are ground control trying to contact?\n(a) Sargent Paul\n(b) Major Tom\n(c) Captain Rod",
        answer:"b"
    },
    {
        prompt: "19. “I got sunshine on a cloudy day” is the opening line to which song by The Temptations?\n(a)  Feel This Way\n(b) Sunshine\n(c) My Girl",
        answer:"c"
    },
    {
        prompt: "20. In what year did The Weather Girls have a hit with 'It's Raining Men'?\n(a) 1982\n(b) 1981\n(c) 1978",
        answer:"a"
    },
 
]
let score = 0;

for (let i = 0; i < questions.length; i++) {
  let response = window.prompt(questions[i].prompt); 
  if(response == questions[i].answer){
    score++;
    alert("Correct!");
  } else {
    alert("WRONG!");
  }
}
alert("You got " + score + "/" + questions.length);