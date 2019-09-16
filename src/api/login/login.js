export const logins=(obj)=>{
    let { name, password } = obj;
    if(!password||!name) return {code:"500",msg:"账号密码错误"}
    let nameAge=navigator.userAgent;
    let arr=["Trident","Gecko","Presto","Webkit","Blink"]
    let txt=arr.filter(v=>{if(nameAge.lastIndexOf(v)!==-1){return v}})
    if(name=="admin") return {
        code:"200",
        data:{
            name:"admin",
            token:"admin",
            img:'/timg.jpg',
            email:"1282845084@qq.com",
            personalized:"admin的个人后台系统",
            txt:`内核:${txt}`
        }
    }
    if(name=="wangziyu") return {
        code:"200",
        data:{
            name:"wangziyu",
            token:"wangziyu",
            img:'/aaa.jpg',
            email:"wzt1282845084@163.com",
            personalized:"wangziyu的个人后台系统",
            txt:`内核:${txt}`
        }
    }
    return {
        code:"404",
        msg:"没有找到"
    }
}