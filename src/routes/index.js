const express = require('express');
const router = express.Router();


router.get('/', (Req, Res) => {
    Res.redirect('/ejercicie1')
});

router.get('/ejercicie1', (Req, Res) => {
    Res.render('ejercicie1');
});

router.get('/ejercicie2', (Req, Res) => {
    Res.render('ejercicie2');
});

router.post('/ejercicie2', (Req, Res) => {


    if (!Req.body.numero1 || !Req.body.numero2) {
        return Res.redirect('/ejercicie2')
    }



    const x = parseInt(Req.body.numero1);
    const y = parseInt(Req.body.numero2);

    var LIST = "";

    for ( let i=x ; i<=y ; i++ ) {
        LIST += `<a href="/showTable?value=${i}">${i}</a><br>`;
    }

    Res.send(LIST);
});

router.get('/showTable', (Req, Res) => {

    if (!Req.query.value) {
        return Res.redirect('/ejercicie2')
    }



    const x = parseInt(Req.query.value);
    var LIST = "";

    for ( let i=1 ; i<=10; i++ ) {
        LIST += `${i} * ${x} = ${(i*x)} <br>`;
        
    }

    Res.send(LIST);
});



module.exports = router;