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
      title: "Voyager X - Prologue",
      text: '<p>There it was, the long-lost Voyager X. Humanity&#39;s first attempt in space expedition. The beginning of the voyage upon the universe, where our dreams of swimming beside the stars would come true&mdash; left lifeless and broken like a floating corpse in space.&nbsp;</p> <p>&nbsp;</p> <p>What was once the symbol of discovery and the changing era of humanity, is now nothing but a relic of&nbsp;the past. It&rsquo;s been over 200 years since its disappearance. Suddenly without contact, vanished without a trace. But, it suddenly reappeared once more near the orbit of Jupiter. The report said that the last information relayed by the ship was the discovery of a mysterious energetic yet enigmatic substance. A dark cloud that produces energy from unknown sources. It would seem as if it could be the answer to energy problems, so the Voyager decided to uncover it. Yet after contact, the rest is history. A disastrous one for humanity. One we know nothing about.&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;Bet it&rsquo;s bullcrap in&rsquo; it?&rdquo; Roven muttered loudly while helming the ship, suddenly breaking the silence.&nbsp;</p> <p>&nbsp;</p> <p>Sarah who was behind him, shook her head once more like she always does to Roven. &nbsp;</p> <p>&nbsp;</p> <p>&ldquo;...What is it you&rsquo;re trying to say? You don&rsquo;t believe in Black Holes?&rdquo; She replied&nbsp;unwillingly.&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;Nah, that&rsquo;s it. That&rsquo;s where it&rsquo;s full of shit. The ship with capabilities to voyage the vast terrain of space&mdash;&nbsp;not detecting a black hole?&rdquo; Roven retorted as soon as she heard Sarah&rsquo;s reply.&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;Whatever it is out there, we don&rsquo;t know it, it could be alien for all we know really.&rdquo; Roven added. &nbsp;</p> <p>&nbsp;</p> <p>Sarah let out a big sigh and could only answer like usual. &ldquo;How many times do we have to have this conversation Roven? We&rsquo;ve scour the space for centuries now, and there&rsquo;ve never been any sign of life other than us!&rdquo;&nbsp;</p> <p>&nbsp;</p> <p>They both have had this argument since the beginning of the mission. After all, most of us here aren&rsquo;t exactly mates, we are just colleagues for the mission at best. Some of us are in for the money, the relics, some came in the name of knowledge and discoveries, maybe for the fame that comes with it. Many reasons to go on this mission, many emotions and goals, but for most of us? It&rsquo;s because we don&rsquo;t have a choice. We were simply chosen to rediscover what was once the discoverer. &nbsp;</p> <p>&nbsp;</p> <p>&ldquo;There is clear evidence that the ship malfunctioned due to a special kind of fog that surrounds the black hole.&rdquo; Sarah added to the argument continuing where she had left. &nbsp;</p> <p>&nbsp;</p> <p>&ldquo;Look&hellip; all I&#39;m saying is that we&rsquo;ve been sent here not knowing what we&rsquo;re about to run into. We ought to be careful of every possibilities.&rdquo; Roven answered calmly this time.&nbsp;</p> <p>&nbsp;</p> <p>Sarah can only sulk as she herself probably knew the weight of Roven&rsquo;s words. She&rsquo;d try to convince others about the &lsquo;facts&rsquo; of the Voyager X, but deep down she&rsquo;s also doing it for herself. So that she can be less anxious about it. Meanwhile, Alan and I could only listen from the back as we prepare ourselves for what was coming.&nbsp;</p> <p>&nbsp;</p> <p>None of us know what&rsquo;s ahead, none of us know what to expect...&nbsp;</p> <p>&nbsp;</p> <p>The Voyager X was as close as it ever was to human contact in over two centuries. The vessel looks broken, left to rot. The material that coated the outer layer seemed corroded in some parts. Yet, it was different. The colour is black instead of darkish brown. &nbsp;</p> <p>&nbsp;</p> <p><em>That&rsquo;s weird&hellip;</em> I thought to myself. The materials for the first voyage of humanity are chosen and developed as meticulously as possible, it is a rare material that should not be rotting and could withstand insane levels of heat and radiation for centuries. &nbsp;</p> <p>&nbsp;</p> <p>I am sure, the others had the same thought on their minds, we simply ignored it. Whatever it is, what is for sure is that we&rsquo;ll go home in fame. Whatever we find, it&rsquo;ll be the fortune we&rsquo;ll claim. Whoever we met&mdash; we can only hope&nbsp;it&rsquo;s someone with a name.&nbsp;</p> <p>&nbsp;</p> <p>As our ship closed the distance to the dock, a sudden signal appeared on the radar. <em>Sign of life!</em>&nbsp;Sarah shouted.&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;That&rsquo;s not possible!&rdquo; Rowen retorted in quick succession.&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;It can&rsquo;t be mistaken! It&rsquo;s a human&hellip; I can&rsquo;t believe it!&rdquo; Sarah once again added with excitement in her tone.&nbsp;</p> <p>&nbsp;</p> <p>However, that expression turned to grim as quickly as it glowed. With a tone that a saddened tone she said,&nbsp;&ldquo;That person is dying&hellip;&rdquo;&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;Well, what are we waiting for? We gotta save them.&rdquo; Alan replied, his voice brought back sense to Sarah as she furiously went back to her screen. Alan who was silence for most of the journey suddenly spoke with resolve. There was no hesitation in his voice.&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;From the map, the signal is coming from one of the hibernation pods.&rdquo; Her tone went back to her professional self. &nbsp;</p> <p>&nbsp;</p> <p>&ldquo;They must have tried to escape and survived in the hibernation pod instead&rdquo; She added.&nbsp;</p> <p>&nbsp;</p> <p>As the dock opened for our ship to land, the inside was anything that we had imagined it to be. The light from us suggested that the interior seemed undamaged. As Sarah turned on the lights of the dock though her control panel, it only confirmed the glimpse of what we had seen. The inside of the ship looked new, as if untouched. Yet, there were no one to be found. The smaller ships on the dock seemed to still be working properly. At least that was what the computer suggested&hellip;&nbsp;</p> <p>&nbsp;</p> <p>We got off the ship to embark towards the room with the hibernation pods. Everything, not just the dock, seemed like it should still be working properly. No damage, no scratches. It doesn&rsquo;t seem like Voyager X is broken, just abandoned suddenly. As the team continue through the wide corridors, the lights were still lit properly. There were no signs of this place ever been touched by people. It was a bizarre scenery. &nbsp;</p> <p>&nbsp;</p> <p>While discussing of Sarah and I were discussing some possibilities to this anomaly. Suddenly, it felt like I had just stepped on a wet surface. <em>Whoa!</em> I reacted. Alan and Sarah looked at me and asked me in concern, I had told them that I felt a bit weird on my feet. But as I look behind, there was nothing on the floor. Since there wasn&rsquo;t anything, I simply told them that I felt wet surface on the floor, but I explained that it might have been just me as my shoes are as dry as it can be. The floor is made with special materials that can dry and clean itself, and it also tone down the sound of metal so that people&rsquo;s footsteps wouldn&rsquo;t echo too loud while walking through the corridors. &nbsp;</p> <p>&nbsp;</p> <p>Sarah spoke explaining to me about the impressive engineering of the ship, &ldquo;These floors are coated with special materials that could dry and clean itself. It could also tone down the sound of metal so that footsteps wouldn&rsquo;t be&mdash;&nbsp;</p> <p>&nbsp;</p> <p>Rowen&nbsp;abruptly raised his hand in front of our paths to stop us. And talked in a low voice.&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;<em>Shush&hellip;</em> Did ya hear that?&rdquo; Rowen said as he looked around&mdash; none of us had heard anything beside him.&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;Are you going senile old man?&rdquo; Sarah said, breaking the silence. &nbsp;</p> <p>&nbsp;</p> <p>&ldquo;It was a shrieking sound, a small one.&rdquo; Rowen elaborated.&nbsp;</p> <p>&nbsp;</p> <p>Sarah simply continued walking in disbelief as she wouldn&rsquo;t trust what Rowen said and simply thought of it as if Rowen tried to scare her. &nbsp;</p> <p>&nbsp;</p> <p>&ldquo;There weren&rsquo;t any sound. And if there were we should&rsquo;ve hea&mdash; <em>Eeek&mdash;</em>&rdquo;&nbsp;</p> <p>&nbsp;</p> <p>Sarah suddenly squeaked mildly as if she had touched something. Alan asked her out of concern, but she had only disregarded it as a slight anxiety attack.&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;I just felt a little cold, goosebumps, because of the anxiety you are giving me.&rdquo; She said while pointing to Rowen.&nbsp;</p> <p>&nbsp;</p> <p>She went back to walk behind Rowen and me who was leading the charge. I don&rsquo;t know if it was her anxiety that made her lose her confidence or that she could have actually felt something back then. Either way, I had a feeling she herself couldn&rsquo;t tell which was it. Whatever that was, we simply proceed further towards the hibernation pods. &nbsp;</p> <p>&nbsp;</p> <p>As we close the distance to the room for the hibernation pods, it can be seen from afar that the door is unlike anything inside the ship. It looked like the outer part of the ship, corroded but with dark coloured and seemed to truly show its age. It had sign that people have used this place in the past. Inside, there were other pods unused, 5 of them in total. The one on the right-most side beside the computer was&nbsp;still on. &nbsp;</p> <p>&nbsp;</p> <p>Sarah instantly turned on the computer as it was still working fine.&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;Look at these&hellip; these are research data. Just&nbsp;taking this back could make us a fortune!&rdquo;&nbsp;</p> <p>&nbsp;</p> <p>She seemed to have stumbled upon long lost data and decided to copy everything while browsing them. One of the recent notes seems to touch upon the final moments of the ship and the people inside it.&nbsp;</p> <p>&nbsp;</p> <p><em>At last! The grand discovery! With this, we could change humanity&mdash;</em>&nbsp;</p> <p>&nbsp;</p> <p>That was the title of the note, yet after that, the data was&nbsp;corrupted.&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;Ah I found something!&rdquo; Sarah found a secret files between the notes, it would seem as if it was the newest addition to the research as it was written after the incident. &nbsp;</p> <p>&nbsp;</p> <p><em>I have finally discovered the medicine, but it was too late for everyone else.&nbsp;With this I could finally see, I can finally see again, the real&mdash;</em> &nbsp;</p> <p>&nbsp;</p> <p>The note ended there as if the writer had invented a new medicine. Sarah was able to access the liquid medicine and it&nbsp;popped out beside the keyboard. It was a gun containing said medicine&nbsp;in a serum that could last for quite a few shots. &nbsp;</p> <p>&nbsp;</p> <p>&ldquo;So how do we save him?&rdquo; Alan asked while Sarah was still elated for what she had discovered. &nbsp;</p> <p>&nbsp;</p> <p>&ldquo;His vitals&rsquo;re weak, but maybe that &lsquo;thing&rsquo; could revive him&rdquo; Rowen said as he pointed at the person sleeping soundly in the pod. &nbsp;</p> <p>&nbsp;</p> <p>I took the gun as I readied myself to shoot it to his neck. Alan half managed to half opened the pod, still covered with the protective glass with just his head and neck exposed. I guess, I just need to shoot it at his neck.&nbsp;</p> <p>&nbsp;</p> <p>Suddenly, Sarah shouted &ldquo;WAIT!&rdquo;&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;This could be a ground breaking medicine. One that we could replicate back on Earth.&rdquo;&nbsp;</p> <p>&nbsp;</p> <p>She had a point, but then again there should be multiple shots still available. I&rsquo;m certain that we could also ask him how to make even more later on as well. Alan then spoke what I had thought.&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;There are couple of shots in there, revive him, and we can ask him how to make more of it no?&rdquo;&nbsp;</p> <p>&nbsp;</p> <p>Sarah, realizing what she had said can only replied with &ldquo;That&rsquo;s&hellip; true&rdquo;. I can&rsquo;t blame her really, these sort of amazing discoveries, relics, you just want to keep them preserved and learn them further. She must have been a bit too excited for it.&nbsp;</p> <p>&nbsp;</p> <p>As I reach closer and I point the gun at his neck, my hand was over the glass of the pod, and I accidentally brushed it. There were some writings on it that was hard to make of. I brushed it harder with my gloves and something was badly written.&nbsp;</p> <p>&nbsp;</p> <p><em>Don&rsquo;t trust the surroundings</em>&nbsp;</p> <p>&nbsp;</p> <p>As I read that, I stopped my hand from using the gun and looked around. I felt cold for some reason, it may be because I&rsquo;m anxious but I&rsquo;m just unsure. Maybe, I&rsquo;m just overthinking it.&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;What are you doing?&rdquo; Alan said, waking me up from my little world of thoughts. &nbsp;</p> <p>&nbsp;</p> <p>&ldquo;Ye tryna reserve the shot or something?&rdquo; Rowen added. &nbsp;</p> <p>&nbsp;</p> <p>&ldquo;It&rsquo;s fine, just use it&rdquo; Even Sarah was telling me to&nbsp;simply do it.&nbsp;</p> <p>&nbsp;</p> <p>I looked at the person in front of me, sleeping soundly, still alive and can be saved. I looked around the empty rooms with empty pods, the door to the room that is nice and clean. Then, I looked at the computers, the vital signs are weak, but they are truly showing even on the computers. Yet, I&rsquo;m hesitating&nbsp;whether I should use the shot on him.&nbsp;</p>',
      routes: [
        {
          text: 'Use the shot',
          nextText: 2
        },
        {
          text: 'Don’t use the shot',
          nextText: 3
        }
      ]
    },
    {
      id: 2,
      title: "Voyager X - Use the shot",
      text: '<p>I stopped to think about anything else and focus on what was important. Saving the life of someone in front of me. Whatever the question, we might get the answer from him. I then&nbsp;pulled the trigger to inject the serum. &nbsp;</p> <p>&nbsp;</p> <p>&hellip; After waiting for a while, the vitals on the screen shows no improvements, weak and afloat in-between death and alive. &nbsp;</p> <p>&nbsp;</p> <p>&ldquo;Did you&hellip; actually do it?&rdquo; Alan asked in confusion.&nbsp;</p> <p>&nbsp;</p> <p>Neither of us knew if the medicine actually worked or not. I just did what I was told to do. I was as confused as he was.&nbsp;</p> <p>&nbsp;</p> <p>&ldquo;D&rsquo;you think maybe he needs more of those things?&rdquo; Rowen suggested. &nbsp;</p> <p>&nbsp;</p> <p>&ldquo;That &lsquo;thing&rsquo; is supposed to work in an instant&rdquo; Sarah added while looking at the computer screen, reading the data of the research. While that may be true, I&rsquo;ve also came to the conclusion that he might need more doses as he might have been dying for such a long time. &nbsp;</p> <p>&nbsp;</p> <p>I looked around towards the others and told them what I was about to do. I injected the rest of the serum into him in hope for better results&mdash; It turned out the same. Nothing had changed, the past seemed to sleep soundly in the capsule as his life hangs on with what is left to support him.&nbsp;</p> <p>&nbsp;</p> <p><em>What a waste&hellip;</em> I thought to myself. Even with disappointments in our faces, most of us knew that we had to continue. We can only hope that the medicine will work eventually, that we just had to go search for other places inside the Voyager X to find more clues and collect data.&nbsp;</p> <p>&nbsp;</p> <p>After Sarah was done with copying the data, we went out of the room to continue the expedition. From outside of the opened door, Alan stood in front of the capsule, looking at the face of the sleeping man. His facial expression was showing difficult emotions as he tried to suppress his feelings. Is it the feeling of hopelessness? Sadness? Maybe regret? &mdash;I wouldn&rsquo;t know for sure, but we had to keep moving so I called him out as he snapped back from his thoughts and walked away from the pod. As we walked once more, away from the room, Alan was walking behind us looking down, slightly dejected. &nbsp;</p> <p>&nbsp;</p> <p>The sound that Rowen said he heard, the wet surface that I thought I felt, and the cold feeling that Sarah said she felt. None of that happened anymore, it felt like everything had gone back to normal. We simply continue our walk, the only thing can be heard is the echoing sound of four sets of&nbsp;footsteps as we walked in emptiness.&nbsp;</p> <p>&nbsp;</p> <p><em>Wait&hellip; echoing footsteps?</em> I instantly thought aloud while stopping as both Rowen and Sarah looked from beside me. We were so occupied by what had transpired before that we didn&rsquo;t realize an anomaly that had just happened. &nbsp;</p> <p>&nbsp;</p> <p>As we stopped, the echoes also stopped, but I felt a sudden cold in my body&mdash; not from fear, it was from outside. I looked towards the back to check on Alan who was walking behind us, the light on the corridors seemed dimmer for some reason, but most importantly, he was not behind us anymore. The sound of shrieking metal ensued, and I&rsquo;m sure both Rowen and Sarah heard that too as they jolted slightly in surprise.&nbsp;</p> <p>&nbsp;</p> <p><em>Alan&mdash;?</em></p>',
      routes: [
        {
          text: 'End: Read Again?',
          nextText: -1
        }
      ]
    },
    {
      id: 3,
      title: "Voyager X - Don't use the shot",
      text: '<p>I decided to trust my unreasonable instinct and points the gun to own neck. The others shouted towards me as if I am insane&mdash; but I just felt like I had to do it. I pulled the trigger as the medicine inside the serum surged inside my blood, my body. My head hurts and my vision blurred for one moment, the light in my eye felt like it was getting dimmer.</p> <p>&nbsp;</p> <p>No&mdash; it wasn&rsquo;t that I was losing consciousness, it was as if I saw a whole different room with my eye. One that is wholly different from what we had seen so far. Quickly, before my vision went back to me, I pointed the gun at Sarah, then Rowen, and finally Alan. All of them seemed reluctant and told me that I&rsquo;ve gone insane. But none of them could talk back as they were having the same experience I had and could only writhe in anger and confusion.</p> <p>&nbsp;</p> <p>As soon as our vision gathered, and we could once more see the surroundings. None of us had any words for what we were witnessing.</p> <p>&nbsp;</p> <p>&ldquo;What in the hell&hellip;?&rdquo; Rowen muttered, commenting on the situation.</p> <p>&nbsp;</p> <p><em>Ahh!!</em> Sarah jumped in surprise as the seating and the computer she was accessing just a moment ago, now looked broken. The screen was smashed, and the table was a mess, there were no electricity running through it. The room was suddenly way dimmer than it was before as there were one sole light that barely worked. On top of the pod lighting the face of the person we were about to save.</p> <p>&nbsp;</p> <p>Sarah gasped as she closed her mouth with her hand looking away. It was a corpse that had long died. The capsule was broken just like the rest of the computers. But it seems that the hole in the capsule is not due to time. As if there were something that stabbed through it breaking it open. Suddenly, our sense of smell came back to us as we could smell the rotting corpse that was left behind in the pod. <em>Bloody hell!</em> Rowen said while covering half of his face.</p> <p>&nbsp;</p> <p>Meanwhile, Alan took the flashlight from his utility belt to look at the rest of the room.</p> <p>&nbsp;</p> <p>&ldquo;Hey, hey, look&hellip;&rdquo; Alan said slightly in deterred tone.</p> <p>&nbsp;</p> <p>The rest of the capsules are destroyed, and the room was in a mess. The walls that just few moments ago looked clean, now broken with scratches and holes. There was black liquid left over in some of the pods, and some more on the floor.</p> <p>&nbsp;</p> <p>We ran outside to check the wide corridors, it was pitch black&mdash; none of us could see what was out there. All of us pulled out our flashlight just like Alan, to check our surroundings. The situation was the same, broken floors and walls. It seemed as if the place was ravaged with something, no&mdash; it was infested by something, no mere impact is able to create such complex damages and it wouldn&rsquo;t produce some unknown liquid all over.</p> <p>&nbsp;</p> <p>We could feel the cold that shivered our bone, not from fear, but from the outside. There were echoes and shrieking sound as Rowen described earlier. The sound came from behind where we were before.</p> <p>&nbsp;</p> <p>We looked behind to see from afar in the corridors, moving very slowly towards us. It was dark and enigmatic matter that consumed even our flashlight as we pointed towards it. It had an eerie presence, whatever it was our human instinct was telling us to go as far away as possible from it.</p> <p>&nbsp;</p> <p><em>RUN!!&mdash; &mdash; &ndash;</em></p>',
      routes: [
        {
          text: 'To be continued: Read Again?',
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