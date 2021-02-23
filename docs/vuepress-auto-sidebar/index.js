const fs = require('fs');
const path = require('path');

let basePath = "";

const sidebar = {
    baseOption: undefined,

    getSidebar(HomeTitle = "Home", BasePath="") {
        basePath = BasePath;
        const root = getRoot();

        const dir =
            fs.readdirSync(root)
                .filter(file => {
                    return file !== '.vuepress' && fs.statSync(path.join(root, file)).isDirectory()
                });

        const sidebarRoot = [{
            title: HomeTitle,
            path: !!this.baseOption ? path.join(this.baseOption, basePath) : basePath,
            collapsable: true,
            children: []
        }];

        const sidebarItems = getSidebarItems(dir, root);
        return Array.from(sidebarRoot.concat(sidebarItems));
    }
};


getRootDir = function () {
    return path.join(process.cwd(), basePath);
};

getSidebarItems = function (dir, root) {
    return dir.map((e) => {
        const childDir = path.resolve(root, e);

        return sidebaritem = {
            title: e,
            path: !!sidebar.baseOption ? sidebar.baseOption + e + '/' : '/' + e + '/',
            collapsable: true,
            children: [...fs.readdirSync(childDir)
                .filter(file => !file.includes('.md'))
                .map(c => '/' + e + '/' + c + '/')]
        };
    })
};

getRoot = function () {
    tryFindBase();
    let root;

    if (!!sidebar.baseOption) {
        root = path.join(getRootDir(), sidebar.baseOption)
    } else {
        root = getRootDir()
    }
    return root;
}

tryFindBase = function () {
    try {
        let config = path.join(getRootDir(), '/.vuepress/config.js');
        let contents = fs.readFileSync(config, 'utf8')
        let base = contents.match(/(?<="?base"?:+\s?").+(?=")/)[0]
        sidebar.baseOption = base;
    } catch (err) {
        console.log("Vuepress-auto-sidebar: Base option not found.")
    }
}

module.exports = sidebar;
