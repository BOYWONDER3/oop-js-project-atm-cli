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

async function main() { const accountName = await CommandLine.ask(
        'Which account would like to access?'
        )
        const account = await Account.find(accountName)
        if (account == null) account = await promptCreateAcccount(accountName)
        if (account != null) await promptTask(account)
}

async function promptCreateAcccount(accountName) {
  const response = await CommandLine.ask('That account does not exist, would you like to create it? (yes/no)')

  if (response === 'yes') {
   return await Account.create(accountName)
  }
}

async function promptTask(account) {
    const response = await CommandLine.ask(
        'what would like to do? (view/deposit/withdraw)'
        )
    if(response === 'deposit') {
        const amount = parseFloat(await CommandLine.ask('how much?'))
       await account.deposit(amount)
       CommandLine.print('Your balance is ${account.balance}')
    }

    if(response === 'withdraw') {
        const amount = parseFloat(await CommandLine.ask('how much?'))
       await account.deposit(amount)
       CommandLine.print('Your balance is ${account.balance}')
    }
}

main()