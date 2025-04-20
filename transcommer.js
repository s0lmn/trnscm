const questions = [
  {
    question: "What does 'L' stand for in the LPS principle of use of force?",
    options: ["Legality", "Lethality", "Logic", "Level"],
    answer: "A"
  },
  {
    question: "Which station is considered a red station under WL jurisdiction?",
    options: ["Dhoby Ghaut", "Toa Payoh", "Lavender", "Serangoon"],
    answer: "B"
  },
  {
    question: "Which acronym refers to the taser cartridge ID tags?",
    options: ["SPICE", "AFID", "LMS", "TELI"],
    answer: "B"
  },
  {
    question: "What is the effective duration of a taser shot?",
    options: ["3 seconds", "5 seconds", "7 seconds", "10 seconds"],
    answer: "B"
  },
  {
    question: "Who conducts the third round of E-LIST verification, after yourself and TOR?",
    options: ["TOR", "SM", "TL", "CBRE"],
    answer: "C"
  },
  {
    question: "What should you say before drawing 3 Tetras, 3 Palm Mics, and 3 Escape Hoods?",
    options: [
      "I am SC XX from YYY, permission to draw equipment for my team",
      "Good Morning/Afternoon Senior/Sir, I am SC XX from YYY intake...",
      "Ready to collect Tetra and Escape Hoods, Sir",
      "Requesting shift gear"
    ],
    answer: "B"
  },
  {
    question: "Which screening method is used when the identification card is available?",
    options: ["Sphere(Facial recognition)", "FOCUS", "HOT", "ABBSS(Automated Biometric and Behavioural Screening Suite)"],
    answer: "B"
  },
  {
    question: "Which code word refers to ankle tags?",
    options: ["Rolex", "Victor", "BASS", "Target"],
    answer: "A"
  },
  {
    question: "What does the ‘P’ in LPS stand for?",
    options: ["Precaution", "Proportion", "Proportionality", "Permission"],
    answer: "C"
  },
  {
    question: "Which zone do officers operate in during a chemical attack?",
    options: ["Red", "within Amber & White boundary", "Amber", "White"],
    answer: "B"
  },
  {
    question: "What does the acronym ‘SPICE’ describe?",
    options: ["A taser model", "E-LIST assessment", "IED components", "Law codes"],
    answer: "C"
  },
  {
    question: "Which MRT station is the deepest in Singapore?",
    options: ["Bras Basah", "Bencoolen", "Promenade", "Dhoby Ghaut"],
    answer: "B"
  },
  {
    question: "When is uniform inspection held?",
    options: ["Every morning shift", "Every last shift", "Every 1st afternoon shift", "Weekly"],
    answer: "C"
  },
  {
    question: "Which of the following is a red station under WL jurisdiction?",
    options: ["Serangoon", "Toa Payoh", "Orchard", "HarbourFront"],
    answer: "B"
  },
  {
    question: "What is the correct SITREP mood descriptor for an aggressive crowd?",
    options: ["Chaotic", "Normal", "Aggressive", "Static"],
    answer: "C"
  },
  {
    question: "What do the arrows in a CA attack scenario represent?",
    options: ["Airflow", "Sabre sweep paths", "Evacuation zones", "Shortest and direct routes"],
    answer: "D"
  },
  {
    question: "Who do you report to first if you need help during deployment?",
    options: ["NSI", "Regular", "Mentor", "Buddy intake then mentor then regular"],
    answer: "D"
  },
  {
    question: "What is the cordon radius for a suspicious vehicle during E-LIST?",
    options: ["100m", "200m", "300m", "400m"],
    answer: "D"
  },
  {
    question: "Which tool is used to shut off track power?",
    options: ["emergency communication button", "short circuit device or/and emergency trip station", "emergency stop plunger", "emergency telephone"],
    answer: "B"
  },
  {
    question: "What fine applies for eating in MRT?",
    options: ["$200", "$300", "$500", "$1000"],
    answer: "C"
  },
  {
    question: "Which section of the CPC allows arrest if someone refuses to give name and address?",
    options: ["s(65)", "s(83)", "s(9)", "s(31)"],
    answer: "A"
  },
  {
    question: "Which principle of AOJ refers to the subject’s ability to cause harm?",
    options: ["Jeopardy", "Legality", "Opportunity", "Ability"],
    answer: "D"
  },
  {
    question: "What should AGL do when GL draws a taser?",
    options: ["Radio TOR", "Activate MDT", "Draw firearm", "Hold subject"],
    answer: "C"
  },
  {
    question: "Which screening method uses facial recognition?",
    options: ["Sphere", "FOCUS", "biometric criminal database", "ABBSS"],
    answer: "A"
  },
  {
    question: "Which of these is NOT in the taser pouch?",
    options: ["Alcohol wipes", "Mini-scissors", "Ziploc bags", "AED pads"],
    answer: "D"
  },
  {
    question: "Who are you NOT allowed to handcuff?",
    options: ["Uniformed staff", "Suspects", "IS", "IC-holders"],
    answer: "A"
  },
  {
    question: "What does 'HOT' stand for in E-LIST signs?",
    options: ["Hazard, Objective, Target", "Hidden, Obvious, Typical", "Hard, Obvious, Tense", "High-risk, Orderly, Typical"],
    answer: "B"
  },
  {
    question: "What acronym is used for reporting casualties to ops room while in ERT?",
    options: ["LMS (location mobility severity)", "EAA", "SPICE", "SSTF"],
    answer: "A"
  },
  {
    question: "Which MRT lines have 2 Emergency stop plungers per platform?",
    options: ["NSEWL", "DTL & CCL", "TEL", "NEL"],
    answer: "B"
  },
  {
    question: "What mnemonic is used for remembering the red stations under WL?",
    options: ["TBY", "BBTTW", "HIRISK", "YBT"],
    answer: "A"
  },
  {
    question: "What is the emergency communication button used for?",
    options: ["Power cut", "CCTV switch", "Train-staff communication", "Passenger alarm"],
    answer: "C"
  },
  {
    question: "What does AFID contain?",
    options: ["Train code", "Taser cartridge ID", "MDT serial", "BWC ID"],
    answer: "B"
  },
  {
    question: "How many fire extinguishers are there per MRT cabin?",
    options: ["1", "2", "3", "4"],
    answer: "B"
  },
  {
    question: "Which offence is described under s323 of the Penal Code?",
    options: ["Outrage of Modesty", "Robbery", "VCH", "Mischief"],
    answer: "C"
  },
  {
    question: "What is the penalty for misuse of the emergency communication button?",
    options: ["$1000", "$5000", "$2000", "$3000"],
    answer: "B"
  },
  {
    question: "Which report is NP 322 used for?",
    options: ["Lost and Found", "Arrest", "Traffic", "Medical"],
    answer: "A"
  },
  {
    question: "What does BASS stand for?",
    options: ["Behavioural Analysis Sweep Squad", "Behavioural Assessment Screening System", "Bus And Security Surveillance", "Basic Alert System Support"],
    answer: "B"
  },
  {
    question: "What is the purpose of a bubble sweep?",
    options: ["Check train speed", "Clean MRT cabin", "Check TELI and PPE", "Scan EAA"],
    answer: "C"
  },
  {
    question: "What does the MRT mascot 'Move in Martin' remind you to do?",
    options: ["Speak softly", "Shift into the cabin", "Wait patiently", "Give way"],
    answer: "B"
  },
  {
    question: "Which act governs scheduled weapons?",
    options: ["POHA", "CESOWA", "MODA", "NRA"],
    answer: "B"
  },
  {
    question: "What does the abbreviation 'SPDC' stand for?",
    options: ["Singapore Public Drug Control", "Singapore Police Duty Cigarettes", "Singapore Paid Duty Cigarettes", "Special Product Detainment Code"],
    answer: "C"
  },
  {
    question: "What does the red zone mean in CA response?",
    options: ["Cold area", "Staging point", "CA Release point", "E-flare fallback"],
    answer: "C"
  },
  {
    question: "Which MRT depot serves the TEL line?",
    options: ["Mandai", "Kim Chuan", "Tuas", "Ulu Pandan"],
    answer: "A"
  },
  {
    question: "Which of the following is a component of SPICE?",
    options: ["Station", "Power Supply", "Impression", "Crew"],
    answer: "B"
  },
  {
    question: "Which principle in LPS emphasizes officer, the target and MOP safety?",
    options: ["Legality", "Proportionality", "Safety", "Authority"],
    answer: "C"
  },
  {
    question: "Which is NOT part of the CA symptom NBCBT?",
    options: ["Blood Agents & Nerve agents", "Choking Agents & Blister agents", "Bone Agents", "Tear Agents"],
    answer: "C"
  },
  {
    question: "Which key information is required during FOCUS screening?",
    options: ["Email", "Instagram", "IC/FIN", "Height"],
    answer: "C"
  },
  {
    question: "What does AOJ stand for in firearm deployment?",
    options: ["Action-Objective-Justification", "Ability-Opportunity-Jeopardy", "Assess-Observe-Judge", "All-Out-Justice"],
    answer: "B"
  },
  {
    question: "Which line has Woodlands North as its terminus?",
    options: ["DTL", "EWL", "TEL", "NSL"],
    answer: "C"
  },
  {
    question: "Which of the following is a reason a station is classified as red?",
    options: ["Few passengers", "Located at a depot", "High traffic and ISD classified", "No escalators"],
    answer: "C"
  },
  {
    question: "What must be included in deviation messages?",
    options: ["Only the location", "Shift IC name", "Points in SWP missed and SB/OE station", "Photographs"],
    answer: "C"
  },
  {
    question: "What is the correct meaning of 'HIRISK'?",
    options: ["High-risk interchanges", "Hazardous Items Risk", "High traffic, ISD, Residential, Interchange, Shopping, Key Installments", "Heavy Incident Response ISK"],
    answer: "C"
  },
  {
    question: "Which division is located near Yio Chu Kang MRT?",
    options: ["L", "F", "D", "E"],
    answer: "B"
  },
  {
    question: "What is the consequence of stepping on taser wires?",
    options: ["Nothing happens", "Wires may break and disrupt current", "Officer gets shocked", "Taser fires again"],
    answer: "B"
  },
  {
    question: "What should you do after the probes are removed?",
    options: ["Dispose in bin", "Show to SM", "Swab area with alcohol wipes and plaster to indicate area hit on person", "Mail to HQ"],
    answer: "C"
  },
  {
    question: "What is the MRT acronym 'VPIS' for?",
    options: ["Visual Passenger Information System", "Verified Passenger Identity Screen", "Vocal Passenger Interaction System", "Vehicle Protocol and Inspection Screen"],
    answer: "A"
  },
  {
    question: "Which law section covers possession of offensive weapons?",
    options: ["s7, ch 185", "s6(1), ch 65", "s8(b), ch 185", "s23A, ch 263A"],
    answer: "B"
  },
  {
    question: "What type of MRT evidence tamper seal uses red and grey indicators?",
    options: ["SPICE", "TELI", "ESP", "ECB"],
    answer: "B"
  },
  {
    question: "What is the name of the MRT communication center?",
    options: ["PSC", "OCC (operation command center)", "COC", "DOC"],
    answer: "B"
  },
  {
    question: "Which of the following is NOT a shift timing in the Bravo handbook?",
    options: ["1A", "2A", "2C", "1B"],
    answer: "C"
  },
  {
    question: "What does SSTF stand for?",
    options: ["Special Situational Task Force", "Special Station Tactics Force", "Special Station Tactical Force", "Suspicious Sighting Task Force"],
    answer: "D"
  },
  {
    question: "When does SSTF respond?",
    options: ["After CBRE", "Before or no CBRE", "Only after TOR confirms", "Only during TASER deployment"],
    answer: "B"
  },
  {
    question: "Which of the following is NOT a part of E-LIST?",
    options: ["Environment", "Location", "Suspiciousness", "Time"],
    answer: "C"
  },
  {
    question: "What is the primary purpose of Sabre 5000 in the SPF?",
    options: ["Face scanning", "Drug detection", "Explosive detection", "Radio testing"],
    answer: "C"
  },
  {
    question: "What should you avoid when a taser is deployed?",
    options: ["Standing still", "Touching probes", "Issuing commands", "Radioing back"],
    answer: "B"
  },
  {
    question: "What does TOR stand for?",
    options: ["Team Officer Report", "Transcom Ops Room", "Transit Officer in Response", "Transport Observation Role"],
    answer: "B"
  },
  {
    question: "Which of the following is not part of ABC rules?",
    options: ["Argue", "Blame", "Complain", "Bargain"],
    answer: "B"
  },
  {
    question: "What is the BASS team’s main role?",
    options: ["Sweep stations for bombs", "Observe in plainclothes", "Deploy tasers", "Manage shift timings"],
    answer: "B"
  },
  {
    question: "What does the MRT acronym EPT refer to?",
    options: ["Emergency Power Toggle", "Emergency Public Telephone", "Electric Panel Transceiver", "Evacuation Point Tracker"],
    answer: "B"
  },
  {
    question: "How do you identify a TELI seal that has been tampered?",
    options: ["Turns blue", "Red seal broken", "Turns grey", "Turns fully red"],
    answer: "D"
  },
  {
    question: "What should be done first in a CA Red situation?",
    options: ["Don hood", "Move to red zone", "Evacuate public", "Call TL"],
    answer: "A"
  },
  {
    question: "What do you say before equipment draw?",
    options: [
      "I am SC XX from YYY intake, permission to draw 3 Tetras, 3 Palm Mics and 3 Escape Hoods for my team.",
      "I am NSman XX reporting in",
      "Please issue my gear now",
      "Requesting all loadout"
    ],
    answer: "A"
  },
  {
    question: "Which law governs MRT vandalism?",
    options: ["Penal Code 309", "Chapter 341", "POHA", "CESOWA"],
    answer: "B"
  },
  {
    question: "What type of article prompts an E-LIST?",
    options: ["Abandoned article", "All left bags", "Items near escalators", "Personal belongings"],
    answer: "A"
  },
  {
    question: "What is the purpose of a bubble sweep?",
    options: [
      "Inspect platforms for sabotage",
      "Inspect platforms for TELI and PPE compliance",
      "Check uniforms of commuters",
      "Clean cabin windows"
    ],
    answer: "B"
  },
  {
    question: "Which MRT depot serves the Downtown Line?",
    options: ["Gali Batu", "Kim Chuan", "Tuas", "Mandai"],
    answer: "A"
  },
  {
    question: "Which MRT line has only two ESPs per platform?",
    options: ["NSEWL", "DTL & CCL", "TEL", "NSL"],
    answer: "B"
  },
  {
    question: "Which MRT depot supports the East-West Line?",
    options: ["Tuas only", "Mandai", "Kim Chuan", "Tuas, Ulu Pandan & Changi"],
    answer: "D"
  },
  {
    question: "What does the acronym MDT stand for?",
    options: ["Metro Deployment Tracker", "Mobile Data Terminal", "Movement Deployment Timer", "Mass Data Transfer"],
    answer: "B"
  },
  {
    question: "Which item is a drug utensil in SSS BMW ART?",
    options: ["AFID tag", "Modified Lighter", "Escape hood", "BWC"],
    answer: "B"
  },
  {
    question: "Which act governs the possession of controlled substances?",
    options: ["CESOWA", "MDA", "Vandalism Act", "RTSA"],
    answer: "B"
  },
  {
    question: "Which mnemonic is used to remember drug utensils?",
    options: ["SPICE", "SSS BMW ART", "E-LIST", "AOJ"],
    answer: "B"
  },
  {
    question: "Which team wears plain clothes to observe suspects discreetly?",
    options: ["SSTF", "BASS", "FPO", "TL"],
    answer: "B"
  },
  {
    question: "What does AOJ stand for?",
    options: ["Action-Observe-Judge", "Ability-Opportunity-Jeopardy", "Assess-Offend-Justify", "Arrest-Order-Jurisdiction"],
    answer: "B"
  },
  {
    question: "What is the purpose of a platform sweep?",
    options: [
      "Evacuate crowd",
      "Identify articles or TELI breaches",
      "Fix safety cones",
      "Count number of commuters"
    ],
    answer: "B"
  },
  {
    question: "Which station is classified as Red and under WL?",
    options: ["Yishun", "Outram Park", "Tampines", "Paya Lebar"],
    answer: "A"
  },
  {
    question: "Which MRT mascot encourages putting down your bag?",
    options: ["Move in Martin", "Bags Down Benny", "Give Way Glenda", "Hush Hush Hannah"],
    answer: "B"
  },
  {
    question: "What is the fine for misusing the fire extinguisher in MRT?",
    options: ["$500", "$2000", "$3000", "$5000"],
    answer: "D"
  },
  {
    question: "What is the maximum fine for eating/drinking in MRT stations?",
    options: ["$200", "$300", "$500", "$1000"],
    answer: "C"
  },
  {
    question: "What does a red arrow indicate in CA zones?",
    options: ["Safe route", "Wind direction", "Source of CA", "Cordon location"],
    answer: "C"
  },
  {
    question: "What does PVMS stand for?",
    options: [
      "Police Visit Monitoring System",
      "Patrol Video Management System",
      "Police Visual Monitoring Station",
      "Passenger Video Monitoring Surveillance"
    ],
    answer: "A"
  },
  {
    question: "What should be reported in a SITREP?",
    options: ["Equipment status", "Crowd size and mood", "Officer feedback", "TL orders"],
    answer: "B"
  },
  {
    question: "What does LPS stand for in use-of-force guidelines?",
    options: [
      "Legality, Proportionality, Safety",
      "Legal Power Surveillance",
      "Low Priority Subjects",
      "Line Patrol Status"
    ],
    answer: "A"
  },
  {
    question: "Which of the following does not belong in a SITREP?",
    options: ["Mood", "Crowd size", "Train arrival time", "Location"],
    answer: "C"
  },
  {
    question: "What does SALUTE stand for?",
    options: [
      "Size, Activity, Location, Uniform, Time, Equipment",
      "Signal, Area, Location, Unit, Transport, Evacuate",
      "Safety, Area, Lookout, Unit, Tactics, Escape",
      "Size, Area, Line, Unit, Timing, Escape"
    ],
    answer: "A"
  },
  {
    question: "Which acronym refers to a shift with first deployment at 0600h?",
    options: ["1B", "2A", "1A", "2B"],
    answer: "C"
  },
  {
    question: "What does TELI stand for?",
    options: [
      "Tampered Emergency Label Indicator",
      "Tampered Evidence Label Indicator",
      "Train Emergency Locking Interface",
      "Transit Emergency Leak Index"
    ],
    answer: "B"
  },
  {
    question: "What’s the purpose of an emergency telephone?",
    options: [
      "Cut train power",
      "Talk to passenger service center",
      "Open MRT cabin door",
      "Shut ECB circuit"
    ],
    answer: "B"
  },
  {
    question: "What does the MRT acronym OCC refer to?",
    options: [
      "Operations Control Centre",
      "Officer Coordination Cell",
      "Organisational Command Centre",
      "Official Crisis Core"
    ],
    answer: "A"
  },
  {
    question: "Which MRT line connects Woodlands North to Gardens by the Bay?",
    options: ["NSL", "TEL", "CCL", "NEL"],
    answer: "B"
  },
  {
    question: "What is the first step in incident management upon arrival?",
    options: [
      "Draw taser",
      "Conduct SALUTE",
      "Call for CBRE",
      "Submit NP299"
    ],
    answer: "B"
  }
];

