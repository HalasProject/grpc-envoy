/**
 * @fileoverview gRPC-Web generated client stub for book
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.19.1
// source: book.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.book = require('./book_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.book.BookServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.book.BookServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.book.GetBookRequest,
 *   !proto.book.Book>}
 */
const methodDescriptor_BookService_GetBook = new grpc.web.MethodDescriptor(
  '/book.BookService/GetBook',
  grpc.web.MethodType.UNARY,
  proto.book.GetBookRequest,
  proto.book.Book,
  /**
   * @param {!proto.book.GetBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.book.Book.deserializeBinary
);


/**
 * @param {!proto.book.GetBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.book.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.book.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.book.BookServiceClient.prototype.getBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/book.BookService/GetBook',
      request,
      metadata || {},
      methodDescriptor_BookService_GetBook,
      callback);
};


/**
 * @param {!proto.book.GetBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.book.Book>}
 *     Promise that resolves to the response
 */
proto.book.BookServicePromiseClient.prototype.getBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/book.BookService/GetBook',
      request,
      metadata || {},
      methodDescriptor_BookService_GetBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.book.ListBooksRequest,
 *   !proto.book.BookList>}
 */
const methodDescriptor_BookService_ListBooks = new grpc.web.MethodDescriptor(
  '/book.BookService/ListBooks',
  grpc.web.MethodType.UNARY,
  proto.book.ListBooksRequest,
  proto.book.BookList,
  /**
   * @param {!proto.book.ListBooksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.book.BookList.deserializeBinary
);


/**
 * @param {!proto.book.ListBooksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.book.BookList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.book.BookList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.book.BookServiceClient.prototype.listBooks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/book.BookService/ListBooks',
      request,
      metadata || {},
      methodDescriptor_BookService_ListBooks,
      callback);
};


/**
 * @param {!proto.book.ListBooksRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.book.BookList>}
 *     Promise that resolves to the response
 */
proto.book.BookServicePromiseClient.prototype.listBooks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/book.BookService/ListBooks',
      request,
      metadata || {},
      methodDescriptor_BookService_ListBooks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.book.AddBookRequest,
 *   !proto.book.Book>}
 */
const methodDescriptor_BookService_AddBook = new grpc.web.MethodDescriptor(
  '/book.BookService/AddBook',
  grpc.web.MethodType.UNARY,
  proto.book.AddBookRequest,
  proto.book.Book,
  /**
   * @param {!proto.book.AddBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.book.Book.deserializeBinary
);


/**
 * @param {!proto.book.AddBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.book.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.book.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.book.BookServiceClient.prototype.addBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/book.BookService/AddBook',
      request,
      metadata || {},
      methodDescriptor_BookService_AddBook,
      callback);
};


/**
 * @param {!proto.book.AddBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.book.Book>}
 *     Promise that resolves to the response
 */
proto.book.BookServicePromiseClient.prototype.addBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/book.BookService/AddBook',
      request,
      metadata || {},
      methodDescriptor_BookService_AddBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.book.UpdateBookRequest,
 *   !proto.book.Book>}
 */
const methodDescriptor_BookService_UpdateBook = new grpc.web.MethodDescriptor(
  '/book.BookService/UpdateBook',
  grpc.web.MethodType.UNARY,
  proto.book.UpdateBookRequest,
  proto.book.Book,
  /**
   * @param {!proto.book.UpdateBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.book.Book.deserializeBinary
);


/**
 * @param {!proto.book.UpdateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.book.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.book.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.book.BookServiceClient.prototype.updateBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/book.BookService/UpdateBook',
      request,
      metadata || {},
      methodDescriptor_BookService_UpdateBook,
      callback);
};


/**
 * @param {!proto.book.UpdateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.book.Book>}
 *     Promise that resolves to the response
 */
proto.book.BookServicePromiseClient.prototype.updateBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/book.BookService/UpdateBook',
      request,
      metadata || {},
      methodDescriptor_BookService_UpdateBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.book.DeleteBookRequest,
 *   !proto.book.Book>}
 */
const methodDescriptor_BookService_DeleteBook = new grpc.web.MethodDescriptor(
  '/book.BookService/DeleteBook',
  grpc.web.MethodType.UNARY,
  proto.book.DeleteBookRequest,
  proto.book.Book,
  /**
   * @param {!proto.book.DeleteBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.book.Book.deserializeBinary
);


/**
 * @param {!proto.book.DeleteBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.book.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.book.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.book.BookServiceClient.prototype.deleteBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/book.BookService/DeleteBook',
      request,
      metadata || {},
      methodDescriptor_BookService_DeleteBook,
      callback);
};


/**
 * @param {!proto.book.DeleteBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.book.Book>}
 *     Promise that resolves to the response
 */
proto.book.BookServicePromiseClient.prototype.deleteBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/book.BookService/DeleteBook',
      request,
      metadata || {},
      methodDescriptor_BookService_DeleteBook);
};


module.exports = proto.book;

