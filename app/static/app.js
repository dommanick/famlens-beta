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
const brandEyebrow = document.querySelector("#brandEyebrow");
const profileOpenButton = document.querySelector("#profileOpenButton");
const panelKicker = document.querySelector("#panelKicker");
const panelTitle = document.querySelector("#panelTitle");
const panelIntro = document.querySelector("#panelIntro");
const productTab = document.querySelector("#productTab");
const receiptTab = document.querySelector("#receiptTab");
const homePreviewKicker = document.querySelector("#homePreviewKicker");
const homePreviewTitle = document.querySelector("#homePreviewTitle");
const homeProductPreviewLabel = document.querySelector("#homeProductPreviewLabel");
const homeProductPreviewTitle = document.querySelector("#homeProductPreviewTitle");
const homeProductPreviewSubtitle = document.querySelector("#homeProductPreviewSubtitle");
const homeProductPreviewBadgeGood = document.querySelector("#homeProductPreviewBadgeGood");
const homeProductPreviewBadgeCaution = document.querySelector("#homeProductPreviewBadgeCaution");
const homeProductPreviewOneLabel = document.querySelector("#homeProductPreviewOneLabel");
const homeProductPreviewOne = document.querySelector("#homeProductPreviewOne");
const homeProductPreviewTwoLabel = document.querySelector("#homeProductPreviewTwoLabel");
const homeProductPreviewTwo = document.querySelector("#homeProductPreviewTwo");
const homeProductPreviewThreeLabel = document.querySelector("#homeProductPreviewThreeLabel");
const homeProductPreviewThree = document.querySelector("#homeProductPreviewThree");
const homeProductPreviewVoiceLabel = document.querySelector("#homeProductPreviewVoiceLabel");
const homeProductPreviewVoice = document.querySelector("#homeProductPreviewVoice");
const homeProductPreviewShare = document.querySelector("#homeProductPreviewShare");
const homeProductPreviewSave = document.querySelector("#homeProductPreviewSave");
const homeReceiptPreviewLabel = document.querySelector("#homeReceiptPreviewLabel");
const homeReceiptPreviewTitle = document.querySelector("#homeReceiptPreviewTitle");
const homeReceiptPreviewFood = document.querySelector("#homeReceiptPreviewFood");
const homeReceiptPreviewCare = document.querySelector("#homeReceiptPreviewCare");
const homeReceiptPreviewOne = document.querySelector("#homeReceiptPreviewOne");
const homeReceiptPreviewTwo = document.querySelector("#homeReceiptPreviewTwo");
const homeReceiptPreviewThree = document.querySelector("#homeReceiptPreviewThree");
const homeReceiptStoreLabel = document.querySelector("#homeReceiptStoreLabel");
const homeReceiptItemsLabel = document.querySelector("#homeReceiptItemsLabel");
const homeReceiptDateLabel = document.querySelector("#homeReceiptDateLabel");
const visualProductLang = document.querySelector("#visualProductLang");
const visualProductTitle = document.querySelector("#visualProductTitle");
const visualProductCopy = document.querySelector("#visualProductCopy");
const visualReceiptStore = document.querySelector("#visualReceiptStore");
const visualReceiptTitle = document.querySelector("#visualReceiptTitle");
const visualReceiptCopy = document.querySelector("#visualReceiptCopy");
const useCaseProduct = document.querySelector("#useCaseProduct");
const useCaseReceipt = document.querySelector("#useCaseReceipt");
const useCaseFamily = document.querySelector("#useCaseFamily");
const homeReceiptKicker = document.querySelector("#homeReceiptKicker");
const homeReceiptProgressTitle = document.querySelector("#homeReceiptProgressTitle");
const homeReceiptProgressCount = document.querySelector("#homeReceiptProgressCount");
const homeReceiptProgressFill = document.querySelector("#homeReceiptProgressFill");
const homeReceiptProgressCopy = document.querySelector("#homeReceiptProgressCopy");
const homeSampleKicker = document.querySelector("#homeSampleKicker");
const homeSampleTitle = document.querySelector("#homeSampleTitle");
const homeSampleLink = document.querySelector("#homeSampleLink");
const homeSampleNutrition = document.querySelector("#homeSampleNutrition");
const homeSampleNutritionCopy = document.querySelector("#homeSampleNutritionCopy");
const homeSampleSpending = document.querySelector("#homeSampleSpending");
const homeSampleSpendingCopy = document.querySelector("#homeSampleSpendingCopy");
const homeSampleFamily = document.querySelector("#homeSampleFamily");
const homeSampleFamilyCopy = document.querySelector("#homeSampleFamilyCopy");
const homeRecentKicker = document.querySelector("#homeRecentKicker");
const homeRecentTitle = document.querySelector("#homeRecentTitle");
const homeRecentList = document.querySelector("#homeRecentList");
const homeFamilyKicker = document.querySelector("#homeFamilyKicker");
const homeFamilyTitle = document.querySelector("#homeFamilyTitle");
const homeFamilyTileSenior = document.querySelector("#homeFamilyTileSenior");
const homeFamilyTileAdult = document.querySelector("#homeFamilyTileAdult");
const homeFamilyTileChild = document.querySelector("#homeFamilyTileChild");
const homeFamilyTileLanguage = document.querySelector("#homeFamilyTileLanguage");
const homeFamilyNote = document.querySelector("#homeFamilyNote");
const homeFamilySetupButton = document.querySelector("#homeFamilySetupButton");
const profileLabel = document.querySelector("#profileLabel");
const profileSummary = document.querySelector("#profileSummary");
const profileSaveButton = document.querySelector("#profileSaveButton");
const profileSavedMessage = document.querySelector("#profileSavedMessage");
const scanTabs = document.querySelectorAll(".scan-tab");
const uploadCopy = document.querySelector("#uploadCopy");
const uploadNote = document.querySelector("#uploadNote");
const homeResultPreview = document.querySelector(".home-result-preview");
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
const resultPanel = document.querySelector("#resultPanel");
const resultState = document.querySelector("#resultState");
const receiptState = document.querySelector("#receiptState");
const verdictBadge = document.querySelector("#verdictBadge");
const itemName = document.querySelector("#itemName");
const subtitle = document.querySelector("#subtitle");
const voiceSummary = document.querySelector("#voiceSummary");
const cardStage = document.querySelector("#cardStage");
const detailList = document.querySelector("#detailList");
const productShareKicker = document.querySelector("#productShareKicker");
const productShareTitle = document.querySelector("#productShareTitle");
const productShareCopy = document.querySelector("#productShareCopy");
const productShareButton = document.querySelector("#productShareButton");
const productCommercePanel = document.querySelector("#productCommercePanel");
const productCommerceKicker = document.querySelector("#productCommerceKicker");
const productCommerceTitle = document.querySelector("#productCommerceTitle");
const productCommerceCopy = document.querySelector("#productCommerceCopy");
const productCommerceButton = document.querySelector("#productCommerceButton");
const speakButton = document.querySelector("#speakButton");
const speakButtonText = document.querySelector("#speakButtonText");
const receiptSpeakButton = document.querySelector("#receiptSpeakButton");
const receiptSpeakButtonText = document.querySelector("#receiptSpeakButtonText");
const receiptHeroLabel = document.querySelector("#receiptHeroLabel");
const receiptTotal = document.querySelector("#receiptTotal");
const receiptConvertedTotal = document.querySelector("#receiptConvertedTotal");
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
const receiptShareKicker = document.querySelector("#receiptShareKicker");
const receiptShareTitle = document.querySelector("#receiptShareTitle");
const receiptShareCopy = document.querySelector("#receiptShareCopy");
const receiptShareButton = document.querySelector("#receiptShareButton");
const receiptCommercePanel = document.querySelector("#receiptCommercePanel");
const receiptCommerceKicker = document.querySelector("#receiptCommerceKicker");
const receiptCommerceTitle = document.querySelector("#receiptCommerceTitle");
const receiptCommerceCopy = document.querySelector("#receiptCommerceCopy");
const receiptCommerceButton = document.querySelector("#receiptCommerceButton");
const copyButton = document.querySelector("#copyButton");
const downloadButton = document.querySelector("#downloadButton");
const profileDialog = document.querySelector("#profileDialog");
const profileDialogKicker = document.querySelector("#profileDialogKicker");
const profileDialogTitle = document.querySelector("#profileDialogTitle");
const profileDialogIntro = document.querySelector("#profileDialogIntro");
const profileDialogCloseButton = document.querySelector("#profileDialogCloseButton");
const setupLanguageSelect = document.querySelector("#setupLanguageSelect");
const setupLanguageLabel = document.querySelector("#setupLanguageLabel");
const profileMembersLabel = document.querySelector("#profileMembersLabel");
const profileMembersInput = document.querySelector("#profileMembersInput");
const profileMainTitle = document.querySelector("#profileMainTitle");
const profileMainNameLabel = document.querySelector("#profileMainNameLabel");
const profileMainNameInput = document.querySelector("#profileMainNameInput");
const profileMainAgeLabel = document.querySelector("#profileMainAgeLabel");
const profileMainAgeInput = document.querySelector("#profileMainAgeInput");
const profileMainGenderLabel = document.querySelector("#profileMainGenderLabel");
const profileMainGenderSelect = document.querySelector("#profileMainGenderSelect");
const profileMainHealthLabel = document.querySelector("#profileMainHealthLabel");
const profileMainHealthChips = document.querySelector("#profileMainHealthChips");
const profileAddTitle = document.querySelector("#profileAddTitle");
const profileMemberNameLabel = document.querySelector("#profileMemberNameLabel");
const profileMemberNameInput = document.querySelector("#profileMemberNameInput");
const profileMemberAgeLabel = document.querySelector("#profileMemberAgeLabel");
const profileMemberAgeInput = document.querySelector("#profileMemberAgeInput");
const profileMemberRelationLabel = document.querySelector("#profileMemberRelationLabel");
const profileMemberRelationSelect = document.querySelector("#profileMemberRelationSelect");
const profileMemberGenderLabel = document.querySelector("#profileMemberGenderLabel");
const profileMemberGenderSelect = document.querySelector("#profileMemberGenderSelect");
const profileMemberHealthLabel = document.querySelector("#profileMemberHealthLabel");
const profileMemberHealthChips = document.querySelector("#profileMemberHealthChips");
const profileMemberNoteLabel = document.querySelector("#profileMemberNoteLabel");
const profileMemberNoteInput = document.querySelector("#profileMemberNoteInput");
const profileAddMemberButton = document.querySelector("#profileAddMemberButton");
const profileMemberListTitle = document.querySelector("#profileMemberListTitle");
const profileMemberList = document.querySelector("#profileMemberList");
const profileRecoveryLabel = document.querySelector("#profileRecoveryLabel");
const profileRecoveryInput = document.querySelector("#profileRecoveryInput");
const profileCurrencyLabel = document.querySelector("#profileCurrencyLabel");
const profileCurrencySelect = document.querySelector("#profileCurrencySelect");
const profileIdentityHint = document.querySelector("#profileIdentityHint");
const familyInviteCodeLabel = document.querySelector("#familyInviteCodeLabel");
const familyInviteCode = document.querySelector("#familyInviteCode");
const familyInviteQr = document.querySelector("#familyInviteQr");
const copyInviteLinkButton = document.querySelector("#copyInviteLinkButton");
const copyFamilyCodeButton = document.querySelector("#copyFamilyCodeButton");
const joinFamilyCodeLabel = document.querySelector("#joinFamilyCodeLabel");
const joinFamilyCodeInput = document.querySelector("#joinFamilyCodeInput");
const joinFamilyButton = document.querySelector("#joinFamilyButton");
const joinFamilyStatus = document.querySelector("#joinFamilyStatus");
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
const monthlyInsightTitle = document.querySelector("#monthlyInsightTitle");
const monthlyInsightText = document.querySelector("#monthlyInsightText");
const monthlyCategoryList = document.querySelector("#monthlyCategoryList");
const priceMemoryTitle = document.querySelector("#priceMemoryTitle");
const priceMemoryCopy = document.querySelector("#priceMemoryCopy");
const priceMemoryList = document.querySelector("#priceMemoryList");
const frequentItemsTitle = document.querySelector("#frequentItemsTitle");
const frequentItemsCopy = document.querySelector("#frequentItemsCopy");
const frequentItemsList = document.querySelector("#frequentItemsList");
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
let currentCardImageDataUrl = "";
let scanMode = "product";
const languageStorageKey = "famlens.language.v2";
const legacyLanguageStorageKey = "carecart.language";
const attributionStorageKey = "famlens.attribution.v1";
const attributionSessionKey = "famlens.attribution.session.v1";
const supportedLanguageKeys = new Set(["zh-Hans", "en", "es", "fr", "ko", "ja", "vi", "hi"]);
const supportedCurrencyKeys = new Set(["CNY", "USD", "CAD", "EUR", "GBP", "INR", "KRW", "JPY", "VND", "AUD"]);
const currencyRatesToUsd = {
  USD: 1,
  CAD: 0.73,
  CNY: 0.14,
  EUR: 1.08,
  GBP: 1.27,
  INR: 0.012,
  KRW: 0.00073,
  JPY: 0.0064,
  VND: 0.000039,
  AUD: 0.66,
};
const currencySymbols = {
  CNY: "¥",
  USD: "$",
  CAD: "$",
  EUR: "€",
  GBP: "£",
  INR: "₹",
  KRW: "₩",
  JPY: "¥",
  VND: "₫",
  AUD: "$",
};
const defaultCurrencyByLanguage = {
  "zh-Hans": "CNY",
  en: "USD",
  es: "USD",
  fr: "EUR",
  ko: "KRW",
  ja: "JPY",
  vi: "VND",
  hi: "INR",
};
let appLanguage = getInitialLanguage();
const identityStorageKey = "famlens.identity.v1";
const deviceUserId = getDeviceUserId();
let clientUserId = getStoredHouseholdId() || deviceUserId;
const profileStorageKey = "famlens.familyProfile.v1";
const profileSetupCompletedKey = "famlens.profileSetup.completed.v1";
const productUploadMaxEdge = 1600;
const receiptUploadMaxEdge = 2048;
const productUploadQuality = 0.82;
const receiptUploadQuality = 0.84;
const speechPlaybackRate = 1.3;
const visibleProductDetailKeys = new Set(["what_it_is", "how_to_use", "warning", "benefit"]);
let familyProfileState = loadFamilyProfileState();
if (familyProfileState.output_language && supportedLanguageKeys.has(familyProfileState.output_language)) {
  appLanguage = familyProfileState.output_language;
  localStorage.setItem(languageStorageKey, appLanguage);
}
let serviceState = "ready";

