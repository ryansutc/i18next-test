export default {
  // path where resources get loaded from, or a function
  // returning a path:
  // function(lngs, namespaces) { return customPath; }
  // the returned path will interpolate lng, ns if provided like giving a static path
  // the function might return a promise
  // returning falsy will abort the download
  //
  // If not used with i18next-multiload-backend-adapter, lngs and namespaces will have only one element each,
  // If used with i18next-multiload-backend-adapter, lngs and namespaces can have multiple elements
  //   and also your server needs to support multiloading
  //      /locales/resources.json?lng=de+en&ns=ns1+ns2
  //   Adapter is needed to enable MultiLoading https://github.com/i18next/i18next-multiload-backend-adapter
  //   Returned JSON structure in this case is
  //   {
  //    lang : {
  //     namespaceA: {},
  //     namespaceB: {},
  //     ...etc
  //    }
  //   }
  loadPath: "/locales/{{lng}}/{{ns}}.json",

  // path to post missing resources, or a function
  // function(lng, namespace) { return customPath; }
  // the returned path will interpolate lng, ns if provided like giving a static path
  //
  // note that this only works when initialized with { saveMissing: true }
  // (see https://www.i18next.com/overview/configuration-options)
  addPath: "/locales/add/{{lng}}/{{ns}}",

  // allow cross domain requests
  crossDomain: false,

  // allow credentials on cross domain requests
  withCredentials: false,

  // overrideMimeType sets request.overrideMimeType("application/json")
  overrideMimeType: false,

  // custom request headers sets request.setRequestHeader(key, value)
  customHeaders: {
    authorization: "foo",
    // ...
  },

  requestOptions: {
    // used for fetch, can also be a function (payload) => ({ method: 'GET' })
    mode: "cors",
    credentials: "same-origin",
    cache: "default",
  },

  reloadInterval: false, // can be used to reload resources in a specific interval (milliseconds) (useful in server environments)
};
