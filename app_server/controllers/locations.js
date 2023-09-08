const homelist = (req,res) =>{
    res.render('index',{title:"Home Page"});
};
const locationInfo = (req,res) =>{
    res.render('index',{title:"Location Info"});
};
const addReview = (req,res) =>{
    res.render('index',{title:"Review page"});
};
module.exports = {
    homelist,locationInfo,addReview 
};