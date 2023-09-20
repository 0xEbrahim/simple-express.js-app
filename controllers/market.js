
const markets = [
    {
        id : 1,
        store : "Whole food",
        miles : 0.6
    },
    {
        id : 2 ,
        store : "Trader joes",
        miles : 2.5
    },
    {
        id : 3,
        store : "Albertsons",
        miles : 2.8
    },
    {
        id : 4,
        store : "Trader joes",
        miles : 3.5
    },
    {
        id : 5,
        store : "Albertsons",
        miles : 1.8
    }
]


const getMarkets = (req, res) => {
    const { miles } = req.query;
    const parsedMiles = parseInt(miles)
    if(!isNaN(parsedMiles)){
        const filteredMarkets = markets.filter(( el ) => el.miles<parsedMiles); 
        res.send(filteredMarkets);
    }else
        res.send(markets);
}

module.exports = {getMarkets}