const actionStatusCopy = {
  en: { shared: "Shared", saved: "Save image", imageReady: "Image ready" },
  "zh-Hans": { shared: "已分享", saved: "保存图片", imageReady: "图片已生成" },
  es: { shared: "Compartido", saved: "Guardar imagen", imageReady: "Imagen lista" },
  fr: { shared: "Partagé", saved: "Enregistrer", imageReady: "Image prête" },
  ko: { shared: "공유됨", saved: "이미지 저장", imageReady: "이미지 준비됨" },
  ja: { shared: "共有しました", saved: "画像を保存", imageReady: "画像準備済み" },
  vi: { shared: "Đã chia sẻ", saved: "Lưu ảnh", imageReady: "Ảnh đã sẵn sàng" },
  hi: { shared: "Share हो गया", saved: "Image save करें", imageReady: "Image ready" },
};
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
      receiptTab: "拍小票",
      profileLabel: "家庭提醒，可选",
      profilePlaceholder: "例如：家里有人血脂高；老人高血压；孩子8岁；想少糖少盐。",
      resultKicker: "FamLens",
      errorTitle: "这张没看成功",
      replace: "换一张",
      uploadFromAlbum: "拍照或选图",
      speakProduct: "播放给老人听",
      speakReceipt: "播放小票摘要",
      shareFamily: "发给家人",
      saveCard: "保存图文卡",
      copied: "已复制",
      copyEnglish: "复制英文",
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
        pick: "拍商品 / 选图",
        upload: "海外商品、外文标签、说明书或价签都可以",
        note: "直接给出能不能买、怎么用、要注意什么",
        emptyTitle: "这里展示结果",
        emptyCopy: "拍商品或拍小票后，识别结果会显示在这里。",
        loadingTitle: "正在看这张海外商品图",
        loadingCopy: "通常需要 8-20 秒。正面、背面、成分或说明文字越清楚越好。",
        error: "这张图暂时没分析成功。请换一张更清楚的正面、背面或说明照片。",
      },
      receipt: {
        pick: "拍小票 / 选图",
        upload: "拍完整海外小票，包含商品清单和总额",
        note: "小票会沉淀成家庭购物、饮食和支出记录",
        emptyTitle: "这里展示结果",
        emptyCopy: "拍小票后，采购清单和家庭购物记录会显示在这里。",
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
      productTab: "Scan product",
      receiptTab: "Scan receipt",
      profileLabel: "Family notes, optional",
      profilePlaceholder: "Example: someone has high cholesterol; grandma has high blood pressure; child is 8; prefer less sugar and salt.",
      resultKicker: "FamLens",
      errorTitle: "This photo did not work",
      replace: "Choose another",
      uploadFromAlbum: "Take or choose photo",
      speakProduct: "Play aloud",
      speakReceipt: "Play receipt summary",
      shareFamily: "Share with family",
      saveCard: "Save card",
      copied: "Copied",
      copyEnglish: "Copy English",
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
        pick: "Scan product / choose photo",
        upload: "Overseas product, foreign label, instructions, or price tag",
        note: "Get buying, usage, and watch-out advice directly here",
        emptyTitle: "Results appear here",
        emptyCopy: "After you scan a product, FamLens will show the explanation here.",
        loadingTitle: "Reading this overseas product photo",
        loadingCopy: "Usually takes 8-20 seconds. Clear front, back, ingredients, or instruction photos work best.",
        error: "This product photo did not analyze well. Try a clearer front, back, or instruction photo.",
      },
      receipt: {
        pick: "Scan receipt / choose photo",
        upload: "Capture the full overseas receipt with item list and total",
        note: "Receipts become your family shopping, diet, and spending memory",
        emptyTitle: "Results appear here",
        emptyCopy: "After you scan a receipt, the shopping list and family record will appear here.",
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
      uploadFromAlbum: "Tomar o elegir foto",
      speakProduct: "Leer en voz alta",
      speakReceipt: "Leer resumen",
      shareFamily: "Enviar a familia",
      saveCard: "Guardar tarjeta",
      copied: "Copiado",
      copyEnglish: "Copiar inglés",
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
        pick: "Escanear producto / elegir foto",
        upload: "Producto, etiqueta, instrucciones o precio",
        note: "El resultado aparece aquí, sin enlace extra",
        emptyTitle: "Los resultados aparecen aquí",
        emptyCopy: "Después de escanear, la explicación aparecerá aquí.",
        loadingTitle: "Leyendo la foto del producto",
        loadingCopy: "Suele tardar 8-20 segundos. Mejor con texto claro.",
        error: "No pude analizar bien esta foto. Prueba con una más clara.",
      },
      receipt: {
        pick: "Escanear recibo / elegir foto",
        upload: "Recibo completo con lista y total",
        note: "Sirve para informes de compra, dieta y gasto familiar",
        emptyTitle: "Los resultados aparecen aquí",
        emptyCopy: "Después de escanear el recibo, la lista aparecerá aquí.",
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
      uploadFromAlbum: "Prendre ou choisir une photo",
      speakProduct: "Lire à voix haute",
      speakReceipt: "Lire le reçu",
      shareFamily: "Partager",
      saveCard: "Sauver la carte",
      copied: "Copié",
      copyEnglish: "Copier l'anglais",
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
        pick: "Scanner produit / choisir photo",
        upload: "Produit, étiquette, mode d'emploi ou prix",
        note: "Le résultat s'affiche ici, sans lien séparé",
        emptyTitle: "Les résultats apparaissent ici",
        emptyCopy: "Après le scan, l'explication apparaîtra ici.",
        loadingTitle: "Lecture du produit",
        loadingCopy: "Souvent 8-20 secondes. Une photo nette aide beaucoup.",
        error: "Analyse difficile. Essayez une photo plus nette.",
      },
      receipt: {
        pick: "Scanner reçu / choisir photo",
        upload: "Reçu complet avec liste et total",
        note: "Base des rapports de courses, alimentation et dépenses",
        emptyTitle: "Les résultats apparaissent ici",
        emptyCopy: "Après le scan du reçu, la liste apparaîtra ici.",
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
      uploadFromAlbum: "촬영 또는 사진 선택",
      speakProduct: "소리로 듣기",
      speakReceipt: "영수증 요약 듣기",
      shareFamily: "가족에게 보내기",
      saveCard: "카드 저장",
      copied: "복사됨",
      copyEnglish: "영어 복사",
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
        pick: "상품 스캔 / 사진 선택",
        upload: "상품, 라벨, 설명, 가격표",
        note: "결과가 이 페이지에 바로 표시됩니다",
        emptyTitle: "결과가 여기에 표시됩니다",
        emptyCopy: "스캔 후 설명이 여기에 표시됩니다.",
        loadingTitle: "상품 사진을 읽는 중",
        loadingCopy: "보통 8-20초 걸립니다. 글자가 선명할수록 좋습니다.",
        error: "분석이 잘 되지 않았습니다. 더 선명한 사진을 올려 주세요.",
      },
      receipt: {
        pick: "영수증 스캔 / 사진 선택",
        upload: "상품 목록과 총액이 보이게 찍기",
        note: "가족 구매, 식단, 월간 지출 분석에 사용됩니다",
        emptyTitle: "결과가 여기에 표시됩니다",
        emptyCopy: "영수증을 스캔하면 구매 목록이 여기에 표시됩니다.",
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
      uploadFromAlbum: "撮影または写真を選択",
      speakProduct: "音声で聞く",
      speakReceipt: "レシート要約",
      shareFamily: "家族に送る",
      saveCard: "カード保存",
      copied: "コピー済み",
      copyEnglish: "英語をコピー",
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
        pick: "商品をスキャン / 写真選択",
        upload: "商品、ラベル、説明、値札",
        note: "結果はこのページに直接表示されます",
        emptyTitle: "結果はここに表示されます",
        emptyCopy: "スキャン後、説明がここに表示されます。",
        loadingTitle: "商品写真を読んでいます",
        loadingCopy: "通常 8-20 秒です。文字がはっきりした写真が最適です。",
        error: "分析できませんでした。より鮮明な写真を試してください。",
      },
      receipt: {
        pick: "レシートをスキャン / 写真選択",
        upload: "商品リストと合計が見えるレシート",
        note: "家族の買い物、食生活、月次支出分析に使います",
        emptyTitle: "結果はここに表示されます",
        emptyCopy: "レシートをスキャンすると、買い物リストがここに表示されます。",
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
      uploadFromAlbum: "Chụp hoặc chọn ảnh",
      speakProduct: "Đọc thành tiếng",
      speakReceipt: "Đọc tóm tắt hóa đơn",
      shareFamily: "Gửi gia đình",
      saveCard: "Lưu thẻ",
      copied: "Đã sao chép",
      copyEnglish: "Sao chép tiếng Anh",
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
        pick: "Quét sản phẩm / chọn ảnh",
        upload: "Sản phẩm, nhãn, hướng dẫn hoặc giá",
        note: "Kết quả hiện ngay tại đây, không cần mở link",
        emptyTitle: "Kết quả sẽ hiển thị ở đây",
        emptyCopy: "Sau khi quét, phần giải thích sẽ hiển thị ở đây.",
        loadingTitle: "Đang đọc ảnh sản phẩm",
        loadingCopy: "Thường mất 8-20 giây. Ảnh rõ chữ sẽ tốt hơn.",
        error: "Ảnh này chưa phân tích tốt. Hãy thử ảnh rõ hơn.",
      },
      receipt: {
        pick: "Quét hóa đơn / chọn ảnh",
        upload: "Chụp đủ danh sách món và tổng tiền",
        note: "Dùng cho báo cáo mua sắm, ăn uống và chi tiêu gia đình",
        emptyTitle: "Kết quả sẽ hiển thị ở đây",
        emptyCopy: "Sau khi quét hóa đơn, danh sách mua sắm sẽ hiển thị ở đây.",
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
      uploadFromAlbum: "फोटो लें या चुनें",
      speakProduct: "आवाज में सुनें",
      speakReceipt: "रसीद सुनें",
      shareFamily: "परिवार को भेजें",
      saveCard: "कार्ड सेव करें",
      copied: "कॉपी हो गया",
      copyEnglish: "अंग्रेजी कॉपी करें",
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
        pick: "सामान स्कैन / फोटो चुनें",
        upload: "सामान, लेबल, निर्देश या कीमत",
        note: "नतीजा यहीं दिखेगा, लिंक खोलने की जरूरत नहीं",
        emptyTitle: "नतीजे यहां दिखेंगे",
        emptyCopy: "स्कैन करने के बाद जानकारी यहां दिखेगी।",
        loadingTitle: "सामान की फोटो पढ़ रहा है",
        loadingCopy: "आमतौर पर 8-20 सेकंड लगते हैं। साफ अक्षर वाली फोटो बेहतर है।",
        error: "यह फोटो ठीक से पढ़ी नहीं गई। कृपया साफ फोटो लें।",
      },
      receipt: {
        pick: "रसीद स्कैन / फोटो चुनें",
        upload: "पूरी सूची और कुल रकम की फोटो लें",
        note: "परिवार की खरीदारी, खाना और खर्च रिपोर्ट के लिए",
        emptyTitle: "नतीजे यहां दिखेंगे",
        emptyCopy: "रसीद स्कैन करने के बाद shopping list यहां दिखेगी।",
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
    open: "记录",
    close: "关闭",
    title: "这个月家里买了什么",
    clear: "清空记录",
    spend: "本月小票支出",
    receipts: "已记录小票",
    products: "看过商品",
    recentReceipts: "最近小票",
    recentProducts: "最近商品",
    monthlyInsight: "本月家庭洞察",
    insightEmpty: "扫几张小票后，这里会自动总结家庭饮食结构和支出变化。",
    topCategoryPrefix: "主要花在",
    receiptUnit: "张",
    productUnit: "件",
    noReceipts: "还没有小票记录。买完东西后拍小票，就能慢慢看到家庭采购和支出结构。",
    noProducts: "还没有商品记录。拍过的商品会自动留在这里，方便家人回看。",
    unknownStore: "未知商店",
    unknownProduct: "未知商品",
    priceMemoryTitle: "价格记忆",
    priceMemoryCopy: "常买商品会自动记住以前多少钱，方便比较这次贵不贵。",
    frequentItemsTitle: "家庭常买清单",
    frequentItemsCopy: "重复出现的商品会成为家庭购物基线。",
    noPriceMemory: "多拍几张小票后，这里会提醒常买商品的价格变化。",
    noFrequentItems: "常买商品会在这里出现。",
    lastPrice: "这次",
    previousPrice: "上次",
    usualPrice: "常见价格",
    boughtTimes: "次",
    approximate: "约",
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
    monthlyInsight: "Monthly family insight",
    insightEmpty: "Scan a few receipts and FamLens will summarize family diet and spending patterns here.",
    topCategoryPrefix: "Mostly spent on",
    receiptUnit: "",
    productUnit: "",
    noReceipts: "No receipt records yet. Scan receipts after shopping to build family spending and diet patterns.",
    noProducts: "No product records yet. Scanned products will stay here for family review.",
    unknownStore: "Unknown store",
    unknownProduct: "Unknown product",
    priceMemoryTitle: "Price memory",
    priceMemoryCopy: "Common items remember past prices, so the family can tell if today is expensive.",
    frequentItemsTitle: "Common family items",
    frequentItemsCopy: "Repeated items become the household shopping baseline.",
    noPriceMemory: "Scan more receipts and price changes for common items will appear here.",
    noFrequentItems: "Common family items will appear here.",
    lastPrice: "Now",
    previousPrice: "Before",
    usualPrice: "Usual",
    boughtTimes: "times",
    approximate: "approx.",
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
    monthlyInsight: "Resumen familiar del mes",
    insightEmpty: "Escanea algunos recibos y FamLens resumirá alimentación y gastos familiares.",
    topCategoryPrefix: "Más gasto en",
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
    monthlyInsight: "Aperçu familial du mois",
    insightEmpty: "Scannez quelques reçus et FamLens résumera alimentation et dépenses.",
    topCategoryPrefix: "Surtout dépensé en",
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
    monthlyInsight: "이번 달 가족 요약",
    insightEmpty: "영수증을 몇 장 스캔하면 가족 식단과 지출 흐름을 요약합니다.",
    topCategoryPrefix: "주요 지출",
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
    monthlyInsight: "今月の家族メモ",
    insightEmpty: "レシートを数枚スキャンすると、食事と支出の傾向をまとめます。",
    topCategoryPrefix: "主な支出",
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
    monthlyInsight: "Nhận xét gia đình tháng này",
    insightEmpty: "Quét vài hóa đơn để FamLens tóm tắt ăn uống và chi tiêu gia đình.",
    topCategoryPrefix: "Chi nhiều cho",
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
    monthlyInsight: "मासिक परिवार जानकारी",
    insightEmpty: "कुछ रसीद स्कैन करें, FamLens परिवार के भोजन और खर्च को संक्षेप में दिखाएगा।",
    topCategoryPrefix: "सबसे ज्यादा खर्च",
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
    currency: "熟悉的货币",
    members: "家庭成员",
    membersPlaceholder: "例如：我给4口人买东西：爸爸68岁，妈妈65岁，孩子8岁，配偶成年人。有需要可写基础健康情况。",
    recovery: "保存家庭记录",
    recoveryPlaceholder: "可选：邮箱或手机号，未来换手机时找回记录",
    identityHint: "家庭码：{code}。以后可用于家人加入同一个家庭记录。",
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
    currency: "Familiar currency",
    members: "Family members",
    membersPlaceholder: "Example: I shop for 4 people: father 68, mother 65, child 8, spouse adult. Add basic health notes only if useful.",
    recovery: "Save family records",
    recoveryPlaceholder: "Optional: email or phone for future recovery",
    identityHint: "Family code: {code}. Later, family members can use it to join the same household record.",
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
    currency: "Moneda familiar",
    members: "Miembros de la familia",
    membersPlaceholder: "Ejemplo: compro para 4 personas: padre 68, madre 65, niño 8, pareja adulta. Añade notas de salud básicas si sirven.",
    recovery: "Guardar registros",
    recoveryPlaceholder: "Opcional: email o teléfono para recuperar datos",
    identityHint: "Código familiar: {code}. Más adelante permitirá unir a la familia al mismo registro.",
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
    currency: "Devise familière",
    members: "Membres de la famille",
    membersPlaceholder: "Exemple : je fais les courses pour 4 personnes : père 68, mère 65, enfant 8, conjoint adulte. Ajoutez des notes de santé simples si utile.",
    recovery: "Sauvegarder les dossiers",
    recoveryPlaceholder: "Optionnel : email ou téléphone pour récupérer",
    identityHint: "Code famille : {code}. Plus tard, les proches pourront rejoindre le même dossier.",
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
    currency: "익숙한 통화",
    members: "가족 구성원",
    membersPlaceholder: "예: 4인 가족 장보기: 아버지 68세, 어머니 65세, 아이 8세, 배우자 성인. 필요하면 기본 건강 메모를 적어 주세요.",
    recovery: "가족 기록 저장",
    recoveryPlaceholder: "선택: 나중에 복구할 이메일 또는 전화번호",
    identityHint: "가족 코드: {code}. 나중에 가족이 같은 기록에 참여할 수 있습니다.",
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
    currency: "使い慣れた通貨",
    members: "家族メンバー",
    membersPlaceholder: "例：4人分を買う。父68歳、母65歳、子ども8歳、配偶者は大人。必要なら基本的な健康メモも。",
    recovery: "家族記録を保存",
    recoveryPlaceholder: "任意：復元用のメールまたは電話番号",
    identityHint: "家族コード：{code}。後で家族が同じ記録に参加できます。",
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
    currency: "Tiền tệ quen thuộc",
    members: "Thành viên gia đình",
    membersPlaceholder: "Ví dụ: tôi mua cho 4 người: bố 68, mẹ 65, bé 8 tuổi, vợ/chồng là người lớn. Thêm ghi chú sức khỏe cơ bản nếu cần.",
    recovery: "Lưu hồ sơ gia đình",
    recoveryPlaceholder: "Tùy chọn: email hoặc số điện thoại để khôi phục",
    identityHint: "Mã gia đình: {code}. Sau này người nhà có thể dùng để tham gia cùng hồ sơ.",
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
    currency: "परिचित मुद्रा",
    members: "परिवार के सदस्य",
    membersPlaceholder: "जैसे: मैं 4 लोगों के लिए खरीदारी करता हूं: पिता 68, मां 65, बच्चा 8, जीवनसाथी वयस्क। जरूरत हो तो छोटी health note जोड़ें।",
    recovery: "परिवार रिकॉर्ड सेव करें",
    recoveryPlaceholder: "वैकल्पिक: भविष्य में restore के लिए email या phone",
    identityHint: "Family code: {code}. बाद में परिवार इसी household record से जुड़ सकता है।",
    hint: "बाद में बदल सकते हैं। Shopping preference अभी जरूरी नहीं है।",
    skip: "अभी छोड़ें",
    save: "सेव करके शुरू करें",
    close: "बंद करें",
  },
};

