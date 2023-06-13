

module.exports.profile=function(req,res){
    return res.end("<h1>profile page</h1>");
}

module.exports.signUp=function(req,res){
    return res.render('signup',{title:"signup"});
}