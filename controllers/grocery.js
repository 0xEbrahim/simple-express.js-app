const groceryList = [
    {
        item:"milk",
        quantity:2
    },
    {
        item:'tea',
        quantity:5
    }
];

const getGroceries = (req , res) => {
    res.send(groceryList);  
}

const addGrocery = (req , res) => {
    const groc = req.body;
    if(groc == {}){
        res.send("Invalid..");
        res.sendStatus(401);
    }else{
        groceryList.push(groc);
        res.sendStatus(201);
    }
}

const getSingleGroc = (req, res) => {
    console.log(req.cookies);

    const { id } = req.params;
      const groceryItem = groceryList.find( (g) => g.item === id);
      res.send(groceryItem);
}
const addToCart = (req, res) => {
    const { item , quantity } = req.body;
    const cartItem =  {item , quantity};
    const { cart } = req.session;
    if(cart){
        req.session.cart.items.push(cartItem)
    }else {
        req.session.cart = {
            items : [cartItem]
        }
    }
     res.send(201)
}

const getFromCart = (req , res) => {
    const { cart } = req.session ;
    if(!cart) {
        res.send({msg : "cart empty"})
    }else
        res.send(cart)
}
module.exports = {
    getGroceries,
    addGrocery,
    getSingleGroc,
    addToCart,
    getFromCart
};