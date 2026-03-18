// Floating Bee Focus Timer

// 1. Inject CSS
const timerCSS = `
  .floating-timer-container {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 9999;
    font-family: 'Outfit', sans-serif;
  }

  /* Floating Bee Button */
  .floating-bee-btn {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    box-shadow: 0 10px 20px rgba(245, 166, 35, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    border: none;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation: floatBee 3s ease-in-out infinite;
  }

  .floating-bee-btn:hover {
    transform: scale(1.1);
  }

  @keyframes floatBee {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(8deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }

  /* Timer Widget Panel */
  .floating-timer-panel {
    position: absolute;
    bottom: 85px;
    right: 0;
    width: 320px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 5px solid var(--primary);
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
    transform-origin: bottom right;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    opacity: 0;
    visibility: hidden;
    transform: scale(0.8) translateY(20px);
  }

  .floating-timer-panel.open {
    opacity: 1;
    visibility: visible;
    transform: scale(1) translateY(0);
  }

  /* Pulse animation when timer is running */
  @keyframes pulsePanelGlow {
    0% { box-shadow: 0 15px 40px rgba(245,166,35,0.2); border-top: 5px solid var(--primary); }
    50% { box-shadow: 0 15px 70px rgba(245,166,35,0.7); border-top: 5px solid #ffdd44; }
    100% { box-shadow: 0 15px 40px rgba(245,166,35,0.2); border-top: 5px solid var(--primary); }
  }

  .floating-timer-panel.running {
    animation: pulsePanelGlow 2.5s infinite ease-in-out;
  }

  .floating-timer-panel::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(245,166,35,0.15) 0%, transparent 70%);
    z-index: 0;
    pointer-events: none;
  }

  .ft-header {
    font-family: 'Fraunces', serif;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 1;
    color: var(--text);
  }

  .ft-tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    background: var(--bg);
    padding: 0.3rem;
    border-radius: 8px;
    width: 100%;
    z-index: 1;
  }
  
  .ft-tab {
    flex: 1;
    padding: 0.5rem;
    background: none;
    border: none;
    color: var(--text-muted);
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.2s;
  }
  
  .ft-tab.active {
    background: var(--bg-card);
    color: var(--text);
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }

  .ft-display {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 0;
    z-index: 1;
    gap: 5px;
  }

  .ft-time-input {
    background: transparent;
    border: none;
    font-size: 4rem;
    font-weight: 700;
    font-family: monospace;
    color: var(--primary);
    width: 100px;
    text-align: center;
    outline: none;
    text-shadow: 0 0 20px rgba(245,166,35,0.3);
    transition: all 0.3s;
    border-radius: 8px;
  }

  .ft-time-input:hover:not([readonly]) {
    background: rgba(245,166,35,0.05);
  }

  .ft-time-input:focus {
    background: rgba(245,166,35,0.1);
    text-shadow: 0 0 30px rgba(245,166,35,0.6);
  }

  .ft-time-input::-webkit-outer-spin-button,
  .ft-time-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  .ft-time-colon {
    font-size: 4rem;
    font-weight: 700;
    font-family: monospace;
    color: var(--primary);
    text-shadow: 0 0 20px rgba(245,166,35,0.3);
  }

  /* Text flash animation when running */
  @keyframes blinkColon {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .floating-timer-panel.running .ft-time-colon {
    animation: blinkColon 1s infinite ease-in-out;
  }

  .ft-controls {
    display: flex;
    gap: 1rem;
    width: 100%;
    z-index: 1;
  }

  .ft-btn {
    flex: 1;
    padding: 0.8rem;
    border: none;
    border-radius: 8px;
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .ft-btn.primary {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: #000;
    box-shadow: 0 4px 15px rgba(245,166,35,0.3);
  }
  .ft-btn.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245,166,35,0.4);
  }

  .ft-btn.secondary {
    background: var(--glass);
    color: var(--text);
    border: 1px solid var(--border);
  }
  .ft-btn.secondary:hover {
    background: rgba(255,255,255,0.1);
  }
`;

const styleEl = document.createElement('style');
styleEl.textContent = timerCSS;
document.head.appendChild(styleEl);

// 2. Inject HTML UI
const timerHTML = `
  <!-- The Timer Panel -->
  <div class="floating-timer-panel" id="bee-timer-panel">
    <div class="ft-header">
      <span>🍯</span> Bee Focused
    </div>
    <div class="ft-tabs" id="ft-tabs">
      <button class="ft-tab active" data-time="25">Focus</button>
      <button class="ft-tab" data-time="5">Short Break</button>
      <button class="ft-tab" data-time="15">Long Break</button>
    </div>
    <div class="ft-display" title="Click to edit time">
      <input type="number" id="ft-time-m" class="ft-time-input" value="25" min="0" max="999"><span class="ft-time-colon">:</span><input type="number" id="ft-time-s" class="ft-time-input" value="00" min="0" max="59">
    </div>
    <div class="ft-controls">
      <button class="ft-btn primary" id="ft-toggle">Start</button>
      <button class="ft-btn secondary" id="ft-reset">Reset</button>
    </div>
  </div>

  <!-- The Floating Action Button -->
  <button class="floating-bee-btn" id="bee-fab" title="Toggle Focus Timer">
    🐝
  </button>
`;

