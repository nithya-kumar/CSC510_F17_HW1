# HW1
## CSC 510 (Software Engineering) F17 HW1

The HW contains the following parts.

### REST
Completed the following tasks and the code for the functions can be seen in script.js file
* Write code for listBranches in a given repo under an owner
* Write code for create a new repo
* Write code for creating an issue for an existing repo
* Write code for editing a repo to enable wiki support
* Write code for listing reactions from a github issue  

### About Me
Created a gh-pages branch for the HW1 repo. Created a simple webpage and hosted on the branch.  
Link to the webpage - https://pages.github.ncsu.edu/nkumar8/HW1/AboutMe  

### Concepts
#### 1. Explain some additional concerns related to using REST apis.
 * **HTTP Return Codes**   
 Designing Rest APIs with only 200 for success and 400 for error can result in Rest APIs responses sound ambiguous. Hence it is necessary to follow the response code guidelines before designing Rest APIs. Proper error handling helps in validating the incoming requests and identifying the security risks.
 * **Confidentiality**   
 While designing Rest APIs, we should be cautious of not revealing important credentials. Security tokens, passwords and other API keys should not be mentioned in the URL, as this can be captured in logs.
 * **Authentication and Authorization**   
 It is recommended to use basic authentication/authorization frameworks to protect Rest APIs. The OAuth 2.0 authorization framework enables an application to obtain limited access to an HTTP service.
 * **Response codes of Rest APIs might not be handled/interpreted correctly by all browsers**   
 For instance, if the response code 307 (Temporary redirect) is encountered, one browser might allow the client side's JavaScript to consider the response and then cancel it before acting upon it. Whereas some other browser might not allow the client side's JavaScript to consider the response at all.
 * **Rest APIs have very limited methods and response codes**   
 Rest APIs have only four methods. This restricts the excessive usage of Rest APIs on sophisticated web services. Also, the response codes and methods don't directly correlate at times.
 * **Hard to debug**   
 If Rest APIs are not designed with proper methods and response codes, they might become really hard to debug

#### 2. Compare and contrast the benefits and disadvantages of using a RESTful architecture vs. a graph query language (http://graphql.org/) 

**Benefits of Rest over GraphQL**

  * **Caching easier**   
  Rest makes caching easier at all levels. REST uses a whole pile of HTTP conventions which makes existing HTTP clients, HTTP cache proxies to work easily in such a way as to benefit both API clients and API servers, but with GraphQL it is tough  
  * **CRUD and file upload operations easier**  
  Most useful tasks REST APIs provide is CRUD via JSON, and file uploads. A REST API can do anything other than just sending fields backwards and forwards. This easiness cannot be provided by GraphQL  

**Disadvantages of Rest as compared to GraphQL**
  
  * **Multiple endpoints**   
  GraphQL allows users to fetch all the data required by a view with a single round-trip call to the server because it has a single end-point; Rest APIs require introduction of unstructured parameters and conditions which become hard to scale and manage. REST APIs are generally a collection of endpoints, where each endpoint represents a resource. When a client needs data from multiple resources, it needs to perform multiple round-trips to a Rest API to get all the data it needs
  * **Dependency of clients on server**   
  In GraphQL, the request sent by clients does not require the servers to hardcode the shape or size of the data. Also, GraphQL decouples clients from servers. This is not the case with Rest APIs. In a REST API, there is no particular client request language. Clients do not have any control over what data the server will return
  * **Versioning in Rest APIs**   
  In Rest APIs, multiple version support requires more end points which becomes tough to maintain. Whereas in GraphQL, the versioning is completely avoided by introducing new fields without removing old ones
  * **Client performance**   
  GraphQL puts client performace first by minimizing the request, whereas Rest always defaults to full request

**References**
1. https://medium.com/@schneidenbach/restful-api-best-practices-and-common-pitfalls-7a83ba3763b5
2. https://philsturgeon.uk/api/2017/01/24/graphql-vs-rest-overview/
3. https://medium.freecodecamp.org/rest-apis-are-rest-in-peace-apis-long-live-graphql-d412e559d8e4
4. https://mmikowski.github.io/the_lie/
5. https://www.owasp.org/index.php/REST_Security_Cheat_Sheet


