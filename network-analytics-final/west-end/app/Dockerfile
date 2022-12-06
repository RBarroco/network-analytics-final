FROM python:3.8
WORKDIR .
RUN apt-get -y update  && apt-get install -y \
    python3-dev \
    apt-utils \
    python-dev \
    build-essential \   
&& rm -rf /var/lib/apt/lists/* 

# RUN pip install --no-cache-dir -U pip
# RUN pip install --no-cache-dir -U cython
# RUN pip install --no-cache-dir -U numpy

COPY requirements.txt .
RUN pip install --no-cache-dir -U -r  requirements.txt

COPY api/ .  

# COPY api/ /api/   the program is doing cd api hope that the ./ copies the folder but this is not working
# added the env for flask


FROM node:19
ENV NODE_ENV=production

WORKDIR .

COPY package.json .
COPY package-lock.json .

RUN npm install --production
COPY src/ .   

ENV FLASK_APP=api.py
ENV FLASK_RUN_HOST=0.0.0.0


CMD ["npm", "run", "start-flask-api"]

# CMD ["npm", "run", "start-flask-api", "--host", "0.0.0.0", "--port", "5000"] did not work

# ~/git_repos/final_project/front-end/app$ npm run start-flask-api; localhost:5000

# ~/git_repos/final_project/front-end/app npm start app; localhost:3000