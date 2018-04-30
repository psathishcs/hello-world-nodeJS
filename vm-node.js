'use strict';
var code = `
        // global script scope 
        function nop(){
        };
        var i = 10000000;
        while(i--){
            nop(); // access the global scope 
        }
    `;

    var sandbox = {
        process: 'this baby',
        require: 'that'
    };

    console.time('eval');
    eval(code);
    console.timeEnd('eval');

    const vm = require('vm');
    var context = vm.createContext();
    var script = new vm.Script(code);

    console.time('vm');
    script.runInContext(context);
    console.timeEnd('vm');

    console.time('vm1');
    script.runInContext(context, sandbox);
    console.timeEnd('vm1');

    