'use strict';

/**
 * `isAuthenticated` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.

 const {body}= ctx.request;
 console.log(body);
 let obj;
 console.log(ctx.state.user.id);
 const id= ctx.state.user.id;

 body["user"]=id;
 console.log(ctx.state.user);
 console.log(body);
 //if(body.user.id!=ctx.state.user.id){
   //ctx.unauthorized("Unauthorized access!");
 //}
 //else{
  //console.log('In isAuthenticated policy.');
 //}
 await next();
};