const homeLanguageCopy = {
  en: {
    brandEyebrow: "Immigrant family shopping AI",
    panelKicker: "Built for shopping in a new country",
    panelTitle: "Can’t read it? Scan before you buy.",
    panelIntro: "For immigrant families shopping abroad: scan a product to understand it, or scan a receipt to build your family shopping memory.",
    productSub: "Take a photo of labels, ingredients, warnings, or instructions.",
    receiptSub: "Take a photo of the full receipt after checkout.",
    visualProductLang: "EN / FR label",
    visualProductTitle: "Olive oil",
    visualProductCopy: "Use, warning, family fit",
    visualReceiptStore: "SAFEWAY",
    visualReceiptTitle: "Receipt saved",
    visualReceiptCopy: "Family shopping memory",
    useCaseProduct: "Foreign labels",
    useCaseReceipt: "Receipts",
    useCaseFamily: "Family sharing",
    previewKicker: "Scan result",
    previewTitle: "What you get after scanning",
    productPreviewLabel: "Product result",
    productPreviewTitle: "A2 Milk Powder",
    productPreviewSubtitle: "Milk powder for the family",
    productPreviewVoiceLabel: "Voice summary",
    productPreviewVoice: "This is full cream milk powder. It can be used for family drinks, but check milk and soy allergies. If someone has high cholesterol, compare a lower-fat option.",
    productPreviewBadgeGood: "OK for most families",
    productPreviewBadgeCaution: "Family note",
    productPreviewOneLabel: "Use",
    productPreviewOne: "Mix with water. Drink after prepared.",
    productPreviewTwoLabel: "Careful",
    productPreviewTwo: "Milk or soy allergy.",
    productPreviewThreeLabel: "Family note",
    productPreviewThree: "Dad has high cholesterol: full cream milk powder has saturated fat. Compare low-fat or use less.",
    receiptPreviewLabel: "Receipt result",
    receiptPreviewTitle: "Family shopping summary",
    receiptStoreLabel: "Store",
    receiptPreviewFood: "Food",
    receiptPreviewCare: "Care",
    receiptPreviewOne: "More vegetables this week. Fewer protein items.",
    receiptPreviewTwo: "Food and household categories",
    receiptPreviewThree: "Build a monthly food and spending report",
    receiptKicker: "Shopping memory",
    progressTitle: "Build your family’s overseas shopping record",
    progressCopy: "Scan receipts after each trip. Over time, FamLens learns what your household buys, eats, and spends.",
    receiptProgress: "{count} / 8 receipts",
    sampleKicker: "Long-term value",
    sampleTitle: "Monthly family report",
    sampleLink: "View sample",
    sampleNutrition: "Food signals",
    sampleNutritionCopy: "Rough patterns for vegetables, protein, sugar, calcium, and processed foods.",
    sampleSpending: "Shopping structure",
    sampleSpendingCopy: "Grocery, pharmacy, household supplies, restaurants, and care products.",
    sampleFamily: "Family context",
    sampleFamilyCopy: "Advice becomes more useful with language and household basics.",
    recentKicker: "Shopping memory",
    recentTitle: "Recent shopping records",
    noRecent: "No records yet. Scan an overseas product or receipt to start your family shopping memory.",
    familyKicker: "Personalized for immigrant households",
    familyTitle: "Family basics",
    familySenior: "Senior<br />health notes",
    familyAdult: "Adult<br />health goals",
    familyChild: "Child<br />growth",
    familyLanguage: "Language<br />preference",
    familyNote: "Set this once. Product answers, receipt reports, and AI suggestions will become more relevant to this household.",
    navScan: "Scan",
    navRecords: "Records",
    navFamily: "Family",
    navAi: "AI",
    receiptShort: "Receipt",
    productShort: "Product",
  },
  "zh-Hans": {
    brandEyebrow: "海外移民家庭购物 AI",
    panelKicker: "给在国外生活的家庭用",
    panelTitle: "看不懂？拍一下再买。",
    panelIntro: "给海外生活的家庭用：拍商品看懂标签、用法和注意事项；拍小票沉淀全家的购物记录。",
    productSub: "拍标签、成分、警示或说明文字。",
    receiptSub: "结账后拍完整小票，保存采购清单。",
    visualProductLang: "英文 / 法文标签",
    visualProductTitle: "橄榄油",
    visualProductCopy: "用法、注意、适合谁",
    visualReceiptStore: "海外超市",
    visualReceiptTitle: "小票已记录",
    visualReceiptCopy: "家庭购物记忆",
    useCaseProduct: "外文标签",
    useCaseReceipt: "购物小票",
    useCaseFamily: "发家人",
    previewKicker: "扫描结果",
    previewTitle: "扫完后会看到这些",
    productPreviewLabel: "商品结果",
    productPreviewTitle: "A2 奶粉",
    productPreviewSubtitle: "全家饮用的奶粉",
    productPreviewVoiceLabel: "语音摘要",
    productPreviewVoice: "这是全脂奶粉，可以给家里冲饮，但牛奶或大豆过敏的人要谨慎。如果家里有人血脂高，可以比较低脂款。",
    productPreviewBadgeGood: "多数家庭可用",
    productPreviewBadgeCaution: "家庭提醒",
    productPreviewOneLabel: "怎么用",
    productPreviewOne: "加水冲好后饮用。",
    productPreviewTwoLabel: "注意",
    productPreviewTwo: "牛奶或大豆过敏要谨慎。",
    productPreviewThreeLabel: "家庭提醒",
    productPreviewThree: "家里有人血脂高：全脂奶粉含饱和脂肪，建议少量或比较低脂款。",
    receiptPreviewLabel: "小票结果",
    receiptPreviewTitle: "家庭购物小结",
    receiptStoreLabel: "商店",
    receiptPreviewFood: "食物",
    receiptPreviewCare: "护理",
    receiptPreviewOne: "本周蔬菜更多，蛋白类偏少。",
    receiptPreviewTwo: "整理食物和家庭用品分类",
    receiptPreviewThree: "累计后生成月度饮食和支出报告",
    receiptKicker: "购物记忆",
    progressTitle: "建立全家的海外购物记录",
    progressCopy: "每次买完拍小票。时间久了，FamLens 会更懂你家买什么、吃什么、花在哪里。",
    receiptProgress: "{count} / 8 张小票",
    sampleKicker: "长期价值",
    sampleTitle: "月度家庭报告",
    sampleLink: "看样例",
    sampleNutrition: "饮食信号",
    sampleNutritionCopy: "粗略看蔬菜、蛋白质、糖、钙、加工食品等趋势。",
    sampleSpending: "购物结构",
    sampleSpendingCopy: "超市、药房、家庭用品、餐厅和护理用品。",
    sampleFamily: "家庭背景",
    sampleFamilyCopy: "结合语言和家庭基础信息，建议会越来越贴合。",
    recentKicker: "购物记忆",
    recentTitle: "最近购物记录",
    noRecent: "还没有记录。先拍一个海外商品或扫一张小票，开始建立家庭购物记忆。",
    familyKicker: "按移民家庭定制",
    familyTitle: "家庭基础信息",
    familySenior: "老人<br />健康关注",
    familyAdult: "成人<br />健康目标",
    familyChild: "孩子<br />成长",
    familyLanguage: "语言<br />偏好",
    familyNote: "只需设置一次。商品、小票报告和 AI 建议会更贴合这个家庭。",
    navScan: "扫描",
    navRecords: "记录",
    navFamily: "家庭",
    navAi: "AI",
    receiptShort: "小票",
    productShort: "商品",
  },
  es: {
    brandEyebrow: "AI de compras saludables para la familia",
    panelKicker: "Para todo el hogar",
    panelTitle: "AI de compras saludables para tu familia.",
    panelIntro: "Entiende productos y recibos. Crea una memoria de compras saludable para la familia.",
    productSub: "Qué es, cómo usarlo y para quién conviene.",
    receiptSub: "Guarda la compra de hoy en la memoria familiar.",
    previewKicker: "Resultado",
    previewTitle: "Lo que recibes al escanear",
    productPreviewLabel: "Resultado del producto",
    productPreviewTitle: "Leche A2 en polvo",
    productPreviewSubtitle: "Leche en polvo para la familia",
    productPreviewVoiceLabel: "Resumen por voz",
    productPreviewVoice: "Es leche entera en polvo. Puede servir para bebidas familiares, pero revisa alergias a leche o soya. Si alguien tiene colesterol alto, compara una opción baja en grasa.",
    productPreviewBadgeGood: "Apto para la mayoría",
    productPreviewBadgeCaution: "Nota familiar",
    productPreviewOneLabel: "Uso",
    productPreviewOne: "Mezclar con agua y beber.",
    productPreviewTwoLabel: "Cuidado",
    productPreviewTwo: "Alergia a leche o soya.",
    productPreviewThreeLabel: "Nota familiar",
    productPreviewThree: "Si alguien tiene colesterol alto: esta leche entera tiene grasa saturada. Compara una opción baja en grasa.",
    receiptPreviewLabel: "Resultado del recibo",
    receiptPreviewTitle: "Resumen familiar",
    receiptStoreLabel: "Tienda",
    receiptPreviewFood: "Comida",
    receiptPreviewCare: "Cuidado",
    receiptPreviewOne: "Más verduras esta semana. Menos proteína.",
    receiptPreviewTwo: "Categorías de comida y hogar",
    receiptPreviewThree: "Crear un informe mensual de comida y gastos",
    receiptKicker: "Memoria familiar",
    progressTitle: "Tu primer informe familiar se está formando",
    progressCopy: "Escanea recibos después de comprar. FamLens aprenderá patrones de dieta y gasto.",
    receiptProgress: "{count} / 8 recibos",
    sampleKicker: "Por qué escanear recibos",
    sampleTitle: "Informe familiar mensual",
    sampleLink: "Ver ejemplo",
    sampleNutrition: "Nutrición",
    sampleNutritionCopy: "Verduras, proteína, azúcar, calcio y procesados.",
    sampleSpending: "Gastos",
    sampleSpendingCopy: "Supermercado, restaurantes, cuidado personal y hogar.",
    sampleFamily: "Familia",
    sampleFamilyCopy: "Notas para mayores, niños y salud familiar.",
    recentKicker: "Memoria familiar",
    recentTitle: "Escaneos recientes",
    noRecent: "Aún no hay registros. Escanea un producto o recibo para empezar.",
    familyKicker: "Personalizado para el hogar",
    familyTitle: "Datos familiares",
    familySenior: "Mayor<br />salud",
    familyAdult: "Adulto<br />metas",
    familyChild: "Niño<br />crecimiento",
    familyLanguage: "Idioma<br />preferido",
    familyNote: "Configúralo una vez. Las respuestas e informes serán más relevantes.",
    navScan: "Escanear",
    navRecords: "Registros",
    navFamily: "Familia",
    navAi: "AI",
    receiptShort: "Recibo",
    productShort: "Producto",
  },
  fr: {
    brandEyebrow: "AI d’achats santé pour la famille",
    panelKicker: "Pour tout le foyer",
    panelTitle: "Votre AI d’achats santé familiale.",
    panelIntro: "Comprenez produits et reçus. Créez une mémoire d’achats santé pour la famille.",
    productSub: "Ce que c’est, comment l’utiliser, pour qui.",
    receiptSub: "Ajoutez les achats du jour à la mémoire familiale.",
    previewKicker: "Résultat",
    previewTitle: "Ce que vous obtenez après le scan",
    productPreviewLabel: "Résultat produit",
    productPreviewTitle: "Lait A2 en poudre",
    productPreviewSubtitle: "Lait en poudre pour la famille",
    productPreviewVoiceLabel: "Résumé vocal",
    productPreviewVoice: "C’est du lait entier en poudre. Il peut servir aux boissons familiales, mais vérifiez les allergies au lait ou au soja. Si quelqu’un a un cholestérol élevé, comparez une option allégée.",
    productPreviewBadgeGood: "OK pour la plupart",
    productPreviewBadgeCaution: "Note famille",
    productPreviewOneLabel: "Usage",
    productPreviewOne: "Mélanger avec de l’eau, puis boire.",
    productPreviewTwoLabel: "Attention",
    productPreviewTwo: "Allergie au lait ou au soja.",
    productPreviewThreeLabel: "Note famille",
    productPreviewThree: "Si quelqu’un a un cholestérol élevé : ce lait entier contient des graisses saturées. Comparez une option allégée.",
    receiptPreviewLabel: "Résultat reçu",
    receiptPreviewTitle: "Résumé familial",
    receiptStoreLabel: "Magasin",
    receiptPreviewFood: "Aliments",
    receiptPreviewCare: "Soins",
    receiptPreviewOne: "Plus de légumes cette semaine. Moins de protéines.",
    receiptPreviewTwo: "Catégories alimentation et maison",
    receiptPreviewThree: "Créer un rapport mensuel alimentation et dépenses",
    receiptKicker: "Mémoire familiale",
    progressTitle: "Votre premier rapport familial se prépare",
    progressCopy: "Scannez les reçus après les courses. FamLens apprendra alimentation et dépenses.",
    receiptProgress: "{count} / 8 reçus",
    sampleKicker: "Pourquoi scanner les reçus",
    sampleTitle: "Rapport familial mensuel",
    sampleLink: "Voir exemple",
    sampleNutrition: "Nutrition",
    sampleNutritionCopy: "Légumes, protéines, sucre, calcium, aliments transformés.",
    sampleSpending: "Dépenses",
    sampleSpendingCopy: "Épicerie, restaurants, soins personnels, maison.",
    sampleFamily: "Famille",
    sampleFamilyCopy: "Notes pour seniors, enfants et points de santé.",
    recentKicker: "Mémoire familiale",
    recentTitle: "Scans récents",
    noRecent: "Aucun enregistrement. Scannez un produit ou un reçu pour commencer.",
    familyKicker: "Personnalisé pour le foyer",
    familyTitle: "Infos famille",
    familySenior: "Senior<br />santé",
    familyAdult: "Adulte<br />objectifs",
    familyChild: "Enfant<br />croissance",
    familyLanguage: "Langue<br />préférée",
    familyNote: "À configurer une fois. Les réponses et rapports seront plus pertinents.",
    navScan: "Scan",
    navRecords: "Dossiers",
    navFamily: "Famille",
    navAi: "AI",
    receiptShort: "Reçu",
    productShort: "Produit",
  },
  ko: {
    brandEyebrow: "가족 건강 쇼핑 AI",
    panelKicker: "온 가족을 위해",
    panelTitle: "가족 건강 쇼핑 AI.",
    panelIntro: "상품과 영수증을 이해하고 가족 쇼핑 건강 기록을 만듭니다.",
    productSub: "무엇인지, 사용법, 누구에게 맞는지 확인.",
    receiptSub: "오늘 쇼핑을 가족 기록에 저장.",
    previewKicker: "스캔 결과",
    previewTitle: "스캔 후 보이는 결과",
    productPreviewLabel: "상품 결과",
    productPreviewTitle: "A2 분유",
    productPreviewSubtitle: "가족용 분유",
    productPreviewVoiceLabel: "음성 요약",
    productPreviewVoice: "전지분유입니다. 가족 음료로 사용할 수 있지만 우유나 대두 알레르기를 확인하세요. 가족 중 고지혈증이 있으면 저지방 제품과 비교하세요.",
    productPreviewBadgeGood: "대부분 가족 사용 가능",
    productPreviewBadgeCaution: "가족 메모",
    productPreviewOneLabel: "사용법",
    productPreviewOne: "물에 타서 마십니다.",
    productPreviewTwoLabel: "주의",
    productPreviewTwo: "우유나 대두 알레르기 주의.",
    productPreviewThreeLabel: "가족 메모",
    productPreviewThree: "가족 중 고지혈증이 있으면: 전지분유는 포화지방이 있어 저지방 제품과 비교하세요.",
    receiptPreviewLabel: "영수증 결과",
    receiptPreviewTitle: "가족 쇼핑 요약",
    receiptStoreLabel: "매장",
    receiptPreviewFood: "식품",
    receiptPreviewCare: "케어",
    receiptPreviewOne: "이번 주 채소가 늘고 단백질 품목은 적습니다.",
    receiptPreviewTwo: "식품과 생활용품 분류",
    receiptPreviewThree: "월간 식단과 지출 리포트 만들기",
    receiptKicker: "가족 메모리",
    progressTitle: "첫 가족 리포트가 만들어지는 중",
    progressCopy: "쇼핑 후 영수증을 스캔하면 식단과 지출 패턴을 배웁니다.",
    receiptProgress: "{count} / 8 영수증",
    sampleKicker: "영수증 스캔 이유",
    sampleTitle: "월간 가족 리포트",
    sampleLink: "샘플 보기",
    sampleNutrition: "영양",
    sampleNutritionCopy: "채소, 단백질, 당, 칼슘, 가공식품 추세.",
    sampleSpending: "지출",
    sampleSpendingCopy: "식료품, 외식, 개인 케어, 생활용품.",
    sampleFamily: "가족",
    sampleFamilyCopy: "노인, 아이, 건강 관심사에 맞춘 메모.",
    recentKicker: "가족 메모리",
    recentTitle: "최근 스캔",
    noRecent: "아직 기록이 없습니다. 상품이나 영수증을 스캔하세요.",
    familyKicker: "가구 맞춤",
    familyTitle: "가족 기본 정보",
    familySenior: "노인<br />건강",
    familyAdult: "성인<br />목표",
    familyChild: "아이<br />성장",
    familyLanguage: "언어<br />선호",
    familyNote: "한 번 설정하면 답변과 리포트가 가족에 더 맞춰집니다.",
    navScan: "스캔",
    navRecords: "기록",
    navFamily: "가족",
    navAi: "AI",
    receiptShort: "영수증",
    productShort: "상품",
  },
  ja: {
    brandEyebrow: "家族の健康ショッピング AI",
    panelKicker: "家族みんなのために",
    panelTitle: "家族の健康ショッピング AI。",
    panelIntro: "商品とレシートを理解し、家族の健康的な買い物記録を作ります。",
    productSub: "何か、使い方、誰に合うかを確認。",
    receiptSub: "今日の買い物を家族記録に保存。",
    previewKicker: "スキャン結果",
    previewTitle: "スキャン後に見える結果",
    productPreviewLabel: "商品結果",
    productPreviewTitle: "A2 ミルクパウダー",
    productPreviewSubtitle: "家族向けの粉ミルク",
    productPreviewVoiceLabel: "音声要約",
    productPreviewVoice: "これは全脂粉乳です。家族の飲み物に使えますが、牛乳や大豆アレルギーを確認してください。家族に脂質が気になる人がいる場合は、低脂肪品と比較してください。",
    productPreviewBadgeGood: "多くの家庭で利用可",
    productPreviewBadgeCaution: "家族メモ",
    productPreviewOneLabel: "使い方",
    productPreviewOne: "水に混ぜて飲みます。",
    productPreviewTwoLabel: "注意",
    productPreviewTwo: "牛乳・大豆アレルギーに注意。",
    productPreviewThreeLabel: "家族メモ",
    productPreviewThree: "家族に脂質が気になる人がいる場合：全脂粉乳は飽和脂肪を含むため、低脂肪品と比較してください。",
    receiptPreviewLabel: "レシート結果",
    receiptPreviewTitle: "家族の買い物まとめ",
    receiptStoreLabel: "店舗",
    receiptPreviewFood: "食品",
    receiptPreviewCare: "ケア",
    receiptPreviewOne: "今週は野菜が多め、たんぱく質は少なめ。",
    receiptPreviewTwo: "食品と日用品を分類",
    receiptPreviewThree: "月次の食事と支出レポートを作成",
    receiptKicker: "家族メモリー",
    progressTitle: "最初の家族レポートを作成中",
    progressCopy: "買い物後にレシートをスキャンすると、食事と支出の傾向を学習します。",
    receiptProgress: "{count} / 8 枚",
    sampleKicker: "レシートをスキャンする理由",
    sampleTitle: "月次家族レポート",
    sampleLink: "サンプル",
    sampleNutrition: "栄養",
    sampleNutritionCopy: "野菜、タンパク質、糖、カルシウム、加工食品の傾向。",
    sampleSpending: "支出",
    sampleSpendingCopy: "食料品、外食、ケア用品、日用品。",
    sampleFamily: "家族",
    sampleFamilyCopy: "高齢者、子ども、健康関心に合わせたメモ。",
    recentKicker: "家族メモリー",
    recentTitle: "最近のスキャン",
    noRecent: "まだ記録がありません。商品かレシートをスキャンしてください。",
    familyKicker: "家庭に合わせる",
    familyTitle: "家族基本情報",
    familySenior: "高齢者<br />健康",
    familyAdult: "大人<br />目標",
    familyChild: "子ども<br />成長",
    familyLanguage: "言語<br />設定",
    familyNote: "一度設定すると、回答とレポートが家族に合いやすくなります。",
    navScan: "スキャン",
    navRecords: "記録",
    navFamily: "家族",
    navAi: "AI",
    receiptShort: "レシート",
    productShort: "商品",
  },
  vi: {
    brandEyebrow: "AI mua sắm sức khỏe gia đình",
    panelKicker: "Cho cả gia đình",
    panelTitle: "AI mua sắm sức khỏe gia đình.",
    panelIntro: "Hiểu sản phẩm và hóa đơn. Xây dựng ký ức mua sắm sức khỏe cho gia đình.",
    productSub: "Biết là gì, dùng thế nào, hợp với ai.",
    receiptSub: "Lưu mua sắm hôm nay vào ký ức gia đình.",
    previewKicker: "Kết quả quét",
    previewTitle: "Bạn nhận được gì sau khi quét",
    productPreviewLabel: "Kết quả sản phẩm",
    productPreviewTitle: "Sữa bột A2",
    productPreviewSubtitle: "Sữa bột cho gia đình",
    productPreviewVoiceLabel: "Tóm tắt giọng nói",
    productPreviewVoice: "Đây là sữa bột nguyên kem. Có thể pha cho gia đình, nhưng cần kiểm tra dị ứng sữa hoặc đậu nành. Nếu gia đình có người mỡ máu cao, nên so sánh loại ít béo.",
    productPreviewBadgeGood: "Hợp với đa số gia đình",
    productPreviewBadgeCaution: "Ghi chú gia đình",
    productPreviewOneLabel: "Cách dùng",
    productPreviewOne: "Pha với nước rồi uống.",
    productPreviewTwoLabel: "Cẩn thận",
    productPreviewTwo: "Dị ứng sữa hoặc đậu nành.",
    productPreviewThreeLabel: "Ghi chú gia đình",
    productPreviewThree: "Nếu gia đình có người mỡ máu cao: sữa nguyên kem có chất béo bão hòa. Nên so sánh loại ít béo.",
    receiptPreviewLabel: "Kết quả hóa đơn",
    receiptPreviewTitle: "Tóm tắt mua sắm gia đình",
    receiptStoreLabel: "Cửa hàng",
    receiptPreviewFood: "Thực phẩm",
    receiptPreviewCare: "Chăm sóc",
    receiptPreviewOne: "Tuần này nhiều rau hơn, ít món giàu đạm hơn.",
    receiptPreviewTwo: "Nhóm thực phẩm và đồ gia đình",
    receiptPreviewThree: "Tạo báo cáo ăn uống và chi tiêu hàng tháng",
    receiptKicker: "Ký ức gia đình",
    progressTitle: "Báo cáo gia đình đầu tiên đang hình thành",
    progressCopy: "Quét hóa đơn sau khi mua. FamLens sẽ học thói quen ăn uống và chi tiêu.",
    receiptProgress: "{count} / 8 hóa đơn",
    sampleKicker: "Vì sao quét hóa đơn",
    sampleTitle: "Báo cáo gia đình tháng",
    sampleLink: "Xem mẫu",
    sampleNutrition: "Dinh dưỡng",
    sampleNutritionCopy: "Rau, đạm, đường, canxi, thực phẩm chế biến.",
    sampleSpending: "Chi tiêu",
    sampleSpendingCopy: "Tạp hóa, nhà hàng, chăm sóc cá nhân, đồ gia đình.",
    sampleFamily: "Gia đình",
    sampleFamilyCopy: "Gợi ý cho người lớn tuổi, trẻ em và sức khỏe.",
    recentKicker: "Ký ức gia đình",
    recentTitle: "Lần quét gần đây",
    noRecent: "Chưa có ghi chép. Hãy quét sản phẩm hoặc hóa đơn để bắt đầu.",
    familyKicker: "Cá nhân hóa cho gia đình",
    familyTitle: "Thông tin gia đình",
    familySenior: "Người lớn tuổi<br />sức khỏe",
    familyAdult: "Người lớn<br />mục tiêu",
    familyChild: "Trẻ em<br />phát triển",
    familyLanguage: "Ngôn ngữ<br />ưa thích",
    familyNote: "Thiết lập một lần. Câu trả lời và báo cáo sẽ phù hợp hơn.",
    navScan: "Quét",
    navRecords: "Ghi chép",
    navFamily: "Gia đình",
    navAi: "AI",
    receiptShort: "Hóa đơn",
    productShort: "Sản phẩm",
  },
  hi: {
    brandEyebrow: "परिवार हेल्थ शॉपिंग AI",
    panelKicker: "पूरे परिवार के लिए",
    panelTitle: "आपके परिवार का हेल्थ शॉपिंग AI.",
    panelIntro: "प्रोडक्ट और रसीद समझें। पूरे परिवार की हेल्थ-aware shopping memory बनाएं।",
    productSub: "क्या है, कैसे उपयोग करें, किसके लिए सही है।",
    receiptSub: "आज की shopping को family memory में सेव करें।",
    previewKicker: "Scan result",
    previewTitle: "Scan के बाद क्या मिलेगा",
    productPreviewLabel: "Product result",
    productPreviewTitle: "A2 milk powder",
    productPreviewSubtitle: "परिवार के लिए milk powder",
    productPreviewVoiceLabel: "Voice summary",
    productPreviewVoice: "यह full cream milk powder है। परिवार के drinks के लिए उपयोग हो सकता है, लेकिन milk या soy allergy check करें. अगर परिवार में high cholesterol है, low-fat option compare करें.",
    productPreviewBadgeGood: "अधिकतर परिवारों के लिए ठीक",
    productPreviewBadgeCaution: "Family note",
    productPreviewOneLabel: "कैसे उपयोग करें",
    productPreviewOne: "पानी में मिलाकर पिएं.",
    productPreviewTwoLabel: "ध्यान दें",
    productPreviewTwo: "Milk या soy allergy हो तो सावधान.",
    productPreviewThreeLabel: "Family note",
    productPreviewThree: "अगर परिवार में high cholesterol है: full cream milk powder में saturated fat होता है. Low-fat option compare करें.",
    receiptPreviewLabel: "Receipt result",
    receiptPreviewTitle: "Family shopping summary",
    receiptStoreLabel: "Store",
    receiptPreviewFood: "खाना",
    receiptPreviewCare: "देखभाल",
    receiptPreviewOne: "इस हफ्ते vegetables ज़्यादा, protein items कम.",
    receiptPreviewTwo: "Food और household categories",
    receiptPreviewThree: "Monthly food और spending report बनाएं",
    receiptKicker: "Family memory",
    progressTitle: "आपकी पहली family report बन रही है",
    progressCopy: "Shopping के बाद receipts scan करें। FamLens eating और spending patterns सीखेगा।",
    receiptProgress: "{count} / 8 receipts",
    sampleKicker: "Receipt scan क्यों करें",
    sampleTitle: "Monthly family report",
    sampleLink: "Sample देखें",
    sampleNutrition: "Nutrition",
    sampleNutritionCopy: "सब्ज़ी, protein, sugar, calcium, processed food trends.",
    sampleSpending: "Spending",
    sampleSpendingCopy: "Groceries, restaurants, personal care, household supplies.",
    sampleFamily: "Family",
    sampleFamilyCopy: "Seniors, children और health concerns के लिए notes.",
    recentKicker: "Family memory",
    recentTitle: "Recent scans",
    noRecent: "अभी records नहीं हैं। Product या receipt scan करके शुरू करें।",
    familyKicker: "Household के लिए personalized",
    familyTitle: "Family basics",
    familySenior: "Senior<br />health",
    familyAdult: "Adult<br />goals",
    familyChild: "Child<br />growth",
    familyLanguage: "Language<br />preference",
    familyNote: "एक बार सेट करें। Answers और reports परिवार के लिए अधिक relevant होंगे।",
    navScan: "Scan",
    navRecords: "Records",
    navFamily: "Family",
    navAi: "AI",
    receiptShort: "Receipt",
    productShort: "Product",
  },
};

