const cameraInput = document.querySelector("#cameraInput");
const imageInput = document.querySelector("#imageInput");
const pickButton = document.querySelector("#pickButton");
const pickButtonText = document.querySelector("#pickButtonText");
const albumButton = document.querySelector("#albumButton");
const albumButtonText = document.querySelector("#albumButtonText");
const replaceButton = document.querySelector("#replaceButton");
const dropZone = document.querySelector("#dropZone");
const previewWrap = document.querySelector("#previewWrap");
const previewImage = document.querySelector("#previewImage");
const familyProfile = document.querySelector("#familyProfile");
const languageSelect = document.querySelector("#languageSelect");
const languageLabel = document.querySelector("#languageLabel");
const profileOpenButton = document.querySelector("#profileOpenButton");
const panelKicker = document.querySelector("#panelKicker");
const panelTitle = document.querySelector("#panelTitle");
const productTab = document.querySelector("#productTab");
const receiptTab = document.querySelector("#receiptTab");
const profileLabel = document.querySelector("#profileLabel");
const profileSummary = document.querySelector("#profileSummary");
const profileSaveButton = document.querySelector("#profileSaveButton");
const profileSavedMessage = document.querySelector("#profileSavedMessage");
const scanTabs = document.querySelectorAll(".scan-tab");
const uploadCopy = document.querySelector("#uploadCopy");
const uploadNote = document.querySelector("#uploadNote");
const emptyState = document.querySelector("#emptyState");
const emptyTitle = document.querySelector("#emptyTitle");
const emptyCopy = document.querySelector("#emptyCopy");
const resultKicker = document.querySelector("#resultKicker");
const loadingState = document.querySelector("#loadingState");
const loadingTitle = document.querySelector("#loadingTitle");
const loadingCopy = document.querySelector("#loadingCopy");
const errorState = document.querySelector("#errorState");
const errorTitle = document.querySelector("#errorTitle");
const errorText = document.querySelector("#errorText");
const resultState = document.querySelector("#resultState");
const receiptState = document.querySelector("#receiptState");
const verdictBadge = document.querySelector("#verdictBadge");
const itemName = document.querySelector("#itemName");
const subtitle = document.querySelector("#subtitle");
const voiceSummary = document.querySelector("#voiceSummary");
const cardStage = document.querySelector("#cardStage");
const detailList = document.querySelector("#detailList");
const speakButton = document.querySelector("#speakButton");
const speakButtonText = document.querySelector("#speakButtonText");
const receiptSpeakButton = document.querySelector("#receiptSpeakButton");
const receiptSpeakButtonText = document.querySelector("#receiptSpeakButtonText");
const receiptHeroLabel = document.querySelector("#receiptHeroLabel");
const receiptTotal = document.querySelector("#receiptTotal");
const receiptStore = document.querySelector("#receiptStore");
const receiptDate = document.querySelector("#receiptDate");
const receiptDateLabel = document.querySelector("#receiptDateLabel");
const receiptCount = document.querySelector("#receiptCount");
const receiptCountLabel = document.querySelector("#receiptCountLabel");
const receiptTax = document.querySelector("#receiptTax");
const receiptTaxLabel = document.querySelector("#receiptTaxLabel");
const receiptVoiceSummary = document.querySelector("#receiptVoiceSummary");
const receiptItemsTitle = document.querySelector("#receiptItemsTitle");
const receiptItems = document.querySelector("#receiptItems");
const receiptCategoriesTitle = document.querySelector("#receiptCategoriesTitle");
const receiptCategories = document.querySelector("#receiptCategories");
const nutritionSignalLabel = document.querySelector("#nutritionSignalLabel");
const nutritionSignal = document.querySelector("#nutritionSignal");
const spendingSignalLabel = document.querySelector("#spendingSignalLabel");
const spendingSignal = document.querySelector("#spendingSignal");
const familyReportNoteLabel = document.querySelector("#familyReportNoteLabel");
const familyReportNote = document.querySelector("#familyReportNote");
const clerkButton = document.querySelector("#clerkButton");
const copyButton = document.querySelector("#copyButton");
const downloadButton = document.querySelector("#downloadButton");
const clerkDialog = document.querySelector("#clerkDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const clerkPhrase = document.querySelector("#clerkPhrase");
const dialogHint = document.querySelector("#dialogHint");
const closeDialogButton = document.querySelector("#closeDialogButton");
const copyClerkButton = document.querySelector("#copyClerkButton");
const profileDialog = document.querySelector("#profileDialog");
const profileDialogKicker = document.querySelector("#profileDialogKicker");
const profileDialogTitle = document.querySelector("#profileDialogTitle");
const profileDialogIntro = document.querySelector("#profileDialogIntro");
const profileDialogCloseButton = document.querySelector("#profileDialogCloseButton");
const setupLanguageSelect = document.querySelector("#setupLanguageSelect");
const setupLanguageLabel = document.querySelector("#setupLanguageLabel");
const profileMembersLabel = document.querySelector("#profileMembersLabel");
const profileMembersInput = document.querySelector("#profileMembersInput");
const profileSetupHint = document.querySelector("#profileSetupHint");
const profileSkipButton = document.querySelector("#profileSkipButton");
const profileDialogSaveButton = document.querySelector("#profileDialogSaveButton");
const serviceStatus = document.querySelector("#serviceStatus");
const chatPanel = document.querySelector("#chatPanel");
const chatKicker = document.querySelector("#chatKicker");
const chatTitle = document.querySelector("#chatTitle");
const clearChatButton = document.querySelector("#clearChatButton");
const chatSuggestions = document.querySelector("#chatSuggestions");
const chatMessages = document.querySelector("#chatMessages");
const chatWelcome = document.querySelector("#chatWelcome");
const chatMicButton = document.querySelector("#chatMicButton");
const chatMicButtonText = document.querySelector("#chatMicButtonText");
const chatVoiceStatus = document.querySelector("#chatVoiceStatus");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const chatSubmitButton = document.querySelector("#chatSubmitButton");
const recordsOpenButton = document.querySelector("#recordsOpenButton");
const recordsDialog = document.querySelector("#recordsDialog");
const recordsKicker = document.querySelector("#recordsKicker");
const recordsTitle = document.querySelector("#recordsTitle");
const clearRecordsButton = document.querySelector("#clearRecordsButton");
const recordsCloseButton = document.querySelector("#recordsCloseButton");
const monthlySpendLabel = document.querySelector("#monthlySpendLabel");
const monthlySpend = document.querySelector("#monthlySpend");
const monthlyReceiptLabel = document.querySelector("#monthlyReceiptLabel");
const monthlyReceiptCount = document.querySelector("#monthlyReceiptCount");
const monthlyProductLabel = document.querySelector("#monthlyProductLabel");
const monthlyProductCount = document.querySelector("#monthlyProductCount");
const recentReceiptsTitle = document.querySelector("#recentReceiptsTitle");
const recentProductsTitle = document.querySelector("#recentProductsTitle");
const recentReceipts = document.querySelector("#recentReceipts");
const recentProducts = document.querySelector("#recentProducts");
const feedbackPanel = document.querySelector("#feedbackPanel");
const feedbackKicker = document.querySelector("#feedbackKicker");
const feedbackTitle = document.querySelector("#feedbackTitle");
const feedbackHelpful = document.querySelector("#feedbackHelpful");
const feedbackInaccurate = document.querySelector("#feedbackInaccurate");
const feedbackConfusing = document.querySelector("#feedbackConfusing");
const feedbackThanks = document.querySelector("#feedbackThanks");

let latestResult = null;
let latestCardSvg = "";
let scanMode = "product";
const languageStorageKey = "famlens.language.v2";
const legacyLanguageStorageKey = "carecart.language";
const supportedLanguageKeys = new Set(["zh-Hans", "en", "es", "fr", "ko", "ja", "vi", "hi"]);
let appLanguage = getInitialLanguage();
const clientUserId = getClientUserId();
const profileStorageKey = "famlens.familyProfile.v1";
const profileSetupCompletedKey = "famlens.profileSetup.completed.v1";
let familyProfileState = loadFamilyProfileState();
if (familyProfileState.output_language && supportedLanguageKeys.has(familyProfileState.output_language)) {
  appLanguage = familyProfileState.output_language;
  localStorage.setItem(languageStorageKey, appLanguage);
}
let serviceState = "ready";
let currentAudio = null;
let currentAudioUrl = null;
let localizationRequestId = 0;
let chatHistory = [];
let speechRecognition = null;
let mediaRecorder = null;
let mediaStream = null;
let cancelChatVoice = false;
let isChatListening = false;
const recordsStorageKey = "carecart.familyRecords.v1";
let familyRecords = loadFamilyRecords();

const languageConfig = {
  "zh-Hans": {
    htmlLang: "zh-CN",
    speech: "zh-CN",
    ui: {
      language: "语言",
      ready: "在线",
      analyzing: "分析中",
      done: "已完成",
      retry: "需重试",
      panelKicker: "给家里主要采购的人用",
      panelTitle: "拍一下，马上看懂",
      productTab: "拍商品",
      receiptTab: "扫小票",
      profileLabel: "家庭提醒，可选",
      profilePlaceholder: "例如：家里有人血脂高；老人高血压；孩子8岁；想少糖少盐。",
      resultKicker: "FamLens",
      errorTitle: "这张没看成功",
      replace: "换一张",
      uploadFromAlbum: "从相册上传",
      speakProduct: "播放给老人听",
      speakReceipt: "播放小票摘要",
      askStaff: "问店员怎么说",
      shareFamily: "发给家人",
      saveCard: "保存图文卡",
      copied: "已复制",
      copyEnglish: "复制英文",
      dialogTitle: "给店员看",
      dialogHint: "把这句话给店员看，或点复制后粘贴到翻译器。",
      receiptRecord: "小票记录",
      receiptTotalPrefix: "总额",
      date: "日期",
      itemCount: "商品数",
      tax: "税费",
      receiptItems: "采购清单",
      categoryStats: "分类统计",
      nutrition: "饮食结构提示",
      spending: "支出提示",
      report: "月报价值",
      unknownStore: "未知商店",
      unknownDate: "未知日期",
      noItemsTitle: "还没看清商品清单",
      noItemsCopy: "请补拍完整小票",
      noCategoriesTitle: "分类不足",
      noCategoriesCopy: "保存更多小票后统计更准确",
      itemUnit: "件",
      productFileError: "请选择商品照片。",
      receiptFileError: "请选择小票照片。",
    },
    modes: {
      product: {
        pick: "拍商品",
        upload: "商品、说明、价签都可以",
        note: "结果直接显示在本页，不跳链接，不需要再聊天追问",
        emptyTitle: "商品信息会显示在这里",
        emptyCopy: "支持包装、说明、价签和使用提示。",
        loadingTitle: "正在看这张商品图",
        loadingCopy: "通常需要 8-20 秒。尽量拍清楚正面、背面或说明文字。",
        error: "这张图暂时没分析成功。请换一张更清楚的正面或背面照片。",
      },
      receipt: {
        pick: "扫小票",
        upload: "拍完整小票，包含商品清单和总额",
        note: "小票用于统计家庭采购清单、饮食结构和月度支出",
        emptyTitle: "记录买了什么，花了多少钱",
        emptyCopy: "小票是家庭饮食结构和支出报告的数据入口，建议买完就扫。",
        loadingTitle: "正在整理这张小票",
        loadingCopy: "我会提取商店、日期、总额、商品清单和分类金额。",
        error: "这张小票暂时没分析成功。请拍完整小票，包含商品清单和总金额。",
      },
    },
    details: [
      ["这是什么", "what_it_is"],
      ["怎么用", "how_to_use"],
      ["有什么好", "benefit"],
      ["注意", "warning"],
      ["保存", "storage"],
      ["品类", "category"],
    ],
  },
  en: {
    htmlLang: "en",
    speech: "en-US",
    ui: {
      language: "Language",
      ready: "Ready",
      analyzing: "Analyzing",
      done: "Done",
      retry: "Retry",
      panelKicker: "For the family shopper",
      panelTitle: "Snap it. Understand it.",
      productTab: "Product",
      receiptTab: "Receipt",
      profileLabel: "Family notes, optional",
      profilePlaceholder: "Example: someone has high cholesterol; grandma has high blood pressure; child is 8; prefer less sugar and salt.",
      resultKicker: "FamLens",
      errorTitle: "This photo did not work",
      replace: "Choose another",
      uploadFromAlbum: "Upload from album",
      speakProduct: "Play aloud",
      speakReceipt: "Play receipt summary",
      askStaff: "Ask staff",
      shareFamily: "Share with family",
      saveCard: "Save card",
      copied: "Copied",
      copyEnglish: "Copy English",
      dialogTitle: "Show staff",
      dialogHint: "Show this sentence to staff, or copy it into a translator.",
      receiptRecord: "Receipt record",
      receiptTotalPrefix: "Total",
      date: "Date",
      itemCount: "Items",
      tax: "Tax",
      receiptItems: "Shopping list",
      categoryStats: "Category summary",
      nutrition: "Diet signal",
      spending: "Spending signal",
      report: "Report value",
      unknownStore: "Unknown store",
      unknownDate: "Unknown date",
      noItemsTitle: "Items are not clear yet",
      noItemsCopy: "Please retake the full receipt",
      noCategoriesTitle: "Not enough categories",
      noCategoriesCopy: "More receipts will make this more accurate",
      itemUnit: "items",
      productFileError: "Please choose a product photo.",
      receiptFileError: "Please choose a receipt photo.",
    },
    modes: {
      product: {
        pick: "Scan product",
        upload: "Product, label, instructions, or price tag",
        note: "Results appear here directly, no chat loop or extra link",
        emptyTitle: "Product information appears here",
        emptyCopy: "Works with packaging, labels, instructions, and price tags.",
        loadingTitle: "Reading this product photo",
        loadingCopy: "Usually takes 8-20 seconds. Clear front, back, or instruction photos work best.",
        error: "This product photo did not analyze well. Try a clearer front or back photo.",
      },
      receipt: {
        pick: "Scan receipt",
        upload: "Capture the full receipt with item list and total",
        note: "Receipts power family shopping, diet, and monthly spending reports",
        emptyTitle: "Track what the family bought and spent",
        emptyCopy: "Receipts are the data entry point for family diet and spending reports.",
        loadingTitle: "Organizing this receipt",
        loadingCopy: "I will extract store, date, total, items, and category amounts.",
        error: "This receipt did not analyze well. Retake the full receipt with item list and total.",
      },
    },
    details: [
      ["What it is", "what_it_is"],
      ["How to use", "how_to_use"],
      ["Good for", "benefit"],
      ["Watch out", "warning"],
      ["Storage", "storage"],
      ["Category", "category"],
    ],
  },
  es: {
    htmlLang: "es",
    speech: "es-ES",
    ui: {
      language: "Idioma",
      ready: "Listo",
      analyzing: "Analizando",
      done: "Listo",
      retry: "Reintentar",
      panelKicker: "Para quien compra en casa",
      panelTitle: "Toma foto y entiende",
      productTab: "Producto",
      receiptTab: "Recibo",
      profileLabel: "Notas familiares, opcional",
      profilePlaceholder: "Ejemplo: colesterol alto; presión alta; niño de 8 años; menos azúcar y sal.",
      resultKicker: "FamLens",
      errorTitle: "La foto no funcionó",
      replace: "Cambiar foto",
      uploadFromAlbum: "Subir desde álbum",
      speakProduct: "Leer en voz alta",
      speakReceipt: "Leer resumen",
      askStaff: "Preguntar al personal",
      shareFamily: "Enviar a familia",
      saveCard: "Guardar tarjeta",
      copied: "Copiado",
      copyEnglish: "Copiar inglés",
      dialogTitle: "Mostrar al personal",
      dialogHint: "Muestra esta frase al personal o cópiala en un traductor.",
      receiptRecord: "Registro de recibo",
      receiptTotalPrefix: "Total",
      date: "Fecha",
      itemCount: "Artículos",
      tax: "Impuesto",
      receiptItems: "Lista de compra",
      categoryStats: "Categorías",
      nutrition: "Señal de dieta",
      spending: "Señal de gasto",
      report: "Valor del informe",
      unknownStore: "Tienda desconocida",
      unknownDate: "Fecha desconocida",
      noItemsTitle: "No se ven los artículos",
      noItemsCopy: "Toma de nuevo el recibo completo",
      noCategoriesTitle: "Categorías insuficientes",
      noCategoriesCopy: "Más recibos mejoran la precisión",
      itemUnit: "art.",
      productFileError: "Elige una foto del producto.",
      receiptFileError: "Elige una foto del recibo.",
    },
    modes: {
      product: {
        pick: "Escanear producto",
        upload: "Producto, etiqueta, instrucciones o precio",
        note: "El resultado aparece aquí, sin enlace extra",
        emptyTitle: "Qué es, si conviene comprarlo y cómo usarlo",
        emptyCopy: "Empieza con productos, etiquetas, avisos e instrucciones.",
        loadingTitle: "Leyendo la foto del producto",
        loadingCopy: "Suele tardar 8-20 segundos. Mejor con texto claro.",
        error: "No pude analizar bien esta foto. Prueba con una más clara.",
      },
      receipt: {
        pick: "Escanear recibo",
        upload: "Recibo completo con lista y total",
        note: "Sirve para informes de compra, dieta y gasto familiar",
        emptyTitle: "Registra qué compró y gastó la familia",
        emptyCopy: "El recibo es la base de informes familiares mensuales.",
        loadingTitle: "Ordenando este recibo",
        loadingCopy: "Extraeré tienda, fecha, total, artículos y categorías.",
        error: "No pude analizar bien este recibo. Toma el recibo completo.",
      },
    },
    details: [["Qué es", "what_it_is"], ["Cómo usar", "how_to_use"], ["Beneficio", "benefit"], ["Cuidado", "warning"], ["Guardar", "storage"], ["Categoría", "category"]],
  },
  fr: {
    htmlLang: "fr",
    speech: "fr-FR",
    ui: {
      language: "Langue",
      ready: "Prêt",
      analyzing: "Analyse",
      done: "Terminé",
      retry: "Réessayer",
      panelKicker: "Pour la personne qui fait les courses",
      panelTitle: "Photo, puis réponse claire",
      productTab: "Produit",
      receiptTab: "Reçu",
      profileLabel: "Notes famille, optionnel",
      profilePlaceholder: "Exemple : cholestérol élevé ; tension élevée ; enfant de 8 ans ; moins de sucre et de sel.",
      resultKicker: "FamLens",
      errorTitle: "La photo n'a pas marché",
      replace: "Changer",
      uploadFromAlbum: "Importer une photo",
      speakProduct: "Lire à voix haute",
      speakReceipt: "Lire le reçu",
      askStaff: "Demander au personnel",
      shareFamily: "Partager",
      saveCard: "Sauver la carte",
      copied: "Copié",
      copyEnglish: "Copier l'anglais",
      dialogTitle: "Montrer au personnel",
      dialogHint: "Montrez cette phrase au personnel ou copiez-la dans un traducteur.",
      receiptRecord: "Reçu",
      receiptTotalPrefix: "Total",
      date: "Date",
      itemCount: "Articles",
      tax: "Taxe",
      receiptItems: "Liste d'achats",
      categoryStats: "Catégories",
      nutrition: "Signal alimentation",
      spending: "Signal dépenses",
      report: "Valeur rapport",
      unknownStore: "Magasin inconnu",
      unknownDate: "Date inconnue",
      noItemsTitle: "Articles peu lisibles",
      noItemsCopy: "Reprenez le reçu complet",
      noCategoriesTitle: "Catégories insuffisantes",
      noCategoriesCopy: "Plus de reçus améliorent la précision",
      itemUnit: "art.",
      productFileError: "Choisissez une photo du produit.",
      receiptFileError: "Choisissez une photo du reçu.",
    },
    modes: {
      product: {
        pick: "Scanner produit",
        upload: "Produit, étiquette, mode d'emploi ou prix",
        note: "Le résultat s'affiche ici, sans lien séparé",
        emptyTitle: "Ce que c'est, si l'acheter, comment l'utiliser",
        emptyCopy: "Commencez par les produits, étiquettes et consignes.",
        loadingTitle: "Lecture du produit",
        loadingCopy: "Souvent 8-20 secondes. Une photo nette aide beaucoup.",
        error: "Analyse difficile. Essayez une photo plus nette.",
      },
      receipt: {
        pick: "Scanner reçu",
        upload: "Reçu complet avec liste et total",
        note: "Base des rapports de courses, alimentation et dépenses",
        emptyTitle: "Suivre les achats et dépenses familiales",
        emptyCopy: "Les reçus alimentent les rapports mensuels.",
        loadingTitle: "Organisation du reçu",
        loadingCopy: "J'extrais magasin, date, total, articles et catégories.",
        error: "Analyse difficile. Reprenez le reçu complet.",
      },
    },
    details: [["C'est quoi", "what_it_is"], ["Mode d'emploi", "how_to_use"], ["Utile pour", "benefit"], ["Attention", "warning"], ["Conserver", "storage"], ["Catégorie", "category"]],
  },
  ko: {
    htmlLang: "ko",
    speech: "ko-KR",
    ui: {
      language: "언어",
      ready: "사용 가능",
      analyzing: "분석 중",
      done: "완료",
      retry: "다시 시도",
      panelKicker: "가족 장보는 사람을 위해",
      panelTitle: "사진 찍고 바로 이해",
      productTab: "상품",
      receiptTab: "영수증",
      profileLabel: "가족 메모, 선택",
      profilePlaceholder: "예: 고지혈증, 고혈압, 8세 아이, 설탕과 소금 줄이기.",
      resultKicker: "FamLens",
      errorTitle: "사진 분석 실패",
      replace: "다른 사진",
      uploadFromAlbum: "앨범에서 올리기",
      speakProduct: "소리로 듣기",
      speakReceipt: "영수증 요약 듣기",
      askStaff: "직원에게 묻기",
      shareFamily: "가족에게 보내기",
      saveCard: "카드 저장",
      copied: "복사됨",
      copyEnglish: "영어 복사",
      dialogTitle: "직원에게 보여주기",
      dialogHint: "이 문장을 직원에게 보여주거나 번역기에 붙여 넣으세요.",
      receiptRecord: "영수증 기록",
      receiptTotalPrefix: "합계",
      date: "날짜",
      itemCount: "상품 수",
      tax: "세금",
      receiptItems: "구매 목록",
      categoryStats: "분류 통계",
      nutrition: "식단 힌트",
      spending: "지출 힌트",
      report: "월간 리포트",
      unknownStore: "알 수 없는 매장",
      unknownDate: "알 수 없는 날짜",
      noItemsTitle: "상품 목록이 흐립니다",
      noItemsCopy: "영수증 전체를 다시 찍어 주세요",
      noCategoriesTitle: "분류 부족",
      noCategoriesCopy: "영수증이 많을수록 정확해집니다",
      itemUnit: "개",
      productFileError: "상품 사진을 선택하세요.",
      receiptFileError: "영수증 사진을 선택하세요.",
    },
    modes: {
      product: {
        pick: "상품 스캔",
        upload: "상품, 라벨, 설명, 가격표",
        note: "결과가 이 페이지에 바로 표시됩니다",
        emptyTitle: "무엇인지, 살지, 어떻게 쓰는지",
        emptyCopy: "상품 라벨과 주의사항을 먼저 쉽게 확인합니다.",
        loadingTitle: "상품 사진을 읽는 중",
        loadingCopy: "보통 8-20초 걸립니다. 글자가 선명할수록 좋습니다.",
        error: "분석이 잘 되지 않았습니다. 더 선명한 사진을 올려 주세요.",
      },
      receipt: {
        pick: "영수증 스캔",
        upload: "상품 목록과 총액이 보이게 찍기",
        note: "가족 구매, 식단, 월간 지출 분석에 사용됩니다",
        emptyTitle: "가족이 무엇을 샀고 얼마나 썼는지 기록",
        emptyCopy: "영수증은 월간 가족 리포트의 데이터 입력입니다.",
        loadingTitle: "영수증 정리 중",
        loadingCopy: "매장, 날짜, 총액, 상품, 분류 금액을 추출합니다.",
        error: "영수증 분석이 어렵습니다. 전체 영수증을 다시 찍어 주세요.",
      },
    },
    details: [["무엇인가요", "what_it_is"], ["사용 방법", "how_to_use"], ["좋은 점", "benefit"], ["주의", "warning"], ["보관", "storage"], ["분류", "category"]],
  },
  ja: {
    htmlLang: "ja",
    speech: "ja-JP",
    ui: {
      language: "言語",
      ready: "利用可",
      analyzing: "分析中",
      done: "完了",
      retry: "再試行",
      panelKicker: "家族の買い物担当に",
      panelTitle: "撮って、すぐ理解",
      productTab: "商品",
      receiptTab: "レシート",
      profileLabel: "家族メモ 任意",
      profilePlaceholder: "例：脂質を控えたい、血圧が高い、8歳の子ども、砂糖と塩を控えたい。",
      resultKicker: "FamLens",
      errorTitle: "写真を分析できません",
      replace: "別の写真",
      uploadFromAlbum: "写真から選ぶ",
      speakProduct: "音声で聞く",
      speakReceipt: "レシート要約",
      askStaff: "店員に聞く",
      shareFamily: "家族に送る",
      saveCard: "カード保存",
      copied: "コピー済み",
      copyEnglish: "英語をコピー",
      dialogTitle: "店員に見せる",
      dialogHint: "この文を店員に見せるか、翻訳アプリに貼り付けてください。",
      receiptRecord: "レシート記録",
      receiptTotalPrefix: "合計",
      date: "日付",
      itemCount: "点数",
      tax: "税",
      receiptItems: "購入リスト",
      categoryStats: "分類集計",
      nutrition: "食生活のヒント",
      spending: "支出のヒント",
      report: "月次レポート",
      unknownStore: "不明な店",
      unknownDate: "不明な日付",
      noItemsTitle: "商品が読めません",
      noItemsCopy: "レシート全体を撮り直してください",
      noCategoriesTitle: "分類不足",
      noCategoriesCopy: "レシートが増えると精度が上がります",
      itemUnit: "点",
      productFileError: "商品写真を選んでください。",
      receiptFileError: "レシート写真を選んでください。",
    },
    modes: {
      product: {
        pick: "商品をスキャン",
        upload: "商品、ラベル、説明、値札",
        note: "結果はこのページに直接表示されます",
        emptyTitle: "何か、買うべきか、使い方",
        emptyCopy: "商品ラベル、使い方、注意点を簡単に確認します。",
        loadingTitle: "商品写真を読んでいます",
        loadingCopy: "通常 8-20 秒です。文字がはっきりした写真が最適です。",
        error: "分析できませんでした。より鮮明な写真を試してください。",
      },
      receipt: {
        pick: "レシートをスキャン",
        upload: "商品リストと合計が見えるレシート",
        note: "家族の買い物、食生活、月次支出分析に使います",
        emptyTitle: "家族が何を買い、いくら使ったか記録",
        emptyCopy: "レシートは月次家族レポートの入口です。",
        loadingTitle: "レシートを整理中",
        loadingCopy: "店、日付、合計、商品、分類金額を抽出します。",
        error: "分析できませんでした。レシート全体を撮り直してください。",
      },
    },
    details: [["これは何", "what_it_is"], ["使い方", "how_to_use"], ["よい点", "benefit"], ["注意", "warning"], ["保存", "storage"], ["カテゴリ", "category"]],
  },
  vi: {
    htmlLang: "vi",
    speech: "vi-VN",
    ui: {
      language: "Ngôn ngữ",
      ready: "Sẵn sàng",
      analyzing: "Đang phân tích",
      done: "Xong",
      retry: "Thử lại",
      panelKicker: "Cho người đi chợ trong gia đình",
      panelTitle: "Chụp ảnh, hiểu ngay",
      productTab: "Sản phẩm",
      receiptTab: "Hóa đơn",
      profileLabel: "Ghi chú gia đình, tùy chọn",
      profilePlaceholder: "Ví dụ: mỡ máu cao; huyết áp cao; bé 8 tuổi; muốn ít đường ít muối.",
      resultKicker: "FamLens",
      errorTitle: "Ảnh chưa phân tích được",
      replace: "Đổi ảnh",
      uploadFromAlbum: "Tải từ album",
      speakProduct: "Đọc thành tiếng",
      speakReceipt: "Đọc tóm tắt hóa đơn",
      askStaff: "Hỏi nhân viên",
      shareFamily: "Gửi gia đình",
      saveCard: "Lưu thẻ",
      copied: "Đã sao chép",
      copyEnglish: "Sao chép tiếng Anh",
      dialogTitle: "Cho nhân viên xem",
      dialogHint: "Cho nhân viên xem câu này hoặc dán vào ứng dụng dịch.",
      receiptRecord: "Ghi hóa đơn",
      receiptTotalPrefix: "Tổng",
      date: "Ngày",
      itemCount: "Số món",
      tax: "Thuế",
      receiptItems: "Danh sách mua",
      categoryStats: "Phân loại",
      nutrition: "Gợi ý ăn uống",
      spending: "Gợi ý chi tiêu",
      report: "Giá trị báo cáo",
      unknownStore: "Không rõ cửa hàng",
      unknownDate: "Không rõ ngày",
      noItemsTitle: "Chưa đọc rõ món hàng",
      noItemsCopy: "Vui lòng chụp lại toàn bộ hóa đơn",
      noCategoriesTitle: "Thiếu phân loại",
      noCategoriesCopy: "Nhiều hóa đơn hơn sẽ chính xác hơn",
      itemUnit: "món",
      productFileError: "Vui lòng chọn ảnh sản phẩm.",
      receiptFileError: "Vui lòng chọn ảnh hóa đơn.",
    },
    modes: {
      product: {
        pick: "Quét sản phẩm",
        upload: "Sản phẩm, nhãn, hướng dẫn hoặc giá",
        note: "Kết quả hiện ngay tại đây, không cần mở link",
        emptyTitle: "Đây là gì, có nên mua, dùng thế nào",
        emptyCopy: "Bắt đầu với nhãn sản phẩm, cách dùng và lưu ý.",
        loadingTitle: "Đang đọc ảnh sản phẩm",
        loadingCopy: "Thường mất 8-20 giây. Ảnh rõ chữ sẽ tốt hơn.",
        error: "Ảnh này chưa phân tích tốt. Hãy thử ảnh rõ hơn.",
      },
      receipt: {
        pick: "Quét hóa đơn",
        upload: "Chụp đủ danh sách món và tổng tiền",
        note: "Dùng cho báo cáo mua sắm, ăn uống và chi tiêu gia đình",
        emptyTitle: "Ghi lại gia đình mua gì và tiêu bao nhiêu",
        emptyCopy: "Hóa đơn là đầu vào cho báo cáo gia đình hằng tháng.",
        loadingTitle: "Đang sắp xếp hóa đơn",
        loadingCopy: "Tôi sẽ lấy cửa hàng, ngày, tổng tiền, món hàng và phân loại.",
        error: "Hóa đơn này chưa phân tích tốt. Hãy chụp lại toàn bộ hóa đơn.",
      },
    },
    details: [["Là gì", "what_it_is"], ["Cách dùng", "how_to_use"], ["Lợi ích", "benefit"], ["Lưu ý", "warning"], ["Bảo quản", "storage"], ["Loại", "category"]],
  },
  hi: {
    htmlLang: "hi",
    speech: "hi-IN",
    ui: {
      language: "भाषा",
      ready: "तैयार",
      analyzing: "जांच रहा है",
      done: "पूरा हुआ",
      retry: "फिर कोशिश करें",
      panelKicker: "परिवार के खरीदारी करने वाले के लिए",
      panelTitle: "फोटो लें, तुरंत समझें",
      productTab: "सामान",
      receiptTab: "रसीद",
      profileLabel: "परिवार नोट, वैकल्पिक",
      profilePlaceholder: "जैसे: हाई ब्लड प्रेशर; बच्चा 8 साल का; कम चीनी और कम नमक चाहिए।",
      resultKicker: "FamLens",
      errorTitle: "यह फोटो साफ नहीं पढ़ी गई",
      replace: "दूसरी फोटो",
      uploadFromAlbum: "गैलरी से अपलोड करें",
      speakProduct: "आवाज में सुनें",
      speakReceipt: "रसीद सुनें",
      askStaff: "स्टाफ से पूछें",
      shareFamily: "परिवार को भेजें",
      saveCard: "कार्ड सेव करें",
      copied: "कॉपी हो गया",
      copyEnglish: "अंग्रेजी कॉपी करें",
      dialogTitle: "स्टाफ को दिखाएं",
      dialogHint: "यह वाक्य स्टाफ को दिखाएं या अनुवाद ऐप में चिपकाएं।",
      receiptRecord: "रसीद रिकॉर्ड",
      receiptTotalPrefix: "कुल",
      date: "तारीख",
      itemCount: "सामान",
      tax: "टैक्स",
      receiptItems: "खरीदारी सूची",
      categoryStats: "श्रेणी",
      nutrition: "खाने का संकेत",
      spending: "खर्च संकेत",
      report: "रिपोर्ट मूल्य",
      unknownStore: "दुकान अज्ञात",
      unknownDate: "तारीख अज्ञात",
      noItemsTitle: "सामान साफ नहीं पढ़ा गया",
      noItemsCopy: "पूरी रसीद की फोटो लें",
      noCategoriesTitle: "श्रेणी कम है",
      noCategoriesCopy: "ज्यादा रसीदों से रिपोर्ट बेहतर होगी",
      itemUnit: "आइटम",
      productFileError: "कृपया सामान की फोटो चुनें।",
      receiptFileError: "कृपया रसीद की फोटो चुनें।",
    },
    modes: {
      product: {
        pick: "सामान स्कैन करें",
        upload: "सामान, लेबल, निर्देश या कीमत",
        note: "नतीजा यहीं दिखेगा, लिंक खोलने की जरूरत नहीं",
        emptyTitle: "यह क्या है, खरीदना है या नहीं, कैसे इस्तेमाल करें",
        emptyCopy: "पहले लेबल, इस्तेमाल और सावधानी समझें।",
        loadingTitle: "सामान की फोटो पढ़ रहा है",
        loadingCopy: "आमतौर पर 8-20 सेकंड लगते हैं। साफ अक्षर वाली फोटो बेहतर है।",
        error: "यह फोटो ठीक से पढ़ी नहीं गई। कृपया साफ फोटो लें।",
      },
      receipt: {
        pick: "रसीद स्कैन करें",
        upload: "पूरी सूची और कुल रकम की फोटो लें",
        note: "परिवार की खरीदारी, खाना और खर्च रिपोर्ट के लिए",
        emptyTitle: "परिवार ने क्या खरीदा और कितना खर्च किया",
        emptyCopy: "रसीद मासिक परिवार रिपोर्ट का डेटा है।",
        loadingTitle: "रसीद पढ़ रहा है",
        loadingCopy: "दुकान, तारीख, कुल रकम, सामान और श्रेणी निकालूंगा।",
        error: "यह रसीद ठीक से पढ़ी नहीं गई। पूरी रसीद फिर से फोटो लें।",
      },
    },
    details: [["यह क्या है", "what_it_is"], ["कैसे इस्तेमाल करें", "how_to_use"], ["लाभ", "benefit"], ["ध्यान रखें", "warning"], ["कैसे रखें", "storage"], ["श्रेणी", "category"]],
  },
};

const chatLanguageCopy = {
  "zh-Hans": {
    kicker: "继续问 AI",
    title: "还有问题，直接问",
    clear: "清空",
    send: "发送",
    sending: "正在回答",
    placeholder: "输入你想问的问题",
    voiceAsk: "点一下，说问题",
    voiceListening: "正在听，请直接说问题",
    voiceStop: "说完了，点这里",
    voiceReady: "老人可以直接说：“这个怎么用？”",
    voiceTranscribing: "正在听懂这段语音",
    voiceHeard: "听到了，正在问 AI",
    voicePermission: "需要允许麦克风权限，才能语音提问。",
    voiceUnsupported: "这个浏览器暂时不支持语音输入，可以先用文字提问。",
    voiceError: "这次没听清，请再说一次。",
    welcome: "可以问我：这个适合老人吗？怎么用？有没有要注意的地方？",
    error: "这次没有回答成功，请换个问法再试一次。",
    suggestions: ["这个适合老人吗？", "怎么用最简单？", "有什么要注意？"],
  },
  en: {
    kicker: "Ask AI",
    title: "Ask a follow-up",
    clear: "Clear",
    send: "Send",
    sending: "Answering",
    placeholder: "Type your question",
    voiceAsk: "Tap to speak",
    voiceListening: "Listening. Ask your question.",
    voiceStop: "Done speaking",
    voiceReady: "Speak naturally, for example: How do I use this?",
    voiceTranscribing: "Understanding this voice question",
    voiceHeard: "Got it. Asking AI.",
    voicePermission: "Please allow microphone access to ask by voice.",
    voiceUnsupported: "Voice input is not supported in this browser yet. Please type for now.",
    voiceError: "I could not hear that clearly. Please try again.",
    welcome: "You can ask: Is this good for seniors? How do I use it? What should I watch out for?",
    error: "I could not answer that. Please try asking another way.",
    suggestions: ["Is this senior-friendly?", "How do I use it?", "What should I watch out for?"],
  },
  es: {
    kicker: "Preguntar a AI",
    title: "Haz otra pregunta",
    clear: "Borrar",
    send: "Enviar",
    sending: "Respondiendo",
    placeholder: "Escribe tu pregunta",
    voiceAsk: "Toca para hablar",
    voiceListening: "Escuchando. Haz tu pregunta.",
    voiceStop: "Terminé de hablar",
    voiceReady: "Puede hablar, por ejemplo: ¿Cómo se usa?",
    voiceTranscribing: "Entendiendo la pregunta de voz",
    voiceHeard: "Entendido. Preguntando a AI.",
    voicePermission: "Permite el acceso al micrófono para preguntar por voz.",
    voiceUnsupported: "Este navegador aún no permite voz. Escribe por ahora.",
    voiceError: "No escuché bien. Inténtalo otra vez.",
    welcome: "Puedes preguntar: ¿Sirve para personas mayores? ¿Cómo se usa? ¿Qué debo cuidar?",
    error: "No pude responder. Intenta preguntarlo de otra forma.",
    suggestions: ["¿Sirve para mayores?", "¿Cómo se usa?", "¿Qué debo cuidar?"],
  },
  fr: {
    kicker: "Demander à l'AI",
    title: "Posez une question",
    clear: "Effacer",
    send: "Envoyer",
    sending: "Réponse",
    placeholder: "Écrivez votre question",
    voiceAsk: "Appuyer pour parler",
    voiceListening: "J'écoute. Posez la question.",
    voiceStop: "J'ai fini",
    voiceReady: "Parlez simplement, par exemple : Comment l'utiliser ?",
    voiceTranscribing: "Je comprends la question vocale",
    voiceHeard: "Bien reçu. Question envoyée à l'AI.",
    voicePermission: "Autorisez le micro pour poser une question vocale.",
    voiceUnsupported: "La voix n'est pas prise en charge par ce navigateur. Écrivez pour l'instant.",
    voiceError: "Je n'ai pas bien entendu. Réessayez.",
    welcome: "Vous pouvez demander : Est-ce adapté aux personnes âgées ? Comment l'utiliser ? À quoi faire attention ?",
    error: "Je n'ai pas pu répondre. Essayez autrement.",
    suggestions: ["Adapté aux aînés ?", "Comment l'utiliser ?", "À quoi faire attention ?"],
  },
  ko: {
    kicker: "AI에게 묻기",
    title: "더 궁금한 점 묻기",
    clear: "지우기",
    send: "보내기",
    sending: "답변 중",
    placeholder: "질문을 입력하세요",
    voiceAsk: "눌러서 말하기",
    voiceListening: "듣고 있어요. 질문하세요.",
    voiceStop: "말 끝났어요",
    voiceReady: "예: 이거 어떻게 써요? 라고 말해 보세요.",
    voiceTranscribing: "음성 질문을 이해하는 중입니다.",
    voiceHeard: "들었어요. AI에게 묻는 중입니다.",
    voicePermission: "음성 질문을 하려면 마이크 권한을 허용해 주세요.",
    voiceUnsupported: "이 브라우저는 음성 입력을 지원하지 않습니다. 우선 글자로 입력해 주세요.",
    voiceError: "잘 듣지 못했어요. 다시 말해 주세요.",
    welcome: "이렇게 물어볼 수 있어요: 어르신에게 괜찮나요? 어떻게 쓰나요? 주의할 점은?",
    error: "답변하지 못했습니다. 다른 말로 다시 물어보세요.",
    suggestions: ["어르신에게 괜찮나요?", "어떻게 쓰나요?", "주의할 점은?"],
  },
  ja: {
    kicker: "AIに聞く",
    title: "続けて質問",
    clear: "消去",
    send: "送信",
    sending: "回答中",
    placeholder: "質問を入力",
    voiceAsk: "タップして話す",
    voiceListening: "聞いています。質問してください。",
    voiceStop: "話し終わり",
    voiceReady: "例：「これはどう使うの？」と話せます。",
    voiceTranscribing: "音声の質問を理解しています",
    voiceHeard: "聞き取りました。AIに聞いています。",
    voicePermission: "音声で質問するにはマイクを許可してください。",
    voiceUnsupported: "このブラウザは音声入力に対応していません。今は文字で入力してください。",
    voiceError: "うまく聞き取れませんでした。もう一度話してください。",
    welcome: "質問できます：高齢者に向いていますか？使い方は？注意点は？",
    error: "回答できませんでした。別の聞き方で試してください。",
    suggestions: ["高齢者向けですか？", "使い方は？", "注意点は？"],
  },
  vi: {
    kicker: "Hỏi AI",
    title: "Hỏi thêm",
    clear: "Xóa",
    send: "Gửi",
    sending: "Đang trả lời",
    placeholder: "Nhập câu hỏi",
    voiceAsk: "Bấm để nói",
    voiceListening: "Đang nghe. Hãy hỏi.",
    voiceStop: "Nói xong",
    voiceReady: "Có thể nói: Cái này dùng thế nào?",
    voiceTranscribing: "Đang hiểu câu hỏi bằng giọng nói",
    voiceHeard: "Đã nghe. Đang hỏi AI.",
    voicePermission: "Hãy cho phép dùng mic để hỏi bằng giọng nói.",
    voiceUnsupported: "Trình duyệt này chưa hỗ trợ nhập giọng nói. Hãy nhập chữ trước.",
    voiceError: "Chưa nghe rõ. Vui lòng nói lại.",
    welcome: "Bạn có thể hỏi: Có hợp với người lớn tuổi không? Dùng thế nào? Cần chú ý gì?",
    error: "Tôi chưa trả lời được. Hãy hỏi theo cách khác.",
    suggestions: ["Hợp với người lớn tuổi?", "Dùng thế nào?", "Cần chú ý gì?"],
  },
  hi: {
    kicker: "AI से पूछें",
    title: "आगे सवाल पूछें",
    clear: "साफ करें",
    send: "भेजें",
    sending: "जवाब दे रहा है",
    placeholder: "अपना सवाल लिखें",
    voiceAsk: "बोलने के लिए दबाएं",
    voiceListening: "सुन रहा हूं। अपना सवाल बोलें।",
    voiceStop: "बोलना खत्म",
    voiceReady: "बोलकर पूछें: इसे कैसे इस्तेमाल करें?",
    voiceTranscribing: "आवाज़ वाला सवाल समझ रहा हूं",
    voiceHeard: "सुन लिया। AI से पूछ रहा हूं।",
    voicePermission: "आवाज़ से पूछने के लिए microphone की अनुमति दें।",
    voiceUnsupported: "इस ब्राउज़र में आवाज़ से सवाल अभी नहीं चल रहा। फिलहाल लिखकर पूछें।",
    voiceError: "साफ सुनाई नहीं दिया। कृपया फिर से बोलें।",
    welcome: "आप पूछ सकते हैं: क्या यह बुजुर्गों के लिए ठीक है? कैसे इस्तेमाल करें? क्या सावधानी रखें?",
    error: "मैं जवाब नहीं दे पाया। कृपया दूसरे तरीके से पूछें।",
    suggestions: ["बुजुर्गों के लिए ठीक?", "कैसे इस्तेमाल करें?", "क्या सावधानी रखें?"],
  },
};

const recordsLanguageCopy = {
  "zh-Hans": {
    kicker: "家庭记录",
    open: "家庭记录",
    close: "关闭",
    title: "这个月家里买了什么",
    clear: "清空记录",
    spend: "本月小票支出",
    receipts: "已记录小票",
    products: "看过商品",
    recentReceipts: "最近小票",
    recentProducts: "最近商品",
    receiptUnit: "张",
    productUnit: "件",
    noReceipts: "还没有小票记录。买完东西后扫小票，就能慢慢看到家庭采购和支出结构。",
    noProducts: "还没有商品记录。拍过的商品会自动留在这里，方便家人回看。",
    unknownStore: "未知商店",
    unknownProduct: "未知商品",
  },
  en: {
    kicker: "Family records",
    open: "Records",
    close: "Close",
    title: "What the family bought this month",
    clear: "Clear records",
    spend: "Receipt spend",
    receipts: "Receipts saved",
    products: "Products viewed",
    recentReceipts: "Recent receipts",
    recentProducts: "Recent products",
    receiptUnit: "",
    productUnit: "",
    noReceipts: "No receipt records yet. Scan receipts after shopping to build family spending and diet patterns.",
    noProducts: "No product records yet. Scanned products will stay here for family review.",
    unknownStore: "Unknown store",
    unknownProduct: "Unknown product",
  },
  es: {
    kicker: "Registro familiar",
    open: "Registros",
    close: "Cerrar",
    title: "Qué compró la familia este mes",
    clear: "Borrar registros",
    spend: "Gasto en recibos",
    receipts: "Recibos guardados",
    products: "Productos vistos",
    recentReceipts: "Recibos recientes",
    recentProducts: "Productos recientes",
    receiptUnit: "",
    productUnit: "",
    noReceipts: "Aún no hay recibos. Escanea recibos para ver gasto y alimentación familiar.",
    noProducts: "Aún no hay productos. Los productos escaneados aparecerán aquí.",
    unknownStore: "Tienda desconocida",
    unknownProduct: "Producto desconocido",
  },
  fr: {
    kicker: "Dossier famille",
    open: "Dossier",
    close: "Fermer",
    title: "Ce que la famille a acheté ce mois-ci",
    clear: "Effacer",
    spend: "Dépenses reçus",
    receipts: "Reçus enregistrés",
    products: "Produits vus",
    recentReceipts: "Reçus récents",
    recentProducts: "Produits récents",
    receiptUnit: "",
    productUnit: "",
    noReceipts: "Aucun reçu pour l'instant. Scannez les reçus pour suivre dépenses et alimentation.",
    noProducts: "Aucun produit pour l'instant. Les produits scannés apparaîtront ici.",
    unknownStore: "Magasin inconnu",
    unknownProduct: "Produit inconnu",
  },
  ko: {
    kicker: "가족 기록",
    open: "기록",
    close: "닫기",
    title: "이번 달 가족이 산 것",
    clear: "기록 지우기",
    spend: "이번 달 영수증 지출",
    receipts: "저장한 영수증",
    products: "확인한 상품",
    recentReceipts: "최근 영수증",
    recentProducts: "최근 상품",
    receiptUnit: "장",
    productUnit: "개",
    noReceipts: "아직 영수증 기록이 없습니다. 쇼핑 후 영수증을 스캔하면 가족 지출과 식단을 볼 수 있습니다.",
    noProducts: "아직 상품 기록이 없습니다. 스캔한 상품은 가족이 다시 볼 수 있습니다.",
    unknownStore: "알 수 없는 매장",
    unknownProduct: "알 수 없는 상품",
  },
  ja: {
    kicker: "家族記録",
    open: "記録",
    close: "閉じる",
    title: "今月、家族が買ったもの",
    clear: "記録を消去",
    spend: "今月の支出",
    receipts: "保存レシート",
    products: "見た商品",
    recentReceipts: "最近のレシート",
    recentProducts: "最近の商品",
    receiptUnit: "枚",
    productUnit: "点",
    noReceipts: "まだレシート記録がありません。買い物後にスキャンすると支出と食生活を見られます。",
    noProducts: "まだ商品記録がありません。スキャンした商品はここに残ります。",
    unknownStore: "不明な店",
    unknownProduct: "不明な商品",
  },
  vi: {
    kicker: "Hồ sơ gia đình",
    open: "Hồ sơ",
    close: "Đóng",
    title: "Gia đình đã mua gì tháng này",
    clear: "Xóa hồ sơ",
    spend: "Chi từ hóa đơn",
    receipts: "Hóa đơn đã lưu",
    products: "Sản phẩm đã xem",
    recentReceipts: "Hóa đơn gần đây",
    recentProducts: "Sản phẩm gần đây",
    receiptUnit: "",
    productUnit: "",
    noReceipts: "Chưa có hóa đơn. Quét hóa đơn sau khi mua để theo dõi chi tiêu và ăn uống.",
    noProducts: "Chưa có sản phẩm. Sản phẩm đã quét sẽ nằm ở đây.",
    unknownStore: "Không rõ cửa hàng",
    unknownProduct: "Không rõ sản phẩm",
  },
  hi: {
    kicker: "परिवार रिकॉर्ड",
    open: "रिकॉर्ड",
    close: "बंद करें",
    title: "इस महीने परिवार ने क्या खरीदा",
    clear: "रिकॉर्ड साफ करें",
    spend: "इस महीने रसीद खर्च",
    receipts: "सेव रसीद",
    products: "देखे गए सामान",
    recentReceipts: "हाल की रसीदें",
    recentProducts: "हाल के सामान",
    receiptUnit: "",
    productUnit: "",
    noReceipts: "अभी कोई रसीद रिकॉर्ड नहीं है। खरीदारी के बाद रसीद स्कैन करें।",
    noProducts: "अभी कोई सामान रिकॉर्ड नहीं है। स्कैन किए गए सामान यहां दिखेंगे।",
    unknownStore: "दुकान अज्ञात",
    unknownProduct: "सामान अज्ञात",
  },
};

const feedbackLanguageCopy = {
  "zh-Hans": {
    kicker: "反馈",
    title: "这个结果有帮助吗？",
    helpful: "有帮助",
    inaccurate: "不准确",
    confusing: "看不懂",
    thanks: "收到，谢谢。你的反馈会帮助我们改进。",
  },
  en: {
    kicker: "Feedback",
    title: "Was this result helpful?",
    helpful: "Helpful",
    inaccurate: "Inaccurate",
    confusing: "Confusing",
    thanks: "Thanks. Your feedback helps us improve FamLens.",
  },
  es: {
    kicker: "Comentarios",
    title: "¿Fue útil este resultado?",
    helpful: "Útil",
    inaccurate: "Incorrecto",
    confusing: "Confuso",
    thanks: "Gracias. Tu comentario nos ayuda a mejorar.",
  },
  fr: {
    kicker: "Retour",
    title: "Ce résultat est-il utile ?",
    helpful: "Utile",
    inaccurate: "Inexact",
    confusing: "Confus",
    thanks: "Merci. Votre retour nous aide à améliorer FamLens.",
  },
  ko: {
    kicker: "피드백",
    title: "이 결과가 도움이 되었나요?",
    helpful: "도움 됨",
    inaccurate: "부정확",
    confusing: "이해 어려움",
    thanks: "감사합니다. 피드백은 FamLens 개선에 도움이 됩니다.",
  },
  ja: {
    kicker: "フィードバック",
    title: "この結果は役に立ちましたか？",
    helpful: "役に立つ",
    inaccurate: "不正確",
    confusing: "分かりにくい",
    thanks: "ありがとうございます。改善に役立てます。",
  },
  vi: {
    kicker: "Phản hồi",
    title: "Kết quả này có hữu ích không?",
    helpful: "Hữu ích",
    inaccurate: "Không đúng",
    confusing: "Khó hiểu",
    thanks: "Cảm ơn. Phản hồi giúp chúng tôi cải thiện.",
  },
  hi: {
    kicker: "Feedback",
    title: "क्या यह नतीजा मददगार था?",
    helpful: "मददगार",
    inaccurate: "गलत",
    confusing: "समझ नहीं आया",
    thanks: "धन्यवाद। आपका feedback FamLens को बेहतर बनाएगा।",
  },
};

const profileLanguageCopy = {
  "zh-Hans": {
    open: "家庭",
    boxLabel: "家庭成员信息",
    boxSummary: "设置一次家庭成员基本信息，之后商品、小票和 AI 问答都会参考它。",
    boxPlaceholder: "例如：我给4口人买东西：爸爸68岁，妈妈65岁，孩子8岁，配偶成年人。有需要可写基础健康情况。",
    boxSave: "保存家庭信息",
    saved: "已保存。",
    kicker: "家庭设置",
    title: "设置你的家庭购物助手",
    intro: "先选择语言。后面的问题和结果都会使用这个语言。",
    language: "语言",
    members: "家庭成员",
    membersPlaceholder: "例如：我给4口人买东西：爸爸68岁，妈妈65岁，孩子8岁，配偶成年人。有需要可写基础健康情况。",
    hint: "以后可以再修改。暂时不需要填写购物偏好。",
    skip: "先跳过",
    save: "保存并开始",
    close: "关闭",
  },
  en: {
    open: "Family",
    boxLabel: "Family member basics",
    boxSummary: "Set up household basics once. Product, receipt, and AI answers will use it later.",
    boxPlaceholder: "Example: I shop for 4 people: father 68, mother 65, child 8, spouse adult. Add basic health notes only if useful.",
    boxSave: "Save family profile",
    saved: "Saved.",
    kicker: "Family setup",
    title: "Set up your family assistant",
    intro: "Choose the language first. The next questions and results will use that language.",
    language: "Language",
    members: "Family members",
    membersPlaceholder: "Example: I shop for 4 people: father 68, mother 65, child 8, spouse adult. Add basic health notes only if useful.",
    hint: "You can edit this later. Shopping preferences are not required.",
    skip: "Skip for now",
    save: "Save and continue",
    close: "Close",
  },
  es: {
    open: "Familia",
    boxLabel: "Datos básicos de la familia",
    boxSummary: "Configura la familia una vez. Productos, recibos y AI lo usarán después.",
    boxPlaceholder: "Ejemplo: compro para 4 personas: padre 68, madre 65, niño 8, pareja adulta. Añade notas de salud básicas si sirven.",
    boxSave: "Guardar familia",
    saved: "Guardado.",
    kicker: "Familia",
    title: "Configura tu asistente familiar",
    intro: "Elige primero el idioma. Las siguientes preguntas y resultados usarán ese idioma.",
    language: "Idioma",
    members: "Miembros de la familia",
    membersPlaceholder: "Ejemplo: compro para 4 personas: padre 68, madre 65, niño 8, pareja adulta. Añade notas de salud básicas si sirven.",
    hint: "Puedes editarlo después. No pedimos preferencias de compra.",
    skip: "Omitir por ahora",
    save: "Guardar y continuar",
    close: "Cerrar",
  },
  fr: {
    open: "Famille",
    boxLabel: "Infos famille",
    boxSummary: "Configurez la famille une fois. Produits, reçus et AI l'utiliseront ensuite.",
    boxPlaceholder: "Exemple : je fais les courses pour 4 personnes : père 68, mère 65, enfant 8, conjoint adulte. Ajoutez des notes de santé simples si utile.",
    boxSave: "Enregistrer",
    saved: "Enregistré.",
    kicker: "Configuration famille",
    title: "Configurez votre assistant familial",
    intro: "Choisissez d'abord la langue. Les questions et résultats suivront cette langue.",
    language: "Langue",
    members: "Membres de la famille",
    membersPlaceholder: "Exemple : je fais les courses pour 4 personnes : père 68, mère 65, enfant 8, conjoint adulte. Ajoutez des notes de santé simples si utile.",
    hint: "Vous pourrez modifier plus tard. Pas besoin de préférences d'achat.",
    skip: "Passer",
    save: "Enregistrer et continuer",
    close: "Fermer",
  },
  ko: {
    open: "가족",
    boxLabel: "가족 기본 정보",
    boxSummary: "가족 정보를 한 번 설정하면 상품, 영수증, AI 답변에 반영됩니다.",
    boxPlaceholder: "예: 4인 가족 장보기: 아버지 68세, 어머니 65세, 아이 8세, 배우자 성인. 필요하면 기본 건강 메모를 적어 주세요.",
    boxSave: "가족 정보 저장",
    saved: "저장됨.",
    kicker: "가족 설정",
    title: "가족 쇼핑 도우미 설정",
    intro: "먼저 언어를 선택하세요. 다음 질문과 결과가 그 언어로 표시됩니다.",
    language: "언어",
    members: "가족 구성원",
    membersPlaceholder: "예: 4인 가족 장보기: 아버지 68세, 어머니 65세, 아이 8세, 배우자 성인. 필요하면 기본 건강 메모를 적어 주세요.",
    hint: "나중에 수정할 수 있습니다. 쇼핑 취향은 입력하지 않아도 됩니다.",
    skip: "나중에",
    save: "저장하고 시작",
    close: "닫기",
  },
  ja: {
    open: "家族",
    boxLabel: "家族の基本情報",
    boxSummary: "一度設定すると、商品、レシート、AI回答に反映されます。",
    boxPlaceholder: "例：4人分を買う。父68歳、母65歳、子ども8歳、配偶者は大人。必要なら基本的な健康メモも。",
    boxSave: "家族情報を保存",
    saved: "保存しました。",
    kicker: "家族設定",
    title: "家族の買い物アシスタントを設定",
    intro: "最初に言語を選んでください。次の質問と結果はその言語になります。",
    language: "言語",
    members: "家族メンバー",
    membersPlaceholder: "例：4人分を買う。父68歳、母65歳、子ども8歳、配偶者は大人。必要なら基本的な健康メモも。",
    hint: "あとで変更できます。買い物の好みは不要です。",
    skip: "今はスキップ",
    save: "保存して始める",
    close: "閉じる",
  },
  vi: {
    open: "Gia đình",
    boxLabel: "Thông tin gia đình",
    boxSummary: "Thiết lập một lần. Sản phẩm, hóa đơn và AI sẽ dùng thông tin này.",
    boxPlaceholder: "Ví dụ: tôi mua cho 4 người: bố 68, mẹ 65, bé 8 tuổi, vợ/chồng là người lớn. Thêm ghi chú sức khỏe cơ bản nếu cần.",
    boxSave: "Lưu hồ sơ",
    saved: "Đã lưu.",
    kicker: "Thiết lập gia đình",
    title: "Thiết lập trợ lý gia đình",
    intro: "Chọn ngôn ngữ trước. Câu hỏi và kết quả sau đó sẽ dùng ngôn ngữ này.",
    language: "Ngôn ngữ",
    members: "Thành viên gia đình",
    membersPlaceholder: "Ví dụ: tôi mua cho 4 người: bố 68, mẹ 65, bé 8 tuổi, vợ/chồng là người lớn. Thêm ghi chú sức khỏe cơ bản nếu cần.",
    hint: "Có thể sửa sau. Không cần nhập sở thích mua sắm.",
    skip: "Bỏ qua",
    save: "Lưu và bắt đầu",
    close: "Đóng",
  },
  hi: {
    open: "परिवार",
    boxLabel: "परिवार की बुनियादी जानकारी",
    boxSummary: "एक बार परिवार सेट करें। सामान, रसीद और AI जवाब में यह जानकारी काम आएगी।",
    boxPlaceholder: "जैसे: मैं 4 लोगों के लिए खरीदारी करता हूं: पिता 68, मां 65, बच्चा 8, जीवनसाथी वयस्क। जरूरत हो तो छोटी health note जोड़ें।",
    boxSave: "परिवार सेव करें",
    saved: "सेव हो गया।",
    kicker: "परिवार सेटअप",
    title: "अपना परिवार assistant सेट करें",
    intro: "पहले भाषा चुनें। आगे के सवाल और नतीजे उसी भाषा में होंगे।",
    language: "भाषा",
    members: "परिवार के सदस्य",
    membersPlaceholder: "जैसे: मैं 4 लोगों के लिए खरीदारी करता हूं: पिता 68, मां 65, बच्चा 8, जीवनसाथी वयस्क। जरूरत हो तो छोटी health note जोड़ें।",
    hint: "बाद में बदल सकते हैं। Shopping preference अभी जरूरी नहीं है।",
    skip: "अभी छोड़ें",
    save: "सेव करके शुरू करें",
    close: "बंद करें",
  },
};

pickButton.addEventListener("click", () => cameraInput.click());
albumButton.addEventListener("click", () => imageInput.click());
replaceButton.addEventListener("click", () => imageInput.click());
languageSelect.addEventListener("change", async () => {
  await changeLanguage(languageSelect.value, { localizeResult: true });
});
setupLanguageSelect.addEventListener("change", async () => {
  await changeLanguage(setupLanguageSelect.value, { localizeResult: false });
});
profileOpenButton.addEventListener("click", () => openProfileDialog());
profileDialogCloseButton.addEventListener("click", () => closeProfileDialog());
profileSkipButton.addEventListener("click", () => {
  syncVisibleFamilyInputs();
  localStorage.setItem(profileSetupCompletedKey, "true");
  syncFamilyProfileToBackend();
  closeProfileDialog();
  sendClientEvent("profile_setup_skipped", { output_language: appLanguage });
});
profileDialogSaveButton.addEventListener("click", async () => {
  await saveFamilyProfile(profileMembersInput.value);
  closeProfileDialog();
});
profileSaveButton.addEventListener("click", async () => {
  await saveFamilyProfile(familyProfile.value);
});
imageInput.addEventListener("change", () => {
  const file = imageInput.files?.[0];
  if (file) analyzeFile(file);
});
cameraInput.addEventListener("change", () => {
  const file = cameraInput.files?.[0];
  if (file) analyzeFile(file);
});

scanTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setScanMode(tab.dataset.mode || "product");
  });
});

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropZone.classList.remove("dragover");
  const file = event.dataTransfer?.files?.[0];
  if (file) analyzeFile(file);
});

