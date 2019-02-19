const auxValues ={
    halfOfPercent: 0.005,
    maxCardLength: 3
};
function userCard(cardNumber) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = cardNumber;

    function getCardOptions() {
        return {
            key,
            balance,
            transactionLimit,
            historyLogs
        }
    }
    function putCredits(addMoney) {
        addToHistory(addMoney, 'Received credits');
        balance += addMoney;
        return balance;
    }
    function takeCredits(takeMoney) {
        if (balance >= takeMoney) {
            addToHistory(takeMoney, 'Withdrawal of credits');
            balance -= takeMoney;
            return balance;
        } else {
            console.error('Not enough credits on balance for this operation');
        }
    }
    function setTransactionLimit(setLimit) {
        addToHistory(setLimit, 'Transaction limit change');
        transactionLimit = setLimit;
        return transactionLimit;
    }
    function transferCredits(creditsToTransfer, card) {
        if (balance >= creditsToTransfer) {
            let money = creditsToTransfer + creditsToTransfer * auxValues.halfOfPercent;
            balance -= money;
            let addToCard = card.putCredits(creditsToTransfer);
            addToHistory(money, 'Withdrawal of credits');
            return {
                money,
                addToCard
            }
        } else {
            console.error('Not enough credits on balance for this operation');
        }
    }
    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    };
    function addToHistory(amountOfMoney, type){
        return historyLogs.push({
            operationType: type,
            credits: amountOfMoney,
            operationTime: new Date().toLocaleString('en-GB')
        });
    }
}

class UserAccount {

    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard() {
        if (this.cards.length < auxValues.maxCardLength) {
            return this.cards.push(userCard(this.cards.length + 1))
        }
    }
    getCardByKey(key){
        return this.cards[key - 1];
    }
}