## file to keep track of the docker runs


~/git_repos/final_project/front-end/app$ npm run start-flask-api; localhost:5000

~/git_repos/final_project/front-end/app npm start app; localhost:3000




in the docker-file example within network-analytics/network-analytics the file structure for the docker was: 
    home directory (deplo-docker) with dockerfile and requirements.txt, and a gitignore.
deplo-docker/src directory with py files, model.joblib, x-test-data.csvs.

docker build -t <name of image> .


docker build -t deplo-docker . 
docker run -d -i -t --name deplo-docker-it  -p 8000:8000 deplo-docker  # nedd to check the correct # ports numbers and the run instructions (i do not think we need the -t or -i instructions)

can run on simple uvicorn from cli
can build and run a docker container


Now the current file structure is:
    - home directory: app, with requirements.txt, package.json, package-lock.json
    - sub app/api: wity api.py, the joblib model, and the x-test.csvs
    - sub app/ src: with app.js, app.csc, app.test.js, index.css, and a couple other