const growthLanguageCopy = {
  en: {
    productShareKicker: "Shareable card",
    productShareTitle: "Send this judgement to family",
    productShareCopy: "One tap shares the image card so another family member can confirm before buying.",
    productShareButton: "Share",
    productCommerceKicker: "Optional savings",
    productCommerceTitle: "Relevant offers can appear here later",
    productCommerceCopy: "Brand offers stay separate from the independent product judgement.",
    productCommerceButton: "View",
    receiptShareKicker: "Family memory",
    receiptShareTitle: "This receipt is saved to your household record",
    receiptShareCopy: "Share a quick summary with family and keep building the monthly shopping picture.",
    receiptShareButton: "Share",
    receiptCommerceKicker: "Optional savings",
    receiptCommerceTitle: "Cashback and coupon opportunities can appear here later",
    receiptCommerceCopy: "Savings modules stay separate from health and family notes.",
    receiptCommerceButton: "View",
    productShareTemplate: "Share this product image card with family before buying.",
    receiptShareTemplate: "Copy this receipt summary and keep the household shopping record up to date.",
  },
  "zh-Hans": {
    productShareKicker: "可分享判断卡",
    productShareTitle: "发给家人，一起确认再买",
    productShareCopy: "一键分享图文卡，让不在现场的家人也能看懂这个商品。",
    productShareButton: "分享",
    productCommerceKicker: "可选省钱信息",
    productCommerceTitle: "未来可在这里展示相关优惠",
    productCommerceCopy: "品牌优惠会和独立判断分开，不影响能不能买、怎么用的结论。",
    productCommerceButton: "查看",
    receiptShareKicker: "家庭购物记忆",
    receiptShareTitle: "这张小票已进入家庭记录",
    receiptShareCopy: "把小票摘要发给家人，同时继续累积一个月后的家庭购物画像。",
    receiptShareButton: "分享",
    receiptCommerceKicker: "可选省钱信息",
    receiptCommerceTitle: "未来可在这里展示返现和优惠券",
    receiptCommerceCopy: "省钱模块会和健康、家庭提醒分开展示。",
    receiptCommerceButton: "查看",
    productShareTemplate: "把这张商品图文卡发给家人，买之前一起确认。",
    receiptShareTemplate: "复制小票摘要，同时沉淀家庭购物记录。",
  },
};

const familyJoinLanguageCopy = {
  en: {
    inviteCodeLabel: "Family code",
    copyInviteLink: "Copy invite link",
    copyCode: "Copy code",
    copied: "Copied.",
    joinLabel: "Join an existing family",
    joinPlaceholder: "Enter family code",
    joinButton: "Join family",
    joinPrompt: "Invite code detected. Tap Join family to use the same family records on this device.",
    joining: "Joining family...",
    joinSuccess: "Joined. This device now uses the shared family records.",
    joinError: "Could not join. Please check the family code.",
    noCode: "Enter a family code first.",
  },
  "zh-Hans": {
    inviteCodeLabel: "家庭码",
    copyInviteLink: "复制邀请链接",
    copyCode: "复制家庭码",
    copied: "已复制。",
    joinLabel: "加入已有家庭",
    joinPlaceholder: "输入家庭码",
    joinButton: "加入家庭",
    joinPrompt: "检测到家庭邀请。点击加入家庭后，这台设备会使用同一个家庭记录。",
    joining: "正在加入家庭...",
    joinSuccess: "已加入。这台设备现在会使用共享家庭记录。",
    joinError: "加入失败，请检查家庭码。",
    noCode: "请先输入家庭码。",
  },
  es: {
    inviteCodeLabel: "Código familiar",
    copyInviteLink: "Copiar enlace",
    copyCode: "Copiar código",
    copied: "Copiado.",
    joinLabel: "Unirse a una familia",
    joinPlaceholder: "Ingresa el código",
    joinButton: "Unirse",
    joinPrompt: "Código de invitación detectado. Toca Unirse para usar los mismos registros familiares.",
    joining: "Uniendo...",
    joinSuccess: "Listo. Este dispositivo usa los registros familiares compartidos.",
    joinError: "No se pudo unir. Revisa el código familiar.",
    noCode: "Ingresa un código familiar primero.",
  },
  fr: {
    inviteCodeLabel: "Code famille",
    copyInviteLink: "Copier le lien",
    copyCode: "Copier le code",
    copied: "Copié.",
    joinLabel: "Rejoindre une famille",
    joinPlaceholder: "Entrez le code",
    joinButton: "Rejoindre",
    joinPrompt: "Invitation détectée. Appuyez sur Rejoindre pour utiliser les mêmes dossiers familiaux.",
    joining: "Connexion...",
    joinSuccess: "Rejoint. Cet appareil utilise les dossiers familiaux partagés.",
    joinError: "Impossible de rejoindre. Vérifiez le code.",
    noCode: "Entrez d'abord un code famille.",
  },
  ko: {
    inviteCodeLabel: "가족 코드",
    copyInviteLink: "초대 링크 복사",
    copyCode: "코드 복사",
    copied: "복사됨.",
    joinLabel: "기존 가족 참여",
    joinPlaceholder: "가족 코드 입력",
    joinButton: "가족 참여",
    joinPrompt: "초대 코드가 감지되었습니다. 가족 참여를 누르면 같은 가족 기록을 사용합니다.",
    joining: "참여 중...",
    joinSuccess: "참여 완료. 이 기기는 공유 가족 기록을 사용합니다.",
    joinError: "참여하지 못했습니다. 가족 코드를 확인하세요.",
    noCode: "먼저 가족 코드를 입력하세요.",
  },
  ja: {
    inviteCodeLabel: "家族コード",
    copyInviteLink: "招待リンクをコピー",
    copyCode: "コードをコピー",
    copied: "コピーしました。",
    joinLabel: "既存の家族に参加",
    joinPlaceholder: "家族コードを入力",
    joinButton: "参加",
    joinPrompt: "招待コードを検出しました。参加すると同じ家族記録を使えます。",
    joining: "参加中...",
    joinSuccess: "参加しました。この端末は共有家族記録を使います。",
    joinError: "参加できません。家族コードを確認してください。",
    noCode: "先に家族コードを入力してください。",
  },
  vi: {
    inviteCodeLabel: "Mã gia đình",
    copyInviteLink: "Sao chép link",
    copyCode: "Sao chép mã",
    copied: "Đã sao chép.",
    joinLabel: "Tham gia gia đình",
    joinPlaceholder: "Nhập mã gia đình",
    joinButton: "Tham gia",
    joinPrompt: "Đã phát hiện lời mời. Bấm Tham gia để dùng chung hồ sơ gia đình.",
    joining: "Đang tham gia...",
    joinSuccess: "Đã tham gia. Thiết bị này dùng hồ sơ gia đình chung.",
    joinError: "Không thể tham gia. Vui lòng kiểm tra mã.",
    noCode: "Hãy nhập mã gia đình trước.",
  },
  hi: {
    inviteCodeLabel: "Family code",
    copyInviteLink: "Invite link copy करें",
    copyCode: "Code copy करें",
    copied: "Copy हो गया.",
    joinLabel: "Existing family join करें",
    joinPlaceholder: "Family code डालें",
    joinButton: "Join family",
    joinPrompt: "Invite code मिला है। Join family दबाकर इसी family record का उपयोग करें।",
    joining: "Family join हो रही है...",
    joinSuccess: "Joined. यह device shared family records इस्तेमाल करेगा।",
    joinError: "Join नहीं हुआ। Family code check करें।",
    noCode: "पहले family code डालें.",
  },
};

const profileStructuredLanguageCopy = {
  en: {
    mainTitle: "Main shopper",
    mainName: "Name or nickname",
    mainAge: "Age",
    mainGender: "Gender",
    mainHealth: "Health notes",
    addTitle: "Add family member",
    memberName: "Name",
    memberAge: "Age",
    memberRelation: "Relationship",
    memberGender: "Gender",
    memberHealth: "Health concerns",
    memberNote: "Other note",
    addMember: "Add member",
    memberList: "Family members added",
    noMembers: "No family members added yet.",
    remove: "Remove",
    mainShopperPrefix: "Main shopper",
    memberPrefix: "Family member",
    genders: [
      ["", "Prefer not to say"],
      ["female", "Female"],
      ["male", "Male"],
      ["other", "Other"],
    ],
    relations: [
      ["", "Select"],
      ["self", "Self"],
      ["spouse", "Spouse"],
      ["parent", "Parent"],
      ["child", "Child"],
      ["other", "Other"],
    ],
    health: {
      blood_pressure: "High blood pressure",
      diabetes: "Diabetes",
      cholesterol: "High cholesterol",
      allergy: "Allergy",
      low_sugar: "Less sugar",
      low_salt: "Less salt",
      lactose: "Lactose sensitive",
      child_growth: "Child growth",
    },
  },
  "zh-Hans": {
    mainTitle: "主要购买人",
    mainName: "姓名或称呼",
    mainAge: "年龄",
    mainGender: "性别",
    mainHealth: "健康关注",
    addTitle: "添加家庭成员",
    memberName: "姓名",
    memberAge: "年龄",
    memberRelation: "关系",
    memberGender: "性别",
    memberHealth: "健康关注",
    memberNote: "其他说明",
    addMember: "添加成员",
    memberList: "已添加成员",
    noMembers: "还没有添加家庭成员。",
    remove: "删除",
    mainShopperPrefix: "主要购买人",
    memberPrefix: "家庭成员",
    genders: [
      ["", "不填写"],
      ["female", "女"],
      ["male", "男"],
      ["other", "其他"],
    ],
    relations: [
      ["", "请选择"],
      ["self", "本人"],
      ["spouse", "配偶"],
      ["parent", "父母"],
      ["child", "孩子"],
      ["other", "其他"],
    ],
    health: {
      blood_pressure: "高血压",
      diabetes: "糖尿病",
      cholesterol: "血脂高",
      allergy: "过敏",
      low_sugar: "少糖",
      low_salt: "少盐",
      lactose: "乳糖敏感",
      child_growth: "孩子成长",
    },
  },
};

profileStructuredLanguageCopy.es = {
  ...profileStructuredLanguageCopy.en,
  mainTitle: "Comprador principal",
  mainName: "Nombre o apodo",
  mainAge: "Edad",
  mainGender: "Género",
  mainHealth: "Notas de salud",
  addTitle: "Añadir familiar",
  memberName: "Nombre",
  memberAge: "Edad",
  memberRelation: "Relación",
  memberGender: "Género",
  memberHealth: "Puntos de salud",
  memberNote: "Otra nota",
  addMember: "Añadir miembro",
  memberList: "Familia añadida",
  noMembers: "Aún no hay familiares añadidos.",
  remove: "Quitar",
  mainShopperPrefix: "Comprador principal",
  memberPrefix: "Familiar",
  genders: [["", "Prefiero no decir"], ["female", "Mujer"], ["male", "Hombre"], ["other", "Otro"]],
  relations: [["", "Seleccionar"], ["self", "Yo"], ["spouse", "Pareja"], ["parent", "Padre/madre"], ["child", "Hijo/a"], ["other", "Otro"]],
  health: {
    blood_pressure: "Presión alta",
    diabetes: "Diabetes",
    cholesterol: "Colesterol alto",
    allergy: "Alergia",
    low_sugar: "Menos azúcar",
    low_salt: "Menos sal",
    lactose: "Sensibilidad a lactosa",
    child_growth: "Crecimiento infantil",
  },
};

profileStructuredLanguageCopy.fr = {
  ...profileStructuredLanguageCopy.en,
  mainTitle: "Acheteur principal",
  mainName: "Nom ou surnom",
  mainAge: "Âge",
  mainGender: "Genre",
  mainHealth: "Notes santé",
  addTitle: "Ajouter un membre",
  memberName: "Nom",
  memberAge: "Âge",
  memberRelation: "Relation",
  memberGender: "Genre",
  memberHealth: "Points santé",
  memberNote: "Autre note",
  addMember: "Ajouter",
  memberList: "Membres ajoutés",
  noMembers: "Aucun membre ajouté.",
  remove: "Retirer",
  mainShopperPrefix: "Acheteur principal",
  memberPrefix: "Membre",
  genders: [["", "Ne pas préciser"], ["female", "Femme"], ["male", "Homme"], ["other", "Autre"]],
  relations: [["", "Choisir"], ["self", "Moi"], ["spouse", "Conjoint"], ["parent", "Parent"], ["child", "Enfant"], ["other", "Autre"]],
  health: {
    blood_pressure: "Hypertension",
    diabetes: "Diabète",
    cholesterol: "Cholestérol élevé",
    allergy: "Allergie",
    low_sugar: "Moins de sucre",
    low_salt: "Moins de sel",
    lactose: "Sensible au lactose",
    child_growth: "Croissance enfant",
  },
};

profileStructuredLanguageCopy.ko = {
  ...profileStructuredLanguageCopy.en,
  mainTitle: "주 구매자",
  mainName: "이름 또는 별명",
  mainAge: "나이",
  mainGender: "성별",
  mainHealth: "건강 메모",
  addTitle: "가족 구성원 추가",
  memberName: "이름",
  memberAge: "나이",
  memberRelation: "관계",
  memberGender: "성별",
  memberHealth: "건강 관심사",
  memberNote: "기타 메모",
  addMember: "구성원 추가",
  memberList: "추가된 가족",
  noMembers: "아직 추가된 가족이 없습니다.",
  remove: "삭제",
  mainShopperPrefix: "주 구매자",
  memberPrefix: "가족 구성원",
  genders: [["", "선택 안 함"], ["female", "여성"], ["male", "남성"], ["other", "기타"]],
  relations: [["", "선택"], ["self", "본인"], ["spouse", "배우자"], ["parent", "부모"], ["child", "자녀"], ["other", "기타"]],
  health: {
    blood_pressure: "고혈압",
    diabetes: "당뇨",
    cholesterol: "고지혈증",
    allergy: "알레르기",
    low_sugar: "당 줄이기",
    low_salt: "소금 줄이기",
    lactose: "유당 민감",
    child_growth: "아이 성장",
  },
};

profileStructuredLanguageCopy.ja = {
  ...profileStructuredLanguageCopy.en,
  mainTitle: "主な買い物担当",
  mainName: "名前または呼び名",
  mainAge: "年齢",
  mainGender: "性別",
  mainHealth: "健康メモ",
  addTitle: "家族を追加",
  memberName: "名前",
  memberAge: "年齢",
  memberRelation: "関係",
  memberGender: "性別",
  memberHealth: "健康上の注意",
  memberNote: "その他メモ",
  addMember: "追加",
  memberList: "追加済み家族",
  noMembers: "まだ家族が追加されていません。",
  remove: "削除",
  mainShopperPrefix: "主な買い物担当",
  memberPrefix: "家族",
  genders: [["", "未回答"], ["female", "女性"], ["male", "男性"], ["other", "その他"]],
  relations: [["", "選択"], ["self", "本人"], ["spouse", "配偶者"], ["parent", "親"], ["child", "子ども"], ["other", "その他"]],
  health: {
    blood_pressure: "高血圧",
    diabetes: "糖尿病",
    cholesterol: "脂質高め",
    allergy: "アレルギー",
    low_sugar: "砂糖控えめ",
    low_salt: "塩分控えめ",
    lactose: "乳糖に敏感",
    child_growth: "子どもの成長",
  },
};

profileStructuredLanguageCopy.vi = {
  ...profileStructuredLanguageCopy.en,
  mainTitle: "Người mua chính",
  mainName: "Tên hoặc biệt danh",
  mainAge: "Tuổi",
  mainGender: "Giới tính",
  mainHealth: "Ghi chú sức khỏe",
  addTitle: "Thêm thành viên",
  memberName: "Tên",
  memberAge: "Tuổi",
  memberRelation: "Quan hệ",
  memberGender: "Giới tính",
  memberHealth: "Sức khỏe cần lưu ý",
  memberNote: "Ghi chú khác",
  addMember: "Thêm thành viên",
  memberList: "Thành viên đã thêm",
  noMembers: "Chưa thêm thành viên.",
  remove: "Xóa",
  mainShopperPrefix: "Người mua chính",
  memberPrefix: "Thành viên",
  genders: [["", "Không muốn nói"], ["female", "Nữ"], ["male", "Nam"], ["other", "Khác"]],
  relations: [["", "Chọn"], ["self", "Bản thân"], ["spouse", "Vợ/chồng"], ["parent", "Cha/mẹ"], ["child", "Con"], ["other", "Khác"]],
  health: {
    blood_pressure: "Huyết áp cao",
    diabetes: "Tiểu đường",
    cholesterol: "Mỡ máu cao",
    allergy: "Dị ứng",
    low_sugar: "Ít đường",
    low_salt: "Ít muối",
    lactose: "Nhạy lactose",
    child_growth: "Trẻ đang lớn",
  },
};

profileStructuredLanguageCopy.hi = {
  ...profileStructuredLanguageCopy.en,
  mainTitle: "मुख्य खरीदार",
  mainName: "नाम या निकनेम",
  mainAge: "उम्र",
  mainGender: "लिंग",
  mainHealth: "Health notes",
  addTitle: "परिवार सदस्य जोड़ें",
  memberName: "नाम",
  memberAge: "उम्र",
  memberRelation: "रिश्ता",
  memberGender: "लिंग",
  memberHealth: "Health concerns",
  memberNote: "अन्य नोट",
  addMember: "सदस्य जोड़ें",
  memberList: "जोड़े गए सदस्य",
  noMembers: "अभी कोई सदस्य नहीं जोड़ा गया।",
  remove: "हटाएं",
  mainShopperPrefix: "मुख्य खरीदार",
  memberPrefix: "परिवार सदस्य",
  genders: [["", "नहीं बताना"], ["female", "महिला"], ["male", "पुरुष"], ["other", "अन्य"]],
  relations: [["", "चुनें"], ["self", "स्वयं"], ["spouse", "जीवनसाथी"], ["parent", "माता-पिता"], ["child", "बच्चा"], ["other", "अन्य"]],
  health: {
    blood_pressure: "High blood pressure",
    diabetes: "Diabetes",
    cholesterol: "High cholesterol",
    allergy: "Allergy",
    low_sugar: "कम चीनी",
    low_salt: "कम नमक",
    lactose: "Lactose sensitive",
    child_growth: "बच्चे की growth",
  },
};

pickButton?.addEventListener("click", () => imageInput.click());
albumButton?.addEventListener("click", () => imageInput.click());
replaceButton.addEventListener("click", () => imageInput.click());
languageSelect.addEventListener("change", async () => {
  await changeLanguage(languageSelect.value, { localizeResult: true });
});
setupLanguageSelect.addEventListener("change", async () => {
  await changeLanguage(setupLanguageSelect.value, { localizeResult: false });
});
profileCurrencySelect?.addEventListener("change", () => {
  familyProfileState.preferred_currency = normalizeCurrency(profileCurrencySelect.value || defaultFamiliarCurrency());
  persistFamilyProfileState();
  renderFamilyRecords();
  if (latestResult?.receipt && receiptState && !receiptState.hidden) {
    renderReceiptResult(latestResult);
  }
});
profileOpenButton.addEventListener("click", () => openProfileDialog());
homeFamilySetupButton?.addEventListener("click", () => openProfileDialog());
profileDialogCloseButton.addEventListener("click", () => closeProfileDialog());
profileMainHealthChips?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-main-health]");
  if (!button) return;
  button.classList.toggle("active");
  syncStructuredProfileStateFromInputs();
});
profileMemberHealthChips?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-member-health]");
  if (!button) return;
  button.classList.toggle("active");
});
profileAddMemberButton?.addEventListener("click", () => addStructuredFamilyMember());
profileMemberList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-member]");
  if (!button) return;
  const index = Number(button.dataset.removeMember);
  if (!Number.isInteger(index)) return;
  familyProfileState.members = normalizedFamilyMembers().filter((_, memberIndex) => memberIndex !== index);
  profileMembersInput.value = buildProfileMembersText();
  persistFamilyProfileState();
  renderStructuredMemberList();
});
profileSkipButton.addEventListener("click", () => {
  syncVisibleFamilyInputs();
  localStorage.setItem(profileSetupCompletedKey, "true");
  syncFamilyProfileToBackend();
  closeProfileDialog();
  sendClientEvent("profile_setup_skipped", { output_language: appLanguage });
});
profileDialogSaveButton.addEventListener("click", async () => {
  await saveFamilyProfile(buildProfileMembersText());
  closeProfileDialog();
});
profileSaveButton.addEventListener("click", async () => {
  await saveFamilyProfile(familyProfile.value);
});
copyInviteLinkButton?.addEventListener("click", async () => {
  const code = currentFamilyCode();
  if (!code) {
    setJoinFamilyStatus(familyJoinCopy().noCode, "warning");
    return;
  }
  await copyText(buildFamilyInviteUrl(code));
  setJoinFamilyStatus(familyJoinCopy().copied, "success");
});
copyFamilyCodeButton?.addEventListener("click", async () => {
  const code = currentFamilyCode();
  if (!code) {
    setJoinFamilyStatus(familyJoinCopy().noCode, "warning");
    return;
  }
  await copyText(code);
  setJoinFamilyStatus(familyJoinCopy().copied, "success");
});
joinFamilyButton?.addEventListener("click", async () => {
  await joinFamilyByCode(joinFamilyCodeInput?.value || "");
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
    imageInput.click();
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

recentReceipts.addEventListener("click", (event) => {
  const card = event.target.closest("[data-record-id]");
  if (!card) return;
  openFamilyRecord(card.dataset.recordType, card.dataset.recordId);
});

recentReceipts.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-record-id]");
  if (!card) return;
  event.preventDefault();
  openFamilyRecord(card.dataset.recordType, card.dataset.recordId);
});

