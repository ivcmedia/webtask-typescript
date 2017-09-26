import * as ts from 'typescript';


declare var module:any;

function TypescriptCompiler(options, cb) {
    return cb(null, function (cb) {
      const source = options.script;
      let result = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
      cb(null, result.outputText);
    });
};

module.exports = TypescriptCompiler;