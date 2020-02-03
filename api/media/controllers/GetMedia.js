'use strict';

/**
 * A set of functions called "actions" for `GetMedia`
 */

module.exports = {
  // exampleAction: async (ctx, next) => {
    // try {
      // console.log("Hello!!!");
       //ctx.body = 'ok';
     //} catch (err) {
      // ctx.body = err;
     //}
   //}

 getCount: async(ctx,next) => {
    const obj = ctx.state.user;
    console.log(obj);
    const id= obj.id;
    var result;
    try{
      const data = await strapi.query('media').find({user_in:[id]});
      console.log(data);
      result=data; 
   // const data = await strapi.query('media').model.query(user=>{user.where('id',obj.id);}).fetch();
   // console.log(data);
   //const data = await strapi.query('media).find();
      /* var result=[];
    for(let i=0;i<data.length;i++){
      var med = data[i].user.id;
      console.log(med);   
      if(med==id){
        result.push(data[i]);
        console.log("In IF condition");
        console.log(data[i]);
      }
      
    }
    console.log(result); */
    }catch(err){
      console.log(err);
    }
    ctx.body=result;
  }
};
