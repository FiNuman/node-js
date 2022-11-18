u_d_m.find({ name: { $regex: new RegExp('^' + "Search Keyword Here" + '.*', 'i') } }).lean().exec();
search_result = search_result.slice(0, 10)
