var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + "<token>";
var userId = "<user-name>";
var repo = "rest-sampletest";
var createreponame = "create-repo-rest-code";
var description = "Testing create repository using Rest API"
var description_edit = "Testing edit repository using Rest API"
var urlRoot = "https://github.ncsu.edu/api/v3";
var issue_title = "Found a bug";
var issue_body = "Creating issue using Rest API";
var issueNumber = "1";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

//getYourRepos(userId);
//listBranches(userId,repo);
//createRepo(userId, createreponame, description);
//createIssue(userId, repo, issue_title, issue_body);
//editRepo(userId, createreponame, description_edit);
listReactions(userId, repo, issueNumber);

function getYourRepos(userName)
{

	var options = {
		url: urlRoot + '/users/' + userName + "/repos",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}
//code for listBranches in a given repo under an owner
function listBranches(owner, repo)
{
	var options = {
                url: urlRoot + `/repos/${owner}/${repo}/branches`,
                method: 'GET',
                headers: {
                        "User-Agent": "EnableIssues",
                        "content-type": "application/json",
                        "Authorization": token
                }
        };

        // Send a http request to url and specify a callback that will be called upon its return.
        request(options, function (error, response, body)
        {
                var obj = JSON.parse(body);
                console.log( obj );
                for( var i = 0; i < obj.length; i++ )
                {
                        var name = obj[i].name;
                        console.log( name );
                }
        });

	
}

//code for create a new repo
function createRepo(user, name, description)
{ 
        var inputJson = {
                "name":name,
                "description":description,
                "homepage": "https://github.ncsu.edu/" + user + "/" + description,
                "private": false,
                "has_issues": true,
                "has_projects": true,
                "has_wiki": true
        };
        var options = {
                url: urlRoot + "/user" + "/repos",
                method: 'POST',
                headers: {
                        "User-Agent": "EnableIssues",
                        "content-type": "application/json",
                        "Authorization": token
                },
                json: inputJson
        };

        // Send a http request to url and specify a callback that will be called upon its return.
        request(options, function (error, response, body)
        {
                console.log( body );
        });
}

//code for creating an issue for an existing repo
function createIssue(owner, repo, title, body)
{ 
        var inputJson = {
                "title":title,
                "body":body,
        };
        var options = {
                url: urlRoot + "/repos" + "/" + owner + "/" + repo + "/issues",
                method: 'POST',
                headers: {
                        "User-Agent": "EnableIssues",
                        "content-type": "application/json",
                        "Authorization": token
                },
                json: inputJson
        };

        // Send a http request to url and specify a callback that will be called upon its return.
        request(options, function (error, response, body)
        {
                console.log( body );
        });
}

//code for editing a repo to enable wiki support
function editRepo(owner, repo, description_edit)
{ 
        var inputJson = {
                "name":repo,
                "description":description_edit,
                "private": true //Editing the privacy of a public repo
        };
        var options = {
                url: urlRoot + "/repos" + "/" + owner + "/" + repo,
                method: 'PATCH',
                headers: {
                        "User-Agent": "EnableIssues",
                        "content-type": "application/json",
                        "Authorization": token
                },
                json: inputJson
        };

        // Send a http request to url and specify a callback that will be called upon its return.
        request(options, function (error, response, body)
        {
                console.log( body );
        });
}

//code for listing reactions from a github issue
function listReactions(owner, repo, issueNumber)
{ 
        var options = {
                url: urlRoot + "/repos" + "/" + owner + "/" + repo + "/issues" + "/" + issueNumber + "/reactions",
                method: 'GET',
                headers: {
                        "User-Agent": "EnableIssues",
                        "content-type": "application/json",
                        "Authorization": token,
                        "Accept": "application/vnd.github.squirrel-girl-preview"
                }
        };

        // Send a http request to url and specify a callback that will be called upon its return.
        request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
	});
}