recentProducts.addEventListener("click", (event) => {
  const card = event.target.closest("[data-record-id]");
  if (!card) return;
  openFamilyRecord(card.dataset.recordType, card.dataset.recordId);
});

recentProducts.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-record-id]");
  if (!card) return;
  event.preventDefault();
  openFamilyRecord(card.dataset.recordType, card.dataset.recordId);
});

homeRecentList?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-record-id]");
  if (!card) return;
  openFamilyRecord(card.dataset.recordType, card.dataset.recordId);
});

homeRecentList?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-record-id]");
  if (!card) return;
  event.preventDefault();
  openFamilyRecord(card.dataset.recordType, card.dataset.recordId);
});

clearRecordsButton.addEventListener("click", async () => {
  familyRecords = emptyFamilyRecords();
  saveFamilyRecords();
  renderFamilyRecords();
  sendClientEvent("clear_family_records");
  try {
    await fetch(`/api/records/${encodeURIComponent(clientUserId)}`, { method: "DELETE" });
  } catch (error) {
    // Local clear should still feel instant.
  }
});

[feedbackHelpful, feedbackInaccurate, feedbackConfusing].forEach((button) => {
  button.addEventListener("click", () => submitFeedback(button.dataset.feedback || "unknown"));
});

copyButton.addEventListener("click", async () => {
  if (!latestResult) return;
  await shareResultWithFamily(copyButton, ui().shareFamily, "share_family", {
    mode: latestResult.receipt ? "receipt" : "product",
    output_language: appLanguage,
  });
});

productShareButton?.addEventListener("click", async () => {
  if (!latestResult) return;
  await shareResultWithFamily(productShareButton, growthCopy().productShareButton, "share_product_panel", {
    output_language: appLanguage,
    item_name: latestResult?.judgement?.item_name || "",
  });
});

receiptShareButton?.addEventListener("click", async () => {
  if (!latestResult) return;
  await copyText(buildShareText(latestResult));
  sendClientEvent("share_receipt_panel", { output_language: appLanguage, store_name: latestResult?.receipt?.store_name || "" });
  receiptShareButton.textContent = ui().copied;
  setTimeout(() => (receiptShareButton.textContent = growthCopy().receiptShareButton), 1200);
});

downloadButton.addEventListener("click", async () => {
  if (!latestCardSvg) return;
  sendClientEvent("save_card", { output_language: appLanguage, item_name: latestResult?.judgement?.item_name || "" });
  const blob = await renderLatestCardPngBlob();
  await saveImageBlob(blob, cardImageFilename());
  downloadButton.textContent = actionStatus("imageReady");
  setTimeout(() => (downloadButton.textContent = ui().saveCard), 1200);
});

async function prepareImageForUpload(file) {
  const maxEdge = scanMode === "receipt" ? receiptUploadMaxEdge : productUploadMaxEdge;
  const quality = scanMode === "receipt" ? receiptUploadQuality : productUploadQuality;

  if (file.size <= 900_000 && file.type === "image/jpeg") {
    return file;
  }

  try {
    const compressed = await compressImageFile(file, maxEdge, quality);
    if (!compressed || compressed.size >= file.size) {
      return file;
    }
    return compressed;
  } catch (error) {
    return file;
  }
}

async function createCardImageDataUrl(file) {
  try {
    const image = await loadImageForCanvas(file);
    const sourceWidth = image.naturalWidth || image.width;
    const sourceHeight = image.naturalHeight || image.height;
    if (!sourceWidth || !sourceHeight) return "";
    const maxEdge = 640;
    const scale = Math.min(1, maxEdge / Math.max(sourceWidth, sourceHeight));
    const targetWidth = Math.max(1, Math.round(sourceWidth * scale));
    const targetHeight = Math.max(1, Math.round(sourceHeight * scale));
    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return "";
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, targetWidth, targetHeight);
    context.drawImage(image, 0, 0, targetWidth, targetHeight);
    return canvas.toDataURL("image/jpeg", 0.78);
  } catch (error) {
    return "";
  }
}

function loadImageForCanvas(file) {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("image load failed"));
    };
    image.src = objectUrl;
  });
}

async function compressImageFile(file, maxEdge, quality) {
  const image = await loadImageForCanvas(file);
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  if (!sourceWidth || !sourceHeight) {
    return file;
  }

  const scale = Math.min(1, maxEdge / Math.max(sourceWidth, sourceHeight));
  const targetWidth = Math.max(1, Math.round(sourceWidth * scale));
  const targetHeight = Math.max(1, Math.round(sourceHeight * scale));
  if (scale >= 0.98 && file.type === "image/jpeg" && file.size <= 1_200_000) {
    return file;
  }

  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) {
    return file;
  }
  context.drawImage(image, 0, 0, targetWidth, targetHeight);

  const blob = await new Promise((resolve, reject) => {
    canvas.toBlob((result) => {
      if (result) resolve(result);
      else reject(new Error("image compression failed"));
    }, "image/jpeg", quality);
  });

  const baseName = (file.name || "famlens-photo").replace(/\.[a-z0-9]+$/i, "");
  return new File([blob], `${baseName}.jpg`, { type: "image/jpeg", lastModified: Date.now() });
}

async function analyzeFile(file) {
  if (!file.type.startsWith("image/")) {
    showError(scanMode === "receipt" ? ui().receiptFileError : ui().productFileError);
    return;
  }

  previewImage.src = URL.createObjectURL(file);
  previewWrap.hidden = false;
  currentCardImageDataUrl = scanMode === "product" ? await createCardImageDataUrl(file) : "";
  dropZone.hidden = true;
  chatHistory = [];
  renderChatMessages();
  showLoading();
  setServiceStatus("analyzing");

  const uploadFile = await prepareImageForUpload(file);
  sendClientEvent("client_image_prepared", {
    mode: scanMode,
    original_bytes: file.size,
    upload_bytes: uploadFile.size,
    compressed: uploadFile !== file,
  });

  const form = new FormData();
  form.append("image", uploadFile);
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

function setHomeResultPreviewVisible(visible) {
  if (homeResultPreview) homeResultPreview.hidden = !visible;
}

function renderResult(data) {
  const cardImageDataUrl = data.card_image_data_url || currentCardImageDataUrl || "";
  latestResult = {
    ...data,
    card_image_data_url: cardImageDataUrl,
  };
  latestCardSvg = data.card_svg || "";
  if (resultPanel) resultPanel.hidden = false;
  setHomeResultPreviewVisible(false);

  const judgement = latestResult.judgement || {};
  verdictBadge.textContent = judgement.verdict || "OK";
  itemName.textContent = judgement.item_name || "Product";
  subtitle.textContent = judgement.subtitle || "";
  voiceSummary.textContent = latestResult.voice_summary || judgement.voice_summary || "";

  cardStage.innerHTML = latestCardSvg;
  cardStage.hidden = true;
  downloadButton.disabled = !latestCardSvg;
  detailList.innerHTML = "";
  const visibleDetails = config().details.filter(([, key]) => visibleProductDetailKeys.has(key));
  visibleDetails.forEach(([label, key]) => {
    const value = judgement[key];
    if (!value) return;
    const item = document.createElement("div");
    item.className = "detail-item";
    item.innerHTML = `<span>${escapeHtml(label)}</span><p>${escapeHtml(value)}</p>`;
    detailList.appendChild(item);
  });

  applyGrowthLanguage();
  if (productShareCopy) {
    const name = judgement.item_name || "this product";
    productShareCopy.textContent = `${growthCopy().productShareTemplate} ${name}: ${judgement.subtitle || judgement.what_it_is || ""}`.trim();
  }
  if (productCommercePanel) {
    productCommercePanel.hidden = !data.commerce?.enabled;
  }

  emptyState.hidden = true;
  loadingState.hidden = true;
  errorState.hidden = true;
  resultState.hidden = false;
  receiptState.hidden = true;
  feedbackPanel.hidden = true;
  feedbackThanks.hidden = true;
}

function buildJudgementFromProductRecord(record) {
  return {
    item_name: record.itemName || record.item_name || recordCopy().unknownProduct,
    category: record.category || "",
    verdict: record.verdict || "",
    subtitle: record.subtitle || "",
    warning: record.warning || "",
    what_it_is: record.what_it_is || record.whatItIs || "",
    how_to_use: record.how_to_use || record.howToUse || "",
    benefit: record.benefit || "",
    storage: record.storage || "",
    voice_summary: record.voice_summary || record.voiceSummary || "",
  };
}

function openProductRecord(recordId) {
  const record = familyRecords.products.find((item) => item.id === recordId);
  if (!record) return;
  const judgement = buildJudgementFromProductRecord(record);
  renderResult({
    judgement,
    voice_summary: judgement.voice_summary,
    card_svg: record.card_svg || "",
    card_image_data_url: record.thumbnail || "",
    record,
  });
  if (recordsDialog?.open) recordsDialog.close();
  resultPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
  sendClientEvent("open_product_record", { category: record.category || "", output_language: appLanguage });
}

function openReceiptRecord(recordId) {
  const record = familyRecords.receipts.find((item) => item.id === recordId);
  if (!record) return;
  renderReceiptResult({
    receipt: record,
    record,
    voice_summary: record.voice_summary || "",
  });
  if (recordsDialog?.open) recordsDialog.close();
  resultPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
  sendClientEvent("open_receipt_record", { output_language: appLanguage });
}

function openFamilyRecord(type, recordId) {
  if (type === "product") {
    openProductRecord(recordId);
    return;
  }
  if (type === "receipt") {
    openReceiptRecord(recordId);
  }
}

function renderReceiptResult(data) {
  latestResult = data;
  latestCardSvg = "";
  if (resultPanel) resultPanel.hidden = false;
  setHomeResultPreviewVisible(false);
  const receipt = data.receipt || {};
  const currency = receipt.currency || "CAD";

  receiptTotal.textContent = formatAmount(receipt.total_amount, currency);
  if (receiptConvertedTotal) {
    receiptConvertedTotal.textContent = formatConvertedAmount(receipt.total_amount, currency);
    receiptConvertedTotal.hidden = !receiptConvertedTotal.textContent;
  }
  receiptStore.textContent = receipt.store_name || ui().unknownStore;
  receiptDate.textContent = receipt.purchase_date || ui().unknownDate;
  receiptCount.textContent = formatItemCount(receipt.item_count);
  receiptTax.textContent = formatAmount(receipt.tax_amount, currency);
  receiptVoiceSummary.textContent = data.voice_summary || receipt.voice_summary || "";
  nutritionSignal.textContent = receipt.nutrition_signal || "";
  spendingSignal.textContent = receipt.spending_signal || "";
  familyReportNote.textContent = receipt.family_report_note || "";
  applyGrowthLanguage();
  if (receiptShareCopy) {
    const store = receipt.store_name || ui().unknownStore;
    const total = formatDualAmount(receipt.total_amount, currency);
    receiptShareCopy.textContent = `${growthCopy().receiptShareTemplate} ${store}: ${total}.`;
  }
  if (receiptCommercePanel) {
    receiptCommercePanel.hidden = !data.commerce?.enabled;
  }

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
  feedbackPanel.hidden = true;
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
  const baseContext = {
    type: latestResult?.receipt ? "receipt" : latestResult?.judgement ? "product" : scanMode,
    output_language: appLanguage,
    family_profile: profileContextText(),
    family_records: buildFamilyRecordsContext(),
    monthly_report: familyRecords.monthlyReport || null,
  };
  if (!latestResult) {
    return baseContext;
  }
  if (latestResult.receipt) {
    return {
      ...baseContext,
      receipt: latestResult.receipt,
    };
  }
  return {
    ...baseContext,
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
      monthlyReport: data.monthlyReport && typeof data.monthlyReport === "object" ? data.monthlyReport : null,
    };
  } catch (error) {
    return emptyFamilyRecords();
  }
}

function emptyFamilyRecords() {
  return { products: [], receipts: [], monthlyReport: null };
}

function saveFamilyRecords() {
  localStorage.setItem(recordsStorageKey, JSON.stringify(familyRecords));
}

