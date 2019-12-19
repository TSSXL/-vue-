
/**
 * lang.js
 */

const BASEURI = '/php';

// 配置网站支持的语言
const langs = {
  en: 'en',
  'zh-cn': 'zh-CN'
}

// en cn 106 63
const languages = {
  en: 'en',
  'zh-CN': 'cn'
}
const tids = {
  en: '106',
  'zh-CN': '63'
}

const getLanguage = lang => {
  return languages[lang] || 'en'
}

/**
 * 获取浏览器的语言设置
 * 如果没找到则返回一个默认值 en
 */
export const getLang = () => {
  let lowerLang = (window.navigator.language ||
    window.navigator.browserLanguage ||
    'en').toLowerCase()

  // default: en
  return langs[lowerLang] || 'en'
}

/**
 * 设置 html 标签的 lang
 */
export const setHtmlLang = lang => {
  // documentElement 根root HTML
  document.documentElement.setAttribute('lang', lang)
}
//
// export const getHomeswiperUrl = lang => {
//   const language = getLanguage(lang)
//   return `${BASEURI}/pic.php?type=%E9%A6%96%E9%A1%B5banner&num=4&language=${language}`
// }
//
// export const getHomeswiperUrl2 = lang => {
//   const language = getLanguage(lang)
//   return `${BASEURI}/pic.php?type=%E6%89%8B%E6%9C%BA%E9%A6%96%E9%A1%B5banner&num=4&language=${language}`
// }

export const getProductstypeUrl = lang => {
  const language = getLanguage(lang)
  const tid = tids[lang] || '106'
  return `${BASEURI}/productstype.php?language=${language}&tid=${tid}&num=100`
}

//获取二级分类
export const getProductstypeUrl2 = (lang,tid) => {
  const language = getLanguage(lang)
  return `${BASEURI}/productstype.php?language=${language}&tid=${tid}&num=100`
}

export const getProducttypeUrl = (tid) => {
  return `${BASEURI}/producttype.php?tid=${tid}`
}

//获取全部分类
export const getProductsUrl = (lang, tid, num, page) => {
  const language = getLanguage(lang)
  return `${BASEURI}/products.php?language=${language}&tid=${tid}&num=${num}&page=${page}`
}

//获取产品详情
export const getProductsInfo = (lang, tid) => {
  const language = getLanguage(lang)
  return `${BASEURI}/product.php?language=${language}&pid=${tid}`
}

//获取新闻详情
export const getNewsInfo = (lang, tid) => {
  const language = getLanguage(lang)
  return `${BASEURI}/new.php?language=${language}&nid=${tid}`
}



//获取全部新闻
export const getNewsUrl = (lang, tid, num, page) => {
  const language = getLanguage(lang)
  return `${BASEURI}/news.php?language=${language}&newstype=${tid}&num=${num}&page=${page}`
}

export const getNewstypeUrl2 = (lang,tid) => {
  const language = getLanguage(lang)
  return `${BASEURI}/news.php?language=${language}&tid=${tid}&num=100`
}



export const getCommonUrl = (lang, tid) => {
  const language = getLanguage(lang)
  return `${BASEURI}/products.php?language=${language}&tid=${tid}&num=100`
}


// 获取不同分类的新闻
export const getN = (lang, type, num) => {
  const language = getLanguage(lang)
  return `${BASEURI}/news.php?type=${type}&num=${num}&language=${language}`
}

//获取图片
export const getPicUrl = (lang, type, num) => {
  const language = getLanguage(lang)
  return `${BASEURI}/pic.php?type=${type}&num=${num}&language=${language}`
}

export const getJobUrl = (lang) => {
  const language = getLanguage(lang)
  return `${BASEURI}/job.php?language=${language}`
}

export const getContent = (id) => {
  return `${BASEURI}/singlepage.php?id=${id}`
}

export const sendInfo = (name,email,msg) => {
  return `${BASEURI}/form.php?name=${name}&email=${email}&msg=${msg}`
}

//搜索关键字
export const getOnePro = (lang,tid,keyword,num,page) => {
  const language = getLanguage(lang)
  return `${BASEURI}/products.php?language=${language}&pid=${tid}&keyword=${keyword}&num=${num}&page=${page}`
}
