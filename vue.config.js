
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
    lifestyle: {
      entry: 'src/page/lifestyle/main.js',
      template: 'public/lifestyle.html',
      filename: 'lifestyle.html',
      chunks: ['chunk-vendors', 'chunk-common', 'lifestyle']
    },
    lifeInfo: {
      entry: 'src/page/lifeInfo/main.js',
      template: 'public/lifeInfo.html',
      filename: 'lifeInfo.html',
      chunks: ['chunk-vendors', 'chunk-common', 'lifeInfo']
    },
    pros: {
      entry: 'src/page/pros/main.js',
      template: 'public/pros.html',
      filename: 'pros.html',
      chunks: ['chunk-vendors', 'chunk-common', 'pros']
    },
    homeInfo: {
      entry: 'src/page/homeInfo/main.js',
      template: 'public/homeInfo.html',
      filename: 'homeInfo.html',
      chunks: ['chunk-vendors', 'chunk-common', 'homeInfo']
    },
    homecase: {
      entry: 'src/page/homecase/main.js',
      template: 'public/homecase.html',
      filename: 'homecase.html',
      chunks: ['chunk-vendors', 'chunk-common', 'homecase']
    },
    pro: {
      entry: 'src/page/products/main.js',
      template: 'public/pro.html',
      filename: 'pro.html',
      chunks: ['chunk-vendors', 'chunk-common', 'pro']
    },
    collect: {
      entry: 'src/page/collect/main.js',
      template: 'public/collect.html',
      filename: 'collect.html',
      chunks: ['chunk-vendors', 'chunk-common', 'collect']
    },
    newPro: {
      entry: 'src/page/newPro/main.js',
      template: 'public/newPro.html',
      filename: 'newPro.html',
      chunks: ['chunk-vendors', 'chunk-common', 'newPro']
    },
    design: {
      entry: 'src/page/design/main.js',
      template: 'public/design.html',
      filename: 'design.html',
      chunks: ['chunk-vendors', 'chunk-common', 'design']
    },
    proInfo: {
      entry: 'src/page/proInfo/main.js',
      template: 'public/proInfo.html',
      filename: 'proInfo.html',
      chunks: ['chunk-vendors', 'chunk-common', 'proInfo']
    },
    cooperation: {
      entry: 'src/page/cooperation/main.js',
      template: 'public/cooperation.html',
      filename: 'cooperation.html',
      chunks: ['chunk-vendors', 'chunk-common', 'cooperation']
    }
  }
}
