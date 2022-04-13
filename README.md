# boilerplate-schedule

This is a github template for creating new project.

## how to use it

1. Go to `iac-terraform-acme` project:
   1. create `aliyun-fc` resource
2. Visit https://dashboard.doppler.com to setup secrets
   1. CREATE_PR_TOKEN
   2. FC_ID
   3. FC_AK
   4. FC_SK
3. Visit https://github.com/new to create a new project with this template
4. Integration doppler with github
5. Run workflow : "Sync Labels"
6. Run workflow : "Init Template Create"
7. Update pull request on github : "Update ci.yml"
8. Merge pull request and remove `CREATE_PR_TOKEN` on doppler

// TODO

1. use terraform to create github repo
2. use terraform to create doppler project
3. move FC_REGION to doppler
