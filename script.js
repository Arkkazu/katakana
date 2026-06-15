const groups = [
  {
    id: "a",
    label: "ア",
    name: "ア行",
    kana: [
      { char: "ア", word: "アイス", emoji: "🍦", sound: "ア" },
      { char: "イ", word: "イチゴ", emoji: "🍓", sound: "イ" },
      { char: "ウ", word: "ウサギ", emoji: "🐰", sound: "ウ" },
      { char: "エ", word: "エンピツ", emoji: "✏️", sound: "エ" },
      { char: "オ", word: "オレンジ", emoji: "🍊", sound: "オ" },
    ],
  },
  {
    id: "ka",
    label: "カ",
    name: "カ行",
    kana: [
      { char: "カ", word: "カメラ", emoji: "📷", sound: "カ" },
      { char: "キ", word: "キー", emoji: "🔑", sound: "キ" },
      { char: "ク", word: "クツ", emoji: "👟", sound: "ク" },
      { char: "ケ", word: "ケーキ", emoji: "🍰", sound: "ケ" },
      { char: "コ", word: "コマ", emoji: "🪀", sound: "コ" },
    ],
  },
  {
    id: "sa",
    label: "サ",
    name: "サ行",
    kana: [
      { char: "サ", word: "サクラ", emoji: "🌸", sound: "サ" },
      { char: "シ", word: "シール", emoji: "🏷️", sound: "シ" },
      { char: "ス", word: "スイカ", emoji: "🍉", sound: "ス" },
      { char: "セ", word: "セーター", emoji: "🧥", sound: "セ" },
      { char: "ソ", word: "ソラ", emoji: "☁️", sound: "ソ" },
    ],
  },
  {
    id: "ta",
    label: "タ",
    name: "タ行",
    kana: [
      { char: "タ", word: "タイヤ", emoji: "🛞", sound: "タ" },
      { char: "チ", word: "チーズ", emoji: "🧀", sound: "チ" },
      { char: "ツ", word: "ツキ", emoji: "🌙", sound: "ツ" },
      { char: "テ", word: "テレビ", emoji: "📺", sound: "テ" },
      { char: "ト", word: "トマト", emoji: "🍅", sound: "ト" },
    ],
  },
  {
    id: "na",
    label: "ナ",
    name: "ナ行",
    kana: [
      { char: "ナ", word: "ナス", emoji: "🍆", sound: "ナ" },
      { char: "ニ", word: "ニジ", emoji: "🌈", sound: "ニ" },
      { char: "ヌ", word: "ヌノ", emoji: "🧣", sound: "ヌ" },
      { char: "ネ", word: "ネジ", emoji: "🔩", sound: "ネ" },
      { char: "ノ", word: "ノート", emoji: "📓", sound: "ノ" },
    ],
  },
  {
    id: "ha",
    label: "ハ",
    name: "ハ行",
    kana: [
      { char: "ハ", word: "ハサミ", emoji: "✂️", sound: "ハ" },
      { char: "ヒ", word: "ヒコウキ", emoji: "✈️", sound: "ヒ" },
      { char: "フ", word: "フネ", emoji: "⛵", sound: "フ" },
      { char: "ヘ", word: "ヘリコプター", emoji: "🚁", sound: "ヘ" },
      { char: "ホ", word: "ホシ", emoji: "⭐", sound: "ホ" },
    ],
  },
  {
    id: "ma",
    label: "マ",
    name: "マ行",
    kana: [
      { char: "マ", word: "マイク", emoji: "🎤", sound: "マ" },
      { char: "ミ", word: "ミカン", emoji: "🍊", sound: "ミ" },
      { char: "ム", word: "ムギ", emoji: "🌾", sound: "ム" },
      { char: "メ", word: "メガネ", emoji: "👓", sound: "メ" },
      { char: "モ", word: "モモ", emoji: "🍑", sound: "モ" },
    ],
  },
  {
    id: "ya",
    label: "ヤ",
    name: "ヤ行",
    kana: [
      { char: "ヤ", word: "ヤマ", emoji: "⛰️", sound: "ヤ" },
      { char: "ユ", word: "ユキ", emoji: "❄️", sound: "ユ" },
      { char: "ヨ", word: "ヨット", emoji: "⛵", sound: "ヨ" },
    ],
  },
  {
    id: "ra",
    label: "ラ",
    name: "ラ行",
    kana: [
      { char: "ラ", word: "ラッパ", emoji: "🎺", sound: "ラ" },
      { char: "リ", word: "リボン", emoji: "🎀", sound: "リ" },
      { char: "ル", word: "ルビー", emoji: "💎", sound: "ル" },
      { char: "レ", word: "レモン", emoji: "🍋", sound: "レ" },
      { char: "ロ", word: "ロケット", emoji: "🚀", sound: "ロ" },
    ],
  },
  {
    id: "wa",
    label: "ワ",
    name: "ワ行",
    kana: [
      { char: "ワ", word: "ワゴン", emoji: "🚙", sound: "ワ" },
      { char: "ヲ", word: "ヲ", emoji: "🎯", sound: "ヲ" },
      { char: "ン", word: "パン", emoji: "🍞", sound: "ン" },
    ],
  },
];

