/*
  1. 打开浏览器
  2. 新建一个标签页
  3. 输入url地址
  4. 等待页面加载完成，开始爬取数据
  5. 关闭浏览器
 */
const puppeteer = require('puppeteer');

(async () => {
  // 1. 打开浏览器
  const browser = await puppeteer.launch({
    headless: false
  });
  // 2. 新建一个标签页
  const page = await browser.newPage();
  // 3. 输入url地址
  await page.goto('https://movie.douban.com/cinema/nowplaying/shanghai/');
  // 4. 开始爬取数据
  const result = await page.evaluate(() => {
    const result = [];
    // 爬取数据。
    $('#nowplaying .lists>li').each(function (index, item) {
      const $item = $(item);
      const img = $item.find('.poster img').attr('src');
      const title = $item.find('.stitle a').text().trim();
      const rating = $item.find('.subject-rate').text().trim();
      result.push({
        img,
        title,
        rating
      })
    });

    return result;
  });

  console.log(result);

  await browser.close();
})();

