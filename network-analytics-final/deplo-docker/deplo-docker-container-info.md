## file to keep track of the docker runs

the branch 'container' has all the files for the initial docker containerization of the model apps.  it got so far as to work with the all-in-prediction that directly takes an input through the call, but not a user input.

renamed the other all-in-prediction-user-input to clearly indicate that includes a prompt for an input (all commented out)


uvicorn main:app --reload --workers 1 --host 0.0.0.0 --port 8000

docker build -t <name of image> .


docker build -t deplo-docker . 
docker run -d -i -t --name deplo-docker-it  -p 8000:8000 deplo-docker

can run on simple uvicorn from cli
can build and run a docker container