/**
 * BookController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	search: function (req, res) {
		let matchCriteria = {
				'contains': req.query.term
	  };
		Book.find({
			or : [
				{ title: matchCriteria },
		    { author: matchCriteria },
				{ description: matchCriteria },
		    { price: matchCriteria },
				{ category: matchCriteria },
		    { isbn: matchCriteria }
		  ]
		}).exec(function(err, data){
			if(err) return res.send(err);
			return res.json(data);
		});
  }
};
