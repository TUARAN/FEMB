const fs = require("fs")
const parseByString = require("bookmark-file-parser").parseByString

const dirname = "src/data/bm.html"
const content = fs.readFileSync(dirname, "utf-8")
const data = parseByString(content)

var out = "export const bm="+JSON.stringify(data);
fs.writeFile('src/data/bm.js', out, (err) => {
  if (err) {
    console.log('写入文件操作失败');
  } else {
    console.log('写入文件操作成功');
  }
});