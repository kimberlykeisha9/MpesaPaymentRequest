import { reversalRequest } from "./MpesaRequests";

export const transactionTypes = [
  {
    type: 'reversal',
    display: 'Reversal Request',
    description: 'Make an M-Pesa reversal request',
    function: reversalRequest(),
    instruction:
      "Enter your transaction ID, the exact amount sent and the receiver's phone number",
    params: [
      {
        display: 'Transaction ID',
        type: 'transaction-id',
        requireNumeric: false
      },
      {
        display: 'Amount',
        type: 'amount',
        requireNumeric: true
      },
      {
        display: 'Receiver',
        type: 'receiver',
        requireNumeric: false
      }
    ]
  },
  {
    type: 'request-payment',
    display: 'Request a Payment',
    description: 'Send a payment request to a phone number'
  },
  {
    type: 'send-money-payment',
    display: 'Send Money Payment',
    description: 'Make an M-Pesa payment using Send Money'
  },
  {
    type: 'buy-goods-payment',
    display: 'Buy Goods Payment',
    description: 'Make a payment using Buy Goods Till Number'
  },
  {
    type: 'pay-bill-payment',
    display: 'Pay Bill Payment',
    description: 'Make a payment using a Pay Bill'
  }
]
