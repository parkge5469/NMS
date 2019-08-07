// const crypto = require('crypto');
// const ciphers = crypto.getCiphers();
//console.log(ciphers);

const uuidv1 = require('uuid/v1'); // timestamp
const uuidv4 = require('uuid/v4'); // random
// const Int64 = require('node-int64');
const Long = require("long");

const NORMAL = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

// function toIDString(i) {
//     console.info(i);
//     let buf = [];
//     const z = 62;
//     const b = z - 1;
//     do {
//         //let idx = ((i & b) | 0);
//         let idx = (i & b);
//         console.info(idx);
//         buf.push(NORMAL[idx]);
//         i >>>= 6;
//     } while ((i !== 0));

//     let ret = '';
//     for(let idx=buf.length - 1; idx>=0; idx--) {
//         ret += buf[idx];
//     }
//     return ret;
// }

function toIDString(longVal) {
    //console.info(longVal);

    let buf = [];
    const z = 62;
    const b = z - 1;

    do {
        //let idx = ((i & b) | 0);
        //let idx = (i & b);
        let idx = longVal.and(b).toInt();
        //console.info(idx);

        buf.push(NORMAL[idx]);

        longVal = longVal.shiftRightUnsigned(6);
    } while ((longVal.toInt() !== 0));

    let ret = '';
    for(let idx=buf.length - 1; idx>=0; idx--) {
        ret += buf[idx];
    }
    return ret;
}

module.exports.createSeqByUUID = function () {
    let id = '';
    try {
        const buffer = Buffer.alloc(16);
        const uuid = uuidv1(null, buffer, 0);

        let times = Long.fromNumber(new Date().getTime());
        let high = Long.fromBytes(buffer.slice(0, 8));

        id = toIDString(times) + toIDString(high);
    } catch(e) {
        console.log('createSeqByUUID()', e);
    }
    return id;
}

module.exports.createId = function () {
    let id = '';
    try {
        const buffer = Buffer.alloc(16);
        const uuid = uuidv4(null, buffer, 0);

        let high = Long.fromBytes(buffer.slice(0, 8));

        id = toIDString(high);
    } catch(e) {
        console.log('createId()', e);
    }
    return id;
}

module.exports.createLongId = function () {
    let id = '';
    try {
        const buffer = Buffer.alloc(16);
        const uuid = uuidv4(null, buffer, 0);

        // console.log(buffer);
        // console.log(buffer.slice(0, 8));
        // console.log(buffer.slice(8, 16));

        //const buffer = Buffer.from(newUuid, 'hex');

        let high = Long.fromBytes(buffer.slice(0, 8));
        let low = Long.fromBytes(buffer.slice(8, 16));

        // let high = Long.fromString("-8676893525634235453");
        // let low = Long.fromString("-9202511345379061548");

        id = toIDString(high) + toIDString(low);
    } catch(e) {
        console.log('createLongId()', e);
    }
    return id;
}

module.exports.toST = function (sha) {
    let id = '';
    try {
        // 1. raw byte array --> 그대로 사용 Buffer
        // 2. hex --> hex 데이터를 raw byte 로 Buffer, iconv
        const buffer = sha
        const len = buffer.length / 8;
        for(let i=0; i<len; i++) {
            let start = i * 8;
            let end = start + 8;
            let longVal = Long.fromBytes(buffer.slice(start, end));

            id += toIDString(longVal);
        }
    } catch(e) {
        console.log('toST()', e);
    }
    return id;
}

/*
function doTest() {
    const crypto = require('crypto');

    let sha = crypto.createHmac('sha256', 'asdf').update('test37426426426336262665465464646464646464646464226242365632').digest();
    console.log(sha);
    console.log(sha.length);
    console.log(module.exports.toST(sha));
    console.log(crypto.createHmac('sha256', 'asdf').update('test37426426426336262665465464646464646464646464226242365632').digest('hex'));
}

doTest();
*/