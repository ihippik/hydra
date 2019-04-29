/**
 * ORY Hydra
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here.
 *
 * OpenAPI spec version: latest
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GenericError', 'model/JSONWebKeySet', 'model/Oauth2TokenResponse', 'model/UserinfoResponse', 'model/WellKnown'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GenericError'), require('../model/JSONWebKeySet'), require('../model/Oauth2TokenResponse'), require('../model/UserinfoResponse'), require('../model/WellKnown'));
  } else {
    // Browser globals (root is window)
    if (!root.OryHydra) {
      root.OryHydra = {};
    }
    root.OryHydra.PublicApi = factory(root.OryHydra.ApiClient, root.OryHydra.GenericError, root.OryHydra.JSONWebKeySet, root.OryHydra.Oauth2TokenResponse, root.OryHydra.UserinfoResponse, root.OryHydra.WellKnown);
  }
}(this, function(ApiClient, GenericError, JSONWebKeySet, Oauth2TokenResponse, UserinfoResponse, WellKnown) {
  'use strict';

  /**
   * Public service.
   * @module api/PublicApi
   * @version latest
   */

  /**
   * Constructs a new PublicApi. 
   * @alias module:api/PublicApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the disconnectUser operation.
     * @callback module:api/PublicApi~disconnectUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OpenID Connect Front-Backchannel enabled Logout
     * This endpoint initiates and completes user logout at ORY Hydra and initiates OpenID Connect Front-/Back-channel logout:  https://openid.net/specs/openid-connect-frontchannel-1_0.html https://openid.net/specs/openid-connect-backchannel-1_0.html
     * @param {module:api/PublicApi~disconnectUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.disconnectUser = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oauth2/disconnect', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the discoverOpenIDConfiguration operation.
     * @callback module:api/PublicApi~discoverOpenIDConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WellKnown} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OpenID Connect Discovery
     * The well known endpoint an be used to retrieve information for OpenID Connect clients. We encourage you to not roll your own OpenID Connect client but to use an OpenID Connect client library instead. You can learn more on this flow at https://openid.net/specs/openid-connect-discovery-1_0.html
     * @param {module:api/PublicApi~discoverOpenIDConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WellKnown}
     */
    this.discoverOpenIDConfiguration = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = WellKnown;

      return this.apiClient.callApi(
        '/.well-known/openid-configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the oauth2Token operation.
     * @callback module:api/PublicApi~oauth2TokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Oauth2TokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The OAuth 2.0 token endpoint
     * The client makes a request to the token endpoint by sending the following parameters using the \&quot;application/x-www-form-urlencoded\&quot; HTTP request entity-body.  &gt; Do not implement a client for this endpoint yourself. Use a library. There are many libraries &gt; available for any programming language. You can find a list of libraries here: https://oauth.net/code/ &gt; &gt; Do not the the Hydra SDK does not implement this endpoint properly. Use one of the libraries listed above!
     * @param {String} grantType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.code 
     * @param {String} opts.redirectUri 
     * @param {String} opts.clientId 
     * @param {module:api/PublicApi~oauth2TokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Oauth2TokenResponse}
     */
    this.oauth2Token = function(grantType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'grantType' is set
      if (grantType === undefined || grantType === null) {
        throw new Error("Missing the required parameter 'grantType' when calling oauth2Token");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'grant_type': grantType,
        'code': opts['code'],
        'redirect_uri': opts['redirectUri'],
        'client_id': opts['clientId']
      };

      var authNames = ['basic', 'oauth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = Oauth2TokenResponse;

      return this.apiClient.callApi(
        '/oauth2/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the oauthAuth operation.
     * @callback module:api/PublicApi~oauthAuthCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The OAuth 2.0 authorize endpoint
     * This endpoint is not documented here because you should never use your own implementation to perform OAuth2 flows. OAuth2 is a very popular protocol and a library for your programming language will exists.  To learn more about this flow please refer to the specification: https://tools.ietf.org/html/rfc6749
     * @param {module:api/PublicApi~oauthAuthCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.oauthAuth = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oauth2/auth', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the revokeOAuth2Token operation.
     * @callback module:api/PublicApi~revokeOAuth2TokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke OAuth2 tokens
     * Revoking a token (both access and refresh) means that the tokens will be invalid. A revoked access token can no longer be used to make access requests, and a revoked refresh token can no longer be used to refresh an access token. Revoking a refresh token also invalidates the access token that was created with it. A token may only be revoked by the client the token was generated for.
     * @param {String} token 
     * @param {module:api/PublicApi~revokeOAuth2TokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.revokeOAuth2Token = function(token, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling revokeOAuth2Token");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'token': token
      };

      var authNames = ['basic', 'oauth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oauth2/revoke', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userinfo operation.
     * @callback module:api/PublicApi~userinfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserinfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OpenID Connect Userinfo
     * This endpoint returns the payload of the ID Token, including the idTokenExtra values, of the provided OAuth 2.0 access token. The endpoint implements http://openid.net/specs/openid-connect-core-1_0.html#UserInfo .
     * @param {module:api/PublicApi~userinfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserinfoResponse}
     */
    this.userinfo = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = UserinfoResponse;

      return this.apiClient.callApi(
        '/userinfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the wellKnown operation.
     * @callback module:api/PublicApi~wellKnownCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JSONWebKeySet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * JSON Web Keys Discovery
     * This endpoint returns JSON Web Keys to be used as public keys for verifying OpenID Connect ID Tokens and, if enabled, OAuth 2.0 JWT Access Tokens. This endpoint can be used with client libraries like [node-jwks-rsa](https://github.com/auth0/node-jwks-rsa) among others.
     * @param {module:api/PublicApi~wellKnownCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JSONWebKeySet}
     */
    this.wellKnown = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = JSONWebKeySet;

      return this.apiClient.callApi(
        '/.well-known/jwks.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));