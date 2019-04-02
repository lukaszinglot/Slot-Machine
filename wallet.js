class Wallet {
    constructor(money) {
        let _money = money;
        //actual value of the wallet
        this.getWalletValue = () => _money;
        //check players wallet value
        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false;
        }
        //Add or subtract value in wallet
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("nieprawidlowy typ dzialania")
                }
            } else {
                console.log(typeof value);
                throw new Error("nieprawidlowa liczba")
            }
        }
    }
}