const allKana = groups.flatMap((group) => group.kana);
const strokeTemplates = {
  ア: [
    [
      [0.28, 0.25],
      [0.72, 0.25],
      [0.58, 0.42],
    ],
    [
      [0.57, 0.39],
      [0.45, 0.78],
    ],
  ],
  イ: [
    [
      [0.66, 0.22],
      [0.38, 0.47],
    ],
    [
      [0.54, 0.36],
      [0.54, 0.8],
    ],
  ],
  ウ: [
    [
      [0.5, 0.18],
      [0.5, 0.32],
    ],
    [
      [0.35, 0.34],
      [0.35, 0.46],
    ],
    [
      [0.35, 0.45],
      [0.7, 0.45],
      [0.55, 0.78],
    ],
  ],
  エ: [
    [
      [0.36, 0.28],
      [0.66, 0.28],
    ],
    [
      [0.51, 0.28],
      [0.51, 0.67],
    ],
    [
      [0.31, 0.7],
      [0.72, 0.7],
    ],
  ],
  オ: [
    [
      [0.32, 0.31],
      [0.72, 0.31],
    ],
    [
      [0.55, 0.18],
      [0.55, 0.77],
      [0.46, 0.72],
    ],
    [
      [0.55, 0.38],
      [0.35, 0.65],
    ],
  ],
  カ: [
    [
      [0.33, 0.31],
      [0.68, 0.31],
      [0.63, 0.72],
      [0.54, 0.76],
    ],
    [
      [0.5, 0.21],
      [0.37, 0.76],
    ],
  ],
  キ: [
    [
      [0.36, 0.25],
      [0.65, 0.25],
    ],
    [
      [0.3, 0.42],
      [0.72, 0.4],
    ],
    [
      [0.49, 0.18],
      [0.59, 0.78],
    ],
  ],
  ク: [
    [
      [0.48, 0.22],
      [0.36, 0.42],
    ],
    [
      [0.43, 0.36],
      [0.7, 0.36],
      [0.51, 0.78],
    ],
  ],
  ケ: [
    [
      [0.4, 0.22],
      [0.34, 0.48],
    ],
    [
      [0.42, 0.36],
      [0.72, 0.36],
    ],
    [
      [0.58, 0.24],
      [0.5, 0.78],
    ],
  ],
  コ: [
    [
      [0.34, 0.3],
      [0.7, 0.3],
      [0.7, 0.64],
    ],
    [
      [0.36, 0.68],
      [0.7, 0.68],
    ],
  ],
  サ: [
    [
      [0.3, 0.34],
      [0.74, 0.34],
    ],
    [
      [0.41, 0.2],
      [0.41, 0.58],
    ],
    [
      [0.61, 0.2],
      [0.56, 0.78],
    ],
  ],
  シ: [
    [
      [0.38, 0.3],
      [0.5, 0.36],
    ],
    [
      [0.33, 0.47],
      [0.48, 0.53],
    ],
    [
      [0.39, 0.76],
      [0.7, 0.34],
    ],
  ],
  ス: [
    [
      [0.34, 0.3],
      [0.68, 0.3],
      [0.39, 0.74],
    ],
    [
      [0.51, 0.48],
      [0.7, 0.72],
    ],
  ],
  セ: [
    [
      [0.3, 0.38],
      [0.72, 0.38],
      [0.62, 0.52],
    ],
    [
      [0.4, 0.2],
      [0.4, 0.76],
      [0.58, 0.76],
    ],
  ],
  ソ: [
    [
      [0.42, 0.28],
      [0.5, 0.48],
    ],
    [
      [0.68, 0.26],
      [0.5, 0.76],
    ],
  ],
  タ: [
    [
      [0.46, 0.22],
      [0.35, 0.43],
    ],
    [
      [0.42, 0.36],
      [0.7, 0.36],
      [0.51, 0.78],
    ],
    [
      [0.48, 0.49],
      [0.61, 0.58],
    ],
  ],
  チ: [
    [
      [0.42, 0.24],
      [0.65, 0.22],
    ],
    [
      [0.54, 0.24],
      [0.54, 0.78],
    ],
    [
      [0.3, 0.45],
      [0.73, 0.45],
    ],
  ],
  ツ: [
    [
      [0.42, 0.28],
      [0.44, 0.48],
    ],
    [
      [0.56, 0.25],
      [0.57, 0.45],
    ],
    [
      [0.72, 0.28],
      [0.5, 0.76],
    ],
  ],
  テ: [
    [
      [0.37, 0.25],
      [0.66, 0.25],
    ],
    [
      [0.3, 0.43],
      [0.73, 0.43],
    ],
    [
      [0.54, 0.43],
      [0.46, 0.78],
    ],
  ],
  ト: [
    [
      [0.45, 0.22],
      [0.45, 0.8],
    ],
    [
      [0.45, 0.38],
      [0.68, 0.54],
    ],
  ],
  ナ: [
    [
      [0.31, 0.34],
      [0.73, 0.34],
    ],
    [
      [0.54, 0.2],
      [0.48, 0.78],
    ],
  ],
  ニ: [
    [
      [0.36, 0.32],
      [0.66, 0.32],
    ],
    [
      [0.31, 0.66],
      [0.72, 0.66],
    ],
  ],
  ヌ: [
    [
      [0.35, 0.3],
      [0.68, 0.3],
      [0.42, 0.75],
    ],
    [
      [0.37, 0.33],
      [0.7, 0.74],
    ],
  ],
  ネ: [
    [
      [0.5, 0.2],
      [0.61, 0.3],
    ],
    [
      [0.35, 0.38],
      [0.7, 0.38],
      [0.45, 0.6],
    ],
    [
      [0.48, 0.5],
      [0.36, 0.76],
    ],
    [
      [0.5, 0.52],
      [0.68, 0.74],
    ],
  ],
  ノ: [
    [
      [0.65, 0.22],
      [0.4, 0.78],
    ],
  ],
  ハ: [
    [
      [0.44, 0.22],
      [0.34, 0.76],
    ],
    [
      [0.58, 0.22],
      [0.72, 0.76],
    ],
  ],
  ヒ: [
    [
      [0.42, 0.2],
      [0.42, 0.75],
    ],
    [
      [0.42, 0.5],
      [0.68, 0.4],
      [0.68, 0.68],
    ],
  ],
  フ: [
    [
      [0.34, 0.34],
      [0.7, 0.34],
      [0.5, 0.76],
    ],
  ],
  ヘ: [
    [
      [0.32, 0.65],
      [0.5, 0.36],
      [0.72, 0.66],
    ],
  ],
  ホ: [
    [
      [0.33, 0.36],
      [0.72, 0.36],
    ],
    [
      [0.53, 0.2],
      [0.53, 0.8],
    ],
    [
      [0.46, 0.5],
      [0.34, 0.72],
    ],
    [
      [0.6, 0.5],
      [0.73, 0.72],
    ],
  ],
  マ: [
    [
      [0.34, 0.32],
      [0.7, 0.32],
      [0.49, 0.64],
    ],
    [
      [0.49, 0.64],
      [0.6, 0.76],
    ],
  ],
  ミ: [
    [
      [0.42, 0.26],
      [0.66, 0.34],
    ],
    [
      [0.35, 0.43],
      [0.63, 0.52],
    ],
    [
      [0.3, 0.62],
      [0.64, 0.74],
    ],
  ],
  ム: [
    [
      [0.58, 0.23],
      [0.36, 0.72],
    ],
    [
      [0.36, 0.72],
      [0.7, 0.7],
      [0.6, 0.56],
    ],
  ],
  メ: [
    [
      [0.68, 0.23],
      [0.36, 0.76],
    ],
    [
      [0.38, 0.3],
      [0.68, 0.72],
    ],
  ],
  モ: [
    [
      [0.34, 0.25],
      [0.68, 0.25],
    ],
    [
      [0.29, 0.43],
      [0.7, 0.43],
    ],
    [
      [0.52, 0.2],
      [0.48, 0.78],
      [0.66, 0.72],
    ],
  ],
  ヤ: [
    [
      [0.3, 0.38],
      [0.7, 0.32],
      [0.55, 0.52],
    ],
    [
      [0.48, 0.22],
      [0.58, 0.78],
    ],
  ],
  ユ: [
    [
      [0.34, 0.31],
      [0.68, 0.31],
      [0.68, 0.64],
    ],
    [
      [0.32, 0.67],
      [0.7, 0.67],
    ],
  ],
  ヨ: [
    [
      [0.34, 0.28],
      [0.68, 0.28],
      [0.68, 0.72],
    ],
    [
      [0.42, 0.49],
      [0.67, 0.49],
    ],
    [
      [0.36, 0.72],
      [0.68, 0.72],
    ],
  ],
  ラ: [
    [
      [0.39, 0.26],
      [0.65, 0.26],
    ],
    [
      [0.32, 0.42],
      [0.7, 0.42],
      [0.48, 0.76],
    ],
  ],
  リ: [
    [
      [0.43, 0.24],
      [0.43, 0.62],
    ],
    [
      [0.62, 0.22],
      [0.56, 0.78],
    ],
  ],
  ル: [
    [
      [0.42, 0.24],
      [0.4, 0.72],
      [0.31, 0.78],
    ],
    [
      [0.62, 0.2],
      [0.62, 0.72],
      [0.72, 0.62],
    ],
  ],
  レ: [
    [
      [0.43, 0.22],
      [0.43, 0.76],
      [0.7, 0.6],
    ],
  ],
  ロ: [
    [
      [0.35, 0.28],
      [0.35, 0.72],
    ],
    [
      [0.35, 0.28],
      [0.68, 0.28],
      [0.68, 0.72],
    ],
    [
      [0.35, 0.72],
      [0.68, 0.72],
    ],
  ],
  ワ: [
    [
      [0.36, 0.3],
      [0.36, 0.5],
    ],
    [
      [0.36, 0.34],
      [0.7, 0.34],
      [0.52, 0.76],
    ],
  ],
  ヲ: [
    [
      [0.36, 0.27],
      [0.68, 0.27],
    ],
    [
      [0.32, 0.44],
      [0.7, 0.44],
      [0.7, 0.54],
    ],
    [
      [0.65, 0.48],
      [0.44, 0.76],
    ],
  ],
  ン: [
    [
      [0.38, 0.34],
      [0.51, 0.47],
    ],
    [
      [0.42, 0.76],
      [0.7, 0.34],
    ],
  ],
};