const timerContainer = document.createElement('div');
timerContainer.className = 'floating-timer-container';
timerContainer.innerHTML = timerHTML;
document.body.appendChild(timerContainer);

// 3. Logic and State
let ftDuration = 25 * 60; // 25 minutes default
let ftRemaining = ftDuration;
let ftInterval = null;
let isFtRunning = false;

const ftPanel = document.getElementById('bee-timer-panel');
const ftFab = document.getElementById('bee-fab');

const ftTimeM = document.getElementById('ft-time-m');
const ftTimeS = document.getElementById('ft-time-s');
const ftToggleBtn = document.getElementById('ft-toggle');
const ftResetBtn = document.getElementById('ft-reset');
const ftTabs = document.querySelectorAll('.ft-tab');

// Toggle UI Open/Close
ftFab.addEventListener('click', () => {
  ftPanel.classList.toggle('open');
  if(ftPanel.classList.contains('open')) {
    ftFab.style.animation = 'none';
    ftFab.style.transform = 'scale(0.9)';
    ftFab.style.background = 'var(--bg-card)';
    ftFab.innerHTML = '✖️';
    ftFab.style.fontSize = '1.2rem';
  } else {
    ftFab.style.animation = 'floatBee 3s ease-in-out infinite';
    ftFab.style.transform = 'scale(1)';
    ftFab.style.background = 'linear-gradient(135deg, var(--primary), var(--primary-dark))';
    ftFab.innerHTML = '🐝';
    ftFab.style.fontSize = '2rem';
  }
});

function updateFtDisplay() {
  const m = Math.floor(ftRemaining / 60);
  const s = ftRemaining % 60;
  ftTimeM.value = m.toString().padStart(2, "0");
  ftTimeS.value = s.toString().padStart(2, "0");
}

function updateDurationFromInputs() {
  let m = parseInt(ftTimeM.value) || 0;
  let s = parseInt(ftTimeS.value) || 0;
  if(m < 0) m = 0;
  if(s < 0) s = 0;
  if(s > 59) {
     m += Math.floor(s / 60);
     s = s % 60;
  }
  ftDuration = m * 60 + s;
  ftRemaining = ftDuration;
  updateFtDisplay();
  // unselect tabs indicating custom time
  ftTabs.forEach(t => t.classList.remove('active'));
}

ftTimeM.addEventListener('change', updateDurationFromInputs);
ftTimeS.addEventListener('change', updateDurationFromInputs);

function toggleFtTimer() {
  if (isFtRunning) {
    clearInterval(ftInterval);
    ftToggleBtn.textContent = 'Start';
    ftPanel.classList.remove('running');
    ftTimeM.readOnly = false;
    ftTimeS.readOnly = false;
    isFtRunning = false;
  } else {
    if (ftRemaining <= 0) {
      updateDurationFromInputs();
      if(ftRemaining <= 0) return;
    }
    ftInterval = setInterval(() => {
      ftRemaining--;
      updateFtDisplay();
      if (ftRemaining <= 0) {
        // Record completed session
        const currentMins = Math.floor(ftDuration / 60);
        let totalMins = parseInt(localStorage.getItem('total_focus_minutes')) || 0;
        let totalSessions = parseInt(localStorage.getItem('completed_focus_sessions')) || 0;
        
        localStorage.setItem('total_focus_minutes', totalMins + currentMins);
        localStorage.setItem('completed_focus_sessions', totalSessions + 1);
        
        // Dispatch storage event manually for same-page updates (like on behaviour.html)
        window.dispatchEvent(new Event('storage'));

        clearInterval(ftInterval);
        ftToggleBtn.textContent = 'Start';
        ftPanel.classList.remove('running');
        ftTimeM.readOnly = false;
        ftTimeS.readOnly = false;
        isFtRunning = false;
        
        // Auto-open panel when done
        if (!ftPanel.classList.contains('open')) {
          ftFab.click(); 
        }
        
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification("Buzz! Time is up!");
        } else {
          alert('Buzz! Time is up!');
        }
      }
    }, 1000);
    ftToggleBtn.textContent = 'Pause';
    ftPanel.classList.add('running');
    ftTimeM.readOnly = true;
    ftTimeS.readOnly = true;
    isFtRunning = true;
    
    // Request notification permission if not asked yet
    if ("Notification" in window && Notification.permission !== "granted" && Notification.permission !== "denied") {
      Notification.requestPermission();
    }
  }
}

function resetFtTimer() {
  clearInterval(ftInterval);
  ftRemaining = ftDuration;
  updateFtDisplay();
  ftToggleBtn.textContent = 'Start';
  ftPanel.classList.remove('running');
  ftTimeM.readOnly = false;
  ftTimeS.readOnly = false;
  isFtRunning = false;
}

ftToggleBtn.addEventListener('click', toggleFtTimer);
ftResetBtn.addEventListener('click', resetFtTimer);

ftTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    ftTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const mins = parseInt(tab.getAttribute('data-time'), 10);
    ftDuration = mins * 60;
    resetFtTimer();
  });
});

// Initialize Display
updateFtDisplay();