let currentQuestion = 0;
let selectedAnswer = null;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = `Q${currentQuestion + 1}: ${q.question}`;
  optionsContainer.innerHTML = ""; // Clear previous options
  feedback.textContent = ""; // Clear previous feedback

  // Create answer buttons dynamically
  q.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.textContent = `${String.fromCharCode(65 + idx)}: ${option}`;  // Dynamically set A, B, C, D for options
    btn.classList.add("btn", "btn-outline-primary", "w-100", "my-2");
    btn.onclick = () => handleAnswer(idx, btn); // Pass index to identify selected option
    optionsContainer.appendChild(btn);
  });

  // Enable the "Next" button right away
  nextBtn.disabled = false;
}

function handleAnswer(idx, btn) {
  if (selectedAnswer) return;  // Prevent multiple answers

  selectedAnswer = idx;  // Store the selected index
  const correctIdx = questions[currentQuestion].answer.charCodeAt(0) - 65;  // Convert 'A', 'B', 'C', etc. to an index (0, 1, 2, ...)

  // Apply styles for correct/wrong answers
  const allButtons = optionsContainer.querySelectorAll("button");
  allButtons.forEach((b, i) => {
    // If it's the correct answer, color it green, if it's the selected answer, color it red
    if (i === correctIdx) {
      b.classList.add("btn-success"); // Correct answer
    } else if (i === idx) {
      b.classList.add("btn-danger"); // Wrong selected answer
    }
    b.disabled = true;  // Disable all buttons once an answer is selected
  });

  feedback.textContent = idx === correctIdx ? "Correct!" : "Wrong!";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    selectedAnswer = null;  // Reset for the next question
    loadQuestion();  // Load the next question
  } else {
    questionText.textContent = "Quiz Complete!";
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    nextBtn.disabled = true;  // Disable "Next" button when quiz is completed
  }
};

loadQuestion(); // Initialize the quiz with the first question
