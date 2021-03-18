/* B"H
*/

const list = [
    { name: 'Pavani Gorlagunta'}
];

module.exports.GetAll = ()=> list;
module.exports.Get = (user_id)=> list[user_id];
module.exports.Add = (user)=> {
    list.push(user);
    return user;
}
module.exports.Update = (user_id,user)=> {
    const oldObj = list[user_id];
    
    console.log({oldobj, user});
    const newObj = { ...oldObj, ...user};
    console.log({ newObj})
    list[user_id] = { ...list[user_id], ...user};
    return user;
}
module.exports.Delete = (user_id)=> {
   const user = list[user_id];
    list.splice(user_id,1);
    return user;
}