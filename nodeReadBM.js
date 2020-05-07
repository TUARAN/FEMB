/*const parseByPath = require("bookmark-file-parser").parseByPath

const dirname = "./bookmark/opera.html"
const data = parseByPath(dirname)*/

const fs = require("fs")
const parseByString = require("bookmark-file-parser").parseByString

const dirname = "src/mock/bookmark/opera_2020_5_7_fix.html"
const content = fs.readFileSync(dirname, "utf-8")
const data = parseByString(content)

var out = "export const bm="+JSON.stringify(data);
fs.writeFile('src/mock/bm.js', out, (err) => {
  if (err) {
    console.log('写入文件操作失败');
  } else {
    console.log('写入文件操作成功');
  }
});