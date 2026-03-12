const productmodel1=require('../models/productmodel')

//get product api
exports.getProducts= async(req,res,next)=>{
   const query= req.query.keyword?{ name : {
        $regex:req.query.keyword,
        $options:'i'
    }}:{}

    const products= await productmodel1.find(query);

    res.json({
                success :true,
                products
    
 } )}

//get single product api
exports.getsingleProducts= async(req,res,next)=>{

try{
    console.log(req.params.id,'ID')
    const product=await productmodel1.findById(req.params.id);
    res.json({
          success :true,
          product
    
 } )
} catch(error){
    res.json({
        success:false,
        message:'unable to get element for that id'
    })
}
}