const User = require("../model/user");

module.exports.profile=function(req,res){
    return res.end("<h1>profile page</h1>");
}

module.exports.signUp=function(req,res){
    return res.render('signup',{title:"signup"});
}

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email}).then((user)=>{
          if(!user){
            User.create(req.body).then(()=>{
                 return res.redirect('/user/profile');
            }).catch(err=>{
                console.log('error in creating user',err)
                return;
            })
          }
    }).catch((err)=>{
        console.log(`error in singing up ${err}`);
        return;
    })

}