speakButton.addEventListener("click", async () => {
  if (!latestResult?.voice_summary) return;
  await speak(latestResult.voice_summary);
});

receiptSpeakButton.addEventListener("click", async () => {
  const summary = latestResult?.voice_summary || latestResult?.receipt?.voice_summary;
  if (!summary) return;
  await speak(summary);
});

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await askChat(chatInput.value);
});

chatInput.addEventListener("keydown", async (event) => {
  if (event.key !== "Enter" || event.shiftKey) return;
  event.preventDefault();
  await askChat(chatInput.value);
});

chatMicButton.addEventListener("click", () => {
  toggleChatVoiceInput();
});

clearChatButton.addEventListener("click", () => {
  stopChatVoiceInput();
  chatHistory = [];
  chatInput.value = "";
  renderChatMessages();
  chatVoiceStatus.textContent = chatCopy().voiceReady;
  chatVoiceStatus.classList.remove("warning");
});

recordsOpenButton.addEventListener("click", () => {
  renderFamilyRecords();
  recordsDialog.showModal();
  sendClientEvent("open_family_records", { output_language: appLanguage });
});

recordsCloseButton.addEventListener("click", () => recordsDialog.close());

recordsDialog.addEventListener("click", (event) => {
  if (event.target === recordsDialog) recordsDialog.close();
});