const state = {
  groupId: "a",
  mode: "quiz",
  current: groups[0].kana[0],
  stars: 0,
  streak: 0,
  progress: {},
  drawing: false,
  activeStroke: null,
  traceStrokes: [],
  roundLocked: false,
};

const els = {
  stageLabel: document.querySelector("#stageLabel"),
  starCount: document.querySelector("#starCount"),
  streakCount: document.querySelector("#streakCount"),
  rowPicker: document.querySelector("#rowPicker"),
  kanaGrid: document.querySelector("#kanaGrid"),
  picture: document.querySelector("#picture"),
  smallLabel: document.querySelector("#smallLabel"),
  promptText: document.querySelector("#promptText"),
  hintText: document.querySelector("#hintText"),
  soundButton: document.querySelector("#soundButton"),
  choiceGrid: document.querySelector("#choiceGrid"),
  quizPanel: document.querySelector("#quizPanel"),
  tracePanel: document.querySelector("#tracePanel"),
  traceBoard: document.querySelector("#traceBoard"),
  traceLetter: document.querySelector("#traceLetter"),
  strokeGuide: document.querySelector("#strokeGuide"),
  traceCanvas: document.querySelector("#traceCanvas"),
  clearTrace: document.querySelector("#clearTrace"),
  doneTrace: document.querySelector("#doneTrace"),
  feedback: document.querySelector("#feedback"),
  resetButton: document.querySelector("#resetButton"),
  modeTabs: document.querySelectorAll(".mode-tab"),
};

