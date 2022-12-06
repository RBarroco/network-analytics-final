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

COPY api/ .   # for the python part

FROM node:19
WORKDIR .

COPY package.json .
COPY package-lock.json .
COPY src/ .   # for the json part

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

