const jwt = require('jsonwebtoken');
const config = process.env;

function verifyToken(roles = []) {
 /* if (typeof roles === 'string') {
    roles = [roles];
  }*/
  return [ 
    
      (req, res, next) => {
        const token = req.body.token || req.query.token || req.headers["x-access-token"];
        
       
        if (!token) {
          return res.status(403).send("Veuiller s'inscrire ou se connecter");
        }
        try {
          const decoded = jwt.verify(token, config.TOKEN_KEY);
          req.user = decoded;
          console.log(roles);
          if (roles.length && !roles.includes(req.user.role)) {
            // user's role is not authorized
            return res.status(401).json({ message: 'Unauthorized' });
          }
        } catch (err) {
          
            return res.status(401).send("Invalid Token");
        }
        return next();
      }
  ];
}
module.exports = verifyToken;