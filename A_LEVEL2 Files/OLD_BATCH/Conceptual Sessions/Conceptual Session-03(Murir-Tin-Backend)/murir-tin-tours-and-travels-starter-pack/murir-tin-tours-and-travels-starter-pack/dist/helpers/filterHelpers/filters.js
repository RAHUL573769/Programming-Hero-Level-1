"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const filter = (model, query) => {
    // queryObj.fields
    const queryObj = Object.assign({}, query);
    const excludeObj = [
        'page',
        'searchTerm',
        'limit',
        'sort',
        'sortBy',
        'sortOrder',
        'fields',
    ];
    excludeObj.forEach((keyword) => delete queryObj[keyword]);
    // excludeObj.forEach((keyword) => delete query[keyword])
    const modelQuery = model.find(queryObj);
    return modelQuery;
};
exports.filter = filter;
