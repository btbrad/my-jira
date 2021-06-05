module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    const { username, password } = req.body;
    if (username === "Brad" && password === "123456") {
      return res.status(200).json({
        user: {
          token: "bea1234354drt3453245we14kh",
        },
      });
    } else {
      return res.status(400).json({
        message: "用户名和密码错误",
      });
    }
    next();
  }
};
