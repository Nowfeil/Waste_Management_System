const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
 const head = req.headers;
 if ("authorization" in head) {
   const token = req.headers["authorization"].split(" ")[1];

   const decoded1 = jwt.verify(token, "SECRET_KEY");
   if (decoded1.id) {
     req.id = decoded1.id;
     next();
   } else {
     return res.status(401).send("Unauthorized");
   }
 } else {
   res.send("no headers");
 }
}

module.exports = { verifyToken };