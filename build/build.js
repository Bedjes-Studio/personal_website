const compiler = require("ejs-html-compiler");

compiler.build("./views/pages", "./static", { cache: true });
;