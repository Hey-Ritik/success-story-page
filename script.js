const translations = {
  en: {
    title: "NavDisha's Success Story",
    subtitle: "How Laxmi turned her dreams into reality through financial education and determination.",
    aboutTitle: "About Laxmi",
    aboutText: "Laxmi started her journey with limited resources but an unwavering determination to achieve financial independence. Through our financial literacy programs, she learned budgeting, savings, and smart investments.",
    achievementsTitle: "Achievements",
    achievementsText: "Laxmi successfully started a small business, managed her finances, and now provides for her family while mentoring others in her community.",
    videoTitle: "Watch Laxmi's Story",
    footerText: "Inspired by Laxmi? <a href='#'>Join our community</a> to start your success story.",
  },
  hi: {
    title: "नवदिशा की सफलता की कहानी",
    subtitle: "कैसे लक्ष्मी ने वित्तीय शिक्षा और दृढ़ संकल्प से अपने सपनों को साकार किया।",
    aboutTitle: "लक्ष्मी के बारे में",
    aboutText: "लक्ष्मी ने सीमित संसाधनों के साथ अपनी यात्रा शुरू की लेकिन वित्तीय स्वतंत्रता प्राप्त करने के लिए अटूट संकल्प किया। हमारे वित्तीय साक्षरता कार्यक्रमों के माध्यम से, उसने बजट, बचत और स्मार्ट निवेश करना सीखा।",
    achievementsTitle: "उपलब्धियां",
    achievementsText: "लक्ष्मी ने सफलतापूर्वक एक छोटा व्यवसाय शुरू किया, अपनी वित्तीय स्थिति को संभाला, और अब अपने परिवार की देखभाल करते हुए अपने समुदाय के अन्य लोगों को भी मार्गदर्शन प्रदान करती हैं।",
    videoTitle: "लक्ष्मी की कहानी देखें",
    footerText: "लक्ष्मी से प्रेरित हैं? <a href='#'>हमारे समुदाय से जुड़ें</a> और अपनी सफलता की कहानी शुरू करें।",
  },
};

function switchLanguage(lang) {
  document.getElementById('title').innerText = translations[lang].title;
  document.getElementById('subtitle').innerText = translations[lang].subtitle;
  document.getElementById('about-title').innerText = translations[lang].aboutTitle;
  document.getElementById('about-text').innerText = translations[lang].aboutText;
  document.getElementById('achievements-title').innerText = translations[lang].achievementsTitle;
  document.getElementById('achievements-text').innerText = translations[lang].achievementsText;
  document.getElementById('video-title').innerText = translations[lang].videoTitle;
  document.getElementById('footer-text').innerHTML = translations[lang].footerText;
}
