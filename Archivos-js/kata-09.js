/*Credit Card Mask*/


function maskify(cc) {
    cc = cc.replace(/\d(?=\d{4})/g, "#");
    return cc;
}



maskify('4556364607935616');

