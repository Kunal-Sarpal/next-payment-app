import  express from "express";

const app = express();

app.get("/hdfcWebHook", (req, res) => {
    const paymentInformation = {
        token: req.body.token,
        userId:req.body.user_identifier,
        amount: req.body.amount
    };
})


app.listen(3333)