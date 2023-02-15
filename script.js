// 1. Ask for account = DONE
// 2. If account does not exist, ask to create account
// 3. Ask what they want to do
// 4. Execute command
//  a. View
//  b. Withdraw
//  c. Deposit

// Account
const Account = require('./Account')
const CommandLine = require('./CommandLine')

async function main() {

    const accountName = await CommandLine.ask(
        'Which account would like to access?'
        )
        const account = await Account.find(accountName)
        if (account == null)
        if (account) {
            console.log('Found account')
        } else {
            console.log('Cannot find')
        }
}

main()