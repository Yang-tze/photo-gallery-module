const redis = require("redis"),
const client = redis.createClient();

client.on("error", function (err) {
  console.log("Error " + err);
});

const getQueryCache = (key, next) => {
	client.get('postgres:' + key, function (err, result) {
		console.log(err, result);
		if (err || !result) return next(err);
		return next(null, JSON.parse(result));
	});
}

const setQueryCache = (key, ttl, data, next) => {
	console.log(key);
	client.setex('postgres:' + key, ttl, JSON.stringify(data), function(err, result) {
		if (err || !result) return next(err);
		return next(null, result);
	});
}

module.exports = {
  getQueryCache,
  setQueryCache
}

