
const regCheck = (req, res, next) => {
  const { username, password, rePassword, email } = req.body;
  // 2. 正则校验
  const usernameReg = /^\w{5,15}$/;
  const passwordReg = /^\w{5,20}$/;
  const emailReg = /^\w{3,10}@\w{2,5}\.com$/;

  const isRegister = req.path === '/register';
  const name = isRegister ? 'register.pug' : 'login.pug';

  const errMsg = {};

  // 进行校验
  if (!usernameReg.test(username)) {
    errMsg.usernameErr = '用户名不符合规范';
  }
  if (!passwordReg.test(password)) {
    errMsg.passwordErr = '密码不符合规范';
  }
  if (isRegister && !emailReg.test(email)) {
    errMsg.emailErr = '邮箱不符合规范';
  }
  if (isRegister && password !== rePassword) {
    errMsg.rePasswordErr = '两次密码输入不一致';
  }

  if (Object.keys(errMsg).length) {
    res.render(name, errMsg);
    return;
  }

  // 正则校验通过
  next();
};

module.exports = regCheck;