const ctx = els.traceCanvas.getContext("2d");
let audioContext;

function init() {
  loadProgress();
  renderRows();
  renderKanaMap();
  bindEvents();
  nextRound();
  resizeTraceCanvas();
}

function bindEvents() {
  els.soundButton.addEventListener("click", () => {
    playBeep(560, 0.08, "sine");
    speakCurrent();
  });

  els.modeTabs.forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      els.modeTabs.forEach((tab) => {
        const active = tab === button;
        tab.classList.toggle("active", active);
        tab.setAttribute("aria-selected", String(active));
      });
      els.quizPanel.classList.toggle("hidden", state.mode !== "quiz");
      els.tracePanel.classList.toggle("hidden", state.mode !== "trace");
      els.feedback.textContent = "";
      nextRound();
      if (state.mode === "trace") {
        requestAnimationFrame(resizeTraceCanvas);
      }
    });
  });

  els.clearTrace.addEventListener("click", () => {
    clearTrace();
    playBeep(330, 0.08, "triangle");
  });

  els.doneTrace.addEventListener("click", () => {
    if (state.roundLocked) {
      return;
    }
    const result = evaluateTrace();
    if (!result.ok) {
      traceMistake(result.message);
      return;
    }
    state.roundLocked = true;
    reward("かけたね！");
    setTimeout(nextRound, 720);
  });

  els.resetButton.addEventListener("click", () => {
    state.stars = 0;
    state.streak = 0;
    state.progress = {};
    saveProgress();
    updateScore();
    renderKanaMap();
    els.feedback.textContent = "また あつめよう！";
  });

  window.addEventListener("resize", resizeTraceCanvas);
  els.traceCanvas.addEventListener("pointerdown", startDraw);
  els.traceCanvas.addEventListener("pointermove", draw);
  els.traceCanvas.addEventListener("pointerup", stopDraw);
  els.traceCanvas.addEventListener("pointercancel", stopDraw);
  els.traceCanvas.addEventListener("pointerleave", stopDraw);
}