function addProductRecord(data) {
  const judgement = data?.judgement || {};
  const itemName = judgement.item_name || recordCopy().unknownProduct;
  const serverRecord = normalizeProductRecord(data?.record);
  const record = normalizeProductRecord({
    ...(serverRecord || {}),
    id: serverRecord?.id || createRecordId("product", itemName),
    created_at: serverRecord?.created_at || new Date().toISOString(),
    output_language: serverRecord?.output_language || appLanguage,
    itemName,
    item_name: itemName,
    category: judgement.category || serverRecord?.category || "",
    verdict: judgement.verdict || serverRecord?.verdict || "",
    subtitle: judgement.subtitle || serverRecord?.subtitle || "",
    warning: judgement.warning || serverRecord?.warning || "",
    what_it_is: judgement.what_it_is || serverRecord?.what_it_is || "",
    how_to_use: judgement.how_to_use || serverRecord?.how_to_use || "",
    benefit: judgement.benefit || serverRecord?.benefit || "",
    storage: judgement.storage || serverRecord?.storage || "",
    voice_summary: judgement.voice_summary || data?.voice_summary || serverRecord?.voice_summary || "",
  });
  record.thumbnail = data.card_image_data_url || currentCardImageDataUrl || findExistingProductThumbnail(record.id) || "";
  if (data?.monthly_report) familyRecords.monthlyReport = data.monthly_report;
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
  const serverRecord = normalizeReceiptRecord(data?.record);
  const record = serverRecord || {
    id: createRecordId("receipt", `${receipt.store_name || ""}-${receipt.purchase_date || ""}-${receipt.total_amount || ""}`),
    created_at: new Date().toISOString(),
    storeName: receipt.store_name || recordCopy().unknownStore,
    store_name: receipt.store_name || recordCopy().unknownStore,
    purchaseDate: receipt.purchase_date || "",
    purchase_date: receipt.purchase_date || "",
    currency: receipt.currency || "CAD",
    totalAmount: receipt.total_amount ?? null,
    total_amount: receipt.total_amount ?? null,
    itemCount: receipt.item_count ?? null,
    item_count: receipt.item_count ?? null,
    nutritionSignal: receipt.nutrition_signal || "",
    nutrition_signal: receipt.nutrition_signal || "",
    spendingSignal: receipt.spending_signal || "",
    spending_signal: receipt.spending_signal || "",
    family_report_note: receipt.family_report_note || "",
    categories: Array.isArray(receipt.category_summary) ? receipt.category_summary.slice(0, 6) : [],
    category_summary: Array.isArray(receipt.category_summary) ? receipt.category_summary.slice(0, 6) : [],
    items: Array.isArray(receipt.items) ? receipt.items.slice(0, 12) : [],
  };
  if (data?.monthly_report) familyRecords.monthlyReport = data.monthly_report;
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

function normalizeProductRecord(record) {
  if (!record || typeof record !== "object") return null;
  const itemName = record.item_name || record.itemName || recordCopy().unknownProduct;
  return {
    ...record,
    id: record.id || createRecordId("product", itemName),
    created_at: record.created_at || record.createdAt || new Date().toISOString(),
    itemName,
    item_name: itemName,
    category: record.category || "",
    verdict: record.verdict || "",
    subtitle: record.subtitle || "",
    warning: record.warning || "",
    what_it_is: record.what_it_is || record.whatItIs || "",
    how_to_use: record.how_to_use || record.howToUse || "",
    benefit: record.benefit || "",
    storage: record.storage || "",
    voice_summary: record.voice_summary || record.voiceSummary || "",
  };
}

function mergeProductRecord(remoteRecord, localRecord) {
  if (!localRecord) return remoteRecord;
  return normalizeProductRecord({
    ...remoteRecord,
    thumbnail: localRecord.thumbnail || remoteRecord.thumbnail || "",
    what_it_is: remoteRecord.what_it_is || localRecord.what_it_is || localRecord.whatItIs || "",
    how_to_use: remoteRecord.how_to_use || localRecord.how_to_use || localRecord.howToUse || "",
    benefit: remoteRecord.benefit || localRecord.benefit || "",
    storage: remoteRecord.storage || localRecord.storage || "",
    voice_summary: remoteRecord.voice_summary || localRecord.voice_summary || localRecord.voiceSummary || "",
  });
}

function normalizeReceiptRecord(record) {
  if (!record || typeof record !== "object") return null;
  const storeName = record.store_name || record.storeName || recordCopy().unknownStore;
  return {
    ...record,
    id: record.id || createRecordId("receipt", `${storeName}-${record.purchase_date || record.purchaseDate || ""}-${record.total_amount || record.totalAmount || ""}`),
    created_at: record.created_at || record.createdAt || new Date().toISOString(),
    storeName,
    store_name: storeName,
    purchaseDate: record.purchase_date || record.purchaseDate || "",
    purchase_date: record.purchase_date || record.purchaseDate || "",
    totalAmount: record.total_amount ?? record.totalAmount ?? null,
    total_amount: record.total_amount ?? record.totalAmount ?? null,
    itemCount: record.item_count ?? record.itemCount ?? null,
    item_count: record.item_count ?? record.itemCount ?? null,
    nutritionSignal: record.nutrition_signal || record.nutritionSignal || "",
    nutrition_signal: record.nutrition_signal || record.nutritionSignal || "",
    spendingSignal: record.spending_signal || record.spendingSignal || "",
    spending_signal: record.spending_signal || record.spendingSignal || "",
    categories: Array.isArray(record.category_summary) ? record.category_summary : Array.isArray(record.categories) ? record.categories : [],
    category_summary: Array.isArray(record.category_summary) ? record.category_summary : Array.isArray(record.categories) ? record.categories : [],
    items: Array.isArray(record.items) ? record.items : [],
  };
}

function findExistingProductThumbnail(id) {
  const existing = familyRecords.products.find((record) => record.id === id);
  return existing?.thumbnail || "";
}

function buildFamilyRecordsContext() {
  const recentReceipts = familyRecords.receipts.slice(0, 8).map((record) => ({
    store_name: record.store_name || record.storeName || "",
    purchase_date: record.purchase_date || record.purchaseDate || "",
    total_amount: record.total_amount ?? record.totalAmount ?? null,
    currency: record.currency || "CAD",
    item_count: record.item_count ?? record.itemCount ?? null,
    nutrition_signal: record.nutrition_signal || record.nutritionSignal || "",
    spending_signal: record.spending_signal || record.spendingSignal || "",
    category_summary: Array.isArray(record.category_summary) ? record.category_summary.slice(0, 5) : [],
  }));
  const recentProducts = familyRecords.products.slice(0, 8).map((record) => ({
    item_name: record.item_name || record.itemName || "",
    category: record.category || "",
    verdict: record.verdict || "",
    warning: record.warning || "",
  }));
  return {
    receipt_count: familyRecords.receipts.length,
    product_count: familyRecords.products.length,
    recent_receipts: recentReceipts,
    recent_products: recentProducts,
  };
}

function renderFamilyRecords() {
  applyRecordsLanguage();
  const currentMonth = new Date().toISOString().slice(0, 7);
  const monthReceipts = familyRecords.receipts.filter((record) => String(record.created_at || record.createdAt || "").startsWith(currentMonth));
  const monthProducts = familyRecords.products.filter((record) => String(record.created_at || record.createdAt || "").startsWith(currentMonth));
  const spend = monthReceipts.reduce((sum, record) => sum + safeNumber(record.totalAmount ?? record.total_amount), 0);
  const serverReport = familyRecords.monthlyReport;

  const reportCurrency = serverReport?.currency || monthReceipts[0]?.currency || "CAD";
  const reportSpend = serverReport?.total_spend ?? spend;
  const convertedSpend = formatConvertedAmount(reportSpend, reportCurrency);
  monthlySpend.innerHTML = `${escapeHtml(formatAmount(reportSpend, reportCurrency))}${convertedSpend ? `<small>${escapeHtml(convertedSpend)}</small>` : ""}`;
  monthlyReceiptCount.textContent = formatRecordCount(serverReport?.receipt_count ?? monthReceipts.length, recordCopy().receiptUnit);
  monthlyProductCount.textContent = formatRecordCount(serverReport?.product_count ?? monthProducts.length, recordCopy().productUnit);

  renderMonthlyInsight(monthReceipts);
  renderPriceMemory();
  renderReceiptRecords();
  renderProductRecords();
  renderHomeRecordsSummary(monthReceipts, monthProducts, spend, serverReport);
}

function renderHomeRecordsSummary(monthReceipts, monthProducts, spend, serverReport) {
  const copy = homeCopy();
  const receiptCount = serverReport?.receipt_count ?? monthReceipts.length;
  const progressCount = Math.min(8, Math.max(0, Number(receiptCount) || 0));
  if (homeReceiptProgressCount) {
    homeReceiptProgressCount.textContent = copy.receiptProgress.replace("{count}", progressCount);
  }
  if (homeReceiptProgressFill) {
    homeReceiptProgressFill.style.width = `${Math.min(100, (progressCount / 8) * 100)}%`;
  }
  renderHomeRecentList();
}

function renderHomeRecentList() {
  if (!homeRecentList) return;
  const copy = homeCopy();
  const receipts = familyRecords.receipts.slice(0, 4).map((record) => ({
    id: record.id,
    recordType: "receipt",
    type: copy.receiptShort,
    title: record.storeName || record.store_name || recordCopy().unknownStore,
    detail: [
      formatRecordDate(record.purchaseDate || record.purchase_date || record.created_at || record.createdAt),
      formatDualAmount(record.totalAmount ?? record.total_amount, record.currency || "CAD"),
    ].filter(Boolean).join(" · "),
    createdAt: record.created_at || record.createdAt || "",
    thumbnail: "",
  }));
  const products = familyRecords.products.slice(0, 4).map((record) => ({
    id: record.id,
    recordType: "product",
    type: copy.productShort,
    title: record.itemName || record.item_name || recordCopy().unknownProduct,
    detail: [record.verdict || "", record.category || record.subtitle || ""].filter(Boolean).join(" · "),
    createdAt: record.created_at || record.createdAt || "",
    thumbnail: record.thumbnail || "",
  }));
  const items = [...receipts, ...products]
    .sort((left, right) => new Date(right.createdAt || 0) - new Date(left.createdAt || 0))
    .slice(0, 3);

  if (!items.length) {
    homeRecentList.innerHTML = `<div class="record-empty">${escapeHtml(copy.noRecent)}</div>`;
    return;
  }

  homeRecentList.innerHTML = items.map((item) => {
    const thumb = item.thumbnail
      ? `<img src="${escapeHtml(item.thumbnail)}" alt="" />`
      : `<span>${escapeHtml(item.type.slice(0, 1))}</span>`;
    return `
      <article class="home-recent-item" role="button" tabindex="0" data-record-type="${escapeHtml(item.recordType)}" data-record-id="${escapeHtml(item.id)}">
        <div class="home-recent-thumb">${thumb}</div>
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.detail || item.type)}</span>
        </div>
      </article>
    `;
  }).join("");
}

function applyRecordsLanguage() {
  updateRecordsOpenButton();
  recordsCloseButton.setAttribute("aria-label", recordCopy().close);
  recordsKicker.textContent = recordCopy().kicker;
  recordsTitle.textContent = recordCopy().title;
  clearRecordsButton.textContent = recordCopy().clear;
  monthlySpendLabel.textContent = recordCopy().spend;
  monthlyReceiptLabel.textContent = recordCopy().receipts;
  monthlyProductLabel.textContent = recordCopy().products;
  monthlyInsightTitle.textContent = recordCopy().monthlyInsight;
  if (priceMemoryTitle) priceMemoryTitle.textContent = recordText("priceMemoryTitle");
  if (priceMemoryCopy) priceMemoryCopy.textContent = recordText("priceMemoryCopy");
  if (frequentItemsTitle) frequentItemsTitle.textContent = recordText("frequentItemsTitle");
  if (frequentItemsCopy) frequentItemsCopy.textContent = recordText("frequentItemsCopy");
  recentReceiptsTitle.textContent = recordCopy().recentReceipts;
  recentProductsTitle.textContent = recordCopy().recentProducts;
}

function updateRecordsOpenButton() {
  const count = familyRecords.products.length + familyRecords.receipts.length;
  recordsOpenButton.textContent = count ? `${recordCopy().open} ${count}` : recordCopy().open;
}

function renderMonthlyInsight(monthReceipts) {
  const report = familyRecords.monthlyReport || {};
  const topCategories = Array.isArray(report.top_categories) ? report.top_categories.slice(0, 4) : deriveTopCategories(monthReceipts);
  const notes = [
    ...(Array.isArray(report.nutrition_signals) ? report.nutrition_signals : []),
    ...(Array.isArray(report.spending_signals) ? report.spending_signals : []),
    ...(Array.isArray(report.family_report_notes) ? report.family_report_notes : []),
  ].filter(Boolean);
  const firstCategory = topCategories[0]?.category;
  const firstAmount = topCategories[0]?.estimated_amount;
  const categoryLine = firstCategory
    ? `${recordCopy().topCategoryPrefix}: ${firstCategory}${firstAmount ? ` ${formatDualAmount(firstAmount, report.currency || monthReceipts[0]?.currency || "CAD")}` : ""}.`
    : "";
  monthlyInsightText.textContent = [categoryLine, notes[0] || ""].filter(Boolean).join(" ") || recordCopy().insightEmpty;

  monthlyCategoryList.innerHTML = "";
  topCategories.forEach((item) => {
    const row = document.createElement("div");
    row.className = "monthly-category";
    row.innerHTML = `
      <span>${escapeHtml(item.category || "")}</span>
      <span>${escapeHtml(formatDualAmount(item.estimated_amount, report.currency || monthReceipts[0]?.currency || "CAD"))}</span>
    `;
    monthlyCategoryList.appendChild(row);
  });
  if (!monthlyCategoryList.children.length) {
    monthlyCategoryList.innerHTML = `<div class="record-empty">${escapeHtml(recordCopy().insightEmpty)}</div>`;
  }
}

function renderPriceMemory() {
  if (!priceMemoryList || !frequentItemsList) return;
  const report = familyRecords.monthlyReport || {};
  const priceWatch = Array.isArray(report.price_watch) ? report.price_watch.slice(0, 5) : [];
  const frequentItems = Array.isArray(report.frequent_items) ? report.frequent_items.slice(0, 6) : [];

  if (!priceWatch.length) {
    priceMemoryList.innerHTML = `<div class="record-empty">${escapeHtml(recordText("noPriceMemory"))}</div>`;
  } else {
    priceMemoryList.innerHTML = priceWatch.map((item) => {
      const latest = safeNumber(item.latest_amount);
      const previous = safeNumber(item.previous_amount);
      const currency = item.currency || report.currency || "CAD";
      const diff = latest - previous;
      const directionClass = diff > 0 ? "up" : "down";
      const direction = diff > 0 ? "+" : "";
      const percent = Number(item.percent_change);
      const percentText = Number.isFinite(percent) ? `${direction}${percent.toFixed(0)}%` : "";
      return `
        <article class="price-memory-item">
          <div class="price-memory-main">
            <strong>${escapeHtml(item.item_name || recordCopy().unknownProduct)}</strong>
            <span>${escapeHtml([item.store_name || "", item.category || ""].filter(Boolean).join(" · "))}</span>
          </div>
          <div class="price-memory-side">
            <span>${escapeHtml(recordText("lastPrice"))}: ${escapeHtml(formatDualAmount(latest, currency))}</span>
            <span>${escapeHtml(recordText("previousPrice"))}: ${escapeHtml(formatAmount(previous, currency))}</span>
            ${percentText ? `<b class="price-memory-delta ${directionClass}">${escapeHtml(percentText)}</b>` : ""}
          </div>
        </article>
      `;
    }).join("");
  }

  if (!frequentItems.length) {
    frequentItemsList.innerHTML = `<div class="record-empty">${escapeHtml(recordText("noFrequentItems"))}</div>`;
    return;
  }

  frequentItemsList.innerHTML = frequentItems.map((item) => {
    const currency = item.currency || report.currency || "CAD";
    const min = safeNumber(item.min_amount);
    const max = safeNumber(item.max_amount);
    const usual = min && max && min !== max
      ? `${formatAmount(min, currency)}-${formatAmount(max, currency)}`
      : formatDualAmount(item.last_amount || item.average_amount || min || max, currency);
    return `
      <article class="price-memory-item frequent">
        <div class="price-memory-main">
          <strong>${escapeHtml(item.item_name || recordCopy().unknownProduct)}</strong>
          <span>${escapeHtml([item.category || "", item.store_name || ""].filter(Boolean).join(" · "))}</span>
        </div>
        <div class="price-memory-side">
          <span>${escapeHtml(recordText("usualPrice"))}: ${escapeHtml(usual)}</span>
          <b>${escapeHtml(`${item.count || 0} ${recordText("boughtTimes")}`)}</b>
        </div>
      </article>
    `;
  }).join("");
}

function deriveTopCategories(receipts) {
  const totals = new Map();
  receipts.forEach((record) => {
    const categories = Array.isArray(record.category_summary)
      ? record.category_summary
      : Array.isArray(record.categories)
        ? record.categories
        : [];
    categories.forEach((item) => {
      const category = item.category || "";
      if (!category) return;
      totals.set(category, (totals.get(category) || 0) + safeNumber(item.estimated_amount));
    });
  });
  return Array.from(totals.entries())
    .sort((left, right) => right[1] - left[1])
    .slice(0, 4)
    .map(([category, estimated_amount]) => ({ category, estimated_amount }));
}

function renderReceiptRecords() {
  recentReceipts.innerHTML = "";
  familyRecords.receipts.slice(0, 5).forEach((record) => {
    const card = document.createElement("article");
    card.className = "record-card";
    card.dataset.recordType = "receipt";
    card.dataset.recordId = record.id;
    card.setAttribute("role", "button");
    card.tabIndex = 0;
    const storeName = record.storeName || record.store_name || recordCopy().unknownStore;
    const date = formatRecordDate(record.purchaseDate || record.purchase_date || record.created_at || record.createdAt);
    const amount = record.totalAmount ?? record.total_amount;
    const count = record.itemCount ?? record.item_count;
    card.innerHTML = `
      <div class="record-main">
        <strong>${escapeHtml(storeName)}</strong>
        <span>${escapeHtml(date)} · ${escapeHtml(formatItemCount(count))}</span>
      </div>
      <div class="record-side">${escapeHtml(formatDualAmount(amount, record.currency || "CAD"))}</div>
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
    card.dataset.recordType = "product";
    card.dataset.recordId = record.id;
    card.setAttribute("role", "button");
    card.tabIndex = 0;
    const thumb = record.thumbnail ? `<img class="record-thumb" src="${escapeHtml(record.thumbnail)}" alt="" />` : "";
    const productName = record.itemName || record.item_name || recordCopy().unknownProduct;
    card.innerHTML = `
      ${thumb}
      <div class="record-main">
        <strong>${escapeHtml(productName)}</strong>
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
  const eventContext = buildClientEventContext();
  fetch("/api/events/client", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_type: eventType,
      payload: {
        ...eventContext,
        ...payload,
      },
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
  if (resultPanel) resultPanel.hidden = false;
  setHomeResultPreviewVisible(false);
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
  if (resultPanel) resultPanel.hidden = false;
  setHomeResultPreviewVisible(false);
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
      `${ui().receiptTotalPrefix}: ${formatDualAmount(receipt.total_amount, receipt.currency || "CAD")}`,
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

function actionStatus(key) {
  return (actionStatusCopy[appLanguage] || actionStatusCopy.en)[key] || actionStatusCopy.en[key] || "";
}

function cardImageFilename() {
  const rawName = latestResult?.judgement?.item_name || "famlens-card";
  const cleanName = String(rawName)
    .replace(/[\\/:*?"<>|]+/g, "-")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return `${cleanName || "famlens-card"}.png`;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 800);
}

async function saveImageBlob(blob, filename) {
  const file = typeof File === "function" ? new File([blob], filename, { type: "image/png" }) : null;
  if (file && navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
    await navigator.share({
      title: latestResult?.judgement?.item_name || "FamLens",
      text: buildShareText(latestResult),
      files: [file],
    });
    return;
  }
  if (isTouchDevice()) {
    showImageSavePreview(blob, filename);
    return;
  }
  downloadBlob(blob, filename);
}

async function renderLatestCardPngBlob() {
  if (!latestCardSvg) throw new Error("No card available");
  if (latestResult?.judgement) {
    return renderJudgementCanvasPngBlob(latestResult);
  }
  const svgBlob = new Blob([latestCardSvg], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);
  try {
    const image = await loadImage(svgUrl);
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth || 900;
    canvas.height = image.naturalHeight || 1400;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Could not create canvas");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise((resolve, reject) => {
      canvas.toBlob((pngBlob) => {
        if (pngBlob) resolve(pngBlob);
        else reject(new Error("Could not create PNG"));
      }, "image/png", 0.96);
    });
    return blob;
  } finally {
    URL.revokeObjectURL(svgUrl);
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Could not render card image"));
    image.src = src;
  });
}

async function renderJudgementCanvasPngBlob(result) {
  const judgement = result?.judgement || {};
  const canvas = document.createElement("canvas");
  canvas.width = 900;
  canvas.height = 1400;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not create canvas");

  const theme = cardThemeForVerdict(judgement.verdict || "");
  drawCanvasCardBackground(ctx);
  await drawCanvasHero(ctx, judgement, theme, result.card_image_data_url || "");
  const detailConfig = config().details;
  drawCanvasPanel(ctx, 74, 392, "#f8fafc", "#e2e8f0", detailLabel(detailConfig, "what_it_is", "What it is"), judgement.what_it_is || judgement.category || "", "info");
  drawCanvasPanel(ctx, 74, 594, "#ecfdf5", "#bbf7d0", detailLabel(detailConfig, "how_to_use", "How to use"), judgement.how_to_use || "", "use");
  drawCanvasPanel(ctx, 74, 796, "#f0fdf4", "#bbf7d0", detailLabel(detailConfig, "benefit", "Good to know"), judgement.benefit || judgement.subtitle || "", "benefit");
  drawCanvasPanel(ctx, 74, 998, "#fff7ed", "#fed7aa", detailLabel(detailConfig, "warning", "Watch out"), judgement.warning || "", "warn");
  drawCanvasFooter(ctx, detailLabel(detailConfig, "storage", "Storage"), judgement.storage || "");

  return new Promise((resolve, reject) => {
    canvas.toBlob((pngBlob) => {
      if (pngBlob) resolve(pngBlob);
      else reject(new Error("Could not create PNG"));
    }, "image/png", 0.96);
  });
}

function drawCanvasCardBackground(ctx) {
  ctx.fillStyle = "#eef2f7";
  ctx.fillRect(0, 0, 900, 1400);
  ctx.save();
  ctx.shadowColor = "rgba(15, 23, 42, 0.12)";
  ctx.shadowBlur = 24;
  ctx.shadowOffsetY = 10;
  roundRect(ctx, 42, 36, 816, 1328, 42);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.restore();
}

async function drawCanvasHero(ctx, judgement, theme, imageDataUrl) {
  const gradient = ctx.createLinearGradient(74, 68, 826, 360);
  gradient.addColorStop(0, theme.heroStart);
  gradient.addColorStop(1, theme.heroEnd);
  roundRect(ctx, 74, 68, 752, 292, 34);
  ctx.fillStyle = gradient;
  ctx.fill();

  roundRect(ctx, 110, 104, 176, 58, 29);
  ctx.fillStyle = theme.badge;
  ctx.fill();
  drawCanvasText(ctx, judgement.verdict || "Check", 198, 143, 150, 30, 1, {
    align: "center",
    baseline: "middle",
    color: "#ffffff",
    font: canvasFont(850, 28),
  });

  const hasPhoto = Boolean(imageDataUrl);
  const titleMaxWidth = hasPhoto ? 450 : 680;
  const titleLines = drawCanvasText(ctx, judgement.item_name || "Product", 110, hasPhoto ? 204 : 178, titleMaxWidth, 58, 2, {
    color: "#122033",
    font: canvasFont(850, hasPhoto ? 50 : 58),
  });
  drawCanvasText(ctx, judgement.subtitle || "", 112, hasPhoto ? 316 : 302, titleMaxWidth, 36, 2, {
    color: "#475569",
    font: canvasFont(720, 30),
  });

  if (hasPhoto) {
    await drawCanvasProductPhoto(ctx, imageDataUrl);
  }
  return titleLines;
}

async function drawCanvasProductPhoto(ctx, imageDataUrl) {
  const image = await loadImage(imageDataUrl);
  roundRect(ctx, 592, 90, 212, 212, 30);
  ctx.fillStyle = "rgba(255, 255, 255, 0.94)";
  ctx.fill();
  ctx.save();
  roundRect(ctx, 604, 102, 188, 188, 24);
  ctx.clip();
  drawImageCover(ctx, image, 604, 102, 188, 188);
  ctx.restore();
  roundRect(ctx, 604, 102, 188, 188, 24);
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 8;
  ctx.stroke();
}

function drawCanvasPanel(ctx, x, y, fill, stroke, title, body, icon) {
  roundRect(ctx, x, y, 752, 178, 28);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x + 74, y + 86, 42, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  drawCanvasIcon(ctx, x + 74, y + 86, icon);

  drawCanvasText(ctx, title, x + 144, y + 44, 540, 38, 1, {
    color: "#0f172a",
    font: canvasFont(850, 32),
  });
  drawCanvasText(ctx, body || "", x + 144, y + 96, 560, 42, 2, {
    color: "#1f2937",
    font: canvasFont(720, 30),
  });
}

function drawCanvasFooter(ctx, title, body) {
  roundRect(ctx, 74, 1220, 752, 112, 28);
  ctx.fillStyle = "#eef2ff";
  ctx.fill();
  drawCanvasText(ctx, title, 116, 1240, 620, 34, 1, {
    color: "#334155",
    font: canvasFont(850, 27),
  });
  drawCanvasText(ctx, body || "", 172, 1254, 600, 36, 2, {
    color: "#334155",
    font: canvasFont(720, 27),
  });
}

function drawCanvasIcon(ctx, cx, cy, icon) {
  ctx.save();
  if (icon === "warn") {
    ctx.fillStyle = "#f97316";
    ctx.beginPath();
    ctx.moveTo(cx, cy - 40);
    ctx.lineTo(cx + 43, cy + 36);
    ctx.lineTo(cx - 43, cy + 36);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#fff7ed";
    roundRect(ctx, cx - 4, cy - 10, 8, 27, 4);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx, cy + 26, 5, 0, Math.PI * 2);
    ctx.fill();
  } else if (icon === "benefit") {
    ctx.fillStyle = "#16a34a";
    ctx.beginPath();
    ctx.moveTo(cx - 31, cy + 4);
    ctx.bezierCurveTo(cx - 26, cy - 40, cx + 22, cy - 50, cx + 38, cy - 26);
    ctx.bezierCurveTo(cx + 25, cy + 20, cx - 16, cy + 34, cx - 31, cy + 4);
    ctx.fill();
    ctx.strokeStyle = "#bbf7d0";
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(cx - 20, cy + 8);
    ctx.bezierCurveTo(cx - 2, cy - 10, cx + 15, cy - 20, cx + 34, cy - 27);
    ctx.stroke();
  } else if (icon === "use") {
    ctx.fillStyle = "#16a34a";
    ctx.beginPath();
    ctx.moveTo(cx - 30, cy + 4);
    ctx.lineTo(cx + 30, cy + 4);
    ctx.lineTo(cx + 22, cy + 36);
    ctx.lineTo(cx - 22, cy + 36);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#16a34a";
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(cx - 22, cy - 8);
    ctx.lineTo(cx + 22, cy - 8);
    ctx.stroke();
    ctx.strokeStyle = "#86efac";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(cx - 16, cy - 22);
    ctx.bezierCurveTo(cx - 28, cy - 42, cx - 4, cy - 46, cx - 16, cy - 64);
    ctx.moveTo(cx + 12, cy - 22);
    ctx.bezierCurveTo(cx, cy - 42, cx + 24, cy - 46, cx + 12, cy - 64);
    ctx.stroke();
  } else {
    ctx.fillStyle = "#2563eb";
    ctx.beginPath();
    ctx.arc(cx, cy, 34, 0, Math.PI * 2);
    ctx.fill();
    drawCanvasText(ctx, "?", cx, cy + 2, 40, 42, 1, {
      align: "center",
      baseline: "middle",
      color: "#ffffff",
      font: canvasFont(850, 42),
    });
  }
  ctx.restore();
}

function cardThemeForVerdict(verdict) {
  const text = String(verdict || "").toLowerCase();
  if (text.includes("不") || text.includes("avoid") || text.includes("not") || text.includes("위험")) {
    return { heroStart: "#fee2e2", heroEnd: "#fff7ed", badge: "#dc2626" };
  }
  if (text.includes("注意") || text.includes("caution") || text.includes("careful") || text.includes("watch")) {
    return { heroStart: "#fef3c7", heroEnd: "#fefce8", badge: "#d97706" };
  }
  return { heroStart: "#dcfce7", heroEnd: "#eff6ff", badge: "#16a34a" };
}

function detailLabel(detailConfig, key, fallback) {
  const match = detailConfig.find((item) => item[1] === key);
  return match ? match[0] : fallback;
}

function canvasFont(weight, size) {
  return `${weight} ${size}px -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", Arial, sans-serif`;
}

function drawCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines, options = {}) {
  ctx.save();
  ctx.font = options.font || canvasFont(700, 28);
  const lines = wrapCanvasText(ctx, String(text || ""), maxWidth, maxLines);
  ctx.fillStyle = options.color || "#0f172a";
  ctx.textAlign = options.align || "left";
  ctx.textBaseline = options.baseline || "alphabetic";
  lines.forEach((line, index) => {
    ctx.fillText(line, x, y + index * lineHeight);
  });
  ctx.restore();
  return lines;
}

function wrapCanvasText(ctx, text, maxWidth, maxLines) {
  const cleanText = text.replace(/\s+/g, " ").trim();
  if (!cleanText) return [];
  const units = /[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/.test(cleanText)
    ? Array.from(cleanText)
    : cleanText.split(/(\s+)/).filter(Boolean);
  const lines = [];
  let line = "";
  units.forEach((unit) => {
    const next = line ? line + unit : unit.trimStart();
    if (ctx.measureText(next).width <= maxWidth || !line) {
      line = next;
      return;
    }
    lines.push(line.trim());
    line = unit.trimStart();
  });
  if (line) lines.push(line.trim());
  if (lines.length <= maxLines) return lines;
  const kept = lines.slice(0, maxLines);
  let last = kept[kept.length - 1];
  while (ctx.measureText(`${last}...`).width > maxWidth && last.length > 1) {
    last = last.slice(0, -1);
  }
  kept[kept.length - 1] = `${last}...`;
  return kept;
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function drawImageCover(ctx, image, x, y, width, height) {
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  const scale = Math.max(width / sourceWidth, height / sourceHeight);
  const sw = width / scale;
  const sh = height / scale;
  const sx = (sourceWidth - sw) / 2;
  const sy = (sourceHeight - sh) / 2;
  ctx.drawImage(image, sx, sy, sw, sh, x, y, width, height);
}

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

function showImageSavePreview(blob, filename) {
  const url = URL.createObjectURL(blob);
  const copy = imageSavePreviewCopy();
  const sheet = document.createElement("div");
  sheet.className = "image-save-sheet";
  sheet.innerHTML = `
    <div class="image-save-card" role="dialog" aria-modal="true" aria-label="${escapeHtml(copy.title)}">
      <div class="image-save-copy">
        <strong>${escapeHtml(copy.title)}</strong>
        <p>${escapeHtml(copy.hint)}</p>
      </div>
      <img src="${url}" alt="${escapeHtml(filename)}" />
      <div class="image-save-actions">
        <button type="button" data-action="download">${escapeHtml(copy.download)}</button>
        <button type="button" data-action="close">${escapeHtml(copy.close)}</button>
      </div>
    </div>
  `;
  document.body.appendChild(sheet);
  const close = () => {
    sheet.remove();
    URL.revokeObjectURL(url);
  };
  sheet.addEventListener("click", (event) => {
    if (event.target === sheet || event.target?.dataset?.action === "close") close();
    if (event.target?.dataset?.action === "download") downloadBlob(blob, filename);
  });
}

function imageSavePreviewCopy() {
  const copy = {
    en: {
      title: "Image card is ready",
      hint: "Long-press the image to save it, or use the button below.",
      download: "Download file",
      close: "Close",
    },
    "zh-Hans": {
      title: "图文卡已生成",
      hint: "长按图片可保存到手机；也可以点下面按钮下载文件。",
      download: "下载文件",
      close: "关闭",
    },
  };
  return copy[appLanguage] || copy.en;
}

async function shareResultWithFamily(button, resetLabel, eventName, eventPayload) {
  const isProductCard = Boolean(latestResult?.judgement && latestCardSvg);
  try {
    if (isProductCard) {
      const pngBlob = await renderLatestCardPngBlob();
      const filename = cardImageFilename();
      if (typeof File !== "function") {
        downloadBlob(pngBlob, filename);
        await copyText(buildShareText(latestResult));
        button.textContent = actionStatus("imageReady");
        sendClientEvent(eventName, eventPayload);
        return;
      }
      const file = new File([pngBlob], filename, { type: "image/png" });
      const sharePayload = {
        title: latestResult?.judgement?.item_name || "FamLens",
        text: buildShareText(latestResult),
        files: [file],
      };
      if (navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
        await navigator.share(sharePayload);
        button.textContent = actionStatus("shared");
      } else {
        downloadBlob(pngBlob, filename);
        await copyText(buildShareText(latestResult));
        button.textContent = actionStatus("imageReady");
      }
    } else if (navigator.share) {
      await navigator.share({ title: "FamLens", text: buildShareText(latestResult) });
      button.textContent = actionStatus("shared");
    } else {
      await copyText(buildShareText(latestResult));
      button.textContent = ui().copied;
    }
    sendClientEvent(eventName, eventPayload);
  } catch (error) {
    if (error?.name !== "AbortError") {
      await copyText(buildShareText(latestResult));
      button.textContent = ui().copied;
    }
  } finally {
    setTimeout(() => (button.textContent = resetLabel), 1400);
  }
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
  dropZone.hidden = true;
  scanTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.mode === scanMode);
  });
  updateModeCopy();
  setHomeResultPreviewVisible(true);
  if (resultPanel) resultPanel.hidden = true;
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
  const joinCopy = familyJoinCopy();
  const familyCode = familyProfileState.family_code || "------";
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
  if (profileCurrencyLabel) profileCurrencyLabel.textContent = copy.currency || profileLanguageCopy.en.currency;
  if (profileCurrencySelect) profileCurrencySelect.value = preferredCurrency();
  if (profileMembersLabel) profileMembersLabel.textContent = copy.members;
  if (profileMembersInput) profileMembersInput.placeholder = copy.membersPlaceholder;
  profileRecoveryLabel.textContent = copy.recovery || profileLanguageCopy.en.recovery;
  profileRecoveryInput.placeholder = copy.recoveryPlaceholder || profileLanguageCopy.en.recoveryPlaceholder;
  profileIdentityHint.textContent = (copy.identityHint || profileLanguageCopy.en.identityHint).replace("{code}", familyCode);
  if (familyInviteCodeLabel) familyInviteCodeLabel.textContent = joinCopy.inviteCodeLabel;
  if (familyInviteCode) familyInviteCode.textContent = familyCode;
  if (familyInviteQr) {
    const qrCode = currentFamilyCode();
    familyInviteQr.src = qrCode ? `/api/invite/qr.svg?family_code=${encodeURIComponent(qrCode)}` : "/api/invite/qr.svg";
  }
  if (copyInviteLinkButton) copyInviteLinkButton.textContent = joinCopy.copyInviteLink;
  if (copyFamilyCodeButton) copyFamilyCodeButton.textContent = joinCopy.copyCode;
  if (joinFamilyCodeLabel) joinFamilyCodeLabel.textContent = joinCopy.joinLabel;
  if (joinFamilyCodeInput) joinFamilyCodeInput.placeholder = joinCopy.joinPlaceholder;
  if (joinFamilyButton) joinFamilyButton.textContent = joinCopy.joinButton;
  profileSetupHint.textContent = copy.hint;
  profileSkipButton.textContent = copy.skip;
  profileDialogSaveButton.textContent = copy.save;
  profileDialogCloseButton.setAttribute("aria-label", copy.close);
  familyProfile.value = familyProfileState.members_text || "";
  applyStructuredProfileLanguage();
  profileMembersInput.value = buildProfileMembersText();
  profileRecoveryInput.value = familyProfileState.recovery_contact || "";
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
  applyHomeLanguage();
  productTab.textContent = ui().productTab;
  receiptTab.textContent = ui().receiptTab;
  resultKicker.textContent = ui().resultKicker;
  errorTitle.textContent = ui().errorTitle;
  replaceButton.textContent = ui().replace;
  if (albumButtonText) albumButtonText.textContent = ui().uploadFromAlbum;
  speakButtonText.textContent = ui().speakProduct;
  receiptSpeakButtonText.textContent = ui().speakReceipt;
  copyButton.textContent = ui().shareFamily;
  downloadButton.textContent = ui().saveCard;
  receiptHeroLabel.textContent = ui().receiptRecord;
  receiptDateLabel.textContent = ui().date;
  receiptCountLabel.textContent = ui().itemCount;
  receiptTaxLabel.textContent = ui().tax;
  receiptItemsTitle.textContent = ui().receiptItems;
  receiptCategoriesTitle.textContent = ui().categoryStats;
  nutritionSignalLabel.textContent = ui().nutrition;
  spendingSignalLabel.textContent = ui().spending;
  familyReportNoteLabel.textContent = ui().report;
  applyGrowthLanguage();
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

function applyHomeLanguage() {
  const copy = homeCopy();
  const fallback = homeLanguageCopy.en;
  const profile = profileCopy();
  const t = (key) => copy[key] || fallback[key] || "";
  if (brandEyebrow) brandEyebrow.textContent = t("brandEyebrow");
  if (panelKicker) panelKicker.textContent = t("panelKicker");
  if (panelTitle) panelTitle.textContent = t("panelTitle");
  if (panelIntro) panelIntro.textContent = t("panelIntro");
  if (productTab) productTab.dataset.subtitle = t("productSub");
  if (receiptTab) receiptTab.dataset.subtitle = t("receiptSub");
  if (visualProductLang) visualProductLang.textContent = t("visualProductLang");
  if (visualProductTitle) visualProductTitle.textContent = t("visualProductTitle");
  if (visualProductCopy) visualProductCopy.textContent = t("visualProductCopy");
  if (visualReceiptStore) visualReceiptStore.textContent = t("visualReceiptStore");
  if (visualReceiptTitle) visualReceiptTitle.textContent = t("visualReceiptTitle");
  if (visualReceiptCopy) visualReceiptCopy.textContent = t("visualReceiptCopy");
  if (useCaseProduct) useCaseProduct.textContent = t("useCaseProduct");
  if (useCaseReceipt) useCaseReceipt.textContent = t("useCaseReceipt");
  if (useCaseFamily) useCaseFamily.textContent = t("useCaseFamily");
  if (homePreviewKicker) homePreviewKicker.textContent = t("previewKicker");
  if (homePreviewTitle) homePreviewTitle.textContent = t("previewTitle");
  if (homeProductPreviewLabel) homeProductPreviewLabel.textContent = t("productPreviewLabel");
  if (homeProductPreviewTitle) homeProductPreviewTitle.textContent = t("productPreviewTitle");
  if (homeProductPreviewSubtitle) homeProductPreviewSubtitle.textContent = t("productPreviewSubtitle");
  if (homeProductPreviewBadgeGood) homeProductPreviewBadgeGood.textContent = t("productPreviewBadgeGood");
  if (homeProductPreviewBadgeCaution) homeProductPreviewBadgeCaution.textContent = t("productPreviewBadgeCaution");
  if (homeProductPreviewVoiceLabel) homeProductPreviewVoiceLabel.textContent = t("productPreviewVoiceLabel");
  if (homeProductPreviewVoice) homeProductPreviewVoice.textContent = t("productPreviewVoice");
  if (homeProductPreviewOneLabel) homeProductPreviewOneLabel.textContent = t("productPreviewOneLabel");
  if (homeProductPreviewOne) homeProductPreviewOne.textContent = t("productPreviewOne");
  if (homeProductPreviewTwoLabel) homeProductPreviewTwoLabel.textContent = t("productPreviewTwoLabel");
  if (homeProductPreviewTwo) homeProductPreviewTwo.textContent = t("productPreviewTwo");
  if (homeProductPreviewThreeLabel) homeProductPreviewThreeLabel.textContent = t("productPreviewThreeLabel");
  if (homeProductPreviewThree) homeProductPreviewThree.textContent = t("productPreviewThree");
  if (homeProductPreviewShare) homeProductPreviewShare.textContent = ui().shareFamily;
  if (homeProductPreviewSave) homeProductPreviewSave.textContent = ui().saveCard;
  if (homeReceiptPreviewLabel) homeReceiptPreviewLabel.textContent = t("receiptPreviewLabel");
  if (homeReceiptPreviewTitle) homeReceiptPreviewTitle.textContent = t("receiptPreviewTitle");
  if (homeReceiptStoreLabel) homeReceiptStoreLabel.textContent = t("receiptStoreLabel");
  if (homeReceiptItemsLabel) homeReceiptItemsLabel.textContent = ui().itemCount;
  if (homeReceiptDateLabel) homeReceiptDateLabel.textContent = ui().date;
  if (homeReceiptPreviewFood) homeReceiptPreviewFood.textContent = t("receiptPreviewFood");
  if (homeReceiptPreviewCare) homeReceiptPreviewCare.textContent = t("receiptPreviewCare");
  if (homeReceiptPreviewOne) homeReceiptPreviewOne.textContent = t("receiptPreviewOne");
  if (homeReceiptPreviewTwo) homeReceiptPreviewTwo.textContent = t("receiptPreviewTwo");
  if (homeReceiptPreviewThree) homeReceiptPreviewThree.textContent = t("receiptPreviewThree");
  if (homeReceiptKicker) homeReceiptKicker.textContent = t("receiptKicker");
  if (homeReceiptProgressTitle) homeReceiptProgressTitle.textContent = t("progressTitle");
  if (homeReceiptProgressCopy) homeReceiptProgressCopy.textContent = t("progressCopy");
  if (homeSampleKicker) homeSampleKicker.textContent = t("sampleKicker");
  if (homeSampleTitle) homeSampleTitle.textContent = t("sampleTitle");
  if (homeSampleLink) {
    homeSampleLink.textContent = t("sampleLink");
    homeSampleLink.href = `/static/family-health-snapshot-sample.html?lang=${encodeURIComponent(appLanguage)}`;
  }
  if (homeSampleNutrition) homeSampleNutrition.textContent = t("sampleNutrition");
  if (homeSampleNutritionCopy) homeSampleNutritionCopy.textContent = t("sampleNutritionCopy");
  if (homeSampleSpending) homeSampleSpending.textContent = t("sampleSpending");
  if (homeSampleSpendingCopy) homeSampleSpendingCopy.textContent = t("sampleSpendingCopy");
  if (homeSampleFamily) homeSampleFamily.textContent = t("sampleFamily");
  if (homeSampleFamilyCopy) homeSampleFamilyCopy.textContent = t("sampleFamilyCopy");
  if (homeRecentKicker) homeRecentKicker.textContent = t("recentKicker");
  if (homeRecentTitle) homeRecentTitle.textContent = t("recentTitle");
  if (homeFamilyKicker) homeFamilyKicker.textContent = t("familyKicker");
  if (homeFamilyTitle) homeFamilyTitle.textContent = t("familyTitle");
  if (homeFamilyTileSenior) homeFamilyTileSenior.innerHTML = t("familySenior");
  if (homeFamilyTileAdult) homeFamilyTileAdult.innerHTML = t("familyAdult");
  if (homeFamilyTileChild) homeFamilyTileChild.innerHTML = t("familyChild");
  if (homeFamilyTileLanguage) homeFamilyTileLanguage.innerHTML = t("familyLanguage");
  if (homeFamilyNote) homeFamilyNote.textContent = t("familyNote");
  if (homeFamilySetupButton) homeFamilySetupButton.textContent = profile.boxLabel || profileLanguageCopy.en.boxLabel;
}

function applyGrowthLanguage() {
  const copy = growthCopy();
  if (productShareKicker) productShareKicker.textContent = copy.productShareKicker;
  if (productShareTitle) productShareTitle.textContent = copy.productShareTitle;
  if (productShareCopy && !latestResult?.judgement) productShareCopy.textContent = copy.productShareCopy;
  if (productShareButton) productShareButton.textContent = copy.productShareButton;
  if (productCommerceKicker) productCommerceKicker.textContent = copy.productCommerceKicker;
  if (productCommerceTitle) productCommerceTitle.textContent = copy.productCommerceTitle;
  if (productCommerceCopy) productCommerceCopy.textContent = copy.productCommerceCopy;
  if (productCommerceButton) productCommerceButton.textContent = copy.productCommerceButton;
  if (receiptShareKicker) receiptShareKicker.textContent = copy.receiptShareKicker;
  if (receiptShareTitle) receiptShareTitle.textContent = copy.receiptShareTitle;
  if (receiptShareCopy && !latestResult?.receipt) receiptShareCopy.textContent = copy.receiptShareCopy;
  if (receiptShareButton) receiptShareButton.textContent = copy.receiptShareButton;
  if (receiptCommerceKicker) receiptCommerceKicker.textContent = copy.receiptCommerceKicker;
  if (receiptCommerceTitle) receiptCommerceTitle.textContent = copy.receiptCommerceTitle;
  if (receiptCommerceCopy) receiptCommerceCopy.textContent = copy.receiptCommerceCopy;
  if (receiptCommerceButton) receiptCommerceButton.textContent = copy.receiptCommerceButton;
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
  if (pickButtonText) pickButtonText.textContent = copy.pick;
  if (uploadCopy) uploadCopy.textContent = copy.upload;
  if (uploadNote) uploadNote.textContent = copy.note;
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
    currentAudio.playbackRate = speechPlaybackRate;
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
  utterance.rate = speechPlaybackRate;
  window.speechSynthesis.speak(utterance);
}

function normalizeCurrency(value) {
  const clean = String(value || "").trim().toUpperCase();
  return supportedCurrencyKeys.has(clean) ? clean : "";
}

function defaultFamiliarCurrency() {
  return defaultCurrencyByLanguage[appLanguage] || "USD";
}

function preferredCurrency() {
  return normalizeCurrency(familyProfileState.preferred_currency) || defaultFamiliarCurrency();
}

function convertAmount(value, fromCurrency, toCurrency) {
  const number = Number(value);
  const from = normalizeCurrency(fromCurrency);
  const to = normalizeCurrency(toCurrency);
  if (Number.isNaN(number) || !from || !to || !currencyRatesToUsd[from] || !currencyRatesToUsd[to]) return null;
  return (number * currencyRatesToUsd[from]) / currencyRatesToUsd[to];
}

function formatAmount(value, currency) {
  if (value === null || value === undefined || value === "") return "--";
  const number = Number(value);
  if (Number.isNaN(number)) return "--";
  const code = normalizeCurrency(currency);
  const symbol = currencySymbols[code] || `${currency || ""} `;
  const compactCurrencies = new Set(["JPY", "KRW", "VND"]);
  const decimals = compactCurrencies.has(code) ? 0 : 2;
  return `${symbol}${number.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

function formatConvertedAmount(value, sourceCurrency) {
  const source = normalizeCurrency(sourceCurrency);
  const target = preferredCurrency();
  if (!source || !target || source === target) return "";
  const converted = convertAmount(value, source, target);
  if (converted === null) return "";
  return `${recordText("approximate")} ${formatAmount(converted, target)}`;
}

function formatDualAmount(value, currency) {
  const base = formatAmount(value, currency);
  const converted = formatConvertedAmount(value, currency);
  return converted ? `${base} · ${converted}` : base;
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

function uiText(key) {
  return ui()[key] || languageConfig.en.ui[key] || "";
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

function recordText(key) {
  return recordCopy()[key] || recordsLanguageCopy.en[key] || "";
}

function homeCopy() {
  return homeLanguageCopy[appLanguage] || homeLanguageCopy.en;
}

function feedbackCopy() {
  return feedbackLanguageCopy[appLanguage] || feedbackLanguageCopy.en;
}

function profileCopy() {
  return profileLanguageCopy[appLanguage] || profileLanguageCopy.en;
}

function structuredProfileCopy() {
  return profileStructuredLanguageCopy[appLanguage] || profileStructuredLanguageCopy.en;
}

function growthCopy() {
  return growthLanguageCopy[appLanguage] || growthLanguageCopy.en;
}

function familyJoinCopy() {
  return familyJoinLanguageCopy[appLanguage] || familyJoinLanguageCopy.en;
}

function normalizeProfilePerson(raw = {}) {
  const health = Array.isArray(raw.health) ? raw.health : [];
  return {
    name: String(raw.name || "").trim(),
    relation: String(raw.relation || "").trim(),
    gender: String(raw.gender || "").trim(),
    age: String(raw.age || "").trim(),
    health: health.map((item) => String(item || "").trim()).filter(Boolean),
    note: String(raw.note || "").trim(),
  };
}

function hasProfilePersonData(person) {
  return Boolean(
    person.name ||
      person.relation ||
      person.gender ||
      person.age ||
      person.health?.length ||
      person.note
  );
}

function loadFamilyProfileState() {
  try {
    const saved = JSON.parse(localStorage.getItem(profileStorageKey) || "{}");
    if (!saved || typeof saved !== "object") return {};
    return {
      output_language: supportedLanguageKeys.has(saved.output_language) ? saved.output_language : "",
      members_text: String(saved.members_text || ""),
      main_shopper: normalizeProfilePerson(saved.main_shopper || {}),
      members: Array.isArray(saved.members) ? saved.members.map(normalizeProfilePerson).filter(hasProfilePersonData) : [],
      recovery_contact: String(saved.recovery_contact || ""),
      preferred_currency: normalizeCurrency(saved.preferred_currency) || "",
      household_id: String(saved.household_id || ""),
      family_code: String(saved.family_code || ""),
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
      main_shopper: normalizeProfilePerson(familyProfileState.main_shopper || {}),
      members: normalizedFamilyMembers(),
      recovery_contact: familyProfileState.recovery_contact || "",
      preferred_currency: preferredCurrency(),
      household_id: familyProfileState.household_id || clientUserId,
      family_code: familyProfileState.family_code || "",
      updated_at: familyProfileState.updated_at || new Date().toISOString(),
    })
  );
}

function normalizedFamilyMembers() {
  return Array.isArray(familyProfileState.members)
    ? familyProfileState.members.map(normalizeProfilePerson).filter(hasProfilePersonData)
    : [];
}

function populateProfileSelect(select, options, selectedValue) {
  if (!select) return;
  const selected = String(selectedValue || "");
  select.innerHTML = options
    .map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`)
    .join("");
  select.value = selected;
}

function selectedProfileChipValues(container, attribute) {
  if (!container) return [];
  return Array.from(container.querySelectorAll(`[${attribute}].active`)).map((button) => button.getAttribute(attribute) || "");
}

function setProfileChipValues(container, attribute, values) {
  const selected = new Set(values || []);
  container?.querySelectorAll(`[${attribute}]`).forEach((button) => {
    button.classList.toggle("active", selected.has(button.getAttribute(attribute) || ""));
  });
}

function updateProfileChipLabels() {
  const copy = structuredProfileCopy();
  profileMainHealthChips?.querySelectorAll("[data-main-health]").forEach((button) => {
    const key = button.getAttribute("data-main-health") || "";
    button.textContent = copy.health[key] || profileStructuredLanguageCopy.en.health[key] || key;
  });
  profileMemberHealthChips?.querySelectorAll("[data-member-health]").forEach((button) => {
    const key = button.getAttribute("data-member-health") || "";
    button.textContent = copy.health[key] || profileStructuredLanguageCopy.en.health[key] || key;
  });
}

function hydrateStructuredProfileInputs() {
  const main = normalizeProfilePerson(familyProfileState.main_shopper || {});
  if (profileMainNameInput) profileMainNameInput.value = main.name;
  if (profileMainAgeInput) profileMainAgeInput.value = main.age;
  if (profileMainGenderSelect) profileMainGenderSelect.value = main.gender;
  setProfileChipValues(profileMainHealthChips, "data-main-health", main.health);
}

function syncStructuredProfileStateFromInputs() {
  familyProfileState.main_shopper = normalizeProfilePerson({
    name: profileMainNameInput?.value || "",
    relation: "main_shopper",
    gender: profileMainGenderSelect?.value || "",
    age: profileMainAgeInput?.value || "",
    health: selectedProfileChipValues(profileMainHealthChips, "data-main-health"),
  });
}

function addStructuredFamilyMember() {
  const member = normalizeProfilePerson({
    name: profileMemberNameInput?.value || "",
    relation: profileMemberRelationSelect?.value || "",
    gender: profileMemberGenderSelect?.value || "",
    age: profileMemberAgeInput?.value || "",
    health: selectedProfileChipValues(profileMemberHealthChips, "data-member-health"),
    note: profileMemberNoteInput?.value || "",
  });
  if (!hasProfilePersonData(member)) return;
  familyProfileState.members = [...normalizedFamilyMembers(), member];
  if (profileMemberNameInput) profileMemberNameInput.value = "";
  if (profileMemberAgeInput) profileMemberAgeInput.value = "";
  if (profileMemberRelationSelect) profileMemberRelationSelect.value = "";
  if (profileMemberGenderSelect) profileMemberGenderSelect.value = "";
  if (profileMemberNoteInput) profileMemberNoteInput.value = "";
  setProfileChipValues(profileMemberHealthChips, "data-member-health", []);
  profileMembersInput.value = buildProfileMembersText();
  persistFamilyProfileState();
  renderStructuredMemberList();
}

function labelProfileValue(options, value) {
  return (options.find(([optionValue]) => optionValue === value) || [value, value])[1] || "";
}

function labelHealthValues(values) {
  const copy = structuredProfileCopy();
  return (values || []).map((key) => copy.health[key] || profileStructuredLanguageCopy.en.health[key] || key);
}

function describeProfilePerson(person, options = {}) {
  const copy = structuredProfileCopy();
  const pieces = [];
  const gender = labelProfileValue(copy.genders, person.gender);
  const relation = options.isMain ? "" : labelProfileValue(copy.relations, person.relation);
  if (relation) pieces.push(relation);
  if (gender) pieces.push(gender);
  if (person.age) pieces.push(`${person.age}`);
  const health = labelHealthValues(person.health);
  if (health.length) pieces.push(health.join(", "));
  if (person.note) pieces.push(person.note);
  return pieces.filter(Boolean).join(" · ");
}

function buildProfileMembersText() {
  syncStructuredProfileStateFromInputs();
  const copy = structuredProfileCopy();
  const lines = [];
  const main = normalizeProfilePerson(familyProfileState.main_shopper || {});
  if (hasProfilePersonData(main)) {
    const mainName = main.name || copy.mainShopperPrefix;
    const details = describeProfilePerson(main, { isMain: true });
    lines.push(details ? `${copy.mainShopperPrefix}: ${mainName} (${details})` : `${copy.mainShopperPrefix}: ${mainName}`);
  }
  normalizedFamilyMembers().forEach((member) => {
    const memberName = member.name || copy.memberPrefix;
    const details = describeProfilePerson(member);
    lines.push(details ? `${copy.memberPrefix}: ${memberName} (${details})` : `${copy.memberPrefix}: ${memberName}`);
  });
  const structuredText = lines.join("\n").trim();
  familyProfileState.members_text = structuredText || String(profileMembersInput?.value || familyProfileState.members_text || "").trim();
  return familyProfileState.members_text;
}

function renderStructuredMemberList() {
  if (!profileMemberList) return;
  const copy = structuredProfileCopy();
  const members = normalizedFamilyMembers();
  if (!members.length) {
    profileMemberList.innerHTML = `<p class="profile-member-empty">${escapeHtml(copy.noMembers)}</p>`;
    return;
  }
  profileMemberList.innerHTML = members
    .map((member, index) => {
      const title = member.name || copy.memberPrefix;
      const meta = describeProfilePerson(member);
      const healthTags = labelHealthValues(member.health)
        .map((tag) => `<span>${escapeHtml(tag)}</span>`)
        .join("");
      const noteTag = member.note ? `<span>${escapeHtml(member.note)}</span>` : "";
      return `
        <article class="profile-member-item">
          <div class="profile-member-head">
            <div>
              <strong>${escapeHtml(title)}</strong>
              <small>${escapeHtml(meta || copy.memberPrefix)}</small>
            </div>
            <button class="profile-remove-member" type="button" data-remove-member="${index}">${escapeHtml(copy.remove)}</button>
          </div>
          <div class="profile-member-tags">${healthTags}${noteTag}</div>
        </article>
      `;
    })
    .join("");
}

function applyStructuredProfileLanguage() {
  const copy = structuredProfileCopy();
  if (profileMainTitle) profileMainTitle.textContent = copy.mainTitle;
  if (profileMainNameLabel) profileMainNameLabel.textContent = copy.mainName;
  if (profileMainAgeLabel) profileMainAgeLabel.textContent = copy.mainAge;
  if (profileMainGenderLabel) profileMainGenderLabel.textContent = copy.mainGender;
  if (profileMainHealthLabel) profileMainHealthLabel.textContent = copy.mainHealth;
  if (profileAddTitle) profileAddTitle.textContent = copy.addTitle;
  if (profileMemberNameLabel) profileMemberNameLabel.textContent = copy.memberName;
  if (profileMemberAgeLabel) profileMemberAgeLabel.textContent = copy.memberAge;
  if (profileMemberRelationLabel) profileMemberRelationLabel.textContent = copy.memberRelation;
  if (profileMemberGenderLabel) profileMemberGenderLabel.textContent = copy.memberGender;
  if (profileMemberHealthLabel) profileMemberHealthLabel.textContent = copy.memberHealth;
  if (profileMemberNoteLabel) profileMemberNoteLabel.textContent = copy.memberNote;
  if (profileAddMemberButton) profileAddMemberButton.textContent = copy.addMember;
  if (profileMemberListTitle) profileMemberListTitle.textContent = copy.memberList;
  populateProfileSelect(profileMainGenderSelect, copy.genders, familyProfileState.main_shopper?.gender || "");
  populateProfileSelect(profileMemberRelationSelect, copy.relations, profileMemberRelationSelect?.value || "");
  populateProfileSelect(profileMemberGenderSelect, copy.genders, profileMemberGenderSelect?.value || "");
  updateProfileChipLabels();
  hydrateStructuredProfileInputs();
  renderStructuredMemberList();
}

function syncVisibleFamilyInputs() {
  syncStructuredProfileStateFromInputs();
  profileMembersInput.value = buildProfileMembersText();
  const activeMembersText =
    profileDialog?.open && profileMembersInput
      ? profileMembersInput.value
      : familyProfile?.value || profileMembersInput?.value || familyProfileState.members_text || "";
  familyProfileState.members_text = activeMembersText;
}

function profileContextText() {
  return String(buildProfileMembersText() || familyProfile.value || "").trim();
}

function currentFamilyCode() {
  return String(familyProfileState.family_code || "").trim();
}

function buildFamilyInviteUrl(code = currentFamilyCode()) {
  const url = new URL(window.location.href);
  url.pathname = "/";
  url.search = "";
  url.hash = "";
  url.searchParams.set("join", code);
  return url.toString();
}

function inviteCodeFromUrl() {
  try {
    const code = new URL(window.location.href).searchParams.get("join");
    return cleanFamilyCode(code || "");
  } catch (error) {
    return "";
  }
}

function cleanFamilyCode(value) {
  return String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);
}

