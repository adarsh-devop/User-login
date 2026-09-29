const allowRoles = (...allowRoles) => {

  return (req, res, next) => {

    if (!allowRoles.includes(req.user.role)) {

      return res.json({
        message: "you not allowed to prform this action",

      });
    }

    next();
  };
};


export default allowRoles