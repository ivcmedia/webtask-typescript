import * as ts from 'typescript';


declare var module:any;

function TypescriptCompiler(options, cb) {
    let result = ts.transpileModule(options.script, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
    options.nodejsCompiler(result.outputText, cb);
};

module.exports = TypescriptCompiler;