clearRecordsButton.addEventListener("click", () => {
  familyRecords = { products: [], receipts: [] };
  saveFamilyRecords();
  renderFamilyRecords();
  sendClientEvent("clear_family_records");
});

[feedbackHelpful, feedbackInaccurate, feedbackConfusing].forEach((button) => {
  button.addEventListener("click", () => submitFeedback(button.dataset.feedback || "unknown"));
});

clerkButton.addEventListener("click", () => {
  const name = latestResult?.judgement?.item_name || "this product";
  clerkPhrase.textContent = `Where can I find ${toEnglishFallback(name)}?`;
  clerkDialog.showModal();
});

closeDialogButton.addEventListener("click", () => clerkDialog.close());
copyClerkButton.addEventListener("click", async () => {
  await copyText(clerkPhrase.textContent);
  copyClerkButton.textContent = ui().copied;
  setTimeout(() => (copyClerkButton.textContent = ui().copyEnglish), 1200);
});

copyButton.addEventListener("click", async () => {
  if (!latestResult) return;
  await copyText(buildShareText(latestResult));
  sendClientEvent("share_family", { mode: latestResult.receipt ? "receipt" : "product", output_language: appLanguage });
  copyButton.textContent = ui().copied;
  setTimeout(() => (copyButton.textContent = ui().shareFamily), 1200);
});

