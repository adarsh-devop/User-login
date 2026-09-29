import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    console.log("mid working");
    
    const authHeader = req.headers.authorization;   

    if (!authHeader) {
      return res.json({
        message: "Authorization header missing",
      });
    }

    const token = authHeader.split(" ")[1]; //split the header to get the token part
    if (!token) {
      return res.json({
        message: "Token missing",
      });
    }

    const decoded = jwt.verify(     // Checks the JWT and gives back its payload if valid
      token,
      process.env.JWT_SECRET
    );

    // decode = {

    //   userid:"hgashkhgd",
    //   userrole:"admin"
    // }

    req.user = decoded;
    console.log("payload....",req.user);   
    

    next();

  } catch (error) {
    return res.json({
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;