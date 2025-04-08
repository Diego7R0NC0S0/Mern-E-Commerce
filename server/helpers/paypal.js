
const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZZ33cvF2CnblWe-v8hOAObmEHf_AzYT8nDrxnAO9pkMakM14aDvn2pofEN_9woTzDasqDSkgEOElpel",
  client_secret: "EHwQEXG-fKIi_ezxM5a7oQKnnBLyT0wGi1868uhGuz5czMNKjhr9VGhJRfbvvpkcHL8FSzuBK7iPMcOL",
});

module.exports = paypal;