downloadButton.addEventListener("click", () => {
  if (!latestCardSvg) return;
  sendClientEvent("save_card", { output_language: appLanguage, item_name: latestResult?.judgement?.item_name || "" });
  const blob = new Blob([latestCardSvg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${latestResult?.judgement?.item_name || "famlens-card"}.svg`;
  link.click();
  URL.revokeObjectURL(url);
});

async function analyzeFile(file) {
  if (!file.type.startsWith("image/")) {
    showError(scanMode === "receipt" ? ui().receiptFileError : ui().productFileError);
    return;
  }

  previewImage.src = URL.createObjectURL(file);
  previewWrap.hidden = false;
  dropZone.hidden = true;
  chatHistory = [];
  renderChatMessages();
  showLoading();
  setServiceStatus("analyzing");

  const form = new FormData();
  form.append("image", file);
  form.append("family_profile", profileContextText());
  form.append("output_language", appLanguage);
  form.append("user_id", clientUserId);

  try {
    const endpoint = scanMode === "receipt" ? "/api/analyze-receipt-upload" : "/api/analyze-upload";
    const response = await fetch(endpoint, {
      method: "POST",
      body: form,
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || "分析失败");
    }
    const data = await response.json();
    if (scanMode === "receipt") {
      addReceiptRecord(data);
      renderReceiptResult(data);
    } else {
      addProductRecord(data);
      renderResult(data);
    }
    setServiceStatus("done");
  } catch (error) {
    showError(modeCopy().error);
    setServiceStatus("retry");
  }
}

function renderResult(data) {
  latestResult = data;
  latestCardSvg = data.card_svg || "";

  const judgement = data.judgement || {};
  verdictBadge.textContent = judgement.verdict || "OK";
  itemName.textContent = judgement.item_name || "Product";
  subtitle.textContent = judgement.subtitle || "";
  voiceSummary.textContent = data.voice_summary || judgement.voice_summary || "";

  cardStage.innerHTML = latestCardSvg;
  detailList.innerHTML = "";
  config().details.forEach(([label, key]) => {
    const value = judgement[key];
    if (!value) return;
    const item = document.createElement("div");
    item.className = "detail-item";
    item.innerHTML = `<span>${escapeHtml(label)}</span><p>${escapeHtml(value)}</p>`;
    detailList.appendChild(item);
  });

  emptyState.hidden = true;
  loadingState.hidden = true;
  errorState.hidden = true;
  resultState.hidden = false;
  receiptState.hidden = true;
  feedbackPanel.hidden = false;
  feedbackThanks.hidden = true;
}

function renderReceiptResult(data) {
  latestResult = data;
  latestCardSvg = "";
  const receipt = data.receipt || {};
  const currency = receipt.currency || "CAD";

  receiptTotal.textContent = formatAmount(receipt.total_amount, currency);
  receiptStore.textContent = receipt.store_name || ui().unknownStore;
  receiptDate.textContent = receipt.purchase_date || ui().unknownDate;
  receiptCount.textContent = formatItemCount(receipt.item_count);
  receiptTax.textContent = formatAmount(receipt.tax_amount, currency);
  receiptVoiceSummary.textContent = data.voice_summary || receipt.voice_summary || "";
  nutritionSignal.textContent = receipt.nutrition_signal || "";
  spendingSignal.textContent = receipt.spending_signal || "";
  familyReportNote.textContent = receipt.family_report_note || "";

  receiptItems.innerHTML = "";
  (receipt.items || []).slice(0, 12).forEach((item) => {
    const row = document.createElement("div");
    row.className = "receipt-item";
    row.innerHTML = `
      <div>
        <strong>${escapeHtml(item.translated_name || item.name || "")}</strong>
        <span>${escapeHtml(item.category || "")} · ${escapeHtml(item.name || "")}</span>
      </div>
      <div class="amount">${escapeHtml(formatAmount(item.amount, currency))}</div>
    `;
    receiptItems.appendChild(row);
  });
  if (!receiptItems.children.length) {
    receiptItems.innerHTML = `<div class="receipt-item"><div><strong>${escapeHtml(ui().noItemsTitle)}</strong><span>${escapeHtml(ui().noItemsCopy)}</span></div><div class="amount">--</div></div>`;
  }

  receiptCategories.innerHTML = "";
  (receipt.category_summary || []).forEach((category) => {
    const row = document.createElement("div");
    row.className = "category-item";
    row.innerHTML = `
      <div>
        <strong>${escapeHtml(category.category || "")}</strong>
        <span>${escapeHtml(category.note || "")}</span>
      </div>
      <div class="amount">${escapeHtml(formatAmount(category.estimated_amount, currency))}</div>
    `;
    receiptCategories.appendChild(row);
  });
  if (!receiptCategories.children.length) {
    receiptCategories.innerHTML = `<div class="category-item"><div><strong>${escapeHtml(ui().noCategoriesTitle)}</strong><span>${escapeHtml(ui().noCategoriesCopy)}</span></div><div class="amount">--</div></div>`;
  }

  emptyState.hidden = true;
  loadingState.hidden = true;
  errorState.hidden = true;
  resultState.hidden = true;
  receiptState.hidden = false;
  feedbackPanel.hidden = false;
  feedbackThanks.hidden = true;
}

async function localizeLatestResult() {
  if (!latestResult || latestResult.output_language === appLanguage) return;
  const requestId = ++localizationRequestId;
  const isReceiptResult = Boolean(latestResult.receipt);
  const payload = isReceiptResult
    ? { receipt: latestResult.receipt, output_language: appLanguage }
    : {
        judgement: latestResult.judgement,
        output_language: appLanguage,
        card_image_data_url: latestResult.card_image_data_url || null,
      };
  if ((isReceiptResult && !payload.receipt) || (!isReceiptResult && !payload.judgement)) return;

  setServiceStatus("analyzing");
  try {
    const response = await fetch(isReceiptResult ? "/api/localize-receipt" : "/api/localize-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error("localize failed");
    const data = await response.json();
    if (requestId !== localizationRequestId || data.output_language !== appLanguage) return;
    if (isReceiptResult) {
      renderReceiptResult(data);
    } else {
      renderResult(data);
    }
    setServiceStatus("done");
  } catch (error) {
    setServiceStatus("retry");
  }
}

async function askChat(rawQuestion, options = {}) {
  const question = String(rawQuestion || "").trim();
  if (!question || chatSubmitButton.disabled) return;

  chatHistory.push({ role: "user", text: question });
  chatInput.value = "";
  renderChatMessages();
  setChatBusy(true);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question,
        output_language: appLanguage,
        user_id: clientUserId,
        context: buildChatContext(),
        history: chatHistory.slice(-8, -1),
      }),
    });
    if (!response.ok) throw new Error("chat failed");
    const data = await response.json();
    const answer = data.answer || chatCopy().error;
    chatHistory.push({ role: "assistant", text: answer });
    if (options.speakAnswer && answer) {
      await speak(answer);
    }
  } catch (error) {
    chatHistory.push({ role: "assistant", text: chatCopy().error });
  } finally {
    setChatBusy(false);
    renderChatMessages();
  }
}

function getSpeechRecognitionConstructor() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function canRecordVoice() {
  return Boolean(navigator.mediaDevices?.getUserMedia && window.MediaRecorder);
}

function preferredAudioMimeType() {
  const candidates = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/aac"];
  return candidates.find((type) => window.MediaRecorder?.isTypeSupported?.(type)) || "";
}

function finishChatVoiceInput() {
  cancelChatVoice = false;
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
    return;
  }
  if (speechRecognition && isChatListening) {
    speechRecognition.stop();
  }
}

function stopChatVoiceInput() {
  cancelChatVoice = true;
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  }
  if (speechRecognition && isChatListening) {
    speechRecognition.stop();
  }
}

function cleanupChatVoiceStream() {
  mediaStream?.getTracks?.().forEach((track) => track.stop());
  mediaStream = null;
  mediaRecorder = null;
}

function setChatListeningState(isListening) {
  isChatListening = isListening;
  chatMicButton.classList.toggle("listening", isListening);
  chatMicButtonText.textContent = isListening ? chatCopy().voiceStop : chatCopy().voiceAsk;
}

async function toggleChatVoiceInput() {
  if (chatSubmitButton.disabled) return;
  if (isChatListening) {
    finishChatVoiceInput();
    return;
  }
  if (canRecordVoice()) {
    await startRecordedChatVoiceInput();
    return;
  }
  startBrowserSpeechRecognition();
}

async function startRecordedChatVoiceInput() {
  stopSpeech();
  cancelChatVoice = false;
  let chunks = [];

  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (error) {
    chatVoiceStatus.textContent = chatCopy().voicePermission;
    chatVoiceStatus.classList.add("warning");
    return;
  }

  try {
    const mimeType = preferredAudioMimeType();
    mediaRecorder = new MediaRecorder(mediaStream, mimeType ? { mimeType } : undefined);
  } catch (error) {
    cleanupChatVoiceStream();
    startBrowserSpeechRecognition();
    return;
  }

  mediaRecorder.onstart = () => {
    setChatListeningState(true);
    chatVoiceStatus.textContent = chatCopy().voiceListening;
    chatVoiceStatus.classList.remove("warning");
  };

  mediaRecorder.ondataavailable = (event) => {
    if (event.data?.size) chunks.push(event.data);
  };

  mediaRecorder.onerror = () => {
    chatVoiceStatus.textContent = chatCopy().voiceError;
    chatVoiceStatus.classList.add("warning");
  };

  mediaRecorder.onstop = async () => {
    const shouldCancel = cancelChatVoice;
    const mimeType = mediaRecorder?.mimeType || chunks[0]?.type || "audio/webm";
    const audioBlob = new Blob(chunks, { type: mimeType });
    chunks = [];
    cleanupChatVoiceStream();
    setChatListeningState(false);
    if (shouldCancel) return;
    if (!audioBlob.size) {
      chatVoiceStatus.textContent = chatCopy().voiceError;
      chatVoiceStatus.classList.add("warning");
      return;
    }

    chatVoiceStatus.textContent = chatCopy().voiceTranscribing;
    chatVoiceStatus.classList.remove("warning");
    try {
      const transcript = await transcribeVoiceBlob(audioBlob);
      chatInput.value = transcript;
      chatVoiceStatus.textContent = chatCopy().voiceHeard;
      await askChat(transcript, { speakAnswer: true });
      chatVoiceStatus.textContent = chatCopy().voiceReady;
    } catch (error) {
      chatVoiceStatus.textContent = chatCopy().voiceError;
      chatVoiceStatus.classList.add("warning");
    }
  };

  mediaRecorder.start();
}

async function transcribeVoiceBlob(audioBlob) {
  const form = new FormData();
  form.append("audio", audioBlob, audioBlob.type.includes("mp4") ? "question.m4a" : "question.webm");
  form.append("output_language", appLanguage);
  form.append("user_id", clientUserId);
  const response = await fetch("/api/transcribe", {
    method: "POST",
    body: form,
  });
  if (!response.ok) throw new Error("transcription failed");
  const data = await response.json();
  const text = String(data.text || "").trim();
  if (!text) throw new Error("empty transcription");
  return text;
}

function startBrowserSpeechRecognition() {
  const SpeechRecognition = getSpeechRecognitionConstructor();
  if (!SpeechRecognition) {
    chatVoiceStatus.textContent = chatCopy().voiceUnsupported;
    chatVoiceStatus.classList.add("warning");
    return;
  }

  stopSpeech();
  cancelChatVoice = false;
  let finalTranscript = "";
  speechRecognition = new SpeechRecognition();
  speechRecognition.lang = config().speech || "zh-CN";
  speechRecognition.interimResults = true;
  speechRecognition.continuous = false;
  speechRecognition.maxAlternatives = 1;

  speechRecognition.onstart = () => {
    setChatListeningState(true);
    chatVoiceStatus.textContent = chatCopy().voiceListening;
    chatVoiceStatus.classList.remove("warning");
  };

  speechRecognition.onresult = (event) => {
    let interimTranscript = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const transcript = event.results[index][0]?.transcript || "";
      if (event.results[index].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript += transcript;
      }
    }
    const heardText = `${finalTranscript} ${interimTranscript}`.trim();
    if (heardText) {
      chatInput.value = heardText;
      chatVoiceStatus.textContent = heardText;
    }
  };

  speechRecognition.onerror = () => {
    chatVoiceStatus.textContent = chatCopy().voiceError;
    chatVoiceStatus.classList.add("warning");
  };

  speechRecognition.onend = async () => {
    setChatListeningState(false);
    if (cancelChatVoice) return;
    const question = (finalTranscript || chatInput.value || "").trim();
    if (!question) {
      chatVoiceStatus.textContent = chatCopy().voiceError;
      chatVoiceStatus.classList.add("warning");
      return;
    }
    chatVoiceStatus.textContent = chatCopy().voiceHeard;
    await askChat(question, { speakAnswer: true });
    chatVoiceStatus.textContent = chatCopy().voiceReady;
  };

  try {
    speechRecognition.start();
  } catch (error) {
    chatVoiceStatus.textContent = chatCopy().voiceUnsupported;
    chatVoiceStatus.classList.add("warning");
  }
}

function buildChatContext() {
  if (!latestResult) {
    return { type: scanMode, output_language: appLanguage };
  }
  if (latestResult.receipt) {
    return {
      type: "receipt",
      output_language: appLanguage,
      receipt: latestResult.receipt,
    };
  }
  return {
    type: "product",
    output_language: appLanguage,
    judgement: latestResult.judgement,
  };
}

function renderChatMessages() {
  chatMessages.innerHTML = "";
  if (!chatHistory.length) {
    const welcome = document.createElement("div");
    welcome.className = "chat-message assistant";
    welcome.textContent = chatCopy().welcome;
    chatMessages.appendChild(welcome);
    return;
  }
  chatHistory.forEach((message) => {
    const bubble = document.createElement("div");
    bubble.className = `chat-message ${message.role === "assistant" ? "assistant" : "user"}`;
    bubble.textContent = message.text;
    chatMessages.appendChild(bubble);
  });
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function renderChatSuggestions() {
  chatSuggestions.innerHTML = "";
  chatCopy().suggestions.forEach((question) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = question;
    button.addEventListener("click", async () => {
      await askChat(question);
    });
    chatSuggestions.appendChild(button);
  });
}

function applyChatLanguage() {
  chatKicker.textContent = chatCopy().kicker;
  chatTitle.textContent = chatCopy().title;
  clearChatButton.textContent = chatCopy().clear;
  chatSubmitButton.textContent = chatCopy().send;
  chatInput.placeholder = chatCopy().placeholder;
  chatMicButtonText.textContent = isChatListening ? chatCopy().voiceStop : chatCopy().voiceAsk;
  chatVoiceStatus.textContent = chatCopy().voiceReady;
  chatVoiceStatus.classList.remove("warning");
  renderChatSuggestions();
  renderChatMessages();
}

function setChatBusy(isBusy) {
  chatSubmitButton.disabled = isBusy;
  chatInput.disabled = isBusy;
  chatMicButton.disabled = isBusy;
  chatSubmitButton.textContent = isBusy ? chatCopy().sending : chatCopy().send;
}

function loadFamilyRecords() {
  try {
    const data = JSON.parse(localStorage.getItem(recordsStorageKey) || "{}");
    return {
      products: Array.isArray(data.products) ? data.products : [],
      receipts: Array.isArray(data.receipts) ? data.receipts : [],
    };
  } catch (error) {
    return { products: [], receipts: [] };
  }
}

function saveFamilyRecords() {
  localStorage.setItem(recordsStorageKey, JSON.stringify(familyRecords));
}

function addProductRecord(data) {
  const judgement = data?.judgement || {};
  const itemName = judgement.item_name || recordCopy().unknownProduct;
  const record = {
    id: createRecordId("product", itemName),
    createdAt: new Date().toISOString(),
    itemName,
    category: judgement.category || "",
    verdict: judgement.verdict || "",
    subtitle: judgement.subtitle || "",
    warning: judgement.warning || "",
    thumbnail: data.card_image_data_url || "",
  };
  familyRecords.products = [record, ...familyRecords.products.filter((item) => item.id !== record.id)].slice(0, 80);
  saveFamilyRecords();
  renderFamilyRecords();
  sendClientEvent("product_record_saved", {
    category: record.category,
    verdict: record.verdict,
    output_language: appLanguage,
  });
}

function addReceiptRecord(data) {
  const receipt = data?.receipt || {};
  const record = {
    id: createRecordId("receipt", `${receipt.store_name || ""}-${receipt.purchase_date || ""}-${receipt.total_amount || ""}`),
    createdAt: new Date().toISOString(),
    storeName: receipt.store_name || recordCopy().unknownStore,
    purchaseDate: receipt.purchase_date || "",
    currency: receipt.currency || "CAD",
    totalAmount: receipt.total_amount ?? null,
    itemCount: receipt.item_count ?? null,
    nutritionSignal: receipt.nutrition_signal || "",
    spendingSignal: receipt.spending_signal || "",
    categories: Array.isArray(receipt.category_summary) ? receipt.category_summary.slice(0, 6) : [],
  };
  familyRecords.receipts = [record, ...familyRecords.receipts.filter((item) => item.id !== record.id)].slice(0, 120);
  saveFamilyRecords();
  renderFamilyRecords();
  sendClientEvent("receipt_record_saved", {
    store_name: record.storeName,
    total_amount: record.totalAmount,
    output_language: appLanguage,
  });
}

function createRecordId(type, key) {
  const day = new Date().toISOString().slice(0, 10);
  return `${type}:${day}:${String(key || "").trim().toLowerCase().slice(0, 80)}`;
}

function renderFamilyRecords() {
  applyRecordsLanguage();
  const currentMonth = new Date().toISOString().slice(0, 7);
  const monthReceipts = familyRecords.receipts.filter((record) => String(record.createdAt || "").startsWith(currentMonth));
  const monthProducts = familyRecords.products.filter((record) => String(record.createdAt || "").startsWith(currentMonth));
  const spend = monthReceipts.reduce((sum, record) => sum + safeNumber(record.totalAmount), 0);

  monthlySpend.textContent = formatAmount(spend, monthReceipts[0]?.currency || "CAD");
  monthlyReceiptCount.textContent = formatRecordCount(monthReceipts.length, recordCopy().receiptUnit);
  monthlyProductCount.textContent = formatRecordCount(monthProducts.length, recordCopy().productUnit);

  renderReceiptRecords();
  renderProductRecords();
}

function applyRecordsLanguage() {
  recordsOpenButton.textContent = recordCopy().open;
  recordsCloseButton.setAttribute("aria-label", recordCopy().close);
  recordsKicker.textContent = recordCopy().kicker;
  recordsTitle.textContent = recordCopy().title;
  clearRecordsButton.textContent = recordCopy().clear;
  monthlySpendLabel.textContent = recordCopy().spend;
  monthlyReceiptLabel.textContent = recordCopy().receipts;
  monthlyProductLabel.textContent = recordCopy().products;
  recentReceiptsTitle.textContent = recordCopy().recentReceipts;
  recentProductsTitle.textContent = recordCopy().recentProducts;
}

function renderReceiptRecords() {
  recentReceipts.innerHTML = "";
  familyRecords.receipts.slice(0, 5).forEach((record) => {
    const card = document.createElement("article");
    card.className = "record-card";
    const date = formatRecordDate(record.purchaseDate || record.createdAt);
    card.innerHTML = `
      <div class="record-main">
        <strong>${escapeHtml(record.storeName || recordCopy().unknownStore)}</strong>
        <span>${escapeHtml(date)} · ${escapeHtml(formatItemCount(record.itemCount))}</span>
      </div>
      <div class="record-side">${escapeHtml(formatAmount(record.totalAmount, record.currency || "CAD"))}</div>
    `;
    recentReceipts.appendChild(card);
  });
  if (!recentReceipts.children.length) {
    recentReceipts.innerHTML = `<div class="record-empty">${escapeHtml(recordCopy().noReceipts)}</div>`;
  }
}

function renderProductRecords() {
  recentProducts.innerHTML = "";
  familyRecords.products.slice(0, 5).forEach((record) => {
    const card = document.createElement("article");
    card.className = `record-card${record.thumbnail ? " with-thumb" : ""}`;
    const thumb = record.thumbnail ? `<img class="record-thumb" src="${escapeHtml(record.thumbnail)}" alt="" />` : "";
    card.innerHTML = `
      ${thumb}
      <div class="record-main">
        <strong>${escapeHtml(record.itemName || recordCopy().unknownProduct)}</strong>
        <span>${escapeHtml(record.subtitle || record.category || "")}</span>
      </div>
      <div class="record-side">${escapeHtml(record.verdict || "")}</div>
    `;
    recentProducts.appendChild(card);
  });
  if (!recentProducts.children.length) {
    recentProducts.innerHTML = `<div class="record-empty">${escapeHtml(recordCopy().noProducts)}</div>`;
  }
}

function formatRecordDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleDateString(config().htmlLang || undefined, { month: "short", day: "numeric" });
}

function formatRecordCount(value, unit) {
  return unit ? `${value} ${unit}` : String(value);
}

function safeNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function sendClientEvent(eventType, payload = {}) {
  fetch("/api/events/client", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_type: eventType,
      payload,
      user_id: clientUserId,
    }),
  }).catch(() => {
    // Analytics should never block the shopping flow.
  });
}

function submitFeedback(feedback) {
  if (!latestResult) return;
  const payload = {
    feedback,
    mode: latestResult.receipt ? "receipt" : "product",
    output_language: appLanguage,
    item_name: latestResult?.judgement?.item_name || "",
    store_name: latestResult?.receipt?.store_name || "",
  };
  sendClientEvent("feedback_submitted", payload);
  feedbackThanks.textContent = feedbackCopy().thanks;
  feedbackThanks.hidden = false;
}

function showLoading() {
  emptyState.hidden = true;
  loadingState.hidden = false;
  errorState.hidden = true;
  resultState.hidden = true;
  receiptState.hidden = true;
  feedbackPanel.hidden = true;
  loadingTitle.textContent = modeCopy().loadingTitle;
  loadingCopy.textContent = modeCopy().loadingCopy;
}

function showError(message) {
  errorTitle.textContent = ui().errorTitle;
  errorText.textContent = message;
  emptyState.hidden = true;
  loadingState.hidden = true;
  errorState.hidden = false;
  resultState.hidden = true;
  receiptState.hidden = true;
  feedbackPanel.hidden = true;
}

function buildShareText(data) {
  if (data.receipt) {
    const receipt = data.receipt || {};
    return [
      `${ui().receiptRecord}: ${receipt.store_name || ui().unknownStore}`,
      `${ui().receiptTotalPrefix}: ${formatAmount(receipt.total_amount, receipt.currency || "CAD")}`,
      `${ui().receiptItems}: ${(receipt.items || []).slice(0, 6).map((item) => item.translated_name || item.name).filter(Boolean).join(", ")}`,
      `${ui().nutrition}: ${receipt.nutrition_signal || ""}`,
      `${ui().spending}: ${receipt.spending_signal || ""}`,
    ].join("\n");
  }
  const j = data.judgement || {};
  const labels = config().details;
  return [
    `${j.verdict || ""}: ${j.item_name || ""}`,
    `${labels[0][0]}: ${j.what_it_is || ""}`,
    `${labels[1][0]}: ${j.how_to_use || ""}`,
    `${labels[3][0]}: ${j.warning || ""}`,
  ].join("\n");
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function toEnglishFallback(name) {
  if (/^[\x00-\x7F]+$/.test(name)) return name;
  return "this product";
}

function setScanMode(mode) {
  scanMode = mode === "receipt" ? "receipt" : "product";
  latestResult = null;
  latestCardSvg = "";
  chatHistory = [];
  stopChatVoiceInput();
  cameraInput.value = "";
  imageInput.value = "";
  previewImage.removeAttribute("src");
  previewWrap.hidden = true;
  dropZone.hidden = false;
  scanTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.mode === scanMode);
  });
  updateModeCopy();
  emptyState.hidden = false;
  loadingState.hidden = true;
  errorState.hidden = true;
  resultState.hidden = true;
  receiptState.hidden = true;
  feedbackPanel.hidden = true;
  renderChatMessages();
}

async function changeLanguage(nextLanguage, options = {}) {
  syncVisibleFamilyInputs();
  appLanguage = supportedLanguageKeys.has(nextLanguage) ? nextLanguage : "en";
  localStorage.setItem(languageStorageKey, appLanguage);
  familyProfileState.output_language = appLanguage;
  persistFamilyProfileState();
  stopSpeech();
  stopChatVoiceInput();
  applyLanguage();
  if (options.localizeResult) {
    await localizeLatestResult();
  }
  if (localStorage.getItem(profileSetupCompletedKey) === "true" || profileContextText()) {
    syncFamilyProfileToBackend();
  }
}

function applyProfileLanguage() {
  const copy = profileCopy();
  profileOpenButton.textContent = copy.open;
  profileLabel.textContent = copy.boxLabel;
  profileSummary.textContent = copy.boxSummary;
  familyProfile.placeholder = copy.boxPlaceholder;
  profileSaveButton.textContent = copy.boxSave;
  profileSavedMessage.textContent = copy.saved;
  profileDialogKicker.textContent = copy.kicker;
  profileDialogTitle.textContent = copy.title;
  profileDialogIntro.textContent = copy.intro;
  setupLanguageLabel.textContent = copy.language;
  profileMembersLabel.textContent = copy.members;
  profileMembersInput.placeholder = copy.membersPlaceholder;
  profileSetupHint.textContent = copy.hint;
  profileSkipButton.textContent = copy.skip;
  profileDialogSaveButton.textContent = copy.save;
  profileDialogCloseButton.setAttribute("aria-label", copy.close);
  familyProfile.value = familyProfileState.members_text || "";
  profileMembersInput.value = familyProfileState.members_text || "";
}

function applyLanguage() {
  appLanguage = languageConfig[appLanguage] ? appLanguage : "en";
  languageSelect.value = appLanguage;
  setupLanguageSelect.value = appLanguage;
  document.documentElement.lang = config().htmlLang;

  languageLabel.textContent = ui().language;
  applyProfileLanguage();
  panelKicker.textContent = ui().panelKicker;
  panelTitle.textContent = ui().panelTitle;
  productTab.textContent = ui().productTab;
  receiptTab.textContent = ui().receiptTab;
  resultKicker.textContent = ui().resultKicker;
  errorTitle.textContent = ui().errorTitle;
  replaceButton.textContent = ui().replace;
  albumButtonText.textContent = ui().uploadFromAlbum;
  speakButtonText.textContent = ui().speakProduct;
  receiptSpeakButtonText.textContent = ui().speakReceipt;
  clerkButton.textContent = ui().askStaff;
  copyButton.textContent = ui().shareFamily;
  downloadButton.textContent = ui().saveCard;
  dialogTitle.textContent = ui().dialogTitle;
  dialogHint.textContent = ui().dialogHint;
  copyClerkButton.textContent = ui().copyEnglish;
  closeDialogButton.setAttribute("aria-label", appLanguage === "zh-Hans" ? "关闭" : "Close");
  receiptHeroLabel.textContent = ui().receiptRecord;
  receiptDateLabel.textContent = ui().date;
  receiptCountLabel.textContent = ui().itemCount;
  receiptTaxLabel.textContent = ui().tax;
  receiptItemsTitle.textContent = ui().receiptItems;
  receiptCategoriesTitle.textContent = ui().categoryStats;
  nutritionSignalLabel.textContent = ui().nutrition;
  spendingSignalLabel.textContent = ui().spending;
  familyReportNoteLabel.textContent = ui().report;
  applyFeedbackLanguage();
  applyChatLanguage();
  renderFamilyRecords();
  setServiceStatus(serviceState);
  updateModeCopy();

  if (!resultState.hidden && latestResult?.judgement) {
    renderResult(latestResult);
  }
  if (!receiptState.hidden && latestResult?.receipt) {
    renderReceiptResult(latestResult);
  }
}

function applyFeedbackLanguage() {
  feedbackKicker.textContent = feedbackCopy().kicker;
  feedbackTitle.textContent = feedbackCopy().title;
  feedbackHelpful.textContent = feedbackCopy().helpful;
  feedbackInaccurate.textContent = feedbackCopy().inaccurate;
  feedbackConfusing.textContent = feedbackCopy().confusing;
  feedbackThanks.textContent = feedbackCopy().thanks;
}

function updateModeCopy() {
  const copy = modeCopy();
  pickButtonText.textContent = copy.pick;
  uploadCopy.textContent = copy.upload;
  uploadNote.textContent = copy.note;
  emptyTitle.textContent = copy.emptyTitle;
  emptyCopy.textContent = copy.emptyCopy;
}

function setServiceStatus(state) {
  serviceState = state;
  serviceStatus.textContent = ui()[state] || ui().ready;
}

async function speak(text) {
  const cleanText = String(text || "").trim();
  if (!cleanText) return;
  setSpeechButtonsBusy(true);
  try {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
    if (currentAudioUrl) {
      URL.revokeObjectURL(currentAudioUrl);
      currentAudioUrl = null;
    }
    const response = await fetch("/api/speech", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: cleanText,
        output_language: appLanguage,
      }),
    });
    if (!response.ok) throw new Error("speech failed");
    const blob = await response.blob();
    currentAudioUrl = URL.createObjectURL(blob);
    currentAudio = new Audio(currentAudioUrl);
    currentAudio.onended = releaseCurrentAudioUrl;
    currentAudio.onerror = releaseCurrentAudioUrl;
    await currentAudio.play();
  } catch (error) {
    fallbackSpeech(cleanText);
  } finally {
    setSpeechButtonsBusy(false);
  }
}

function releaseCurrentAudioUrl() {
  if (!currentAudioUrl) return;
  URL.revokeObjectURL(currentAudioUrl);
  currentAudioUrl = null;
}

function stopSpeech() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  releaseCurrentAudioUrl();
  window.speechSynthesis.cancel();
}

function setSpeechButtonsBusy(isBusy) {
  speakButton.disabled = isBusy;
  receiptSpeakButton.disabled = isBusy;
  const loadingText = ui().speechLoading || ui().analyzing || "Loading";
  speakButtonText.textContent = isBusy ? loadingText : ui().speakProduct;
  receiptSpeakButtonText.textContent = isBusy ? loadingText : ui().speakReceipt;
}

function fallbackSpeech(text) {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = config().speech;
  utterance.rate = 0.88;
  window.speechSynthesis.speak(utterance);
}

function formatAmount(value, currency) {
  if (value === null || value === undefined || value === "") return "--";
  const number = Number(value);
  if (Number.isNaN(number)) return "--";
  const symbol = currency === "USD" || currency === "CAD" ? "$" : `${currency} `;
  return `${symbol}${number.toFixed(2)}`;
}

function formatItemCount(value) {
  if (value === null || value === undefined || value === "") return "--";
  return `${value} ${ui().itemUnit}`;
}

function config() {
  return languageConfig[appLanguage] || languageConfig.en;
}

function ui() {
  return config().ui;
}

function modeCopy() {
  return config().modes[scanMode];
}

function chatCopy() {
  return chatLanguageCopy[appLanguage] || chatLanguageCopy.en;
}

function recordCopy() {
  return recordsLanguageCopy[appLanguage] || recordsLanguageCopy.en;
}

function feedbackCopy() {
  return feedbackLanguageCopy[appLanguage] || feedbackLanguageCopy.en;
}

function profileCopy() {
  return profileLanguageCopy[appLanguage] || profileLanguageCopy.en;
}

function loadFamilyProfileState() {
  try {
    const saved = JSON.parse(localStorage.getItem(profileStorageKey) || "{}");
    if (!saved || typeof saved !== "object") return {};
    return {
      output_language: supportedLanguageKeys.has(saved.output_language) ? saved.output_language : "",
      members_text: String(saved.members_text || ""),
      updated_at: String(saved.updated_at || ""),
    };
  } catch (error) {
    return {};
  }
}

function persistFamilyProfileState() {
  localStorage.setItem(
    profileStorageKey,
    JSON.stringify({
      output_language: appLanguage,
      members_text: familyProfileState.members_text || "",
      updated_at: familyProfileState.updated_at || new Date().toISOString(),
    })
  );
}

function syncVisibleFamilyInputs() {
  const activeMembersText =
    profileDialog?.open && profileMembersInput
      ? profileMembersInput.value
      : familyProfile?.value || profileMembersInput?.value || familyProfileState.members_text || "";
  familyProfileState.members_text = activeMembersText;
}

function profileContextText() {
  return String(familyProfileState.members_text || familyProfile.value || "").trim();
}

function openProfileDialog() {
  if (profileDialog.open) return;
  applyProfileLanguage();
  if (typeof profileDialog.showModal === "function") {
    profileDialog.showModal();
  } else {
    profileDialog.setAttribute("open", "");
  }
}

function closeProfileDialog() {
  if (typeof profileDialog.close === "function") {
    profileDialog.close();
  } else {
    profileDialog.removeAttribute("open");
  }
}

async function saveFamilyProfile(membersText) {
  const cleanMembers = String(membersText || "").trim();
  familyProfileState = {
    output_language: appLanguage,
    members_text: cleanMembers,
    updated_at: new Date().toISOString(),
  };
  localStorage.setItem(profileSetupCompletedKey, "true");
  persistFamilyProfileState();
  applyProfileLanguage();
  profileSavedMessage.hidden = false;
  setTimeout(() => {
    profileSavedMessage.hidden = true;
  }, 1600);
  await syncFamilyProfileToBackend();
}

async function syncFamilyProfileToBackend() {
  try {
    await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: clientUserId,
        output_language: appLanguage,
        members_text: familyProfileState.members_text || "",
      }),
    });
  } catch (error) {
    // Local profile still works if the network is unavailable.
  }
}

async function hydrateFamilyProfileFromBackend() {
  try {
    const response = await fetch(`/api/profile/${encodeURIComponent(clientUserId)}`);
    if (!response.ok) return;
    const data = await response.json();
    const remoteLanguage = data.output_language;
    const remoteMembers = String(data.members_text || "");
    if (!remoteMembers && !supportedLanguageKeys.has(remoteLanguage)) return;
    familyProfileState = {
      output_language: supportedLanguageKeys.has(remoteLanguage) ? remoteLanguage : appLanguage,
      members_text: remoteMembers || familyProfileState.members_text || "",
      updated_at: String(data.updated_at || familyProfileState.updated_at || ""),
    };
    if (remoteMembers) {
      localStorage.setItem(profileSetupCompletedKey, "true");
    }
    if (familyProfileState.output_language && familyProfileState.output_language !== appLanguage) {
      appLanguage = familyProfileState.output_language;
      localStorage.setItem(languageStorageKey, appLanguage);
    }
    persistFamilyProfileState();
    applyLanguage();
  } catch (error) {
    // Local setup is enough for the shopping flow.
  }
}

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(languageStorageKey);
  if (supportedLanguageKeys.has(savedLanguage)) return savedLanguage;

  const legacyLanguage = localStorage.getItem(legacyLanguageStorageKey);
  if (legacyLanguage && legacyLanguage !== "zh-Hans" && supportedLanguageKeys.has(legacyLanguage)) {
    localStorage.setItem(languageStorageKey, legacyLanguage);
    return legacyLanguage;
  }

  return "en";
}

function getClientUserId() {
  const key = "famlens.userId.v1";
  const existing = localStorage.getItem(key);
  if (existing) return existing;
  const randomId = window.crypto?.randomUUID
    ? window.crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const id = `user-${randomId}`;
  localStorage.setItem(key, id);
  return id;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

applyLanguage();
hydrateFamilyProfileFromBackend().finally(() => {
  if (localStorage.getItem(profileSetupCompletedKey) !== "true") {
    setTimeout(() => openProfileDialog(), 450);
  }
});
sendClientEvent("app_open", {
  output_language: appLanguage,
  user_agent: navigator.userAgent.slice(0, 160),
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/static/sw.js").catch(() => {
      // Offline shell is useful but not required for core usage.
    });
  });
}
