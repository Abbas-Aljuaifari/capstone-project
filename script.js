const speakerWrapper = document.getElementById('speaker-wrapper');
const hambarButton = document.querySelector('.hambar');
const hambarSection = document.querySelector('.ham-popup');
const closeButton = document.querySelector('.cross-btn');

function showMenu() {
  hambarSection.style.display = 'block';
}

function hideMenu() {
  hambarSection.style.display = 'none';
}

hambarButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);
const featuredSpeakers = [
  {
    speakerImg: './new-img/speaker_1.svg',
    speakerName: 'Ahmed Patel:',
    designition: 'successful entrepreneur',
    achievement:
      'Ahmed Patel: A former asylum seeker turned successful entrepreneur, Ahmed Patel shares his personal journey of overcoming adversity and rebuilding his life in a new country.',
  },
  {
    speakerImg: './new-img/speaker_2.svg',
    speakerName: 'Sarah Thompson',
    designition: 'A language and cultural integration specialist',
    achievement:
      'Sarah Thompson highlights the significance of language acquisition and cultural understanding for successful integration.',
  },
  {
    speakerImg: './new-img/speaker_3.svg',
    speakerName: 'Julia Haminainen',
    designition: 'An advocate for human rights and social justice',
    achievement:
      'Julia Haminainen as a featured speaker, she sheds light on the legal challenges faced by asylum seekers and highlights the importance of access to legal representation and fair immigration policies.',
  },
  {
    speakerImg: './new-img/speaker_4.svg',
    speakerName: 'Dr. Juan Morales',
    designition: 'Background in education and community development',
    achievement:
      'Dr. Juan Morales focuses on empowering asylum seekers through education and skill-building. He shares innovative approaches to education, vocational training.',
  },
  {
    speakerImg: './new-img/speaker_5.svg',
    speakerName: 'Dr. Amina Khan',
    designition: 'Renowned psychologist',
    achievement:
      'Renowned psychologist specializing in trauma and resilience, Dr. Khan brings her expertise in supporting individuals who have experienced persecution and displacement.',
  },
  {
    speakerImg: './new-img/speaker_6.svg',
    speakerName: 'Javier Rodriguez',
    designition: 'An accomplished artist and activist',
    achievement:
      'Javier Rodriguez uses his creative talents to raise awareness about the experiences of asylum seekers. He addresses themes of displacement, resilience, and the power of art as a means of expression and healing.',
  },
];

featuredSpeakers.forEach((speaker) => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('speaker', 'col-md-6');
  newDiv.innerHTML = `
          <img src="${speaker.speakerImg}" alt="">
          <div class="speaker-details">
            <div class="speakername-wrap">
              <h3>${speaker.speakerName}</h3>
            </div>
            <div class="designition-wrap">
              <p class="designition">${speaker.designition}</p>
            </div>
            <div class="speaker-border"></div>
            <div class="speakerwork-wrap">
              <p class="speaker-work">${speaker.achievement}</p>
            </div>
          </div>`;
  speakerWrapper.append(newDiv);
});
