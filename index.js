const PugLexer = require("pug-lexer");
const generatePugAST = require("pug-parser");


module.exports = function(sourceCode) {

  const callback = this.async();

  try {

    const tokens = PugLexer(sourceCode);

    const AST = generatePugAST(tokens, { src: sourceCode });

    callback(null, `export default ${ JSON.stringify(AST) }`);

  } catch (error) {

    callback(error);

    return null;

  }

};
