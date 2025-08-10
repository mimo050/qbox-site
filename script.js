
// Theme toggle
const toggle = document.getElementById('theme-toggle');
toggle?.addEventListener('click', ()=>{
  const root = document.documentElement;
  const light = root.classList.toggle('theme-light');
  try{ localStorage.setItem('qbox-theme', light ? 'light' : 'dark'); }catch(e){}
});
// Restore theme
try{
  const saved = localStorage.getItem('qbox-theme');
  if(saved === 'light'){ document.documentElement.classList.add('theme-light'); }
}catch(e){}

// Simple EN/AR i18n
const dict = {
  ar: {
    hero_text: "QBox هو أداة لتوقيع تطبيقات iOS بدون كمبيوتر لتثبيت واختبار تطبيقات الطرف الثالث بسهولة.",
    btn_download: "تحميل QBox",
    btn_customize: "تخصيص QBox",
    btn_sign: "توقيع بشهادتك",
    video_tutorial: "فيديو شرح",
    unsigned_title: "تحميل QBox (غير موقّع، متوافق مع iOS 26)",
    unsigned_desc: "يعمل على آخر إصدارات iOS. ثبّته بالطريقة التي تفضّلها للتوقيع.",
    download_btn: "تحميل ملف .ipa",
    source_tutorial: "شرح تجهيز السورس",
    customize_title: "تخصيص QBox",
    customize_desc: "أدرج شهادة توقيع iOS صالحة للحصول على أفضل ثبات.",
    customize_btn: "افتح مُخصص QBox",
    ts_title: "QBoxTS 2",
    ts_desc: "استورد TrollStore 2 للتثبيت على الإصدارات المدعومة.",
    ts_import: "استيراد TrollStore 2",
    ts_installer: "مثبت QBoxTS 2",
    ts_support: "يدعم iOS 15.4–15.7.1 و 16.0–16.6.1",
    troll_a: "Troll QBox A",
    troll_a_1: "يدعم iPhone XR/XS–13",
    troll_a_2: "iOS ‏14.0–14.8.1",
    troll_a_3: "iOS ‏15.6 beta 1–5",
    troll_b: "Troll QBox B",
    troll_b_1: "يدعم أي جهاز",
    troll_b_2: "iOS ‏15.0–15.4.1",
    troll_b_3: "iOS ‏15.5 beta 1–4",
    sign_title: "توقيع QBox",
    sign_desc: "وقّع QBox بشهادة p12 الخاصة بك.",
    sign_btn: "فتح أداة التوقيع",
    tools_title: "أدوات",
    tool_check: "التحقق من شهادة iOS",
    tool_change: "تغيير كلمة سر شهادة iOS",
    community_title: "المجتمع",
    enterprise_note: "‏<strong>حساب Enterprise (مجاني)</strong> — إذا فشل التثبيت جرّب التخصيص."
  }
};

function setLang(lang){
  const isAr = lang === 'ar';
  document.documentElement.lang = isAr ? 'ar' : 'en';
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(isAr && dict.ar[key]){
      el.innerHTML = dict.ar[key];
    }else{
      // Reset to English defaults baked in HTML
      // no-op
    }
  });
  document.getElementById('lang-en')?.classList.toggle('active', !isAr);
  document.getElementById('lang-ar')?.classList.toggle('active', isAr);
  try{ localStorage.setItem('qbox-lang', lang); }catch(e){}
}

document.getElementById('lang-en')?.addEventListener('click', ()=>setLang('en'));
document.getElementById('lang-ar')?.addEventListener('click', ()=>setLang('ar'));

try{
  const savedLang = localStorage.getItem('qbox-lang');
  if(savedLang){ setLang(savedLang); }
}catch(e){}
