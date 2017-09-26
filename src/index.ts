// import * as ts from 'typescript';

export default function (options, cb) {
    return cb(null, function (cb) {
      cb(null, options.script);
    });
};