function clearJoinQueryParam() {
  try {
    const url = new URL(window.location.href);
    if (!url.searchParams.has("join")) return;
    url.searchParams.delete("join");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  } catch (error) {
    // A stale invite parameter is harmless.
  }
}

function setJoinFamilyStatus(message, variant = "") {
  if (!joinFamilyStatus) return;
  joinFamilyStatus.textContent = message || "";
  joinFamilyStatus.classList.toggle("success", variant === "success");
  joinFamilyStatus.classList.toggle("warning", variant === "warning");
}

function handleJoinInviteFromUrl() {
  const code = inviteCodeFromUrl();
  if (!code) return false;
  if (joinFamilyCodeInput) joinFamilyCodeInput.value = code;
  setJoinFamilyStatus(familyJoinCopy().joinPrompt, "");
  openProfileDialog();
  return true;
}

async function joinFamilyByCode(codeValue) {
  const code = cleanFamilyCode(codeValue);
  if (!code) {
    setJoinFamilyStatus(familyJoinCopy().noCode, "warning");
    return;
  }
  if (joinFamilyButton) joinFamilyButton.disabled = true;
  setJoinFamilyStatus(familyJoinCopy().joining, "");
  try {
    const response = await fetch("/api/identity/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        device_id: deviceUserId,
        family_code: code,
        output_language: appLanguage,
      }),
    });
    if (!response.ok) throw new Error("join failed");
    const identity = await response.json();
    if (!identity.household_id) throw new Error("missing household");
    clientUserId = String(identity.household_id);
    persistIdentityState(identity);
    familyProfileState = {
      ...familyProfileState,
      household_id: clientUserId,
      family_code: String(identity.family_code || code),
      recovery_contact: String(identity.recovery_contact || familyProfileState.recovery_contact || ""),
      updated_at: new Date().toISOString(),
    };
    persistFamilyProfileState();
    clearJoinQueryParam();
    await hydrateFamilyRecordsFromBackend();
    await hydrateFamilyProfileFromBackend();
    applyLanguage();
    setJoinFamilyStatus(familyJoinCopy().joinSuccess, "success");
    sendClientEvent("joined_family_by_code", { output_language: appLanguage });
  } catch (error) {
    setJoinFamilyStatus(familyJoinCopy().joinError, "warning");
  } finally {
    if (joinFamilyButton) joinFamilyButton.disabled = false;
  }
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
    ...familyProfileState,
    output_language: appLanguage,
    members_text: cleanMembers,
    recovery_contact: String(profileRecoveryInput?.value || familyProfileState.recovery_contact || "").trim(),
    preferred_currency: normalizeCurrency(profileCurrencySelect?.value) || preferredCurrency(),
    household_id: familyProfileState.household_id || clientUserId,
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
        recovery_contact: familyProfileState.recovery_contact || "",
        preferred_currency: preferredCurrency(),
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
      ...familyProfileState,
      output_language: supportedLanguageKeys.has(remoteLanguage) ? remoteLanguage : appLanguage,
      members_text: remoteMembers || familyProfileState.members_text || "",
      household_id: data.household_id || familyProfileState.household_id || clientUserId,
      preferred_currency: normalizeCurrency(data.preferred_currency) || familyProfileState.preferred_currency || "",
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

