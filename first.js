// [  {
//     "id": "1002",
//     "type": "Chocolate"
//   }, {
//   "id": "5002",
//   "type": "Chocolate"
// }]
const obj = {
    "items": {
        "item": [
            {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "batters": {
                    "batter": [
                        {
                            "id": "1001",
                            "type": "Regular"
                        },
                        {
                            "id": "1002",
                            "type": "Chocolate"
                        }
                    ]
                },
                "topping": [
                    {
                        "id": "5002",
                        "type": "Chocolate"
                    }
                ]
            }
        ]
    }
}
console.log(obj)  