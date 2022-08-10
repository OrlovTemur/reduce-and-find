let bank = [
    {
        name: "uztelecom",
        budget: 200000,
        tax: 12,
        expensesPerYear: [
            {
                title: "rent",
                total: 13000,
            },
            {
                title: "salaries",
                total: 85000,
            },
            {
                title: "furniture",
                total: 15000,
            },
        ],
    },
    {
        name: "artel",
        budget: 500000,
        tax: 12,
        expensesPerYear: [{
                title: "rent",
                total: 15000,
            },
            {
                title: "salaries",
                total: 150000,
            },
            {
                title: "furniture",
                total: 25000,
            },
        ],
    },
    {
        name: "gm",
        budget: 1000000,
        tax: 12,
        expensesPerYear: [{
                title: "rent",
                total: 30000,
            },
            {
                title: "salaries",
                total: 350000,
            },
            {
                title: "furniture",
                total: 90000,
            }
        ]
    }
]


let budget_arr = []

for(let item of bank){
    const result = item.expensesPerYear.reduce((a, b) => {
        return a + b.total
    },0) / 12;
    const result2 = item.budget / 100 * 12 
    budget_arr.push(result2)
}

let max = Math.max(...budget_arr)
let min = Math.min(...budget_arr)

console.log(budget_arr)


max = bank.find(item => item.budget == max * 100 / 12)
min = bank.find(item => item.budget == min * 100 / 12)

console.log(max,min)
