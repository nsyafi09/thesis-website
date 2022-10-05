const storyEl = document.getElementById('story')
const routesEl = document.getElementById('routes')

const titleEl = document.getElementById('title')



// Interactive Story (game)
let state = {}


function startGame() {
    state = {}
    showStoryNode(1)
}

function showStoryNode(storyNodeIndex) {
    const storyNode = storyBranch.find(storyNode => storyNode.id === storyNodeIndex)
    // If added to check if it exist
    if (storyEl) {
      storyEl.innerHTML = storyNode.text
    }
    if (titleEl) {
      titleEl.textContent = storyNode.title
    }

    if (routesEl) {
      // Removing Routes Element from HTML
      while (routesEl.firstChild) {
        routesEl.removeChild(routesEl.firstChild)
      }

      storyNode.routes.forEach(route => {
        if (showRoute(route)) {
          const choice = document.createElement('a')
          choice.innerText = route.text
          choice.setAttribute("href", "#top")
          choice.addEventListener('click', () => selectRoute(route))
          routesEl.appendChild(choice)
        }
      })
    }
}

function showRoute(route) {
    return route.requiredState == null || route.requiredState(state)
}

function selectRoute(route) {
    const nextStoryNodeId = route.nextText
    if (nextStoryNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, route.setState)
    showStoryNode(nextStoryNodeId)
}


const storyBranch = [
    {
      id: 1,
      title: "Had I Have One More Envelope to Write",
      text: '<p id=\"story\">\n            A nostalgic scent came to mind, an old tale which began to uncover\n            itself to the surface of heart. The old to thrive, not giving to the\n            world, to expect a better tomorrow and to appreciate every day. That\n            old rhyme of feeling would bring me back, just to give you an\n            envelope with a letter inside. Just like it was many years ago.\n            <br><br>\n            If time were to just go back to that smiling days, then I would\n            still be writing this letter to you. An old one, revealing my\n            adventures to you, the things I have done, and the people I have\n            met. Just looking at the sky reminded me that we look at the same\n            one. I just hope that you are still looking at it, this beautiful\n            view blessed by the majesty of the world. For just one more time, I\n            would like to give you a letter inside the envelope, one that had\n            not come for many long nights. I would like to repay you for your\n            kindness, your love, everything you have done for me. I want it to\n            give you a tiny smile under this pretty sky, to give you a thank you\n            letter from me to you.<br><br>\n            I started writing the things I want to say, so many things came to\n            mind that the paper was written with imaginary ink. Empty, without a\n            word, because a single paper could not explain how much you meant to\n            me. I used the same envelope, the old one that I used to gave you.\n            The envelope brought me an old world that brought me to tears.\n            Reminding me of that nostalgic breeze, I kept writing with the\n            shadow pen, all I know is that I would jump with joy had I meet you\n            once more. As I finished my letter, to give it to you was my\n            purpose. For once, I want to give it by myself. This envelope with a\n            letter inside that took so long, just to come for you. <br><br>\n            I took the plane leaving the big city, to an old rural place where\n            we used to play. While the thought of seeing you clouded my emotion.\n            I could not wipe the grin off of my face. In that old town where the\n            many of the young left to search for a larger pond, flowing through\n            a river to the world of sea, leaving it forever. Many things have\n            changed, many new things I have never seen before, yet the feeling\n            was never different. It was the same rhyme of memoirs as the one I\n            felt years ago. The letter I hold for you, inside this old envelope\n            that is meant for you, as if shaking out of patience for it to meet\n            its reader.<br><br>\n            I took the train and opened the window. This wind that never gets\n            old startled me, breezy in the face. It reminded me of the time we\n            played, the days we wished the sun would never set. The night where\n            it is cold and you told me to not be scared. As long as the heart\n            moves, the dream and effort would never fade. The encouragement you\n            gave that led me here. I would like to give you one more envelope\n            with a letter inside.<br><br>\n          </p>',
      routes: [
        {
          text: 'Route 1: Continue Story',
          nextText: 2
        },
        {
          text: 'Route 2: Stop Here',
          nextText: 3
        }
      ]
    },
    {
      id: 2,
      title: "Had I Have One More Envelope to Write - Continue",
      text: '<p id=\"story\">\n            Up on the hill that was once our playground. An unknown surprised sound echoed in my ears, calling me was an old woman who was alone. She has aged but her souls remains bound, to this very place she called home. Her smile had never fainted from her face, as if welcoming me to this nostalgic ground. It felt like I was home again.\n            <br><br>\n            I took out the letter inside, then she smiled as a reply. She gestured with her hand, asking me to come to her side. I accompanied her to the backyard, where there lies a stone with name written on. I hold the envelope in my hand tight. She had been left by her husband for years.<br><br>\n            As soon as I opened the envelope, tears would smile for my face. In front of the resting place of an old friend, a story ended without my knowledge. It ended a long ago. Had came sooner, would I have been able to say the things that I want to say to him, I asked to myself. Yet, she came to me to say, that it’s all going to be alright.  <br><br>\n            I started to moving my shaking mouth, to try and say clearly so my old friend would listen easily. The sudden breeze came crashing to my face, calming my soul. This time I am going to tell you the best of the best story that you have never heard before, and you better like it whether you are listening or not, whether you are here or not. Something that I should have said years ago.<br><br>\n            “Thank you very much, for everything, thank you”<br><br>\n            Although you were long gone, I hope we can still smile just like long ago. I hope that we would meet again one day, wherever that is. For now, this here and would be, my last envelope from me to you. Sincerely, little bro. <br><br>\n            - END - \n          </p>',
      routes: [
        {
          text: 'End: Read Again?',
          nextText: -1
        }
      ]
    },
    {
      id: 3,
      title: "Had I Have One More Envelope to Write - Bad End",
      text: 'Up on the hill the mystery lies yet the story never unfolds, it was never told. Forever in reminiscing of that nostalgic sound that would never echo once more.',
      routes: [
        {
          text: 'Read Again',
          nextText: -1
        }
      ]
    }
  ]
  
startGame()





// For the Chat BOX

const chat = document.getElementById('chatBox')
if (chat) {
  chat.style.display = 'none';

  // chatButton.addEventListener("click", showChat);

  function showChat() {
    if (chat.style.display === "none") {
      chat.style.display = "block";
    } else {
      chat.style.display = "none";
    }
  }
}

// const chatButton = document.getElementsByClassId("chatBtn");
// chatButton.addEventListener("click", function() {
//   if (chat.style.display === "none") {
//     chat.style.display = "block";
//   } else {
//     chat.style.display = "none";
//   }
// })