async function hydrateFamilyRecordsFromBackend() {
  try {
    const response = await fetch(`/api/records/${encodeURIComponent(clientUserId)}`);
    if (!response.ok) return;
    const data = await response.json();
    const remoteProducts = Array.isArray(data.products) ? data.products.map(normalizeProductRecord).filter(Boolean) : [];
    const remoteReceipts = Array.isArray(data.receipts) ? data.receipts.map(normalizeReceiptRecord).filter(Boolean) : [];
    const hasRemoteRecords = remoteProducts.length || remoteReceipts.length;
    if (hasRemoteRecords || data.monthly_report) {
      const localProducts = new Map(familyRecords.products.map((record) => [record.id, record]));
      const mergedProducts = remoteProducts.map((record) => mergeProductRecord(record, localProducts.get(record.id)));
      familyRecords = {
        products: remoteProducts.length ? mergedProducts : familyRecords.products,
        receipts: remoteReceipts.length ? remoteReceipts : familyRecords.receipts,
        monthlyReport: data.monthly_report || familyRecords.monthlyReport || null,
      };
      saveFamilyRecords();
      renderFamilyRecords();
    }
  } catch (error) {
    // Local records are still useful if the network is unavailable.
  }
}

async function bootstrapIdentity() {
  const cachedIdentity = loadIdentityState();
  if (cachedIdentity.household_id) {
    clientUserId = cachedIdentity.household_id;
    familyProfileState = {
      ...familyProfileState,
      household_id: cachedIdentity.household_id,
      family_code: cachedIdentity.family_code || familyProfileState.family_code || "",
      recovery_contact: cachedIdentity.recovery_contact || familyProfileState.recovery_contact || "",
    };
  }
  try {
    const response = await fetch("/api/identity/bootstrap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        device_id: deviceUserId,
        output_language: appLanguage,
      }),
    });
    if (!response.ok) return;
    const identity = await response.json();
    if (!identity.household_id) return;
    clientUserId = String(identity.household_id);
    persistIdentityState(identity);
    familyProfileState = {
      ...familyProfileState,
      household_id: clientUserId,
      family_code: String(identity.family_code || familyProfileState.family_code || ""),
      recovery_contact: String(identity.recovery_contact || familyProfileState.recovery_contact || ""),
    };
    persistFamilyProfileState();
    applyProfileLanguage();
  } catch (error) {
    // Anonymous device use still works if identity bootstrap is unavailable.
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

function getDeviceUserId() {
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

function buildClientEventContext() {
  const attribution = getCampaignAttribution();
  const context = {
    page_path: window.location.pathname,
    page_search: window.location.search.slice(0, 240),
    is_standalone:
      window.matchMedia?.("(display-mode: standalone)")?.matches ||
      window.navigator.standalone === true,
  };

  if (Object.keys(attribution).length) {
    context.attribution = attribution;
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((key) => {
      if (attribution[key]) context[key] = attribution[key];
    });
  }

  return context;
}

function getCampaignAttribution() {
  const params = new URLSearchParams(window.location.search);
  const trackedKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  const current = {};

  trackedKeys.forEach((key) => {
    const value = params.get(key);
    if (value) current[key] = value.slice(0, 120);
  });

  const source = params.get("source") || params.get("ref") || params.get("channel");
  if (source && !current.utm_source) current.utm_source = source.slice(0, 120);

  if (Object.keys(current).length) {
    current.referrer = document.referrer.slice(0, 240);
    current.landing_path = window.location.pathname;
    current.landing_search = window.location.search.slice(0, 240);
    current.captured_at = new Date().toISOString();
    localStorage.setItem(attributionStorageKey, JSON.stringify(current));

    const sessionKey = JSON.stringify(current);
    if (sessionStorage.getItem(attributionSessionKey) !== sessionKey) {
      sessionStorage.setItem(attributionSessionKey, sessionKey);
      setTimeout(() => sendClientEvent("campaign_landing", { campaign: current }), 0);
    }

    return current;
  }

  try {
    const saved = JSON.parse(localStorage.getItem(attributionStorageKey) || "{}");
    return saved && typeof saved === "object" ? saved : {};
  } catch (error) {
    return {};
  }
}

function getStoredHouseholdId() {
  return loadIdentityState().household_id || "";
}

function loadIdentityState() {
  try {
    const saved = JSON.parse(localStorage.getItem(identityStorageKey) || "{}");
    if (!saved || typeof saved !== "object") return {};
    return {
      household_id: String(saved.household_id || ""),
      family_code: String(saved.family_code || ""),
      plan: String(saved.plan || "free"),
      recovery_contact: String(saved.recovery_contact || ""),
    };
  } catch (error) {
    return {};
  }
}

function persistIdentityState(identity) {
  localStorage.setItem(
    identityStorageKey,
    JSON.stringify({
      household_id: String(identity.household_id || clientUserId),
      family_code: String(identity.family_code || ""),
      plan: String(identity.plan || "free"),
      recovery_contact: String(identity.recovery_contact || ""),
      updated_at: new Date().toISOString(),
    })
  );
}

async function initializeApp() {
  applyLanguage();
  await bootstrapIdentity();
  const hasJoinInvite = handleJoinInviteFromUrl();
  await hydrateFamilyRecordsFromBackend();
  await hydrateFamilyProfileFromBackend();
  if (!hasJoinInvite && localStorage.getItem(profileSetupCompletedKey) !== "true") {
    setTimeout(() => openProfileDialog(), 450);
  }
  sendClientEvent("app_open", {
    output_language: appLanguage,
    user_agent: navigator.userAgent.slice(0, 160),
    device_id: deviceUserId,
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

initializeApp();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/static/sw.js").catch(() => {
      // Offline shell is useful but not required for core usage.
    });
  });
}
