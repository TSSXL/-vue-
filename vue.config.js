
module.exports = {
  assetsDir: "sunsemweb",
  pages: {
    index: {
      entry: 'src/page/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    about: {
      entry: 'src/page/about/main.js',
      template: 'public/about.html',
      filename: 'about.html',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    },
    contact: {
      entry: 'src/page/contact/main.js',
      template: 'public/contact.html',
      filename: 'contact.html',
      chunks: ['chunk-vendors', 'chunk-common', 'contact']
    },
    newsInfo: {
      entry: 'src/page/newsInfo/main.js',
      template: 'public/newsInfo.html',
      filename: 'newsInfo.html',
      chunks: ['chunk-vendors', 'chunk-common', 'newsInfo']
    },
    pros: {
      entry: 'src/page/pros/main.js',
      template: 'public/pros.html',
      filename: 'pros.html',
      chunks: ['chunk-vendors', 'chunk-common', 'pros']
    },
    pro: {
      entry: 'src/page/products/main.js',
      template: 'public/pro.html',
      filename: 'pro.html',
      chunks: ['chunk-vendors', 'chunk-common', 'pro']
    },
    sale: {
      entry: 'src/page/sale/main.js',
      template: 'public/sale.html',
      filename: 'sale.html',
      chunks: ['chunk-vendors', 'chunk-common', 'sale']
    },
    news: {
      entry: 'src/page/news/main.js',
      template: 'public/news.html',
      filename: 'news.html',
      chunks: ['chunk-vendors', 'chunk-common', 'news']
    },
    proInfo: {
      entry: 'src/page/proInfo/main.js',
      template: 'public/proInfo.html',
      filename: 'proInfo.html',
      chunks: ['chunk-vendors', 'chunk-common', 'proInfo']
    },
    job: {
      entry: 'src/page/job/main.js',
      template: 'public/job.html',
      filename: 'job.html',
      chunks: ['chunk-vendors', 'chunk-common', 'job']
    }
  }
}
