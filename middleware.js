var json = require('./db.json'); //with path

module.exports = function (req, res, next) {
	var newValue = "value" + 1;
	json["nodes"] = newValue;
  /*
  if (req.method === 'POST') {
    return res.jsonp(json.InquiryStatus)
  }
  */
  next()
}