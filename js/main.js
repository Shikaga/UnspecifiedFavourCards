function generateSha(message) {
    var shaObj = new jsSHA(message, "TEXT");
    var hash = shaObj.getHash("SHA-512", "HEX");
    return hash;
}

emitter = new emitr();

this.favorArray = ko.observableArray([
    new Favor("ce3551a8d999a88480ba1e417a4e17f79a0bb029167b6d753289bb0f76ce40e9bf9e4b8f3c47e6249600976879c5311c21772dd4f6fdc9dd8d31e55eca1e78b7",
        "Unspecified Favor 1", null, null, false),
    new Favor("465da7b2c3785a0b13f24be81c5b02ab784ac61e5bd88c74607ccedb45faa2f59675b9164de06c44aafaa4dab40ceb4277723867bfe3258e6b926bc22fd89a81",
        "Unspecified Favor 2", null, null, false),
    new Favor("3fb0e6d1d27ee4734892dc1dc7c58719e1f28b8f45d1cbec1c8af1b1ab18bdf849aca3e2637db188ec9ad958f8cbbe454fb652e18f77023d15c449dd89ef0ccc",
        "Unspecified Favor 3", null, null, false),
    new Favor("2eacffa23839e17b775abd8afcfabaa4ea95bdd208096a58c5bdb9bbae3771ed7b7d474e23fa2b77398e8ef20b05a6bb109a8ee64ccb33e7ab6715c7381755c0",
            "Unspecified Favor 4 - Deactivated until 2030", null, null, false),
    new Favor("b3a82caa820fd138d9e41b83e5e4d0b5a65bb3044fd74b9c74a8a0a86b534cd77aa1be11b1d1dfd626d1db3dee37747b92811364b511648df8337f2a99235e56",
                "Unspecified Favor 5 - Deactivated until 2032", null, null, false),
    new Favor("1e7cc2c503dbfc13255924dde56f0ec99abe8449142b74b44a0a32bf285261afb72d088c34de64f1f59e5398644e7060bfc342d49d4a60441020d478ec189010",
        "Test Favor", null, null, false)
]);
