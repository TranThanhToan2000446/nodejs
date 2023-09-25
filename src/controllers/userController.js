import express from "express";
const listUser = (req,res) =>{
    let trang = parseInt(req.params.trang)
    let from = (trang - 1) * 5 + 1;
    let to = trang * 5;
    console.log('test',to)
    return res.render('index',{data:{title:'Danh sách tài khoản',page:'listUser',test:from ,to:to } });

}
const login = (req,res) =>{
    return res.render('index',{data:{title:'Đăng nhập',page:'login'} });
}
const newUser = (req,res) =>{
    return res.render('index',{data:{title:'Tạo tài khoản',page:'newUser'} });
}
const detailUser = (req,res) =>{
    let user = req.params.username
    return res.render('index',{data:{title:'Chi tiết người dùng',page:'detailUser',params: user} });
}
export default {
    listUser,
    login,
    newUser,
    detailUser
}