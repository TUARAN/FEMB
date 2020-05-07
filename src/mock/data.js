import {
    bm
} from './bm.js'

let catalogArr = []
const bmArr = JSON.parse(JSON.stringify(bm))[0].children
bmArr.map((item, index) => {
    let arr1st = [];
    item.children.map((itemChild, indexChild) => {
        let arr2nd = []
        itemChild.children.map((itemGrandChild, indexGrandChild) => {
            var nameAndDes = []
            nameAndDes = itemGrandChild.name.split("-") // 分割 name 和 des
            arr2nd.push({
                name: nameAndDes[0], // 三级目录名 —— 链接
                key: indexGrandChild, // 三级目录 key
                des: nameAndDes[1],
                imgSrc: itemGrandChild.icon,
                href: itemGrandChild.href
            })
        })
        arr1st.push({
            name2nd: itemChild.name, // 二级目录名 —— 标签
            key2nd: indexChild, // 二级目录 key
            arr2nd: arr2nd
        })
    })
    catalogArr.push({
        name1st: item.name, // 一级目录名 —— 大纲
        key1st: index, // 一级目录 key
        arr1st: arr1st // 二级目录
    })
})

export default catalogArr

/*export const catalogArr = [{
        name1st: '1', // 一级目录名 —— 大纲
        key1st: 0, // 一级目录 key
        arr1st: [{
                name2nd: '1-1', // 二级目录名 —— 标签
                key2nd: 0, // 二级目录 key
                arr2nd: [{
                        name: '1-1-1', // 三级目录名 —— 链接
                        imgSrc: require('../assets/img/main/frontend.png'),
                        des: 'This in homepage.',
                        href: "http://47.107.72.184/index.html"
                    },
                    {
                        name: '1-1-2',
                        imgSrc: '',
                        des: '',
                        href: ''
                    },
                ]
            },
            {
                name2nd: '1-2',
                key2nd: 1,
                arr2nd: []
            },
            {
                name2nd: '1-3',
                key2nd: 2,
                arr2nd: []
            }
        ]
    },
    {
        name1st: '2',
        key1st: 1,
        arr1st: [{
            name2nd: '2-1',
            key2nd: 0,
            arr2nd: [{
                name: '2-1-1',
                imgSrc: '',
                des: '',
                href: ''
            }]
        }]
    },
    {
        name1st: '3',
        key1st: 2,
        arr1st: [{
            name2nd: '3-1',
            key2nd: 0,
        }]
    }
]*/