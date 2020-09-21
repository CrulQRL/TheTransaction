import { SortType } from 'constants/index';

export const sortTransactions = (transactions, sortType) => {
    var newTransaction = [...transactions];
    switch(sortType) {
        case SortType.name_asc:
            newTransaction.sort((a,b) => (a.beneficiary_name > b.beneficiary_name) ? 1 : ((b.beneficiary_name > a.beneficiary_name) ? -1 : 0));
            break;
        case SortType.name_des:
            newTransaction.sort((a,b) => (a.beneficiary_name < b.beneficiary_name) ? 1 : ((b.beneficiary_name < a.beneficiary_name) ? -1 : 0));
            break;
        case SortType.date_asc:
            newTransaction.sort((a,b) => (a.created_at > b.created_at) ? 1 : ((b.created_at > a.created_at) ? -1 : 0));
            break;
        case SortType.date_des:
            newTransaction.sort((a,b) => (a.created_at < b.created_at) ? 1 : ((b.created_at < a.created_at) ? -1 : 0));
            break;
    }

    return newTransaction;
}

export const searchTransactions = (transactions, query) => {
    var lowerCaseQuery = query.toLowerCase();
    var searchableItems = [];
    var newTransactions = [];

    transactions.forEach(element => {
        var content = `${element.beneficiary_name} ${element.sender_bank} ${element.beneficiary_bank} ${element.amount}`;
        searchableItems.push(content.toLowerCase());
    });
    console.log('searchable Item', searchableItems);

    searchableItems.forEach((element, index) => {
        if (element.indexOf(lowerCaseQuery) !== -1) {
            newTransactions.push(transactions[index]);
        }
    });

    console.log('newTransactions', newTransactions);

    return newTransactions;
}