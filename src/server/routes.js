const postPredictHandler = require('../server/handler');
const getHistoryHandler = require('../server/handler');
 
const routes = [
    {
		path: "/predict",
		method: "POST",
		handler: postPredictHandler,
		options: {
			payload: {
				allow: "multipart/form-data",
				multipart: true,
				maxBytes: 1024 * 1024,
			},
		},
	},
	
	{
		path: "/predict/histories",
		method: "GET",
		handler: getHistoryHandler,
	}
	
]
 
module.exports = routes;