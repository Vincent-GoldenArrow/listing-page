const roundDetailsData = {
    details:[
        [{field: "Transaction ID:", content: "#331"}],
        [{field: "Timestamp:", content: "2025/08/02 14:02:08"}],
        [{field: "Total stake:", content: "30,000"}],
        [{field: "Total win:", content: "200,000"}],
        [{field: "Free spin count:", content: "5"}],
    ]
}

export type RoundDetailsData = {
    transaction_id: number;
    timestamp:string;
    stake_amount:number;
    win_amount:number;
    free_spin_count: number;
}

export default roundDetailsData;