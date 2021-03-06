var { gitDescribe, gitDescribeSync } = require("git-describe");

// Target working directory
var gitInfo = gitDescribeSync();

// Target the directory of the calling script
// Recommended when you want to target the repo your app resides in
var gitInfo = gitDescribeSync(__dirname);

// With options (see below)
var gitInfo = gitDescribeSync(__dirname, {
  longSemver: true,
  dirtySemver: false,
});

// Another example: working directory, use 16 character commit hash abbreviation
var gitInfo = gitDescribeSync({
  customArguments: ["--abbrev=16"],
});




gitDescribe(__dirname, {
  match: "*[0-9].[0-9].[0-9]*",
  customArguments: [
    "--match",
    "*[0-9][0-9].[0-9].[0-9]*",
    "--match",
    "*[0-9].[0-9][0-9].[0-9]*",
  ],
},(err, gitInfo) => {
    if (err)
        return console.error(err);
    console.log("gitInfo", gitInfo);
});


var info = gitDescribeSync(__dirname, {
  match: "*[0-9].[0-9].[0-9]*",
  customArguments: [
    "--match",
    "*[0-9][0-9].[0-9].[0-9]*",
    "--match",
    "*[0-9][0-9].[0-9][0-9].[0-9]*",
    "--match",
    "*[0-9].[0-9][0-9].[0-9]*",
  ],
}); 

console.log(info)