function renderRows() {
  els.rowPicker.replaceChildren();
  groups.forEach((group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "row-button";
    button.textContent = group.label;
    button.setAttribute("aria-label", group.name);
    button.dataset.group = group.id;
    button.addEventListener("click", () => {
      state.groupId = group.id;
      state.streak = 0;
      state.roundLocked = false;
      renderRows();
      renderKanaMap();
      updateScore();
      nextRound();
    });
    if (group.id === state.groupId) {
      button.classList.add("active");
    }
    els.rowPicker.append(button);
  });
}

function renderKanaMap() {
  els.kanaGrid.replaceChildren();
  getCurrentGroup().kana.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "kana-tile";
    button.setAttribute("aria-label", `${item.char} ${item.word}`);
    if (state.mode === "trace" && item.char === state.current.char) {
      button.classList.add("active");
    }
    const stars = Math.min(state.progress[item.char] || 0, 3);
    button.innerHTML = `
      <span class="kana-char">${item.char}</span>
      <span class="kana-stars">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</span>
    `;
    button.addEventListener("click", () => {
      state.current = item;
      state.roundLocked = false;
      updatePrompt();
      renderChoices();
      renderKanaMap();
      clearTrace();
      speakCurrent();
    });
    els.kanaGrid.append(button);
  });
}

function nextRound() {
  const choices = getCurrentGroup().kana;
  const last = state.current.char;
  let item = choices[Math.floor(Math.random() * choices.length)];
  if (choices.length > 1) {
    while (item.char === last) {
      item = choices[Math.floor(Math.random() * choices.length)];
    }
  }
  state.current = item;
  state.roundLocked = false;
  updatePrompt();
  renderChoices();
  renderKanaMap();
  clearTrace();
}

function getCurrentGroup() {
  return groups.find((group) => group.id === state.groupId) || groups[0];
}

function updatePrompt() {
  const group = getCurrentGroup();
  els.stageLabel.textContent = `${group.name}の ステージ`;
  els.picture.textContent = state.current.emoji;
  els.traceLetter.textContent = state.current.char;
  renderStrokeGuide();
  if (state.mode === "quiz") {
    els.smallLabel.textContent = "おとで えらぼう";
    els.promptText.textContent = getReadingPrompt(state.current);
    els.hintText.textContent = "きいて カタカナを えらぼう";
  } else {
    els.smallLabel.textContent = "なぞってみよう";
    els.promptText.textContent = `「${state.current.char}」を かこう`;
    els.hintText.textContent = `1から じゅんに なぞろう`;
  }
}

function getReadingPrompt(item) {
  const word = katakanaToHiragana(item.word);
  return `${word} の ${katakanaToHiragana(item.char)}`;
}

function katakanaToHiragana(text) {
  return [...text]
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 0x30a1 && code <= 0x30f6) {
        return String.fromCharCode(code - 0x60);
      }
      return char;
    })
    .join("");
}

function renderStrokeGuide() {
  const template = strokeTemplates[state.current.char] || [];
  els.strokeGuide.replaceChildren();
  template.forEach((stroke, index) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.classList.add("guide-stroke");
    path.setAttribute("d", makeGuidePath(stroke));
    els.strokeGuide.append(path);

    const [startX, startY] = stroke[0];
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.classList.add("guide-start");
    circle.setAttribute("cx", String(startX * 100));
    circle.setAttribute("cy", String(startY * 80));
    circle.setAttribute("r", "3.8");
    els.strokeGuide.append(circle);

    const number = document.createElementNS("http://www.w3.org/2000/svg", "text");
    number.classList.add("guide-number");
    number.setAttribute("x", String(startX * 100));
    number.setAttribute("y", String(startY * 80 + 0.15));
    number.textContent = String(index + 1);
    els.strokeGuide.append(number);
  });
}

