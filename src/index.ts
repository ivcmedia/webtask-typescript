import * as ts from 'typescript';


export default function (options, cb) {
    return cb(null, function (cb) {
      const source = options.script;
      let result = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
      cb(null, result.outputText);
    });
};