
const regCheck = (req, res, next) => {
  const { username, password, rePassword, email } = req.body;
  // 2. 正则校验
  const usernameReg = /^\w{5,15}$/;
  const passwordReg = /^\w{5,20}$/;
  const emailReg = /^\w{3,10}@\w{2,5}\.com$/;

  const isRegister = req.path === '/register';

  // 进行校验
  if (!usernameReg.test(username)) {
    res.send('用户名不符合规范');
    return;
  }
  if (!passwordReg.test(password)) {
    res.send('密码不符合规范');
    return;
  }
  if (isRegister && !emailReg.test(email)) {
    res.send('邮箱不符合规范');
    return;
  }
  if (isRegister && password !== rePassword) {
    res.send('两次密码输入不一致，请重新输入');
    return;
  }
  // 正则校验通过
  next();
};

module.exports = regCheck;