function makeGuidePath(stroke) {
  return stroke
    .map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x * 100} ${y * 80}`)
    .join(" ");
}

function renderChoices() {
  els.choiceGrid.replaceChildren();
  const pool = getCurrentGroup().kana.map((item) => item.char);
  const options = new Set([state.current.char]);
  while (options.size < Math.min(4, allKana.length)) {
    const source = options.size < pool.length ? pool : allKana.map((item) => item.char);
    options.add(source[Math.floor(Math.random() * source.length)]);
  }
  shuffle([...options]).forEach((char) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-card";
    button.textContent = char;
    button.setAttribute("aria-label", char);
    button.addEventListener("click", () => answer(button, char));
    els.choiceGrid.append(button);
  });
}

function answer(button, char) {
  if (state.roundLocked) {
    return;
  }
  if (char === state.current.char) {
    state.roundLocked = true;
    button.classList.add("correct");
    reward("ぴったり！");
    setTimeout(nextRound, 760);
  } else {
    state.streak = 0;
    button.classList.remove("miss");
    void button.offsetWidth;
    button.classList.add("miss");
    els.feedback.textContent = "もういちど";
    updateScore();
    playBeep(170, 0.12, "square");
  }
}

function traceMistake(message) {
  state.streak = 0;
  els.feedback.textContent = message;
  els.traceBoard.classList.remove("try-again");
  void els.traceBoard.offsetWidth;
  els.traceBoard.classList.add("try-again");
  updateScore();
  playBeep(190, 0.12, "square");
  setTimeout(() => els.traceBoard.classList.remove("try-again"), 520);
}

function evaluateTrace() {
  let width = els.traceCanvas.width;
  let height = els.traceCanvas.height;
  if (width < 2 || height < 2) {
    resizeTraceCanvas();
    width = els.traceCanvas.width;
    height = els.traceCanvas.height;
  }

  const strokeOrderResult = evaluateStrokeOrder();
  if (!strokeOrderResult.ok) {
    return strokeOrderResult;
  }

  const ratio = width / Math.max(1, els.traceCanvas.getBoundingClientRect().width);
  const targetCanvas = makeTraceTargetCanvas(width, height);
  const targetData = targetCanvas.getContext("2d").getImageData(0, 0, width, height).data;
  const drawingData = ctx.getImageData(0, 0, width, height).data;
  const expandedTargetData = makeExpandedAlpha(targetCanvas, Math.round(18 * ratio));
  const expandedDrawingData = makeExpandedAlpha(els.traceCanvas, Math.round(14 * ratio));
  const cellSize = Math.max(12, Math.round(20 * ratio));
  const columns = Math.ceil(width / cellSize);
  const cellCount = columns * Math.ceil(height / cellSize);
  const targetCellPixels = new Uint32Array(cellCount);
  const coveredCellPixels = new Uint32Array(cellCount);

  let drawnPixels = 0;
  let drawnOnTargetPixels = 0;
  let targetPixels = 0;
  let coveredTargetPixels = 0;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const pixel = (y * width + x) * 4 + 3;
      const drawn = drawingData[pixel] > 12;
      const target = targetData[pixel] > 12;

      if (drawn) {
        drawnPixels += 1;
        if (expandedTargetData[pixel] > 12) {
          drawnOnTargetPixels += 1;
        }
      }

      if (target) {
        targetPixels += 1;
        const cell = Math.floor(y / cellSize) * columns + Math.floor(x / cellSize);
        targetCellPixels[cell] += 1;
        if (expandedDrawingData[pixel] > 12) {
          coveredTargetPixels += 1;
          coveredCellPixels[cell] += 1;
        }
      }
    }
  }

  const minimumPixels = Math.max(420 * ratio * ratio, targetPixels * 0.06);
  if (drawnPixels < minimumPixels) {
    return { ok: false, message: "もうすこし かいてみよう" };
  }

  const onShapeRatio = drawnOnTargetPixels / drawnPixels;
  if (onShapeRatio < 0.68) {
    return { ok: false, message: "せんを もじのうえに" };
  }

  const coverageRatio = coveredTargetPixels / Math.max(1, targetPixels);
  const importantCellPixels = Math.max(10, cellSize * cellSize * 0.08);
  let targetCellCount = 0;
  let coveredCellCount = 0;
  for (let i = 0; i < targetCellPixels.length; i += 1) {
    if (targetCellPixels[i] < importantCellPixels) {
      continue;
    }
    targetCellCount += 1;
    if (coveredCellPixels[i] / targetCellPixels[i] >= 0.28) {
      coveredCellCount += 1;
    }
  }
  const cellCoverageRatio = coveredCellCount / Math.max(1, targetCellCount);

  if (coverageRatio < 0.32 || cellCoverageRatio < 0.58) {
    return { ok: false, message: "もうすこし なぞってみよう" };
  }

  return { ok: true, message: "" };
}

function evaluateStrokeOrder() {
  const template = strokeTemplates[state.current.char];
  if (!template || template.length === 0) {
    return { ok: true, message: "" };
  }

  const strokes = state.traceStrokes
    .map(normalizeStroke)
    .filter((stroke) => measureNormalizedLength(stroke) >= 0.025);

  if (strokes.length === 0) {
    return { ok: false, message: "1から じゅんに なぞろう" };
  }

  if (strokes.length < template.length) {
    return { ok: false, message: `${template.length}かくで かいてみよう` };
  }

  if (strokes.length > template.length) {
    return { ok: false, message: "せんが おおいよ" };
  }

  for (let i = 0; i < template.length; i += 1) {
    if (!strokeMatchesTemplate(strokes[i], template[i])) {
      return { ok: false, message: `${i + 1}かくめから かきじゅんを みてね` };
    }
  }

  return { ok: true, message: "" };
}

function normalizeStroke(stroke) {
  const rect = els.traceCanvas.getBoundingClientRect();
  return stroke.map((point) => ({
    x: clamp(point.x / Math.max(1, rect.width), 0, 1),
    y: clamp(point.y / Math.max(1, rect.height), 0, 1),
  }));
}

function strokeMatchesTemplate(stroke, template) {
  const expected = template.map(([x, y]) => ({ x, y }));
  const expectedLength = measureNormalizedLength(expected);
  const shortStroke = expectedLength < 0.18;
  const startTolerance = shortStroke ? 0.2 : 0.18;
  const endTolerance = shortStroke ? 0.24 : 0.22;
  const averageTolerance = shortStroke ? 0.19 : 0.2;
  const drawnStart = stroke[0];
  const drawnEnd = stroke[stroke.length - 1];
  const expectedStart = expected[0];
  const expectedEnd = expected[expected.length - 1];

  if (normalizedDistance(drawnStart, expectedStart) > startTolerance) {
    return false;
  }

  if (normalizedDistance(drawnEnd, expectedEnd) > endTolerance) {
    return false;
  }

  const drawnVector = {
    x: drawnEnd.x - drawnStart.x,
    y: drawnEnd.y - drawnStart.y,
  };
  const expectedVector = {
    x: expectedEnd.x - expectedStart.x,
    y: expectedEnd.y - expectedStart.y,
  };
  const drawnLength = Math.max(0.001, Math.hypot(drawnVector.x, drawnVector.y));
  const templateLength = Math.max(0.001, Math.hypot(expectedVector.x, expectedVector.y));
  const directionScore =
    (drawnVector.x * expectedVector.x + drawnVector.y * expectedVector.y) / (drawnLength * templateLength);
  if (directionScore < 0.18) {
    return false;
  }

  const drawnSamples = samplePolyline(stroke, 7);
  const expectedSamples = samplePolyline(expected, 7);
  const averageDistance =
    drawnSamples.reduce((total, point, index) => total + normalizedDistance(point, expectedSamples[index]), 0) /
    drawnSamples.length;

  return averageDistance <= averageTolerance;
}

function samplePolyline(points, count) {
  if (points.length === 1) {
    return Array.from({ length: count }, () => points[0]);
  }

  const totalLength = measureNormalizedLength(points);
  if (totalLength <= 0.001) {
    return Array.from({ length: count }, () => points[0]);
  }

  const samples = [];
  for (let i = 0; i < count; i += 1) {
    samples.push(pointAtDistance(points, (totalLength * i) / (count - 1)));
  }
  return samples;
}

function pointAtDistance(points, targetDistance) {
  let traveled = 0;
  for (let i = 1; i < points.length; i += 1) {
    const start = points[i - 1];
    const end = points[i];
    const segmentLength = normalizedDistance(start, end);
    if (traveled + segmentLength >= targetDistance) {
      const progress = (targetDistance - traveled) / Math.max(0.001, segmentLength);
      return {
        x: start.x + (end.x - start.x) * progress,
        y: start.y + (end.y - start.y) * progress,
      };
    }
    traveled += segmentLength;
  }
  return points[points.length - 1];
}

function measureNormalizedLength(points) {
  let length = 0;
  for (let i = 1; i < points.length; i += 1) {
    length += normalizedDistance(points[i - 1], points[i]);
  }
  return length;
}

function normalizedDistance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function makeTraceTargetCanvas(width, height) {
  const targetCanvas = document.createElement("canvas");
  const targetCtx = targetCanvas.getContext("2d");
  const rect = els.traceCanvas.getBoundingClientRect();
  const scale = width / Math.max(1, rect.width);
  const letterStyle = getComputedStyle(els.traceLetter);
  const fontSize = Math.round(parseFloat(letterStyle.fontSize) * scale);
  const fontWeight = letterStyle.fontWeight || "900";
  const fontFamily =
    letterStyle.fontFamily || '"Yu Gothic", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif';
  targetCanvas.width = width;
  targetCanvas.height = height;
  targetCtx.fillStyle = "#000000";
  targetCtx.textAlign = "center";
  targetCtx.textBaseline = "middle";
  targetCtx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  targetCtx.fillText(state.current.char, width / 2, height * 0.54);
  return targetCanvas;
}

function makeExpandedAlpha(sourceCanvas, radius) {
  const spreadCanvas = document.createElement("canvas");
  const spreadCtx = spreadCanvas.getContext("2d");
  const width = sourceCanvas.width;
  const height = sourceCanvas.height;
  const step = Math.max(2, Math.floor(radius / 4));

  spreadCanvas.width = width;
  spreadCanvas.height = height;
  for (let y = -radius; y <= radius; y += step) {
    for (let x = -radius; x <= radius; x += step) {
      if (x * x + y * y <= radius * radius) {
        spreadCtx.drawImage(sourceCanvas, x, y);
      }
    }
  }

  return spreadCtx.getImageData(0, 0, width, height).data;
}

function reward(message) {
  state.stars += 1;
  state.streak += 1;
  state.progress[state.current.char] = Math.min((state.progress[state.current.char] || 0) + 1, 3);
  els.feedback.textContent = message;
  updateScore();
  renderKanaMap();
  saveProgress();
  playBeep(740, 0.09, "triangle");
  setTimeout(() => playBeep(940, 0.1, "triangle"), 90);
  burstConfetti();
}

function updateScore() {
  els.starCount.textContent = String(state.stars);
  els.streakCount.textContent = String(state.streak);
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem("katakana-star-progress") || "{}");
    state.stars = Number(saved.stars) || 0;
    state.streak = Number(saved.streak) || 0;
    state.progress = saved.progress || {};
  } catch {
    state.progress = {};
  }
  updateScore();
}

function saveProgress() {
  const payload = {
    stars: state.stars,
    streak: state.streak,
    progress: state.progress,
  };
  localStorage.setItem("katakana-star-progress", JSON.stringify(payload));
}

function speakCurrent() {
  if (!("speechSynthesis" in window)) {
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(`${state.current.sound}。${state.current.word}`);
  utterance.lang = "ja-JP";
  utterance.rate = 0.78;
  utterance.pitch = 1.08;
  window.speechSynthesis.speak(utterance);
}

function playBeep(frequency, duration, type) {
  try {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.16, audioContext.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration + 0.02);
  } catch {
    // Sound is a bonus; the game still works without it.
  }
}

function resizeTraceCanvas() {
  const rect = els.traceCanvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  els.traceCanvas.width = Math.max(1, Math.floor(rect.width * ratio));
  els.traceCanvas.height = Math.max(1, Math.floor(rect.height * ratio));
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 18;
  ctx.strokeStyle = "#e74f5b";
}

function clearTrace() {
  ctx.clearRect(0, 0, els.traceCanvas.width, els.traceCanvas.height);
  els.traceBoard.classList.remove("try-again");
  state.activeStroke = null;
  state.traceStrokes = [];
}

function startDraw(event) {
  if (state.roundLocked) {
    return;
  }
  try {
    els.traceCanvas.setPointerCapture(event.pointerId);
  } catch {
    // Synthetic tests and a few older browsers do not expose a capturable pointer.
  }
  state.drawing = true;
  const point = getPoint(event);
  state.activeStroke = [point];
  ctx.beginPath();
  ctx.moveTo(point.x, point.y);
}

function draw(event) {
  if (!state.drawing) {
    return;
  }
  const point = getPoint(event);
  appendActiveStrokePoint(point);
  ctx.lineTo(point.x, point.y);
  ctx.stroke();
}

function stopDraw(event) {
  if (!state.drawing) {
    return;
  }
  if (event && event.clientX !== undefined) {
    appendActiveStrokePoint(getPoint(event));
  }
  if (state.activeStroke && measureStrokeLength(state.activeStroke) >= 8) {
    state.traceStrokes.push(state.activeStroke);
  }
  state.activeStroke = null;
  state.drawing = false;
}

function appendActiveStrokePoint(point) {
  if (!state.activeStroke) {
    return;
  }
  const last = state.activeStroke[state.activeStroke.length - 1];
  if (distance(point, last) >= 2.5) {
    state.activeStroke.push(point);
  }
}

function getPoint(event) {
  const rect = els.traceCanvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function measureStrokeLength(points) {
  let length = 0;
  for (let i = 1; i < points.length; i += 1) {
    length += distance(points[i - 1], points[i]);
  }
  return length;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function burstConfetti() {
  const colors = ["#e74f5b", "#2f7fd2", "#2d9b68", "#f7c948", "#7857c8"];
  for (let i = 0; i < 22; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${45 + Math.random() * 10}vw`;
    piece.style.top = `${36 + Math.random() * 12}vh`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty("--dx", `${Math.random() * 240 - 120}px`);
    piece.style.setProperty("--dy", `${120 + Math.random() * 150}px`);
    document.body.append(piece);
    setTimeout(() => piece.remove(), 950);
  }
}

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

init();
